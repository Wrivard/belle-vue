import type { QuoteInput } from '@workspace/api-client-react';
export interface QuoteDraft {
  projectType: string;
  workType: string;
  details: string;
  budget: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
  city: string;
}

export type QuoteErrors = Partial<Record<keyof QuoteDraft | 'consent', string>>;

export const EMPTY_DRAFT: QuoteDraft = {
  projectType: '', workType: '', details: '', budget: '', timeline: '', name: '', phone: '', email: '', city: '',
};

export const PROJECT_TYPES = ['Cuisine sur mesure', 'Salle de bain', 'Ameublement sur mesure', 'Rangement sur mesure', 'Autre'];
export const WORK_TYPES = ['Construction neuve', 'Rénovation'];
export const BUDGETS = ['Moins de 10 000 $', '10 000 $ à 20 000 $', '20 000 $ à 40 000 $', 'Plus de 40 000 $'];
export const TIMELINES = ['Le plus tôt possible', 'Dans 1 à 3 mois', 'Dans 3 à 6 mois', 'Flexible'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateStep(step: 1 | 2, d: QuoteDraft): QuoteErrors {
  const e: QuoteErrors = {};
  if (step === 1) {
    if (!PROJECT_TYPES.includes(d.projectType)) e.projectType = 'Choisissez un type de projet.';
    if (!WORK_TYPES.includes(d.workType)) e.workType = 'Choisissez construction neuve ou rénovation.';
    if (!d.details.trim()) e.details = 'Décrivez brièvement votre projet.';
    else if (d.details.trim().length > 5000) e.details = 'Limitez la description à 5 000 caractères.';
    if (d.budget && !BUDGETS.includes(d.budget)) e.budget = 'Choisissez un budget proposé.';
    if (d.timeline && !TIMELINES.includes(d.timeline)) e.timeline = 'Choisissez un échéancier proposé.';
  } else {
    if (!d.name.trim()) e.name = 'Indiquez votre nom.';
    else if (d.name.trim().length > 120 || /[\r\n]/.test(d.name)) e.name = 'Indiquez un nom de 120 caractères maximum, sur une ligne.';
    if (!d.phone.trim()) e.phone = 'Indiquez votre numéro de téléphone.';
    else if (d.phone.trim().length > 40 || !/^[+()\d\s.\-xext]+$/i.test(d.phone) || d.phone.replace(/\D/g, '').length < 7) e.phone = 'Indiquez un numéro de téléphone valide.';
    if (!d.email.trim()) e.email = 'Indiquez votre courriel.';
    else if (!EMAIL_RE.test(d.email.trim()) || d.email.trim().length > 254) e.email = 'Ce courriel semble incomplet (ex. nom@exemple.com).';
    if (d.city.trim().length > 120) e.city = 'Limitez la ville à 120 caractères.';
  }
  return e;
}

export function buildQuoteInput(d: QuoteDraft, submissionId: string, consent: boolean, website: string, photos: NonNullable<QuoteInput['photos']> = []): QuoteInput {
  return {
    submissionId, consent, website, ...(photos.length ? { photos } : {}),
    projectType: d.projectType as QuoteInput['projectType'],
    workType: d.workType as QuoteInput['workType'],
    budget: d.budget as QuoteInput['budget'],
    timeline: d.timeline as QuoteInput['timeline'],
    details: d.details.trim(),
    name: d.name.trim(), phone: d.phone.trim(), email: d.email.trim(), city: d.city.trim(),
  };
}

