import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, readFile, copyFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { buildVercelFunction } from './build-vercel-function.mjs';

test('standalone function boots in plain Node without the workspace and sends both emails', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'belle-vue-function-'));
  const outfile = path.join(directory, 'lib/quote-mail/dist/vercel.cjs');
  const entrypoint = path.join(directory, 'api/quote.js');
  try {
    await buildVercelFunction(outfile);
    await mkdir(path.dirname(entrypoint), { recursive: true });
    await copyFile(new URL('../api/quote.js', import.meta.url), entrypoint);
    // No tsx, workspace symlinks, loader hooks, or node_modules in this directory.
    const child = spawnSync(process.execPath, ['--input-type=commonjs', '-e', `
      const assert = require('node:assert/strict');
      const quote = require(process.argv[1]);
      const calls = [];
      global.fetch = async (url, init) => {
        assert.ok(url.startsWith('https://api.resend.com/emails'));
        calls.push({url, body: JSON.parse(init.body)});
        return Response.json(url.endsWith('/batch')
          ? {data: [{id: 'owner-id'}, {id: 'customer-id'}]} : {id: 'email-id'});
      };
      const input = {
        submissionId: '54a9dc56-16e7-47ed-9361-43ca5a8bf26c',
        projectType: 'Cuisine sur mesure', workType: 'Rénovation',
        details: 'Une cuisine ergonomique et du rangement adapté.',
        budget: '20 000 $ à 40 000 $', timeline: 'Dans 3 à 6 mois',
        name: 'Client Exemple', phone: '(418) 555-0100',
        email: 'client@example.com', city: 'Saguenay', consent: true, website: '',
      };
      async function invoke(body, method = 'POST') {
        const response = {statusCode: 200, headers: {},
          setHeader(k, v) {this.headers[k] = v},
          end(value) {this.body = JSON.parse(value)}};
        await quote({body, method, headers: {
          'content-type': 'application/json', host: 'belle-vue.vercel.app',
          origin: 'https://belle-vue.vercel.app',
        }, socket: {remoteAddress: '192.0.2.50'}}, response);
        assert.equal(response.headers['Content-Type'], 'application/json; charset=utf-8');
        return response;
      }
      (async () => {
        assert.equal((await invoke({}, 'GET')).statusCode, 405);
        assert.equal((await invoke({})).statusCode, 400);
        let result = await invoke(input);
        assert.equal(result.statusCode, 200);
        assert.equal(result.body.ok, true);
        assert.equal(calls.length, 1);
        assert.equal(calls[0].body.length, 2);
        calls.length = 0;
        result = await invoke({...input, photos: [
          {filename: 'photo-1.jpg', content: Buffer.from([255,216,255,217]).toString('base64')},
          {filename: 'photo-2.jpg', content: Buffer.from([255,216,255,217]).toString('base64')},
        ]});
        assert.equal(result.statusCode, 200);
        assert.equal(calls.length, 2);
        assert.equal(calls[0].body.attachments.length, 2);
        assert.equal(calls[1].body.attachments, undefined);
        delete process.env.RESEND_API_KEY;
        assert.equal((await invoke(input)).statusCode, 503);
        console.log('Standalone runtime checks passed');
      })().catch(error => {console.error(error); process.exitCode = 1});
    `, entrypoint], {
      encoding: 'utf8',
      timeout: 20000,
      env: {
        RESEND_API_KEY: 'unit-test-placeholder-not-a-real-key',
        RESEND_FROM_EMAIL: 'bonjour@kua.quebec',
        RECIPIENT_EMAIL: 'owner@example.com',
      },
    });
    assert.equal(child.status, 0, `${child.stdout}\n${child.stderr}`);
    assert.match(child.stdout, /Standalone runtime checks passed/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test('Vercel builds the JavaScript function before deployment and keeps its API route', async () => {
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
  assert.match(config.buildCommand, /^node scripts\/build-vercel-function\.mjs && /);
  assert.equal(config.functions['api/quote.js'].maxDuration, 30);
  assert.ok(config.routes.some(route => route.src === '/api/quote' && route.dest === '/api/quote'));
});
