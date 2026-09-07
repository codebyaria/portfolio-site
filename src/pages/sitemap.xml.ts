import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = import.meta.env.SITE_ORIGIN ?? 'https://example.com';

export const GET: APIRoute = async ({ site }) => {
  const origin = (site?.toString().replace(/\/$/, '') ?? SITE).replace(/\/$/, '');

  const staticPaths = ['/', '/work/', '/about/', '/notes/', '/contact/'];

  const workEntries = await getCollection('work');
  const noteEntries = await getCollection('notes');

  const workPaths = workEntries.map((entry) => `/work/${entry.data.slug}/`);
  const notePaths = noteEntries.map((entry) => `/notes/${entry.data.slug}/`);

  const allPaths = [...staticPaths, ...workPaths, ...notePaths];

  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = allPaths
    .map((path) => {
      const loc = `${origin}${path}`;
      return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
    })
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
