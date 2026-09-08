---
version: alpha
name: Aria Editorial Technical
description: Evidence-first editorial system for Aria Nurhadi Zain’s DigiAgency application portfolio.
colors:
  primary: "#101416"
  secondary: "#4D5658"
  tertiary: "#C65D2E"
  neutral: "#E9ECE8"
  surface: "#F7F8F4"
  border: "#969F9D"
  inverse: "#FFFFFF"
  caution: "#9C3D27"
typography:
  display:
    fontFamily: Helvetica Neue
    fontSize: 5.5rem
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.065em"
  h1:
    fontFamily: Helvetica Neue
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.045em"
  h2:
    fontFamily: Helvetica Neue
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  h3:
    fontFamily: Helvetica Neue
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body-lg:
    fontFamily: Avenir Next
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  body-md:
    fontFamily: Avenir Next
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: SFMono-Regular
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.08em"
  longform:
    fontFamily: Iowan Old Style
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
rounded:
  none: 0px
  sm: 2px
  md: 4px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverse}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.inverse}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
    height: 48px
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 16px
    height: 48px
  evidence-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 8px
  caution-label:
    backgroundColor: "{colors.caution}"
    textColor: "{colors.inverse}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 8px
  muted-metadata:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 8px
  border-swatch:
    backgroundColor: "{colors.border}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: 8px
---

## Overview

**Aria Editorial Technical** is an evidence-first portfolio system for a full-stack web developer applying to a business-oriented digital agency. It combines Direction B’s asymmetric technical composition with Direction A’s comfortable long-form typography and Direction C’s explicit evidence/status language.

The primary surface is **Decide / Learn**. Hiring managers should understand relevance quickly; technical reviewers should be able to inspect increasingly detailed evidence without the homepage becoming a dashboard.

The system should feel precise, visually aware, fast, honest, and production-minded. It must not look like a freelance services page, generic developer template, or imitation of DigiAgency.

## Colors

- **Primary — Technical Ink (`#101416`):** dominant text, high-emphasis controls, strong rules.
- **Secondary — Graphite (`#4D5658`):** supporting copy and secondary metadata.
- **Tertiary — Burnt Orange (`#C65D2E`):** the single interaction and emphasis accent — burnt orange, warm, distinctive, creative; deliberately distinct from corporate teal/blue.
- **Neutral — Field Gray (`#E9ECE8`):** main page field.
- **Surface — Evidence Paper (`#F7F8F4`):** restrained section surfaces and long-form reading areas.
- **Border — Measured Line (`#969F9D`):** structural rules; never a decorative accent rail.
- **Inverse — White (`#FFFFFF`):** text on dark or accent controls.
- **Caution — Proof Clay (`#9C3D27`):** sparse warnings for pending, private, or unverified material—not a second brand accent.

Use large neutral fields and structural lines. Avoid gradients, glow, glass effects, and unnecessary color-coded categories.

## Typography

- **Display / headings:** Helvetica Neue with Avenir Next and Arial fallbacks. Use tight tracking and compact line-height for the evidence-first technical voice.
- **Body:** Avenir Next with Helvetica fallbacks for calm, readable interface and narrative text.
- **Labels:** SFMono-Regular with Menlo/Consolas fallbacks, reserved for classifications, evidence state, dates, technologies, and section indices.
- **Long-form:** Iowan Old Style with Baskerville/Georgia fallbacks for case-study passages where extended reading benefits from an editorial serif.

Do not use monospace for whole pages. Do not turn every line into uppercase metadata. Body copy should remain comfortably readable and generally stay within 60–72 characters per line.

Fluid production sizes may use `clamp()` around these normative scale anchors. On small screens, display text must shrink before it causes horizontal overflow.

## Layout

- Desktop composition may use a 12-column grid with asymmetric spans.
- Homepage sections should land one idea at a time: identity, selected work, agency compatibility, method, production evidence, notes, employment contact.
- Selected work must outrank generic capability descriptions.
- Full-width structural rules are preferred over wrapping every section in a card.
- Maximum reading width: 72rem for page structure; 42rem for long-form prose.
- Core responsive breakpoints: 860px for major grid collapse and 580px for mobile detail reduction.
- Mobile reading order must match semantic DOM order.
- Use the spacing tokens consistently; avoid one-off pixel values unless required for optical alignment.

## Elevation & Depth

The default interface is flat. Use hierarchy from type, spacing, contrast, and borders.

- No glassmorphism or backdrop blur.
- Avoid shadows on routine sections and cards.
- A single hard shadow may be used for a deliberately notebook-like supporting artifact, never for the primary page shell.
- Hover states should change color, underline, or border contrast rather than lift every element.

## Shapes

- Default radius is 0–4px.
- Status labels use squared or 2px corners.
- Pill radius is reserved for true compact state chips, not containers.
- Buttons remain rectangular and should not resemble rounded mobile-app capsules.
- Dividers are 1px; key section boundaries may use 2px primary rules.

## Components

### Site header

Compact identity and navigation. It may include full-time/remote context but should not compete with the hero. Mobile navigation must remain keyboard accessible and avoid JavaScript unless collapse behavior genuinely requires it.

### Hero statement

Left or asymmetrically aligned. Contains name, title, proposition, one selected-work CTA, and one GitHub CTA. No portrait is required while real imagery is unavailable. Do not add unverified metrics.

### Project evidence module

Shows project classification, business problem, role, technologies, evidence state, and case-study action. Its composition may be asymmetric, but every field must preserve a predictable reading order.

### Evidence/status label

Uses the label typography. Approved vocabulary includes `Production`, `Client work`, `Personal project`, `Prototype`, `Concept / Demo`, `In development`, `Self-reported`, and `Evidence pending`. Do not invent euphemisms that blur project status.

### Capability narrative

A concise account tied to examples. Avoid equal-weight icon tiles. When evidence is pending, say so directly.

### Process sequence

`Understand → Design → Build → Validate → Measure → Improve`. On mobile this wraps to two columns or becomes a readable vertical sequence without decorative arrows that imply unavailable interaction.

### Case-study long-form

Uses the editorial serif selectively for narrative passages, with technical metadata and evidence references in the interface type system.

### Employment contact

States full-time remote intent and exposes email, LinkedIn, and GitHub. It is not a freelance lead-generation form.

### Interaction rules

- Minimum target size: 44×44px; primary buttons use 48px height.
- Every interactive control requires a visible `:focus-visible` treatment.
- Motion must clarify state, remain subtle, and respect `prefers-reduced-motion`.
- Underlines or explicit affordances are required for inline links.

## Do's and Don'ts

### Do

- Lead with evidence and honest project classification.
- Use typography and grid interruption to create character.
- Keep the burnt orange accent scarce and meaningful.
- Make content understandable to both business and technical reviewers.
- Use real screenshots, diagrams, tests, and verified results when available.
- Preserve a clean static Astro path and minimize client-side JavaScript.

### Don't

- Copy DigiAgency’s palette, layout, or marketing copy.
- Use fake metrics, skill percentages, or invented client outcomes.
- Build a centered hero followed by three generic feature cards.
- use technology logos as decorative wallpaper.
- Use gradients, glass, glow, stock imagery, or excessive rounded cards.
- Present planned Astro, Strapi, AI, or dashboard work as shipped evidence.
- Hide pending verification behind vague words such as “expert” or “advanced.”

