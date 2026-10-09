import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import ts from 'typescript';

const directory = path.dirname(fileURLToPath(import.meta.url));

test('Vercel compiles the quote function and workspace imports with the intended module settings', () => {
  const configPath = path.join(directory, 'tsconfig.json');
  const result = ts.readConfigFile(configPath, ts.sys.readFile);
  assert.equal(result.error, undefined);
  const config = result.config;

  // Vercel's Node builder applies defaults BEFORE resolving tsconfig extends.
  // Inherited ESNext/Bundler settings alone therefore become NodeNext.
  if (config.compilerOptions?.module === undefined) {
    config.compilerOptions = {
      ...config.compilerOptions,
      module: 'NodeNext',
      moduleResolution: 'NodeNext',
      strict: false,
    };
  }
  const parsed = ts.parseJsonConfigFileContent(config, ts.sys, directory);
  assert.equal(parsed.options.module, ts.ModuleKind.ESNext);
  assert.equal(parsed.options.moduleResolution, ts.ModuleResolutionKind.Bundler);

  // Check source imports without relying on previously built declarations.
  const program = ts.createProgram({
    rootNames: [path.join(directory, 'quote.ts')],
    options: { ...parsed.options, noEmit: true },
  });
  const diagnostics = [...parsed.errors, ...ts.getPreEmitDiagnostics(program)];
  assert.equal(
    diagnostics.length,
    0,
    ts.formatDiagnosticsWithColorAndContext(diagnostics, {
      getCanonicalFileName: filename => filename,
      getCurrentDirectory: () => directory,
      getNewLine: () => '\n',
    }),
  );
});
