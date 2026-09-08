import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/work' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    summary: z.string().min(1),
    classification: z.enum([
      'concept-demo',
      'prototype',
      'client-work',
      'personal-project',
      'production',
    ]),
    category: z.enum(['workplace', 'project', 'recurring']),
    role: z.string().min(1),
    stack: z.array(z.string().min(1)).nonempty(),
    status: z.enum(['in-development', 'self-reported', 'published']),
    deploymentUrl: z.string().url().optional(),
    repositoryUrl: z.string().url().optional(),
    evidence: z.string().optional(),
  }),
});

const noteCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/notes' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    summary: z.string().min(1),
    status: z.enum(['in-development', 'self-reported', 'published']),
    publishedDate: z.coerce.date().optional(),
    topics: z.array(z.string().min(1)).default([]),
  }),
});

export const collections = { work: projectCollection, notes: noteCollection };
