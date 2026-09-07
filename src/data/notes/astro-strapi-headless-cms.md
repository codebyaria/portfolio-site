---
title: 'Building a headless CMS with Astro + Strapi'
slug: 'astro-strapi-headless-cms'
summary: >-
  A small, typed REST client, content modeling that respects publishing rules,
  and structured data on every public page.
status: 'in-development'
publishedDate: 2026-09-07
topics: ['strapi', 'astro', 'headless-cms', 'rest-api']
---

The mistake I see most often with "headless CMS" setups is treating the headless
CMS like a database with an admin UI. The frontend ends up making30+ REST
calls on first paint because nothing is co-located or aggregated.

A few patterns I keep coming back to:

**One collection = one render shape.** Treat `Service`, `Article`, `Location`
as distinct content types with their own schema, slug strategy, and
`getStaticPaths`. Don't try to make one mega-`Entry` type that holds
everything.

**A typed client, not `fetch`.** A small wrapper that takes a URL, parses the
Strapi v4 response shape (`{ data: [{ id, attributes }] }`), throws on non-2xx,
and returns the flat model. Two days of typing saves a year of `any`-shaped
bugs in your templates.

**Adapter fallback for offline builds.** The same module exposes a static
fixtures path for local development and CI when `STRAPI_URL` is unset. The
build never blocks on a third-party CMS being up. This matters when the agency
delivers the repo to a client and the client does not have Strapi running yet.

**Respect `publishedAt`.** Always filter for `publishedAt: { $notNull: true }`
on public reads. Drafts belong behind the Strapi preview URL, never on
production.

For the demo in this portfolio, all of these patterns are visible in
[`local-business-growth`](https://github.com/codebyaria/local-business-growth).
