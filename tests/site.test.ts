import { describe, it, expect } from 'vitest';
import { absoluteUrl } from '../src/lib/site.js';

describe('absoluteUrl', () => {
  it('joins an absolute path to a configured origin', () => {
    expect(absoluteUrl('/work', 'https://example.com')).toBe('https://example.com/work');
  });

  it('joins a path without a leading slash', () => {
    expect(absoluteUrl('work', 'https://example.com')).toBe('https://example.com/work');
  });

  it('returns the origin for the home path', () => {
    expect(absoluteUrl('/', 'https://example.com')).toBe('https://example.com/');
  });

  it('trims a trailing slash from the origin before joining', () => {
    expect(absoluteUrl('/about', 'https://example.com/')).toBe('https://example.com/about');
  });
});
