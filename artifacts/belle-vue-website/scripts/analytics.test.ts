import { afterEach, test } from 'node:test';
import assert from 'node:assert/strict';
import { classifyAnalyticsLink, getAnalyticsPage, trackEvent } from '../src/lib/analytics.ts';

const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
afterEach(() => {
  if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
  else Reflect.deleteProperty(globalThis, 'window');
});

function fakeWindow(value: unknown) {
  Object.defineProperty(globalThis, 'window', { configurable: true, value });
}

test('safe during server rendering and when analytics is disabled', () => {
  Reflect.deleteProperty(globalThis, 'window');
  assert.doesNotThrow(() => trackEvent('quote_form_started'));
  fakeWindow({});
  assert.doesNotThrow(() => trackEvent('quote_form_started'));
});

test('forwards a custom event once to the injected tracker', () => {
  const calls: unknown[][] = [];
  fakeWindow({ umami: { track: (...args: unknown[]) => { calls.push(args); } } });
  trackEvent('quote_step_completed', { step: 1, page: '/soumission' });
  assert.deepEqual(calls, [['quote_step_completed', { step: 1, page: '/soumission' }]]);
});

test('tracker exceptions and rejected promises cannot interrupt interactions', async () => {
  fakeWindow({ umami: { track: () => { throw new Error('blocked'); } } });
  assert.doesNotThrow(() => trackEvent('quote_submitted'));
  fakeWindow({ umami: { track: () => Promise.reject(new Error('offline')) } });
  assert.doesNotThrow(() => trackEvent('quote_submitted'));
  await new Promise((resolve) => setImmediate(resolve));
});

test('contact events never contain addresses, phone numbers, or mailto content', () => {
  assert.deepEqual(classifyAnalyticsLink('mailto:private@example.com?body=private-details', 'https://example.com'), {
    name: 'contact_clicked', data: { channel: 'email' },
  });
  assert.deepEqual(classifyAnalyticsLink('tel:+14185550000', 'https://example.com'), {
    name: 'contact_clicked', data: { channel: 'phone' },
  });
});

test('quote CTAs support base paths, but ignore external lookalikes', () => {
  assert.equal(classifyAnalyticsLink('/soumission?source=private', 'https://example.com')?.name, 'quote_cta_clicked');
  assert.equal(classifyAnalyticsLink('/site/soumission/', 'https://example.com', '/site/')?.name, 'quote_cta_clicked');
  assert.equal(classifyAnalyticsLink('https://other.example/soumission', 'https://example.com'), null);
});

test('Facebook events contain no destination URL and unrelated links are ignored', () => {
  assert.deepEqual(classifyAnalyticsLink('https://www.facebook.com/p/business/', 'https://example.com'), {
    name: 'facebook_clicked', data: {},
  });
  assert.equal(classifyAnalyticsLink('#services', 'https://example.com'), null);
  assert.equal(classifyAnalyticsLink('javascript:void(0)', 'https://example.com'), null);
});

test('page dimension only includes public route categories', () => {
  assert.equal(getAnalyticsPage('/soumission/'), '/soumission');
  assert.equal(getAnalyticsPage('/site/soumission', '/site/'), '/soumission');
  assert.equal(getAnalyticsPage('/private/person@example.com'), '/404');
});
