# Personal GitHub Page

This repository contains the source code for the personal GitHub Page of
**Gonzalo González** (`ggonzalezdal`).

The site is served via GitHub Pages and presents a simple, future-ready
portfolio with project cards and a light/dark theme toggle.

---

## Structure

```text
ggonzalezdal.github.io/
├─ index.html        # Main landing page
├─ css/
│  └─ styles.css     # Global styles and theme
├─ js/
│  └─ main.js        # Theme toggle logic
└─ README.md         # Repository documentation
```

---

## Running Locally

1. Clone the repository (or create it locally first):

   ```bash
   git clone https://github.com/ggonzalezdal/ggonzalezdal.github.io.git
   cd ggonzalezdal.github.io
   ```

2. Open `index.html` directly in a browser, or use a simple local server, for example:

   ```bash
   python -m http.server 8000
   ```

   Then visit:

   ```
   http://localhost:8000
   ```

---

## Deployment (GitHub Pages)

Once this repository is pushed to GitHub and named exactly:

```text
ggonzalezdal.github.io
```

GitHub Pages can serve it automatically:

1. Go to Settings → Pages.
2. Under “Build and deployment”, set:
   - Source: Deploy from branch
   - Branch: `main`
3. Save.

After a short build time, the site will be available at:

```text
https://ggonzalezdal.github.io
```

---

## Maintenance

- Update `index.html` to add or modify sections.
- Update `css/styles.css` for design changes or new components.
- Update `js/main.js` to extend interactivity.
- Commit and push to the `main` branch to redeploy.

_Last updated: 2025-11-09_
