---
title: Security, Performance, and Backup
slug: security-performance-backup
summary: Recurring security hardening, page-speed optimisation, and backup
  setup across multiple WordPress and Astro projects. Cross-project case
  study focused on delivery scope and operational responsibilities.
classification: production
category: 'recurring'
role: Web Developer with infrastructure focus
stack:
  - WordPress
  - Astro
  - Nginx
  - Cloudflare
  - UpdraftPlus
  - WP Super Cache
  - Lighthouse
status: self-reported
---

# Security, Performance, and Backup

## Context

Security hardening, page-speed optimisation, and backup setup delivered
across multiple WordPress and Astro projects. The three areas are kept
distinct in this entry because each has different tooling and risk
profile; combining them here lets a single case study describe the
recurring shape of the work without claiming a single project.

## Dates and work arrangement

Ongoing. Each project receives a hardening and performance pass at
launch, then incremental maintenance.

## Role

Web Developer with infrastructure focus. Responsibilities include
plugin and theme hardening, page-speed profiling and remediation,
and backup schedule configuration with verified restore.

## Contributions

### 1. Security hardening

**Problem**: Web applications ship with default settings that expose
attack surface — admin paths, file permissions, missing security
headers.

**Action**: Hardened WordPress and Astro installs: renamed or
protected admin paths, set strict file permissions, added security
headers via Cloudflare or Nginx, enabled rate limiting on auth
endpoints, and configured basic 2FA where appropriate.

**Result**: Delivered as part of the overall project work.

### 2. Page-speed optimisation

**Problem**: Default WordPress + Elementor and Astro + image stacks
ship heavy payloads that hurt Core Web Vitals.

**Action**: Profiled each project with Lighthouse, then applied
remediations: image compression and lazy-loading, critical CSS,
preload of above-the-fold assets, defer of non-critical JS, server
or page caching, and CDN configuration.

**Result**: Delivered as part of the overall project work.

### 3. Backup and restore

**Problem**: Web applications need a recovery path independent of
hosting provider snapshots.

**Action**: Configured scheduled backups via UpdraftPlus (WordPress)
and equivalent scripts (Astro) to off-site storage; periodically
verified restore from backup on a staging environment.

**Result**: Delivered as part of the overall project work.

## Outcome

Shipped and maintained security hardening, page-speed optimisation,
and backup configurations across multiple web projects. Specific
Lighthouse scores, time-to-recovery, or security incident counts not
isolated to this contribution; not listed as separate metrics.

## Evidence

- Source: resume, LinkedIn profile, or project materials supplied by Aria.
- No public project URLs disclosed in this entry.

## Tech

WordPress · Astro · Nginx · Cloudflare · UpdraftPlus · WP Super Cache
· Lighthouse
