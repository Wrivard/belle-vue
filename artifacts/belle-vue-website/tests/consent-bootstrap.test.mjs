import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const code = html.match(/<script id="consent-bootstrap"[^>]*>([\s\S]*?)<\/script>/)[1];

function boot(hostname) {
  const scripts = [];
  const window = { location: { hostname }, dispatchEvent() {} };
  const document = {
    getElementById: id => scripts.find(script => script.id === id),
    createElement: () => ({
      attributes: {},
      setAttribute(key, value) { this.attributes[key] = value; },
    }),
    head: { appendChild(script) { scripts.push(script); } },
  };
  const execute = () => runInNewContext(code, { window, document, Event: class Event {} });
  execute();
  return { scripts, window, execute };
}

test('local and Replit previews never load Cookiebot or GTM', () => {
  for (const host of ['localhost', 'demo.localhost', '127.0.0.1', '0.0.0.0', '[::1]',
    '::1', 'site.replit.dev', 'site.replit.app', 'site.repl.co', 'site.repl.dev']) {
    const { scripts, window } = boot(host);
    assert.equal(scripts.length, 0, host);
    assert.equal(window.dataLayer, undefined, host);
    assert.equal(window.belleVueConsentEnabled, undefined, host);
  }
});

test('live domains set denied defaults, then Cookiebot, then the correct GTM container', () => {
  for (const host of ['armoirebellevue.com', 'www.armoirebellevue.com', 'belle-vue.vercel.app']) {
    const { scripts, window, execute } = boot(host);
    assert.equal(scripts.length, 1);
    const cb = scripts[0];
    assert.equal(cb.id, 'Cookiebot');
    assert.equal(cb.attributes['data-cbid'], 'a6066f16-917c-48f9-a5b8-c7b1895caa20');
    assert.equal(cb.attributes['data-blockingmode'], 'auto');
    assert.equal(cb.attributes['data-culture'], 'FR');
    const consent = window.dataLayer[0];
    assert.equal(consent[0], 'consent');
    assert.equal(consent[1], 'default');
    for (const key of ['ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage',
      'functionality_storage', 'personalization_storage']) assert.equal(consent[2][key], 'denied');
    assert.equal(consent[2].security_storage, 'granted');
    assert.equal(window.dataLayer.some(entry => entry.event === 'gtm.js'), false);
    cb.onload();
    assert.equal(scripts.length, 2);
    assert.equal(scripts[1].src, 'https://www.googletagmanager.com/gtm.js?id=GTM-W8ZSWNVH');
    assert.equal(window.dataLayer.at(-1).event, 'gtm.js');
    cb.onload();
    execute();
    assert.equal(scripts.length, 2, 'must not inject duplicates');
  }
});

test('if Cookiebot never loads, GTM stays unloaded without interrupting the site', () => {
  const { scripts, window } = boot('belle-vue.vercel.app');
  assert.equal(scripts.length, 1);
  assert.equal(window.dataLayer.some(entry => entry.event === 'gtm.js'), false);
});

test('production noscript fallback follows the body opening and uses the supplied container', () => {
  assert.match(html, /<body>\s*<!-- GTM_NOSCRIPT_START -->\s*<noscript><iframe src="https:\/\/www.googletagmanager.com\/ns.html\?id=GTM-W8ZSWNVH"/);
  assert.ok(html.indexOf('id="consent-bootstrap"') < html.indexOf('<!-- SEO_START -->'));
});
