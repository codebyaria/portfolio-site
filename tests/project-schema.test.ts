import { describe, it, expect } from 'vitest';
import {
  validateProject,
  type ProjectFrontmatter,
  ProjectValidationError,
} from '../src/lib/project-schema.ts';

const base: ProjectFrontmatter = {
  title: 'Local Business Growth',
  slug: 'local-business-growth',
  summary: 'Full-stack agency demo for a roofing concept business.',
  classification: 'concept-demo',
  role: 'Full-Stack Web Developer',
  stack: ['Astro', 'Strapi', 'TypeScript'],
  status: 'in-development',
};

describe('validateProject', () => {
  it('accepts a complete frontmatter object', () => {
    const result = validateProject(base);
    expect(result.title).toBe('Local Business Growth');
    expect(result.classification).toBe('concept-demo');
  });

  it('rejects an unknown classification', () => {
    expect(() => validateProject({ ...base, classification: 'fake' as never })).toThrow(
      ProjectValidationError,
    );
  });

  it('rejects a missing required field', () => {
    const broken = { ...base } as Partial<ProjectFrontmatter>;
    delete broken.summary;
    expect(() => validateProject(broken as ProjectFrontmatter)).toThrow(ProjectValidationError);
  });

  it('rejects when status is published without a deploymentUrl', () => {
    expect(() => validateProject({ ...base, status: 'published' })).toThrow(ProjectValidationError);
  });

  it('accepts when status is published and a deploymentUrl is present', () => {
    expect(() =>
      validateProject({
        ...base,
        status: 'published',
        deploymentUrl: 'https://example.com',
      }),
    ).not.toThrow();
  });
});
