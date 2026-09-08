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

- `/` homepage with hero, technology strip, capability grid, engineering
  approach loop, selected work, and Production Experience section.
- `/work/` index + `/work/[slug]/` detail pages (Content Collection).
  11 work entries: 3 portfolio demos + 4 workplace entries + 4 recurring/client-work entries
  (Nongsa SEZ, Hasnur Centre / Guruinovatif.id, Object Expression, Merdeka-AI,
  WordPress, Analytics, Security, n8n) all with honesty labels and explicit
  "Pending evidence" markers where metrics are not isolated.
- `/about/`, `/notes/`, `/contact/`.
- Sitemap, robots.txt, canonical URLs, Open Graph, Twitter card.
- `noindex` on draft and contact surfaces where appropriate.
- Responsive, accessible navigation.

## Brand

Editorial Technical visual direction (charcoal ink + sage paper + burnt
orange `#C65D2E` accent + Helvetica Neue display + Iowan Old Style
serif long-form + SFMono labels). See `DESIGN.md` for the full system.

## Local Development

```bash
pnpm install
pnpm dev              # http://localhost:4321
pnpm test             # Vitest
pnpm typecheck        # tsc --noEmit (strict)
pnpm lint             # ESLint --max-warnings=0
pnpm format:check     # Prettier
pnpm build            # Astro static build
pnpm test:screenshots # mobile-width (390x844) Playwright captures -> tests/screenshots/mobile/
pnpm audit:lighthouse # Lighthouse CI desktop audit -> lighthouse-report/
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

Note: as of 2026-09 the `codebyaria` GitHub account is **billing-locked**,
so `gh run` jobs may return failure annotations until billing is
resolved at <https://github.com/settings/billing>. Local quality gates
must still pass before push.

## Deployment

Vercel (manual import via vercel.com UI as `codebyaria` account). Static
build — no Node adapter needed.

## Production Experience

The `/work/nongsa-sez/`, `/work/hasnur-centre/`, `/work/object-expression-sdn-bhd/`,
`/work/merdeka-ai/`, `/work/wordpress-client-work/`, `/work/analytics-integrations/`,
`/work/security-performance-backup/`, and `/work/n8n-automations/`
entries are classified as **production** or **client-work** /
**personal-project**. Per PRD 10.2, no confidential code, credentials,
customer data, proprietary architecture, or internal business
information appears in any of them. Each contribution is marked
_Pending evidence_ where a metric is not personally attributable.

## Honesty

Every claim in this repository is sourced. See `../docs/honesty-and-claims.md`
in the workspace root for the full policy. No fabricated metrics, clients,
or responsibilities.
