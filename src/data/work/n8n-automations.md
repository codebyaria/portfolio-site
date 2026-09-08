---
title: n8n Automations
slug: n8n-automations
summary: Used n8n for internal automation workflows across projects — no
  public example available yet. Generic case study with a clear scope note about the absence of a shareable public workflow.
classification: personal-project
category: 'recurring'
role: Builder (automation)
stack:
  - n8n
  - Webhooks
  - HTTP API
  - JSON
status: self-reported
---

# n8n Automations

## Context

n8n is the automation tool used across internal workflows. This entry
covers recurring automation shapes, not a single published example.
There is no public workflow URL to point to yet — that is stated
honestly below rather than implied.

## Dates and work arrangement

Ongoing. Workflows are built ad-hoc as needs arise.

## Role

Builder. Responsibilities include designing triggers, mapping data
between systems, error handling, and verifying end-to-end execution.

## Contributions

### 1. Form-to-database workflows

**Problem**: Manual data entry from web forms into spreadsheets or
CRMs is slow and error-prone.

**Action**: Built n8n workflows that receive a webhook from a web
form and write the parsed payload to a target system (database or
spreadsheet) with basic error handling.

**Result**: No standalone metric is published.

### 2. Email-to-task automation

**Problem**: Inbound emails with structured intent need to become
tasks without manual triage.

**Action**: Built n8n workflows that watch an inbox, classify
incoming mail by simple rules, and create tasks in the relevant
tracker.

**Result**: No standalone metric is published.

### 3. Scraper-to-Notion sync

**Problem**: Reference material needs to land in a knowledge base
without manual copy-paste.

**Action**: Built n8n workflows that scrape a target source on a
schedule, transform the data, and push it to a Notion database
via the Notion API.

**Result**: No standalone metric is published.

## Outcome

Built and maintained a small set of n8n workflows for internal
automation. No public workflow URL is published alongside this entry
— readers should treat this as a generic claim of tool familiarity
until a shareable example is available.

## Evidence

- Self-reported by candidate.
- No public workflow URL available at the time of writing.

## Tech

n8n · Webhooks · HTTP API · JSON

## Public / Private boundary

What may be public:

- Generic role label and the fact that n8n is in regular use.
- Generic descriptions of recurring automation patterns.

What must stay private:

- Internal workflow URLs or workflow IDs.
- Specific credentials and target-system identifiers.
- Volumes of executions, error rates, or business impact metrics.

## Scope note

This entry is intentionally published without a shareable public
example. The original PENDING-FACTS note said "used, no public
example yet", and that constraint is preserved here rather than
overstated. If a public workflow is built later, this entry should
be revised to link to it.
