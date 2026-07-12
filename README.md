# alpaycanaltuntas

Personal portfolio site for Alpay Can Altuntas — Vite + React + TypeScript + Tailwind CSS + Framer Motion, with two fully-realized themes ("Architected" light / "Secure Systems" dark) and a signature interactive hero.

Live: **https://alpayaltuntas.github.io/alpaycanaltuntas/**

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to `http://localhost:5173/alpaycanaltuntas/`).

Other scripts:

```bash
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
npm run lint     # ESLint
```

## Editing content

Every piece of copy — name, positioning line, about paragraphs, impact metrics, experience, skills, passions, certifications, education, and links — lives in one typed file:

```
src/data/content.ts
```

Edit that file and the whole site updates; no other file needs to change for a content-only edit.

## Replacing assets

- **Profile photo:** replace `public/profile.jpg` (same filename). If the file is ever missing, the site automatically falls back to an "ACA" initials monogram, so it never breaks.
- **Résumé:** replace `public/resume.pdf` (same filename) — every "Download Résumé" link points here.
- **Favicon / OG image:** `public/favicon.svg` and `public/og-image.svg` are hand-built SVGs based on the "ACA" monogram; edit them directly if you want to restyle either.

## Theming

Design tokens for both themes live as CSS variables in `src/styles/globals.css` (`:root[data-theme='light']` and `:root[data-theme='dark']`). The active theme is controlled by `src/components/ThemeProvider.tsx`, persisted to `localStorage`, and defaults to the visitor's OS preference (falling back to dark) on first visit.

## Deployment

This repo deploys to **GitHub Pages** automatically via `.github/workflows/deploy.yml`: every push to `main` builds the site and publishes `dist/` through GitHub's official Pages actions. Enable it once per repo under **Settings → Pages → Source: GitHub Actions**.

If this repository is ever renamed away from `alpaycanaltuntas`, update the single `base` line in `vite.config.ts` to match the new repo name (GitHub Pages project sites are served from `https://<user>.github.io/<repo>/`).
