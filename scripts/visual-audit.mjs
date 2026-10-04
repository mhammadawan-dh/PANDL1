import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'audit');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}

async function runAudit() {
  console.log('Launching Playwright for visual audit...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  const URL = 'http://localhost:3000'; // Make sure the Next.js dev server is running on 3000
  const page = await context.newPage();

  console.log(`Navigating to ${URL}...`);
  try {
    await page.goto(URL, { waitUntil: 'networkidle' });

    console.log('Taking Desktop Home Full Screenshot...');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({ path: path.join(OUT_DIR, 'desktop-home-full.png'), fullPage: true });

    console.log(`Navigating to ${URL}/plots...`);
    await page.goto(`${URL}/plots`, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(OUT_DIR, 'desktop-plots.png'), fullPage: true });
    
    console.log(`Navigating to ${URL}/plots/dubai-islands-waterfront-plot...`);
    await page.goto(`${URL}/plots/dubai-islands-waterfront-plot`, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(OUT_DIR, 'desktop-dossier.png'), fullPage: true });
    
    console.log(`Navigating to ${URL}/joint-ventures...`);
    await page.goto(`${URL}/joint-ventures`, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(OUT_DIR, 'desktop-jv.png'), fullPage: true });

    console.log('Taking Mobile Screenshot...');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000); // Wait for layout shift
    await page.screenshot({ path: path.join(OUT_DIR, 'mobile-hero.png') });
    await page.screenshot({ path: path.join(OUT_DIR, 'mobile-full.png'), fullPage: true });

    console.log(`Audit complete. Screenshots saved to ${OUT_DIR}`);
  } catch (err) {
    console.error('Failed to run audit. Is the Next.js dev server running on localhost:3000?');
    console.error(err);
  } finally {
    await browser.close();
  }
}

runAudit();
