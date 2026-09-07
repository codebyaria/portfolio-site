---
title: 'Technical SEO checklist for modern websites'
slug: 'technical-seo-checklist'
summary: >-
  A practical checklist covering metadata, canonical URLs, hreflang, structured
  data, sitemap, robots, and Core Web Vitals.
status: 'in-development'
publishedDate: 2026-09-07
topics: ['seo', 'checklist', 'performance']
---

A short, opinionated list of what I verify on every site I ship. None of it is
novel — but most agency builds skip at least one item.

**Metadata**

- [ ] Unique `<title>` per route, 50–60 characters.
- [ ] Unique `<meta name="description">` per route, 140–160 characters.
- [ ] Open Graph + Twitter Card metadata, with absolute image URLs.
- [ ] `<link rel="canonical">` on every page.

**Internationalisation**

- [ ] `hreflang` for every translated variant.
- [ ] `x-default` for the default locale.
- [ ] `<html lang="...">` matches the served language.

**Indexability**

- [ ] `/sitemap.xml` regenerated at build, includes only canonical URLs.
- [ ] `/robots.txt` references the sitemap and disallows non-canonical paths.
- [ ] Drafts and search results use `noindex`.

**Structured data**

- [ ] At least one schema.org type per route (`Organization`, `LocalBusiness`,
      `Article`, `BreadcrumbList`).
- [ ] JSON-LD, validated against Google's Rich Results test.

**Performance**

- [ ] LCP < 2.5s on 4G mobile.
- [ ] CLS < 0.1.
- [ ] INP < 200ms.
- [ ] Lighthouse mobile score ≥ 90.

**Content hygiene**

- [ ] 404 returns proper status code, not a soft 200.
- [ ] Redirect chains ≤ 1 hop.
- [ ] All internal links resolve (no `mailto:` for sales CTAs).

I run the Lighthouse audit as a CI job with hard thresholds on accessibility
and SEO, soft warnings on performance and best-practices. The thresholds live
in `lighthouserc.json` and have caught regressions before deploy more than once.
