import { createHash } from 'node:crypto';
import { SubmitQuoteBody, type QuoteReceipt } from '@workspace/api-zod';
import pino from 'pino';
import { createQuoteEmails } from './templates';

export const logger = pino({ name: 'quote-mail' });
const EXPECTED_FROM = 'bonjour@kua.quebec';
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const FAILURE = 'L’envoi n’a pas pu être confirmé. Vos réponses sont conservées sur cette page. Réessayez ou contactez-nous au (418) 672-1613.';
export type QuoteResult = { status: number; body: QuoteReceipt | { error: string } };
export interface QuoteContext {
  method: string;
  origin?: string;
  host?: string;
  contentType?: string;
  ip: string;
}

// Per-process protection only. Also configure a distributed Vercel Firewall rate limit.
const attempts = new Map<string, { count: number; expires: number }>();
function rateAllowed(ip: string) {
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const key = createHash('sha256').update(ip).digest('hex');
  const entry = attempts.get(key);
  if (entry && entry.count >= 5) return false;
  if (!entry && attempts.size >= 10000) return false;
  attempts.set(key, { count: (entry?.count ?? 0) + 1, expires: entry?.expires ?? now + 60000 });
  return true;
}

export async function handleQuote(
  input: unknown,
  context: QuoteContext,
  options: { env?: NodeJS.ProcessEnv; fetcher?: typeof fetch; rateLimit?: (ip: string) => boolean } = {},
): Promise<QuoteResult> {
  const fail = (status: number, error: string): QuoteResult => ({ status, body: { error } });
  if (context.method !== 'POST') return fail(405, 'Méthode non autorisée.');
  if (context.origin) {
    try {
      if (!['https:', 'http:'].includes(new URL(context.origin).protocol) ||
        new URL(context.origin).host !== context.host) return fail(403, 'Origine non autorisée.');
    } catch { return fail(403, 'Origine non autorisée.'); }
  }
  if (context.contentType?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    return fail(415, 'Le formulaire doit être envoyé au format JSON.');
  }
  const raw = input && typeof input === 'object' && !Array.isArray(input) ? input as Record<string, unknown> : {};
  // Normalize before validation so whitespace-only fields and header injection are rejected.
  const normalized = Object.fromEntries(Object.entries(raw).map(([key, value]) =>
    [key, typeof value === 'string' ? value.trim() : value]));
  const parsed = SubmitQuoteBody.strict().safeParse(normalized);
  if (!parsed.success || /[\r\n]/.test(String(normalized.email)) ||
      !/^[+()\d\s.\-xext]+$/i.test(String(normalized.phone)) ||
      String(normalized.phone).replace(/\D/g, '').length < 7 ||
      /[\r\n]/.test(String(normalized.name))) {
    return fail(400, 'Vérifiez les champs du formulaire et votre consentement.');
  }
  const photos = parsed.data.photos ?? [];
  if (new Set(photos.map(photo => photo.filename)).size !== photos.length ||
      photos.some(photo => {
        if (!/^[A-Za-z0-9+/]+={0,2}$/.test(photo.content) || photo.content.length % 4 !== 0) return true;
        const bytes = Buffer.from(photo.content, 'base64');
        return bytes.length > 700000 || bytes.length < 4 ||
          bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff ||
          bytes[bytes.length - 2] !== 0xff || bytes[bytes.length - 1] !== 0xd9 ||
          bytes.toString('base64') !== photo.content;
      })) return fail(400, 'Les photos doivent être des images JPEG valides de 700 Ko maximum (3 photos au plus).');
  if (!(options.rateLimit ?? rateAllowed)(context.ip)) return fail(429, 'Trop de tentatives. Réessayez dans une minute.');
  const env = options.env ?? process.env;
  const from = env.RESEND_FROM_EMAIL?.trim();
  const recipient = env.RECIPIENT_EMAIL?.trim();
  if (!env.RESEND_API_KEY || from !== EXPECTED_FROM || !recipient || !EMAIL.test(recipient)) {
    logger.warn({ code: 'email_configuration_missing' }, 'Quote sending is not configured');
    return fail(503, 'L’envoi est temporairement indisponible. Contactez-nous au (418) 672-1613; vos réponses restent sur cette page.');
  }
  const quote = parsed.data;
  const reference = `BV-${quote.submissionId.toUpperCase()}`;
  // No current time in the payload: the same retry must have exactly the same body.
  const messages = createQuoteEmails(quote, from, recipient, reference);
  // Include normalized content so edits yield a new request; timeout retries reuse the key.
  const digest = createHash('sha256').update(JSON.stringify(messages)).digest('hex');
  try {
    if (photos.length) {
      // Resend's batch endpoint does not accept attachments. Distinct keys make
      // retries safe even when the first of these two requests succeeded.
      for (const [index, message] of messages.entries()) {
        const response = await (options.fetcher ?? fetch)('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
            'Idempotency-Key': `belle-vue-quote/${digest}/${index}`,
          },
          body: JSON.stringify(message),
          signal: AbortSignal.timeout(15000),
        });
        if (!response.ok) {
          logger.warn({ providerStatus: response.status }, 'Resend rejected quote email');
          return fail(502, FAILURE);
        }
        const result = await response.json() as { id?: string };
        if (typeof result.id !== 'string' || !result.id) {
          logger.warn({ code: 'invalid_provider_acknowledgement' }, 'Resend did not confirm quote email');
          return fail(502, FAILURE);
        }
      }
      return { status: 200, body: { ok: true, reference } };
    }
    const response = await (options.fetcher ?? fetch)('https://api.resend.com/emails/batch', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `belle-vue-quote/${digest}`,
      },
      body: JSON.stringify(messages),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) {
      // Never log the provider response: it can contain email addresses or credentials.
      logger.warn({ providerStatus: response.status }, 'Resend rejected quote emails');
      return fail(502, FAILURE);
    }
    const result = await response.json() as { data?: { id?: string }[] };
    if (!Array.isArray(result.data) || result.data.length !== 2 ||
      !result.data.every((email) => typeof email.id === 'string' && email.id.length > 0)) {
      logger.warn({ code: 'invalid_provider_acknowledgement' }, 'Resend did not confirm both emails');
      return fail(502, FAILURE);
    }
    return { status: 200, body: { ok: true, reference } };
  } catch {
    logger.warn({ code: 'provider_unavailable' }, 'Quote email request failed or timed out');
    return fail(502, FAILURE);
  }
}
