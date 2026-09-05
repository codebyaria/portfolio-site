import type { APIRoute } from 'astro';

const SITE = import.meta.env.SITE_ORIGIN ?? 'https://example.com';

export const GET: APIRoute = async ({ site }) => {
  const origin = (site?.toString().replace(/\/$/, '') ?? SITE).replace(/\/$/, '');

  // Static pages only — content collection routes are added as case studies are authored.
  const paths = ['/', '/work/', '/about/', '/notes/', '/contact/'];

  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = paths
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
