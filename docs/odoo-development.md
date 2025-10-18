---
id: odoo-development
title: 🧩 Odoo Development Guide
description: Development workflow and best practices for Odoo projects — including Git usage, commit message conventions, coding standards, and contribution workflow.
keywords: [odoo, development, git, commit, workflow, coding-standard]
sidebar_position: 0.2
slug: /odoo-development
---

# 🧩 Odoo Development Guide

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
| **module** | The name of the Odoo module or component affected. | `sale`, `stock`, `hr` |
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
