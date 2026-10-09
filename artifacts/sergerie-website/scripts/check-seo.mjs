import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const output = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist/public');
const routes = [
  ['/', 'index.html'],
  ['/soumission', 'soumission/index.html'],
  ['/politique-cookies', 'politique-cookies/index.html'],
];
const titles = new Set();
const descriptions = new Set();
for (const [route, file] of routes) {
  const html = await readFile(path.join(output, file), 'utf8');
  const title = html.match(/<title[^>]*>(.*?)<\/title>/)?.[1];
  const description = html.match(/name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && description, `Missing metadata: ${route}`);
  titles.add(title);
  descriptions.add(description);
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `H1 count: ${route}`);
  assert.equal((html.match(/<main(?:\s|>)/g) ?? []).length, 1, `Main landmark count: ${route}`);
  assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1, `Canonical count: ${route}`);
  assert.ok(html.includes(`rel="canonical" href="https://armoire-belle-vue-ebenisterie.replit.app${route}"`));
  assert.ok(!html.includes('<!-- SEO_HEAD -->'));
  assert.ok(!html.includes('noindex'));
  for (const fade of html.matchAll(/<div\b[^>]*data-fade-in=""[^>]*>/g)) {
    assert.ok(!fade[0].includes('opacity-0'), `Content must be visible without JS: ${route}`);
  }
  const schema = JSON.parse(html.match(/<script[^>]+type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema['@graph'][0].address.addressLocality, 'Saint-Charles-de-Bourget');
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    assert.ok(/\balt=/.test(image[0]), `Image missing alt: ${route}`);
    assert.ok(/\bwidth=/.test(image[0]) && /\bheight=/.test(image[0]), `Missing image dimensions: ${route}`);
    for (const source of image[0].matchAll(/\/images\/[^"\s,]+/g)) {
      await access(path.join(output, source[0]));
    }
  }
  if (route !== '/politique-cookies') {
    assert.ok(html.includes('Nous desservons le Saguenay'), `FAQ answers missing from initial HTML: ${route}`);
  }
  console.info(`SEO checks passed: ${route}`);
}
assert.equal(titles.size, routes.length, 'Titles must be unique');
assert.equal(descriptions.size, routes.length, 'Descriptions must be unique');
assert.ok((await readFile(path.join(output, 'robots.txt'), 'utf8')).startsWith('User-agent:'));
assert.ok((await readFile(path.join(output, 'sitemap.xml'), 'utf8')).includes('<urlset'));
assert.ok((await readFile(path.join(output, '404.html'), 'utf8')).includes('noindex,follow'));
console.info('Crawler files and error-page metadata passed.');
