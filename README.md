# Gonzalo González Dalbes — Personal GitHub Page

[![HTML](https://img.shields.io/badge/HTML-5E5E5E?logo=html5&logoColor=E34F26)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-5E5E5E?logo=css3&logoColor=1572B6)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-5E5E5E?logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222222?logo=github)](https://ggonzalezdal.github.io)
![Last Deployment](https://img.shields.io/github/deployments/ggonzalezdal/ggonzalezdal.github.io/github-pages?label=Last+Deploy&logo=github&color=blue)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

---

## Overview

This repository contains the source code for the personal GitHub Page of  
**Gonzalo González Dalbes** (`ggonzalezdal`).

The site is hosted on **GitHub Pages** and presents a clean, modular, and future-ready portfolio built with static **HTML**, **CSS**, and **JavaScript**.  
It features a **light/dark theme toggle**, project cards, and a responsive layout.

**Live version:** [https://ggonzalezdal.github.io](https://ggonzalezdal.github.io)

---

## Structure

```text
ggonzalezdal.github.io/
├─ index.html        # Main landing page
├─ css/
│  └─ styles.css     # Global styles and theme
├─ js/
│  └─ main.js        # Theme toggle logic
├─ assets/
│  ├─ favicon.ico
│  ├─ favicon.svg
│  └─ favicon.png
├─ .gitignore        # Ignore system/editor/cache files
├─ .gitattributes    # Normalize line endings and encoding
├─ .editorconfig     # Editor configuration for consistent formatting
└─ README.md         # Repository documentation
```

---

## Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/ggonzalezdal/ggonzalezdal.github.io.git
   cd ggonzalezdal.github.io
   ```

2. Open `index.html` directly in your browser,  
   or serve locally for testing:

   ```bash
   python -m http.server 8000
   ```

   Then visit:

   ```
   http://localhost:8000
   ```

---

## Deployment (GitHub Pages)

When this repository is named exactly:

```
ggonzalezdal.github.io
```

GitHub Pages automatically serves it as a personal site.

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set:
   - Source: _Deploy from branch_
   - Branch: `main`
3. Save and wait for the deployment to complete.

Your live site will be available at:

```
https://ggonzalezdal.github.io
```

---

## Maintenance

- Update `index.html` to modify content or sections.
- Adjust `css/styles.css` for design and layout changes.
- Extend interactivity through `js/main.js`.
- Commit and push to `main` — GitHub Pages redeploys automatically.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

_Last updated: 2025-11-09_
