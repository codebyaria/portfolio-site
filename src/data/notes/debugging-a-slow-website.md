---
title: 'How I approach debugging a slow website'
slug: 'debugging-a-slow-website'
summary: >-
  A repeatable sequence: prove the symptom, find the dominant phase, isolate the
  variable, then fix the smallest thing that changes the measurement.
status: 'in-development'
publishedDate: 2026-09-07
topics: ['performance', 'debugging', 'workflow']
---

Most "slow website" reports are not actually about speed. They are about a
specific page, on a specific device, on a specific network, doing a specific
thing the visitor expected to be fast. The first job is to make that
specificity explicit before touching anything.

The sequence I keep coming back to:

**1. Reproduce the report.** Open the same URL on the same device profile the
visitor described. Throttle to the network they likely had. Run Lighthouse and
WebPageTest. If I cannot reproduce it, the report is a lead, not a diagnosis.

**2. Find the dominant phase.** Look at the waterfall. Is the bottleneck
TTFB (backend), first paint (HTML/CSS), hero load (images), or hydration
(JavaScript)? The dominant phase tells me which layer of the system I am
working in. Fixing the wrong layer wastes a week.

**3. Isolate one variable.** Disable one thing at a time and re-measure.
Cache off. Images off. JavaScript off. Third-party scripts off. The fix is
almost always in the layer that, when removed, drops the metric by more than
its share.

**5. Fix the smallest thing that changes the measurement.** Not the biggest
thing that could possibly be slow. The smallest change with a measurable
delta. That is what I ship. Anything else becomes a follow-up.

**6. Verify the report scenario, not just my scenario.** Run the same
benchmark on the visitor's network profile, not my broadband. If the metric
moves by less than the threshold the report described, the fix is incomplete.

**7. Document the fix as a regression test.** Whatever measurement showed
the bottleneck, encode it as a CI check so a future change cannot quietly
regress it. This is the part most debugging write-ups skip, and it is the
only thing that keeps the speed from leaking back out.

Two patterns I have stopped doing:

- **Optimising without measuring.** If I cannot show the metric before and
  after, I cannot show the optimisation worked.
- **Hypothesising causes from the source code.** The slow thing is rarely the
  obvious thing. The waterfall always surprises me. I look there first.

For the demo portfolio in this repo, the relevant artefacts are:
[`seo-intelligence-dashboard`](https://github.com/codebyaria/seo-intelligence-dashboard)
exposes Core Web Vitals-style metrics as a product surface, and
[`local-business-growth`](https://github.com/codebyaria/local-business-growth)
shows the Astro server-rendered pattern that keeps most pages off the slow path
entirely.
