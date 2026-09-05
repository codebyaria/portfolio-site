// @ts-check
import { defineConfig } from 'astro/config';

const siteOrigin = process.env.SITE_ORIGIN?.replace(/\/$/, '');

export default defineConfig({
  ...(siteOrigin ? { site: siteOrigin } : {}),
  trailingSlash: 'always',
});
