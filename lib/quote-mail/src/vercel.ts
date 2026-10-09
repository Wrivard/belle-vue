import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleQuote, logger } from './index';

type Request = IncomingMessage & { body?: unknown };
const header = (request: Request, name: string) => {
  const value = request.headers[name];
  return Array.isArray(value) ? value[0] : value;
};

// Vercel parses application/json before invoking this function.
// The deployment build bundles this adapter and its dependencies for api/quote.js.
export default async function quote(request: Request, response: ServerResponse) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  const size = Number(header(request, 'content-length'));
  if (size > 3200000) {
    response.statusCode = 413;
    response.end(JSON.stringify({ error: 'La demande dépasse la taille maximale.' }));
    return;
  }
  let body: unknown;
  try {
    body = request.body;
    if (Buffer.byteLength(JSON.stringify(body) ?? '', 'utf8') > 3200000) {
      response.statusCode = 413;
      response.end(JSON.stringify({ error: 'La demande dépasse la taille maximale.' }));
      return;
    }
  } catch {
    response.statusCode = 400;
    response.end(JSON.stringify({ error: 'Le formulaire contient un JSON invalide.' }));
    return;
  }
  try {
    const result = await handleQuote(body, {
      method: request.method ?? 'GET',
      origin: header(request, 'origin'),
      host: header(request, 'host'),
      contentType: header(request, 'content-type'),
      ip: header(request, 'x-forwarded-for')?.split(',')[0].trim() ?? request.socket?.remoteAddress ?? 'unknown',
    });
    if (result.status === 405) response.setHeader('Allow', 'POST');
    if (result.status === 429) response.setHeader('Retry-After', '60');
    response.statusCode = result.status;
    response.end(JSON.stringify(result.body));
  } catch {
    // Never log the request, images, recipient addresses, or secrets.
    logger.error({ code: 'quote_handler_failed' }, 'Unexpected quote handler failure');
    response.statusCode = 500;
    response.end(JSON.stringify({
      error: 'L’envoi est temporairement indisponible. Vos réponses restent sur cette page. Réessayez ou appelez-nous au (418) 672-1613.',
    }));
  }
}
