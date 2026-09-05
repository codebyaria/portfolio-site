import type { APIRoute } from 'astro';

const SITE = import.meta.env.SITE_ORIGIN ?? 'https://example.com';

export const GET: APIRoute = async ({ site }) => {
  const origin = (site?.toString().replace(/\/$/, '') ?? SITE).replace(/\/$/, '');
  const body = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
