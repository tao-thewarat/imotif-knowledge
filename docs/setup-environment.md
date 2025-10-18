---
id: setup-environment
title: 🛠️ Setup Environment
description: Step-by-step guide to set up a local Odoo development environment, including Python, PostgreSQL, dependencies, and configuration setup.
keywords: [setup-environment, odoo, development, installation, dev-environment]
sidebar_position: 0.1
slug: /setup-environment
---

We are using Ubuntu as a default, so all step below is base on Ubuntu.

## Introduction

This section provides a quick overview of how to set up the development environment.

1. **Install Ubuntu OS** – Prepare the base operating system for development.  
2. **Install Docker** – Set up containerization to run services and dependencies easily.  
3. **Install pre-commit** – Enable automated code checks before each commit to maintain code quality.  
4. **Install IDE (VS Code or Windsurf)** – Choose your preferred code editor for development.  
5. **Configure the IDE**  
   * **VS Code:** Import your GitHub profile settings to sync preferences and extensions.  
   * **Windsurf:** Download and install the required extension pack to match the team setup.

---

## Step 1: Install Ubuntu OS

Set up **Ubuntu** as the base operating system for your development environment.  
You can install it directly on your machine or run it in a virtualized setup.  
Follow the official guide here: [Install Ubuntu Desktop →](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)

---

## Step 2: Install Docker

Install **Docker** to create a consistent and isolated environment for your development setup.  
Docker allows you to run applications in containers without worrying about dependencies or host configurations.

You can follow the official installation guide here:  
[Install Docker Engine on Ubuntu →](https://docs.docker.com/engine/install/ubuntu/)

After installation, verify that Docker is running correctly:

```bash
docker --version
sudo systemctl status docker
````

(Optional) To run Docker without `sudo`, add your user to the Docker group:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

---

## Step 3: Install pre-commit

**pre-commit** is a framework for managing and maintaining multi-language pre-commit hooks.  
It automatically runs code checks (like formatting, linting, and security scans) before each commit to ensure code consistency.

```bash
pip install pre-commit
```

Verify the installation:

```bash
pre-commit --version
```

---

## Step 4: Install IDE (VS Code / Windsurf)

Install your preferred Integrated Development Environment (IDE) for coding and debugging.


### IDE Options

#### Windsurf  
Install from the official website: [**Windsurf →**](https://windsurf.com/editor)

#### Visual Studio Code  
Download here: [**VS Code →**](https://code.visualstudio.com/)

---

## Step 5: Setup IDE

### Windsurf Setup

1. **Download Extensions File**  
   [Download extensions.txt](https://raw.githubusercontent.com/tao-thewarat/knowledge/main/public/extensions.txt)

2. **Install Extensions**  
   Run the following command in your terminal:

```bash
   xargs -n1 windsurf --install-extension < extensions.txt
```

3. **Import Settings (JSON)**
<div style={{ marginLeft: '2rem' }}>
<ol>
  <li>
    <b>Open the Command Palette:</b><br/>
    - <b>Windows/Linux:</b> <code>Ctrl + Shift + P</code><br/>
    - <b>macOS:</b> <code>Cmd + Shift + P</code>
  </li>
  <li>
    Type and select <b>“Open User Settings (JSON)”</b><br/>
    Open your prepared configuration file:
    <a href="https://raw.githubusercontent.com/tao-thewarat/knowledge/main/public/setting-windsurf.json" target="_blank">Setting JSON →</a>
  </li>
  <li>Copy the content and paste it into your settings file.</li>
  <li>Save changes (<b>Ctrl + S / Cmd + S</b>).</li>
  <li>Restart Windsurf to apply the new configuration.</li>
</ol>
</div>

---

### VS Code Setup

1. **Open Profiles Menu**
   ![Step 1: Open Profile Menu](https://raw.githubusercontent.com/tao-thewarat/knowledge/main/public/step-1.png)

2. **Select “Import Profile”**
   ![Step 2: Import Profile](https://raw.githubusercontent.com/tao-thewarat/knowledge/main/public/step-2.png)

3. **Paste the Profile Link Below**

   ```bash
   https://vscode.dev/profile/github/3b61e8c68f945fd86c3d931e94e28d23
   ```

   ![Step 3: Import Profile](https://raw.githubusercontent.com/tao-thewarat/knowledge/main/public/step-3.png)

4. **Click “Create” to Finish Import**
   ![Step 4: Import Profile](https://raw.githubusercontent.com/tao-thewarat/knowledge/main/public/step-4.png)
