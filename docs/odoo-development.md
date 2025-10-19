---
id: odoo-development
title: Odoo Development Guide
description: Development workflow and best practices for Odoo projects — including Git usage, commit message conventions, coding standards, and contribution workflow.
keywords: [odoo, development, git, commit, workflow, coding-standard]
sidebar_position: 0.2
slug: /odoo-development
---

# Odoo Development Guide

This page provides the **standard development workflow and best practices** for all Odoo projects within our team.  
It is designed to help both new and existing developers maintain a clean, consistent, and collaborative codebase.

---

## Commit Message Structure

To maintain a clean and traceable Git history, all commits must follow the **standardized commit message format**.  
This ensures that every change is clearly described and can be linked to its related task or issue.

### Structure

| Part | Description | Example |
|------|--------------|----------|
| **Task NO** | The related task or ticket number (from project management tool such as Jira, ClickUp, or Odoo task). | `MJ-1234` |
| **TYPE** | The nature of the change — common types include: | |
| | **FIX** → Add new code, files, or features | |
| | **ADD** → Fixing a bug | |
| | **REF** → Refactor code without changing behavior | |
| | **MIG** → Migration related changes (e.g., DB schema) | |
| | **DOC** → Documentation updates or changes | |
| | **STYLE** → Code style changes (no logic impact) | |
| | **TEST** → Add or update tests | |
| | **CHORE** → Maintenance tasks (e.g., config, build) | |
| | **PERF** → Performance improvements | |
| | **FEAT** → Introduce a new feature | |
| | **ISS** → Work related to a reported issue or bug task | |
| **addons** | The name of the Odoo addons or component affected. | `account`, `sale`, `stock`, `hr` |
| **short message** | A brief, clear description of what was changed. | `fix stock picking domain issue` |

---

### Example Messages

```bash
[MJ-1234][FIX] stock: wrong domain on picking type
[MJ-1235][ADD] sale: add new discount field in sale order
[MJ-1236][IMP] hr: improve employee department filter
[MJ-1237][REM] old_module: remove deprecated report view
```

---

> 💬 **Note:**  
> Before contributing to the project, make sure you’ve completed the [Setup Environment →](./setup-environment.md) guide first.


---

## Function Structure

When developing Odoo modules, maintaining a **clear and consistent function order** inside your models  
helps improve readability, debugging, and long-term maintenance.  

Below is the **recommended order of methods** commonly used in Odoo models.

---

| **Order** | **Category** | **Description** | **Examples** |
|-----------|--------------|-----------------|---------------|
| **1** | **Constraints & Validation** | Functions that check data integrity before saving. | `check_amount`, `_check_date` |
| **2** | **Compute Fields** | Methods used to calculate computed fields automatically. | `_compute_total`, `_compute_status` |
| **3** | **Onchange Events** | Triggered when a field value changes in the UI. | `_onchange_partner_id` |
| **4** | **Get / Prepare Helpers** | Helper methods that return prepared data or defaults. | `_get_default_vals`, `_prepare_invoice_line` |
| **5** | **Actions (Business Logic)** | Core actions that execute business workflows. | `action_confirm`, `action_cancel` |
| **6** | **Buttons (UI Actions)** | Methods triggered by form buttons. | `button_approve`, `button_reset` |
| **7** | **Views / Display** | Methods related to name display or view customization. | `name_get`, `fields_view_get` |
| **8** | **ORM Overrides** | Overrides for core Odoo ORM methods. | `create`, `write`, `unlink` |

---

### Best Practices

- Always group similar types of functions together for readability.  
- Keep **ORM overrides (create/write/unlink)** at the end of the file.  
- Add **docstrings or short comments** to explain non-obvious logic.  
- Use consistent naming conventions (`_compute_`, `_onchange_`, `_get_`, etc.).  
- Separate each logical group with a blank line for visual clarity.

---

### Example Layout (Model File)

```python
class SaleOrder(models.Model):
    _name = 'sale.order'
    _inherit = ['mail.thread', 'mail.activity.mixin']

    # Constraints & Validation
    def _check_amount(self):
        if self.amount_total <= 0:
            raise ValidationError(_("Amount must be positive."))

    # Compute Fields
    @api.depends('order_line.price_total')
    def _compute_total(self):
        self.amount_total = sum(line.price_total for line in self.order_line)

    # Onchange Events
    @api.onchange('partner_id')
    def _onchange_partner_id(self):
        self.payment_term_id = self.partner_id.property_payment_term_id

    # Get / Prepare Helpers
    def _prepare_invoice_line(self, line):
        return {'name': line.name, 'price_unit': line.price_unit}

    # Actions (Business Logic)
    def action_confirm(self):
        self.state = 'sale'

    # Buttons (UI Actions)
    def button_reset(self):
        self.state = 'draft'

    # Views / Display
    def name_get(self):
        return [(rec.id, f"[{rec.name}] {rec.partner_id.name}") for rec in self]

    # ORM Overrides
    def create(self, vals):
        record = super().create(vals)
        record.message_post(body="Record created successfully")
        return record
