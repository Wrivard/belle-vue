# Armoire Belle-Vue

Website for custom cabinets, bathroom vanities, storage, and furniture in Saguenay–Lac-Saint-Jean.

## Deploy as one Vercel project

Import the **whole repository**, leaving **Root Directory blank or set to `.`**.
The root `vercel.json` builds the website and deploys the quote-email function.
Do not import the folders Vercel detects as separate projects.

See [Vercel and Resend setup](docs/vercel-resend.md) for server-side configuration and delivery checks.

## Repository structure

| Location | Purpose |
|---|---|
| `artifacts/belle-vue-website/` | Public website, pre-rendered pages, images, and quote form |
| `api/quote.ts` | Quote-email endpoint deployed as a Vercel function |
| `lib/quote-mail/` | Shared validation, Resend delivery, and branded email templates |
| `artifacts/api-server/` | API server for the Replit preview; not a separate Vercel deployment |
| `artifacts/mockup-sandbox/` | Design/canvas workspace; not part of the public website |

The supporting preview and design tools are retained intentionally. They are not additional copies of the website.

## Development and verification

Use pnpm. In Replit, run the managed website and API workflows for previews.

```sh
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run test:quotes
PORT=25729 BASE_PATH=/ pnpm --filter @workspace/belle-vue-website run build
```

The website build also verifies the pre-rendered pages, metadata, crawler files, and error page.
