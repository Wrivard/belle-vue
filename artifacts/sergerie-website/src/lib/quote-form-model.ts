export interface QuoteDraft {
  projectType: string;
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
  projectType: '', details: '', budget: '', timeline: '', name: '', phone: '', email: '', city: '',
};

export const QUOTE_EMAIL = 'armoirebelle-vue@hotmail.ca';

export const PROJECT_TYPES = ['Cuisine sur mesure', 'Salle de bain', 'Ébénisterie', 'Rangement sur mesure', 'Autre'];
export const BUDGETS = ['Moins de 10 000 $', '10 000 $ à 20 000 $', '20 000 $ à 40 000 $', 'Plus de 40 000 $'];
export const TIMELINES = ['Le plus tôt possible', 'Dans 1 à 3 mois', 'Dans 3 à 6 mois', 'Flexible'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateStep(step: 1 | 2, d: QuoteDraft): QuoteErrors {
  const e: QuoteErrors = {};
  if (step === 1) {
    if (!PROJECT_TYPES.includes(d.projectType)) e.projectType = 'Choisissez un type de projet.';
    if (!d.details.trim()) e.details = 'Décrivez brièvement votre projet.';
  } else {
    if (!d.name.trim()) e.name = 'Indiquez votre nom.';
    if (!d.phone.trim()) e.phone = 'Indiquez votre numéro de téléphone.';
    if (!d.email.trim()) e.email = 'Indiquez votre courriel.';
    else if (!EMAIL_RE.test(d.email.trim())) e.email = 'Ce courriel semble incomplet (ex. nom@exemple.com).';
  }
  return e;
}

export function buildMailto(d: QuoteDraft): string {
  const project = d.projectType || 'Projet sur mesure';
  const body = [
    `Nom : ${d.name.trim()}`,
    `Téléphone : ${d.phone.trim()}`,
    `Courriel : ${d.email.trim()}`,
    `Ville : ${d.city.trim()}`,
    `Type de projet : ${project}`,
    `Échéancier souhaité : ${d.timeline}`,
    `Budget approximatif : ${d.budget}`,
    '',
    `Description : ${d.details.trim().replace(/\r?\n/g, '\r\n')}`,
    '',
    'Consentement : J’accepte que mes informations soient utilisées uniquement pour traiter ma demande de soumission.',
    'Les photos ou plans peuvent être joints directement au courriel.',
  ].join('\r\n');
  return `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(`Demande de soumission — ${project}`)}&body=${encodeURIComponent(body)}`;
}

