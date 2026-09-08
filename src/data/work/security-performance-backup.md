---
title: Security, Performance, and Backup
slug: security-performance-backup
summary: Recurring security hardening, page-speed optimisation, and backup
  setup across multiple WordPress and Astro projects. Generic case
  study focused on delivery scope rather than unattributed outcome claims.
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

**Result**: No standalone metric is published for this contribution.

### 2. Page-speed optimisation

**Problem**: Default WordPress + Elementor and Astro + image stacks
ship heavy payloads that hurt Core Web Vitals.

**Action**: Profiled each project with Lighthouse, then applied
remediations: image compression and lazy-loading, critical CSS,
preload of above-the-fold assets, defer of non-critical JS, server
or page caching, and CDN configuration.

**Result**: No standalone metric is published.

### 3. Backup and restore

**Problem**: Web applications need a recovery path independent of
hosting provider snapshots.

**Action**: Configured scheduled backups via UpdraftPlus (WordPress)
and equivalent scripts (Astro) to off-site storage; periodically
verified restore from backup on a staging environment.

**Result**: No standalone metric is published.

## Outcome

Shipped and maintained security hardening, page-speed optimisation,
and backup configurations across multiple web projects. Specific
Lighthouse scores, time-to-recovery, or security incident counts not
isolated to this contribution; not published as standalone metrics.

## Evidence

- Self-reported by candidate.
- No public project URLs disclosed in this entry.

## Tech

WordPress · Astro · Nginx · Cloudflare · UpdraftPlus · WP Super Cache
· Lighthouse

## Public / Private boundary

What may be public:

- Generic role label and tooling list publicly associated with
  these problem areas.
- Generic descriptions of recurring patterns (header hardening,
  cache strategy, off-site backup).

What must stay private:

- Project identities and per-project security posture.
- Specific Lighthouse scores or Core Web Vitals per project.
- Backup storage locations, encryption keys, or restore credentials.
- Vulnerability scan output and remediation notes.
