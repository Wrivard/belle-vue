import type { QuoteInput } from '@workspace/api-zod';

const SITE = 'https://armoirebellevue.com';
const LOGO = `${SITE}/images/logo-armoire-belle-vue-ameublement.png`;
const BRAND = 'Armoire Belle-Vue';
const RED = '#D71920';
const DARK = '#1B1B1B';

export const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);

function recap(quote: QuoteInput): [string, string][] {
  return [
    ['Nom', quote.name], ['Courriel', quote.email], ['Téléphone', quote.phone],
    ['Ville', quote.city || 'Non précisée'], ['Type de projet', quote.projectType],
    ['Nature des travaux', quote.workType], ['Budget approximatif', quote.budget || 'À déterminer'],
    ['Échéancier souhaité', quote.timeline || 'À déterminer'], ['Description du projet', quote.details],
    ['Photos jointes', String(quote.photos?.length ?? 0)],
  ];
}

function layout(title: string, preheader: string, intro: string, quote: QuoteInput, reference: string, action: string) {
  const rows = recap(quote).map(([label, value]) => `<tr>
    <td style="padding:14px 20px;border-bottom:1px solid #E6E6E6;vertical-align:top;">
      <div style="font-size:11px;line-height:18px;letter-spacing:1px;text-transform:uppercase;color:#666666;font-weight:700;">${label}</div>
      <div style="font-size:15px;line-height:24px;color:${DARK};overflow-wrap:anywhere;">${escapeHtml(value).replace(/\r?\n/g, '<br />')}</div>
    </td></tr>`).join('');
  return `<!DOCTYPE html>
<html lang="fr-CA"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#EDEDED;font-family:Arial,Helvetica,sans-serif;color:${DARK};">
  <div style="display:none;font-size:1px;color:#EDEDED;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EDEDED;"><tr><td align="center" style="padding:28px 12px;">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#FFFFFF;">
      <tr><td style="padding:28px 32px;background:${DARK};border-bottom:5px solid ${RED};">
        <a href="${SITE}/"><img src="${LOGO}" alt="Armoire Belle-Vue — Ameublement sur mesure" width="240" height="74" style="display:block;width:240px;max-width:100%;height:auto;border:0;" /></a>
      </td></tr>
      <tr><td style="padding:32px 32px 24px;">
        <p style="margin:0 0 12px;color:${RED};font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Votre projet, à votre mesure</p>
        <h1 style="margin:0 0 20px;font-size:28px;line-height:35px;color:${DARK};">${escapeHtml(title)}</h1>
        ${intro}
        <p style="margin:20px 0 0;font-size:12px;line-height:20px;color:#666666;">Référence : <strong style="color:${DARK};">${escapeHtml(reference)}</strong></p>
      </td></tr>
      <tr><td style="padding:0 32px 28px;">
        <h2 style="font-size:16px;margin:0 0 12px;">Récapitulatif de la demande</h2>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E6E6E6;background:#FAFAFA;">${rows}</table>
      </td></tr>
      <tr><td style="padding:0 32px 32px;">${action}
        <p style="margin:20px 0 0;font-size:12px;line-height:20px;color:#666666;">Les renseignements et les photos transmis servent uniquement à traiter cette demande de soumission.${quote.photos?.length ? ` ${quote.photos.length} photo(s) jointe(s) à l’avis envoyé à notre équipe.` : ''}</p>
      </td></tr>
      <tr><td style="padding:24px 32px;background:${DARK};color:#FFFFFF;font-size:12px;line-height:22px;">
        <strong>${BRAND}</strong><br />381 rue Principale, Saint-Charles-de-Bourget, QC, G0V 1G0<br />
        <a href="tel:+14186721613" style="color:#FFFFFF;">(418) 672-1613</a> · <a href="${SITE}/" style="color:#FFFFFF;">armoirebellevue.com</a><br />
        <a href="${SITE}/politique-cookies" style="color:#DDDDDD;">Confidentialité et renseignements personnels</a>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

const paragraph = (text: string) => `<p style="margin:0 0 16px;font-size:15px;line-height:25px;">${text}</p>`;
const button = (url: string, label: string) =>
  `<table role="presentation" cellpadding="0" cellspacing="0"><tr><td bgcolor="${RED}" style="border-radius:4px;"><a href="${escapeHtml(url)}" style="display:inline-block;padding:15px 22px;font-size:14px;font-weight:700;color:#FFFFFF;text-decoration:none;">${label}</a></td></tr></table>`;

export function createQuoteEmails(quote: QuoteInput, from: string, recipient: string, reference: string) {
  const summaryText = recap(quote).map(([label, value]) => `${label} : ${value}`).join('\n');
  const customerTitle = 'Votre demande est prise en charge';
  const ownerTitle = 'Nouvelle demande de soumission';
  const footer = `\n\n${BRAND}\n(418) 672-1613\n${SITE}/\nRéférence : ${reference}`;
  return [
    {
      from: `${BRAND} <${from}>`,
      to: [recipient],
      reply_to: quote.email,
      subject: `Nouvelle soumission — ${quote.projectType} — ${reference}`,
      html: layout(ownerTitle, `${quote.name} vous présente un projet : ${quote.projectType}.`,
        paragraph(`<strong>${escapeHtml(quote.name)}</strong> a transmis une demande depuis le site Belle-Vue.`) +
        paragraph('Vous trouverez ses coordonnées et les détails de son projet ci-dessous. Répondez à ce courriel pour contacter directement le client.'),
        quote, reference, button(`mailto:${quote.email}`, 'Répondre au client') +
        paragraph(`<br />Le client a accepté que ses renseignements soient utilisés pour traiter sa demande. Une confirmation avec ce récapitulatif lui est également envoyée.`)),
      text: `${ownerTitle}\n\nRépondez à ce courriel pour contacter le client.\n\n${summaryText}\n\nConsentement : accepté pour le traitement de la demande.${footer}`,
      ...(quote.photos?.length ? { attachments: quote.photos.map(photo => ({
        filename: photo.filename,
        content: photo.content,
        content_type: 'image/jpeg',
      })) } : {}),
    },
    {
      from: `${BRAND} <${from}>`,
      to: [quote.email],
      reply_to: recipient,
      subject: `Votre demande de soumission — ${BRAND} — ${reference}`,
      html: layout(customerTitle, 'Merci pour votre projet. Retrouvez le récapitulatif de votre demande.',
        paragraph(`Bonjour <strong>${escapeHtml(quote.name)}</strong>,`) +
        paragraph('Merci de faire confiance à Armoire Belle-Vue. Votre demande a été transmise à notre équipe pour prise en charge. Nous examinerons vos besoins et communiquerons avec vous pour discuter de votre projet.') +
        paragraph('Ce courriel confirme votre demande; il ne constitue pas une soumission chiffrée ni une réservation de travaux.'),
        quote, reference, button(`mailto:${recipient}`, 'Ajouter des précisions à ma demande') +
        paragraph('<br />Vous avez d’autres photos, des mesures ou des plans? Répondez à ce courriel pour compléter les informations sur votre projet.')),
      text: `Bonjour ${quote.name},\n\n${customerTitle}.\nMerci de faire confiance à Armoire Belle-Vue. Votre demande a été transmise à notre équipe. Nous examinerons vos besoins et communiquerons avec vous.\nCe courriel n’est pas une soumission chiffrée ni une réservation.\n\n${summaryText}\n\nRépondez à ce courriel pour ajouter des photos, des plans ou des précisions.${footer}`,
    },
  ];
}
