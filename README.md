# Portfolio Website

Personal portfolio for **Vybhav Nath C A** — Senior Data Scientist specializing in applied ML, NLP, and production AI systems.

Built with [Astro](https://astro.build), pure CSS (glassmorphism dark theme), TypeScript, and vanilla JavaScript. Deployed to GitHub Pages.

**Live site:** https://vybhav2000.github.io/portfolio-website/

## Stack

- **Framework:** Astro 5 (static output)
- **Styling:** Custom CSS — dark theme, glassmorphism, IBM Plex Mono
- **Content:** TypeScript data file (`src/data/portfolio.ts`)
- **Interactions:** Vanilla JS (scroll reveals, tab switching, metric counters)
- **Deployment:** GitHub Actions → GitHub Pages
- **Container:** Docker + docker-compose for local preview of the built output

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4321`.

## Docker

Builds the static output and serves it via a container:

```bash
docker compose up --build
```

Endpoint: `http://127.0.0.1:8000`

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy-pages.yml` handles deployment automatically on every push to `master`.

To enable for the first time:

1. Go to the repository **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `master`

## Project structure

```
src/
  data/portfolio.ts        # All content — projects, skills, site metadata
  pages/
    index.astro            # Home page
    projects.astro         # Project archive / case studies
  components/              # Astro section components
  layouts/MainLayout.astro # Base HTML shell
  styles/global.css        # All styling
public/
  assets/Vybhav_Resume.pdf # Downloadable resume
  scripts/site.js          # Client-side interactions
```

## Updating content

All portfolio content lives in `src/data/portfolio.ts`. To add or edit a project, update the `workProjects` or `personalProjects` arrays. Site metadata (name, email, links) is in the `siteMeta` object at the top of the file.
