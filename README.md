# Portfolio Website

Astro portfolio website for Vybhav Nath C A.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://127.0.0.1:4321`.

## Docker

Build and serve the Astro output with Docker:

```bash
docker compose up --build
```

Endpoint: `http://127.0.0.1:8000`

## GitHub Pages

This repo includes a GitHub Pages workflow at `.github/workflows/deploy-pages.yml`.

Deployment runs automatically on pushes to `master`.

To enable it in GitHub:

1. Open the repository settings.
2. Go to `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `master`.

## Files

- `src/data/portfolio.ts` central content and project data
- `src/pages/index.astro` landing page composition
- `src/pages/projects.astro` project archive composition
- `src/components/` reusable Astro sections and case-study components
- `src/styles/global.css` site styling
- `public/assets/Vybhav_Resume.pdf` downloadable resume
- `public/scripts/site.js` small UI interactions
