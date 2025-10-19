# IMOTIF Development Documentation

Welcome to the **IMOTIF Development Documentation** —  
the official knowledge base and developer guide for internal Odoo and software projects.

This website is powered by [**Docusaurus**](https://docusaurus.io/),  
a modern static site generator built for creating fast, organized, and developer-friendly documentation.

---

## Features

- Step-by-step setup guide for new developers  
- Odoo 18 development tutorials and examples  
- Git workflow and commit message conventions  
- Knowledge base for tools, configuration, and best practices  
- Deployable as a static website or GitHub Pages

---

## Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd <project-folder>
yarn
````

---

## Local Development

Run the local development server:

```bash
yarn start
```

This will:

* Launch a local dev server (`http://localhost:3000`)
* Automatically reload the page when files are modified
* Reflect most changes live without restarting the server

---

## Build

Generate the static production build:

```bash
yarn build
```

This command outputs the optimized static files into the `/build` directory.
You can serve it using any static web hosting service.

---

## Deployment

### Using SSH

```bash
USE_SSH=true yarn deploy
```

### Using HTTPS (GitHub Pages)

```bash
GIT_USER=<your-github-username> yarn deploy
```

> This command builds and automatically deploys the site to the `gh-pages` branch.

---

## Project Structure

```
.
├── docs/                # Documentation content (Markdown / MDX)
├── src/                 # Custom React components
├── static/              # Static assets (images, downloads, etc.)
├── docusaurus.config.js # Main configuration
├── sidebars.js          # Sidebar navigation
└── package.json         # Project dependencies
```

---

## Tech Stack

* [Docusaurus 3](https://docusaurus.io/)
* [React 18](https://react.dev/)
* [Yarn](https://yarnpkg.com/)
* [Markdown / MDX](https://mdxjs.com/)

---

## Contributing

1. Follow the [Setup Environment →](./docs/setup-environment.md) guide
2. Create a new branch for your feature or fix
3. Follow the [Commit Message Rules →](./docs/odoo-development.md)
4. Submit a pull request for review

---

## Maintainers

* **IMOTIF Dev Team**
  Internal Odoo and Software Development Division
  [contact@imotif.io](mailto:contact@imotif.io)

---

> Made with by the IMOTIF Development Team
