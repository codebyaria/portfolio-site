# TDD Log — `absoluteUrl` helper

This document records the strict red-green-refactor cycle used to introduce the
SEO helper `absoluteUrl` in `src/lib/site.ts`. It is intentionally short and
only captures the slices that drove the public behavior.

## Vertical slice 1 — happy path

### RED

```text
$ pnpm vitest run tests/site.test.ts
Test Files  1 failed (1)
Tests  1 failed (1)
  × tests/site.test.ts > absoluteUrl > joins an absolute path to a configured origin
    ReferenceError: absoluteUrl is not defined
```

The failure was the missing export from `src/lib/site.ts`. The assertion was
written first and observed failing.

### GREEN

```text
$ pnpm vitest run tests/site.test.ts
Test Files  1 passed (1)
Tests  1 passed (1)
```

Implemented the minimal function in `src/lib/site.ts` and reran the same
slice. Production code in this slice was the simplest expression of the
intended behavior with no duplication or edge cases yet.

## Vertical slice 2 — boundary cases

### RED

Added three more cases (leading slash absent, root path, trailing slash on
origin). They failed because the minimal implementation only handled a single
leading slash.

### GREEN

```text
$ pnpm vitest run tests/site.test.ts
Test Files  1 passed (1)
Tests  4 passed (4)
```

Trimmed the origin and prefixed the path when needed. No further behavior
was added beyond what the tests demanded.

## Refactor

Naming and structure already matched the simplest form required by the tests.
No additional refactor was necessary.

## Final state

```text
$ pnpm test
Test Files  1 passed (1)
     Tests  4 passed (4)
```
