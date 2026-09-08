/**
 * Project frontmatter schema for the portfolio work section.
 *
 * Validation is intentionally minimal and explicit so we can keep TypeScript
 * strict without pulling in a runtime dependency for a small set of rules.
 */

export type ProjectClassification =
  'concept-demo' | 'prototype' | 'client-work' | 'personal-project' | 'production';

export type ProjectStatus = 'in-development' | 'self-reported' | 'published';

/**
 * Display category for the homepage grouping.
 *
 * - `workplace` — full-time / contract roles (e.g. GuruInovatif, Object Expression).
 * - `project`   — finished or in-development projects with a public deliverable.
 * - `recurring` — recurring patterns of work without a single deliverable
 *                 (e.g. analytics, security, WordPress client engagements).
 */
export type ProjectCategory = 'workplace' | 'project' | 'recurring';

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  summary: string;
  classification: ProjectClassification;
  category: ProjectCategory;
  role: string;
  stack: string[];
  status: ProjectStatus;
  deploymentUrl?: string;
  repositoryUrl?: string;
}

const CLASSIFICATIONS: ReadonlySet<ProjectClassification> = new Set([
  'concept-demo',
  'prototype',
  'client-work',
  'personal-project',
  'production',
]);

const STATUSES: ReadonlySet<ProjectStatus> = new Set([
  'in-development',
  'self-reported',
  'published',
]);

const CATEGORIES: ReadonlySet<ProjectCategory> = new Set(['workplace', 'project', 'recurring']);

export class ProjectValidationError extends Error {
  constructor(
    message: string,
    public readonly field?: string,
  ) {
    super(message);
    this.name = 'ProjectValidationError';
  }
}

function requireString(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new ProjectValidationError(`${field} must be a non-empty string`, field);
  }
  return value;
}

function requireSlug(value: unknown): string {
  const string = requireString(value, 'slug');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(string)) {
    throw new ProjectValidationError(
      'slug must be kebab-case and use only lowercase letters, digits, and hyphens',
      'slug',
    );
  }
  return string;
}

function requireStack(value: unknown): string[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new ProjectValidationError('stack must be a non-empty array of strings', 'stack');
  }
  return value.map((entry, index) => requireString(entry, `stack[${index}]`));
}

function requireCategory(value: unknown): ProjectCategory {
  if (typeof value !== 'string') {
    throw new ProjectValidationError('category must be a string', 'category');
  }
  if (!CATEGORIES.has(value as ProjectCategory)) {
    throw new ProjectValidationError(
      `category must be one of: ${Array.from(CATEGORIES).join(', ')}`,
      'category',
    );
  }
  return value as ProjectCategory;
}

function requireEnumeration<T extends string>(
  value: unknown,
  allowed: ReadonlySet<T>,
  field: string,
): T {
  if (typeof value !== 'string' || !allowed.has(value as T)) {
    throw new ProjectValidationError(
      `${field} must be one of: ${Array.from(allowed).join(', ')}`,
      field,
    );
  }
  return value as T;
}

function optionalString(value: unknown, field: string): string | undefined {
  if (value === undefined || value === null || value === '') return undefined;
  if (typeof value !== 'string') {
    throw new ProjectValidationError(`${field} must be a string when provided`, field);
  }
  return value;
}

export function validateProject(input: ProjectFrontmatter): ProjectFrontmatter {
  const candidate = input as Partial<ProjectFrontmatter>;
  const title = requireString(candidate.title, 'title');
  const slug = requireSlug(candidate.slug);
  const summary = requireString(candidate.summary, 'summary');
  const classification = requireEnumeration(
    candidate.classification,
    CLASSIFICATIONS,
    'classification',
  );
  const role = requireString(candidate.role, 'role');
  const stack = requireStack(candidate.stack);
  const status = requireEnumeration(candidate.status, STATUSES, 'status');
  const category = requireCategory(candidate.category);
  const deploymentUrl = optionalString(candidate.deploymentUrl, 'deploymentUrl');
  const repositoryUrl = optionalString(candidate.repositoryUrl, 'repositoryUrl');

  if (status === 'published' && !deploymentUrl) {
    throw new ProjectValidationError(
      'deploymentUrl is required when status is "published"',
      'deploymentUrl',
    );
  }

  return {
    title,
    slug,
    summary,
    classification,
    category,
    role,
    stack,
    status,
    deploymentUrl,
    repositoryUrl,
  };
}
