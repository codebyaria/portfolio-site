/**
 * Site SEO helpers.
 *
 * `origin` must be a configured canonical origin without a trailing slash.
 * `path` may start with `/` or be an empty string for the root.
 */
export function absoluteUrl(path: string, origin: string): string {
  const cleanOrigin = origin.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : path ? `/${path}` : '';
  return `${cleanOrigin}${cleanPath}`;
}
