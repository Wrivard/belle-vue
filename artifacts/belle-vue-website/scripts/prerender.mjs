import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist/public');
process.env.NODE_ENV = 'production';
const server = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  mode: 'production',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, watch: null },
});

try {
  const { render, renderSeoHead, PUBLIC_ROUTES, renderRobots, renderSitemap } =
    await server.ssrLoadModule('/src/entry-server.tsx');
  const template = await readFile(path.join(output, 'index.html'), 'utf8');
  const assets = await readdir(path.join(output, 'assets'));
  const font = assets.find((name) => name.endsWith('.woff2'));
  const base = process.env.BASE_PATH.replace(/\/$/, '');
  for (const route of [...PUBLIC_ROUTES, '/404']) {
    const head = renderSeoHead(route);
    let html = template.replace(/<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/,
      `<!-- SEO_START -->\n    ${head}\n    <!-- SEO_END -->`);
    if (font) {
      html = html.replace('</head>', `<link rel="preload" as="font" type="font/woff2" href="${base}/assets/${font}" crossorigin />\n  </head>`);
    }
    html = html.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
    const dir = route === '/' ? output : path.join(output, route.slice(1));
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, 'index.html'), html);
    if (route === '/404') await writeFile(path.join(output, '404.html'), html);
    console.info(`Pre-rendered ${route}`);
  }
  await writeFile(path.join(output, 'robots.txt'), renderRobots());
  await writeFile(path.join(output, 'sitemap.xml'), renderSitemap());
} finally {
  await server.close();
}
