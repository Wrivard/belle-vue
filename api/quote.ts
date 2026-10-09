import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleQuote } from '@workspace/quote-mail';

type Request = IncomingMessage & { body?: unknown };
const header = (request: Request, name: string) => {
  const value = request.headers[name];
  return Array.isArray(value) ? value[0] : value;
};

// Vercel parses application/json into request.body before invoking this function.
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
  const result = await handleQuote(body, {
    method: request.method ?? 'GET',
    origin: header(request, 'origin'),
    host: header(request, 'host'),
    contentType: header(request, 'content-type'),
    // Vercel supplies x-forwarded-for. No user data is logged or persisted here.
    ip: header(request, 'x-forwarded-for')?.split(',')[0].trim() ?? request.socket.remoteAddress ?? 'unknown',
  });
  if (result.status === 405) response.setHeader('Allow', 'POST');
  if (result.status === 429) response.setHeader('Retry-After', '60');
  response.statusCode = result.status;
  response.end(JSON.stringify(result.body));
}
