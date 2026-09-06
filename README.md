# Portfolio Site

[![CI](https://github.com/codebyaria/portfolio-site/actions/workflows/ci.yml/badge.svg)](https://github.com/codebyaria/portfolio-site/actions/workflows/ci.yml)

Phase 1 of the DigiAgency application portfolio. Astro 7 + TypeScript strict
portfolio site that surfaces selected work, notes, and production
experience.

## Project Overview

A focused application portfolio demonstrating modern web development,
headless CMS architecture, SEO and performance, and AI-assisted automation.
Built specifically to support an application for **Full Stack Developer —
AI & Automation Focus (Data Engineer) & Web Developer** at DigiAgency.

## Architecture

```text
src/
├── pages/        Astro routes (index, work, work/[slug], about, notes, contact)
├── layouts/      BaseLayout.astro (SEO meta, OG, canonical)
├── components/   SiteHeader, SiteFooter, ProjectCard, EvidenceMeta
├── content/      Astro Content Collections (work/, notes/)
├── lib/          project-schema, site config
├── data/work/    Work entries (frontmatter validated by Zod-style schema)
└── styles/       global.css
```

Editorial Technical visual direction (ADR-005). Decision / Learn surface:
hiring manager scans the homepage; technical reviewer drills into work
entries.

## Features

- `/` homepage with selected work cards and capability descriptions.
- `/work/` index + `/work/[slug]/` detail pages (Content Collection).
- `/about/`, `/notes/`, `/contact/`.
- Sitemap, robots.txt, canonical URLs, Open Graph, Twitter card.
- `noindex` on draft and contact surfaces where appropriate.
- Responsive, accessible navigation.

## Local Development

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm test         # Vitest
pnpm typecheck    # tsc --noEmit (strict)
pnpm lint         # ESLint --max-warnings=0
pnpm format:check # Prettier
pnpm build        # Astro static build
```

## Tech Stack

- Astro 7 with strict TypeScript
- React (none currently; islands available if needed)
- ESLint + Prettier
- Vitest

## CI / CD

GitHub Actions runs `lint`, `format:check`, `typecheck`, `test`, and
`build` on every push to `main` and on every pull request. See
`.github/workflows/ci.yml`.

## Deployment

Vercel (manual import via vercel.com UI as `codebyaria` account). Static
build — no Node adapter needed.

## Honesty

Every claim in this repository is sourced. See `../docs/honesty-and-claims.md`
in the workspace root for the full policy. No fabricated metrics, clients,
or responsibilities.
