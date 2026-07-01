# Udbhav Saxena — Portfolio

Personal portfolio site for [udbhavsaxena.github.io](https://udbhavsaxena.github.io), built with React + Vite.

## Local development

```bash
npm install
npm run dev        # dev server at http://localhost:5173
```

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploying to GitHub Pages

This repo is named `udbhavsaxena.github.io`, so GitHub Pages serves directly from the `main` branch root **or** the `gh-pages` branch. Easiest workflow:

### Option A — manual
```bash
npm run build
# Push the dist/ contents to the gh-pages branch, or configure Pages to serve /dist on main.
```

### Option B — GitHub Actions (recommended)
Add `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Updating content

All site text, links, and data live in one file:

```
src/data/content.js
```

TODOs inside that file:
- **LinkedIn URL** — replace `YOUR_LINKEDIN_HANDLE` with your real slug
- **Resume PDF** — drop `Udbhav_Saxena_Resume.pdf` in `public/` (already referenced)
- **Project links** — set `link:` on any project card you want to point to a repo or demo
