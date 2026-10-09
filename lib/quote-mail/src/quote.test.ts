import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleQuote, type QuoteContext } from './index';
import { createQuoteEmails } from './templates';
import type { QuoteInput } from '@workspace/api-zod';

const input: QuoteInput = {
  submissionId: '54a9dc56-16e7-47ed-9361-43ca5a8bf26c',
  projectType: 'Cuisine sur mesure', workType: 'Rénovation',
  details: 'Îlot ergonomique & rangement\nPlans à préciser.', budget: '20 000 $ à 40 000 $',
  timeline: 'Dans 3 à 6 mois', name: 'Client Exemple', phone: '(418) 555-0100',
  email: 'client@example.com', city: 'Saguenay', consent: true, website: '',
};
const context: QuoteContext = {
  method: 'POST', host: 'armoirebellevue.com', origin: 'https://armoirebellevue.com',
  contentType: 'application/json; charset=utf-8', ip: '192.0.2.1',
};
// Dummy values passed as options, never written to environment variables or used for network calls.
const env = { RESEND_API_KEY: 'test-placeholder-not-a-real-key', RESEND_FROM_EMAIL: 'bonjour@kua.quebec', RECIPIENT_EMAIL: 'owner@example.com' };
const acknowledgement = () => Response.json({ data: [{ id: 'owner-id' }, { id: 'client-id' }] });

test('sends both branded emails with fixed sender, all fields and correct reply destinations', async () => {
  let captured: RequestInit | undefined;
  const result = await handleQuote(input, context, {
    env, rateLimit: () => true,
    fetcher: async (url, init) => { assert.equal(url, 'https://api.resend.com/emails/batch'); captured = init; return acknowledgement(); },
  });
  assert.equal(result.status, 200);
  assert.ok('ok' in result.body && result.body.ok);
  const messages = JSON.parse(String(captured?.body));
  assert.equal(messages.length, 2);
  assert.deepEqual(messages[0].to, ['owner@example.com']);
  assert.deepEqual(messages[1].to, ['client@example.com']);
  assert.equal(messages[0].reply_to, input.email);
  assert.equal(messages[1].reply_to, env.RECIPIENT_EMAIL);
  for (const message of messages) {
    assert.equal(message.from, 'Armoire Belle-Vue <bonjour@kua.quebec>');
    assert.ok(message.html.includes('#D71920'));
    assert.ok(message.html.includes('src="https://belle-vue.vercel.app/images/logo-armoire-belle-vue-ameublement.png"'));
    assert.ok(!message.html.includes('src="https://armoirebellevue.com/images/'));
    assert.ok(message.html.includes('href="https://armoirebellevue.com/"'));
    for (const key of ['name', 'phone', 'email', 'city', 'projectType', 'workType', 'budget', 'timeline'] as const) {
      assert.ok(message.text.includes(input[key]), key);
    }
    assert.ok(message.text.includes(input.details));
    assert.ok(!message.html.includes(env.RESEND_API_KEY));
  }
  assert.ok(messages[1].html.includes('Votre demande est prise en charge'));
  assert.ok(messages[0].html.includes('Nouvelle demande de soumission'));
});

test('user text is escaped, newline formatting preserved, no user HTML executed', () => {
  const messages = createQuoteEmails({ ...input, name: '<img src=x onerror=alert(1)>', details: '<script>alert(1)</script>\nDeuxième ligne' }, env.RESEND_FROM_EMAIL, env.RECIPIENT_EMAIL, 'BV-test');
  for (const message of messages) {
    assert.ok(!message.html.includes('<script>'));
    assert.ok(!message.html.includes('<img src=x'));
    assert.ok(message.html.includes('&lt;script&gt;alert(1)&lt;/script&gt;<br />Deuxième ligne'));
  }
});

test('consent, required fields, limits, choices, UUID, email and honeypot are validated without sending', async () => {
  let calls = 0;
  for (const patch of [
    { consent: false }, { website: 'bot' }, { projectType: 'unknown' }, { budget: 'unknown' },
    { name: '  ' }, { phone: 'bonjour' }, { details: '   ' }, { details: 'x'.repeat(5001) },
    { email: 'not-an-email' }, { email: 'a@example.com\r\nBcc:b@example.com' },
    { submissionId: 'not-a-uuid' }, { to: 'attacker@example.com' },
  ]) {
    const result = await handleQuote({ ...input, ...patch }, context, {
      env, rateLimit: () => true, fetcher: async () => { calls++; return acknowledgement(); },
    });
    assert.equal(result.status, 400, JSON.stringify(patch).slice(0, 80));
  }
  assert.equal(calls, 0);
});

test('missing configuration or any sender other than bonjour@kua.quebec fails explicitly', async () => {
  let calls = 0;
  for (const settings of [
    {}, { ...env, RESEND_API_KEY: '' }, { ...env, RECIPIENT_EMAIL: '' },
    { ...env, RESEND_FROM_EMAIL: 'other@kua.quebec' }, { ...env, RECIPIENT_EMAIL: 'invalid' },
  ]) {
    const result = await handleQuote(input, context, {
      env: settings, rateLimit: () => true, fetcher: async () => { calls++; return acknowledgement(); },
    });
    assert.equal(result.status, 503);
  }
  assert.equal(calls, 0);
});

test('rejects other methods, media types and cross-site origins', async () => {
  for (const [patch, status] of [
    [{ method: 'GET' }, 405], [{ origin: 'https://attacker.example' }, 403],
    [{ origin: 'null' }, 403], [{ contentType: 'text/plain' }, 415],
    [{ contentType: 'evilapplication/json' }, 415],
  ] as const) assert.equal((await handleQuote(input, { ...context, ...patch })).status, status);
});

test('upstream rejection, timeout and incomplete acknowledgement cannot return success', async () => {
  for (const fetcher of [
    async () => Response.json({ message: 'private-provider-details' }, { status: 403 }),
    async () => { throw new Error('timeout'); },
    async () => Response.json({ data: [{ id: 'only-one-message' }] }),
    async () => new Response('not-json'),
  ]) {
    const result = await handleQuote(input, context, { env, rateLimit: () => true, fetcher });
    assert.equal(result.status, 502);
    assert.ok('error' in result.body && !result.body.error.includes('private-provider-details'));
  }
});

test('retries retain stable idempotency key and payload; edited content changes the key', async () => {
  const requests: RequestInit[] = [];
  const options = { env, rateLimit: () => true, fetcher: async (_url: unknown, init?: RequestInit) => { requests.push(init!); return acknowledgement(); } };
  await handleQuote(input, context, options);
  await handleQuote(input, context, options);
  await handleQuote({ ...input, details: 'Autre détail' }, context, options);
  const key = (request: RequestInit) => new Headers(request.headers).get('Idempotency-Key');
  assert.equal(requests[0].body, requests[1].body);
  assert.equal(key(requests[0]), key(requests[1]));
  assert.notEqual(key(requests[0]), key(requests[2]));
});

test('sends up to three validated JPEGs only to the owner, without duplicating them in the client email', async () => {
  const image = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0, 0, 0xff, 0xd9]).toString('base64');
  const photos = [1, 2, 3].map(n => ({ filename: `photo-${n}.jpg`, content: image }));
  const messages: any[] = [];
  const keys: string[] = [];
  const result = await handleQuote({ ...input, photos }, context, {
    env, rateLimit: () => true,
    fetcher: async (url, init) => {
      assert.equal(url, 'https://api.resend.com/emails');
      messages.push(JSON.parse(String(init?.body)));
      keys.push(new Headers(init?.headers).get('Idempotency-Key')!);
      return Response.json({ id: `message-${messages.length}` });
    },
  });
  assert.equal(result.status, 200);
  assert.deepEqual(messages[0].attachments, photos.map(photo => ({ ...photo, content_type: 'image/jpeg' })));
  assert.equal(messages[1].attachments, undefined);
  assert.ok(messages[1].text.includes('Photos jointes : 3'));
  assert.ok(!messages[1].text.includes(image));
  assert.notEqual(keys[0], keys[1]);
});

test('photo email retries retain independent keys if the second message fails', async () => {
  const content = Buffer.from([0xff, 0xd8, 0xff, 0xd9]).toString('base64');
  const seen: string[] = [];
  let secondFails = true;
  const fetcher = async (_url: unknown, init?: RequestInit) => {
    seen.push(new Headers(init?.headers).get('Idempotency-Key')!);
    if (seen.length % 2 === 0 && secondFails) return Response.json({}, { status: 500 });
    return Response.json({ id: 'accepted' });
  };
  const payload = { ...input, photos: [{ filename: 'photo-1.jpg', content }] };
  assert.equal((await handleQuote(payload, context, { env, rateLimit: () => true, fetcher })).status, 502);
  secondFails = false;
  assert.equal((await handleQuote(payload, context, { env, rateLimit: () => true, fetcher })).status, 200);
  assert.deepEqual(seen, [seen[0], seen[1], seen[0], seen[1]]);
  assert.notEqual(seen[0], seen[1]);
});

test('rejects extra photos, duplicate names, forged content and oversized images before emailing', async () => {
  const good = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0xff, 0xd9]).toString('base64');
  let calls = 0;
  for (const photos of [
    [1, 2, 3, 4].map(n => ({ filename: `photo-${n}.jpg`, content: good })),
    [1, 1].map(n => ({ filename: `photo-${n}.jpg`, content: good })),
    [{ filename: 'document.pdf', content: good }],
    [{ filename: 'photo-1.jpg', content: Buffer.from('bad file').toString('base64') }],
    [{ filename: 'photo-1.jpg', content: 'abc?' }],
    [{ filename: 'photo-1.jpg', content: Buffer.concat([
      Buffer.from([0xff, 0xd8, 0xff]), Buffer.alloc(700001), Buffer.from([0xff, 0xd9]),
    ]).toString('base64') }],
  ]) {
    const result = await handleQuote({ ...input, photos }, context, {
      env, rateLimit: () => true, fetcher: async () => { calls++; return acknowledgement(); },
    });
    assert.equal(result.status, 400);
  }
  assert.equal(calls, 0);
});

test('throttled requests do not reach the provider', async () => {
  let called = false;
  const result = await handleQuote(input, context, {
    env, rateLimit: () => false, fetcher: async () => { called = true; return acknowledgement(); },
  });
  assert.equal(result.status, 429);
  assert.equal(called, false);
});

test('actual per-process rate limiter blocks the sixth attempt', async () => {
  for (let n = 0; n < 6; n++) {
    const result = await handleQuote(input, { ...context, ip: '192.0.2.250' }, { env, fetcher: async () => acknowledgement() });
    assert.equal(result.status, n < 5 ? 200 : 429);
  }
});
