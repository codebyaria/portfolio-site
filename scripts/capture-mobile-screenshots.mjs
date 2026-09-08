/**
 * Mobile-width (390x844) screenshots for portfolio-site.
 *
 * Captures the homepage, 5 static routes, 1 production case study detail,
 * and 1 work detail. Used by Phase 1 roadmap to demonstrate mobile layout
 * quality without depending on a live Vercel deploy.
 *
 * Run: pnpm dev (in another terminal), then `pnpm test:screenshots`.
 */
import { chromium, devices } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', 'tests', 'screenshots', 'mobile');

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'work-index', path: '/work/' },
  { name: 'notes-index', path: '/notes/' },
  { name: 'about', path: '/about/' },
  { name: 'contact', path: '/contact/' },
  { name: 'production-detail', path: '/work/hasnur-centre/' },
  { name: 'object-expression-detail', path: '/work/object-expression-sdn-bhd/' },
];

const BASE_URL = process.env.SCREENSHOT_BASE_URL ?? 'http://localhost:4321';
const VIEWPORT = { width: 390, height: 844 };

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...devices['iPhone 13'],
    viewport: VIEWPORT,
  });
  const page = await context.newPage();

  let captured = 0;
  for (const route of ROUTES) {
    const url = `${BASE_URL}${route.path}`;
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      if (!response || !response.ok()) {
        console.warn(`[skip] ${route.name}: HTTP ${response?.status() ?? 'no response'}`);
        continue;
      }
      const file = path.join(OUT_DIR, `${route.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      captured += 1;
      console.log(`[ok] ${route.name} -> ${file}`);
    } catch (err) {
      console.warn(`[fail] ${route.name}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  await browser.close();
  console.log(`\nCaptured ${captured}/${ROUTES.length} mobile screenshots in ${OUT_DIR}`);
  if (captured < ROUTES.length) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
