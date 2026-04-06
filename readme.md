# dev-portfolio

Personal portfolio and blog for Nikhil Shetty, built with Astro and deployed to GitHub Pages.

## Quick start

1. Install dependencies.
2. Run `npm run dev`.
3. Open the local URL shown by Astro.

## What is included

- Home page with featured projects and recent posts
- Projects, blog, certifications, and about pages
- MDX content collections for posts, projects, and certifications
- GitHub Pages deployment workflow

## Deployment notes

- This repo is configured as a GitHub Pages project site.
- The Pages URL should be `https://Nikhil5hetty.github.io/dev-portfolio/`.
- Update `site` and social links in `src/site.ts` if your GitHub Pages URL or profiles change.
- In GitHub repo settings, set Pages source to GitHub Actions, then push to `main`.
- The workflow in `.github/workflows/deploy.yml` handles the build and publish step.
