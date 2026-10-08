import assert from 'node:assert/strict';
import { test } from 'node:test';
import { EMPTY_DRAFT, PROJECT_TYPES, WORK_TYPES, buildMailto, validateStep } from '../src/lib/quote-form-model.ts';

const valid = {
  ...EMPTY_DRAFT,
  projectType: 'Cuisine sur mesure',
  workType: 'Rénovation',
  details: 'Une cuisine lumineuse',
  name: 'Client test',
  phone: '+1 418 555 0100',
  email: 'client@example.com',
};

test('project step validates only project fields', () => {
  assert.deepEqual(Object.keys(validateStep(1, EMPTY_DRAFT)), ['projectType', 'workType', 'details']);
  assert.ok(PROJECT_TYPES.includes('Ameublement sur mesure'));
  assert.ok(!PROJECT_TYPES.includes('Ébénisterie'));
  assert.deepEqual(validateStep(1, { ...valid, projectType: 'Autre', details: 'Description' }), {});
  assert.ok(validateStep(1, { ...valid, details: ' \n ' }).details);
  assert.ok(validateStep(1, { ...valid, projectType: 'Invalid option' }).projectType);
  for (const projectType of PROJECT_TYPES) {
    assert.deepEqual(validateStep(1, { ...valid, projectType }), {});
  }
});

test('construction neuve or renovation is required and included in the prepared email', () => {
  assert.deepEqual(WORK_TYPES, ['Construction neuve', 'Rénovation']);
  assert.ok(validateStep(1, { ...valid, workType: '' }).workType);
  assert.ok(validateStep(1, { ...valid, workType: 'Autre' }).workType);
  for (const workType of WORK_TYPES) {
    const draft = { ...valid, workType };
    assert.deepEqual(validateStep(1, draft), {});
    assert.ok(new URL(buildMailto(draft)).searchParams.get('body').includes(`Nature des travaux : ${workType}`));
  }
});

test('contact step rejects blank fields and invalid emails, accepts flexible phone formats', () => {
  assert.deepEqual(Object.keys(validateStep(2, EMPTY_DRAFT)), ['name', 'phone', 'email']);
  for (const key of ['name', 'phone', 'email']) {
    assert.ok(validateStep(2, { ...valid, [key]: '  ' })[key]);
  }
  for (const email of ['client@', 'client@exemple', 'client exemple@site.ca']) {
    assert.ok(validateStep(2, { ...valid, email }).email);
  }
  assert.deepEqual(validateStep(2, { ...valid, email: ' client+projet@example.ca ', phone: '+33 1 23 45 67 89' }), {});
});

test('mailto includes every answer, unicode, multiline description and consent without adding query parameters', () => {
  const draft = {
    ...valid,
    name: ' Client & test ',
    details: 'Étagères & îlot\nPlans = 2 + 3 ?\r\nFinition #rouge',
    city: ' Chicoutimi ',
    budget: '20 000 $ à 40 000 $',
    timeline: 'Dans 3 à 6 mois',
  };
  const url = new URL(buildMailto(draft));
  assert.equal(url.pathname, 'armoirebelle-vue@hotmail.ca');
  assert.deepEqual([...url.searchParams.keys()], ['subject', 'body']);
  assert.equal(url.searchParams.get('subject'), 'Demande de soumission — Cuisine sur mesure');
  const body = url.searchParams.get('body');
  for (const line of [
    'Nom : Client & test', 'Téléphone : +1 418 555 0100', 'Courriel : client@example.com',
    'Ville : Chicoutimi', 'Type de projet : Cuisine sur mesure', 'Nature des travaux : Rénovation',
    'Échéancier souhaité : Dans 3 à 6 mois', 'Budget approximatif : 20 000 $ à 40 000 $',
    'Description : Étagères & îlot\r\nPlans = 2 + 3 ?\r\nFinition #rouge',
    'Consentement :', 'Les photos ou plans peuvent être joints directement au courriel.',
  ]) assert.ok(body.includes(line), line);
  assert.ok(!body.replaceAll('\r\n', '').includes('\n'));
});