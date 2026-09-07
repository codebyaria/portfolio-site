---
title: 'Automating SEO metadata with AI'
slug: 'ai-seo-metadata-safely'
summary: >-
  Validate first, suggest second, never auto-publish. A pattern for safe AI SEO
  assistance in production CMS workflows.
status: 'in-development'
publishedDate: 2026-09-07
topics: ['ai', 'seo', 'automation', 'safety']
---

There is a useful difference between **AI suggesting SEO metadata** and **AI
publishing SEO metadata**. The first can save an editor an hour per article.
The second will quietly tank your search traffic on a bad day.

The pattern I ship to clients:

1. **Webhook hits on draft create/update in Strapi.** HMAC-signed, with
   timestamp freshness window and replay protection. Not "AI calls back to our
   server" — that is what attackers look for.
2. **Schema validation on the AI output** before it ever touches the CMS. If
   the title is longer than 60 characters, drop it. If the meta description
   contains a forbidden phrase, drop it. Zod, not vibes.
3. **Always write back as a draft, never directly publish.** The editor sees a
   diff in Strapi and accepts or rejects. No silent auto-publish path.
4. **Per-environment AI keys.** Local development and CI get a stub model.
   Production gets the real one. Revoke staging keys when staging ends.

The full implementation is in
[`ai-seo-content-pipeline`](https://github.com/codebyaria/ai-seo-content-pipeline)
in this portfolio. It is small (a few hundred lines), typed end-to-end, and
the failure modes are documented in `docs/threat-model.md`.

The lesson: the most useful AI workflows in a CMS context are the ones where
the human stays in the loop and the AI is the most expensive autocomplete you
ever shipped.
