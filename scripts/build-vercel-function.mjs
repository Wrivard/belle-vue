import { build } from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Vercel renames traced .ts files to .js, but workspace package exports still
// point at .ts. A tracked API entrypoint loads this bundle instead.
export async function buildVercelFunction(outfile = path.join(root, 'lib/quote-mail/dist/vercel.cjs')) {
  return build({
    absWorkingDir: root,
    entryPoints: ['lib/quote-mail/src/vercel.ts'],
    outfile,
    bundle: true,
    platform: 'node',
    format: 'cjs',
    target: 'node20',
    legalComments: 'none',
    logLevel: 'warning',
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await buildVercelFunction();
  console.log('Built standalone Vercel quote function: lib/quote-mail/dist/vercel.cjs');
}
