import { Router, type IRouter } from 'express';
import { handleQuote } from '@workspace/quote-mail';

const router: IRouter = Router();
router.all('/quote', async (req, res) => {
  const result = await handleQuote(req.body, {
    method: req.method,
    origin: req.get('origin'),
    host: req.get('host'),
    contentType: req.get('content-type'),
    ip: req.ip ?? 'unknown',
  });
  res.setHeader('Cache-Control', 'no-store');
  if (result.status === 405) res.setHeader('Allow', 'POST');
  if (result.status === 429) res.setHeader('Retry-After', '60');
  res.status(result.status).json(result.body);
});
export default router;
