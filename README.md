# Portfolio Website

Static portfolio website for Vybhav Nath C A.

## Run locally

```bash
.venv\Scripts\python.exe main.py
```

Then open `http://127.0.0.1:8000`.

## Docker

A single static Docker environment:

```bash
docker compose up --build
```

Endpoint: `http://127.0.0.1:8000`

## Pre-commit hook

Install the dev tools and register the hook:

```bash
uv sync --group dev
uv run pre-commit install
```

Run it manually if needed:

```bash
uv run pre-commit run --all-files
```

## Files

- `index.html` landing page
- `projects.html` detailed project archive
- `assets/styles.css` styling
- `assets/script.js` small UI interactions
- `main.py` local static server
