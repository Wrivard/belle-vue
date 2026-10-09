import assert from 'node:assert/strict';
import { test } from 'node:test';
import { EMPTY_DRAFT, PROJECT_TYPES, WORK_TYPES, buildQuoteInput, validateStep } from '../src/lib/quote-form-model.ts';

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

test('construction neuve or renovation is required and included in the API payload', () => {
  assert.deepEqual(WORK_TYPES, ['Construction neuve', 'Rénovation']);
  assert.ok(validateStep(1, { ...valid, workType: '' }).workType);
  assert.ok(validateStep(1, { ...valid, workType: 'Autre' }).workType);
  for (const workType of WORK_TYPES) {
    const draft = { ...valid, workType };
    assert.deepEqual(validateStep(1, draft), {});
    assert.equal(buildQuoteInput(draft, 'test-id', true, '').workType, workType);
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

test('API payload includes all answers, unicode, multiline details and explicit consent', () => {
  const draft = {
    ...valid,
    name: ' Client & test ',
    details: 'Étagères & îlot\nPlans = 2 + 3 ?\r\nFinition #rouge',
    city: ' Chicoutimi ',
    budget: '20 000 $ à 40 000 $',
    timeline: 'Dans 3 à 6 mois',
  };
  assert.deepEqual(buildQuoteInput(draft, 'test-id', true, ''), {
    submissionId: 'test-id', consent: true, website: '',
    name: 'Client & test', phone: '+1 418 555 0100', email: 'client@example.com',
    city: 'Chicoutimi', projectType: 'Cuisine sur mesure', workType: 'Rénovation',
    timeline: 'Dans 3 à 6 mois', budget: '20 000 $ à 40 000 $',
    details: 'Étagères & îlot\nPlans = 2 + 3 ?\r\nFinition #rouge',
  });
});

test('client validates limits and optional choices before submission', () => {
  assert.ok(validateStep(1, { ...valid, details: 'x'.repeat(5001) }).details);
  assert.ok(validateStep(1, { ...valid, budget: 'tampered' }).budget);
  assert.ok(validateStep(2, { ...valid, phone: 'not a phone' }).phone);
  assert.ok(validateStep(2, { ...valid, name: 'x'.repeat(121) }).name);
  assert.ok(validateStep(2, { ...valid, city: 'x'.repeat(121) }).city);
});