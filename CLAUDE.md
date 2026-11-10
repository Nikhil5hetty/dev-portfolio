# dev-portfolio

Nikhil Shetty's personal site: Astro 5 + Tailwind v4 + MDX, deployed to GitHub Pages at
https://nikhil5hetty.github.io/dev-portfolio/. Audience: recruiters and hiring managers for
data engineering roles in Switzerland/Europe.

## Commands

```bash
npm run dev       # local dev server (http://localhost:4321/dev-portfolio/)
npm run build     # static build to dist/; must pass before any commit
npm run preview   # serve dist/
npm run check     # astro type check
```

## Deploying

Pushing to `main` deploys via `.github/workflows/deploy.yml`. That publishes publicly, so work on a
branch and only merge or push to `main` when Nikhil says so.

## Where things live

- `src/data/profile.ts`: role, headline, metrics, experience, education, awards. Every claim must trace
  to `../Resume/career-facts.md`. Do not add facts here that are not in the fact bank.
- `src/site.ts`: site title, description, contact links, nav.
- `src/content/{projects,posts,certifications}/*.mdx`: content collections; schemas in
  `src/content/config.ts`. Project case studies need challenge / architecture / scale / outcome.
- `src/components/ExperienceList.astro`: experience timeline (compact on home, full on About).
- `public/resume/Nikhil_Shetty.pdf`: the downloadable resume. Replace it with a rebuild of
  `../Resume/src/resume_base.tex` when the base resume changes.
- `public/diagrams/*.svg`: architecture diagrams for posts and projects.

## Conventions

- Always link internal paths through `withBase()` (the site is served under `/dev-portfolio/`).
- Colours come from CSS variables in `src/styles/global.css` (`--accent`, `--accent-solid`,
  `--text`, `--muted`, `--surface`, `--line`). Keep light and dark themes both readable.
- Base element styles go inside `@layer base`; unlayered rules override Tailwind utilities.
- Certifications are study targets (`status: "planned"`), not earned. Do not present them as earned.

## Verifying UI changes

Build, run `npm run preview`, and screenshot at 1440px and 390px wide, light and dark:

```bash
npx -y playwright@1.59.1 screenshot --full-page --viewport-size=1440,900 http://localhost:4321/dev-portfolio/ home.png
npx -y playwright@1.59.1 screenshot --viewport-size=390,844 http://localhost:4321/dev-portfolio/ mobile.png
```

(1.59.1 matches the Chromium already in `~/Library/Caches/ms-playwright`.)
