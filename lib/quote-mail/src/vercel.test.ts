import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { IncomingMessage, ServerResponse } from 'node:http';
import quote from './vercel';

async function invoke(body: unknown, headers: Record<string, string> = {}, method = 'POST') {
  const response = {
    statusCode: 200,
    headers: {} as Record<string, string>,
    setHeader(name: string, value: string) { this.headers[name] = value; },
    end(value: string) { this.value = JSON.parse(value); },
    value: {} as { error?: string },
  };
  await quote({ method, body, headers: { 'content-type': 'application/json', host: 'armoirebellevue.com', ...headers }, socket: { remoteAddress: '192.0.2.50' } } as unknown as IncomingMessage,
    response as unknown as ServerResponse);
  return response;
}
test('Vercel adapter handles bad bodies and method restrictions as JSON, never HTML', async () => {
  assert.equal((await invoke({})).statusCode, 400);
  const result = await invoke({}, {}, 'GET');
  assert.equal(result.statusCode, 405);
  assert.equal(result.headers.Allow, 'POST');
  assert.equal(result.headers['Cache-Control'], 'no-store');
  assert.equal(result.headers['Content-Type'], 'application/json; charset=utf-8');
});
test('Vercel adapter limits the actual body and declared size', async () => {
  assert.equal((await invoke({ details: 'x'.repeat(3200001) })).statusCode, 413);
  assert.equal((await invoke({}, { 'content-length': '3200001' })).statusCode, 413);
});
