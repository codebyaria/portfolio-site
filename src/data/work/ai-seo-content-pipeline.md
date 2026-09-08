---
title: AI SEO Content Pipeline
slug: ai-seo-content-pipeline
summary: Bounded Node.js service that drafts SEO metadata from Strapi article inputs with validation, retry, and human-review guardrails.
classification: concept-demo
category: 'project'
role: Full-Stack Web Developer (demo)
stack:
  - Node.js
  - TypeScript
  - Zod
  - OpenAI API
status: in-development
evidence: Test-covered portfolio demo; AI suggestions are designed for human review before publishing.
---

## Intent

Validate webhook payloads, build a deterministic prompt from a real article, call a
provider with structured-output validation, and write the result back as a draft. No
auto-publish.

## Boundaries

This is a **portfolio demo**. The project ships with documented contracts and failure
modes, with no real client data included.
