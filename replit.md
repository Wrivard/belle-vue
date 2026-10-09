# Armoire Belle-Vue

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Armoire Belle-Vue (belle-vue-website)
- **Type**: React + Vite marketing website with pre-rendered public pages and an interactive quote form
- **Directory/package**: `artifacts/belle-vue-website`, `@workspace/belle-vue-website`
- **Path**: `/` (root)
- **Port**: 25729
- **Pages**: Homepage (`/`), Soumission (`/soumission`), privacy policy (`/politique-cookies`), and branded 404
- **Brand colors**: Red `#D71920`, hover red `#B51218`, bright red `#FF4B50`, dark `#1B1B1B`, and white
- **Design rules**: Solid colors; dark navbar and footer with the white/red logo. Preserve the client's selected project photos.
- **Font**: Self-hosted Inter variable font
- **Routing**: wouter
- **Images**: Belle-Vue project photos and responsive variants in `public/images/belle-vue/`
- **Components**: Shared navbar, footer, map, contact, FAQ, process, and quote form. Do not invent certifications or associations.
- **Service area**: Saguenay–Lac-Saint-Jean
- **Services**: Custom kitchen cabinets, bathroom vanities, storage, and furniture. Use “ameublement sur mesure” in public copy.

### Supporting tools
- `artifacts/api-server`: Express API for the Replit preview, including `/api/quote`.
- `artifacts/mockup-sandbox`: Design/canvas previews; not the public website.

## Vercel deployment

Import the repository **once**, with **Root Directory blank or `.`**. The root `vercel.json` builds a standalone CommonJS quote bundle and the `belle-vue-website`, then deploys the tracked `api/quote.js` entrypoint as a serverless function. Do not import the detected artifact folders as separate Vercel projects. The Express preview server and design sandbox are not required on Vercel.

Quote-email logic is shared in `lib/quote-mail`; see `docs/vercel-resend.md` for configuration and delivery verification.

Do not replace the bundled function with direct TypeScript workspace imports. Vercel can rename compiled source files without updating workspace package exports, causing a runtime startup failure even when typechecks pass. `pnpm run test:quotes` checks the deployed entrypoint in plain Node outside the workspace, with simulated email responses and no real emails sent.

## Key Commands

- `pnpm run test:consent` — check Cookiebot/GTM host guards, consent defaults and load order without calling providers

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Cookiebot and Google Tag Manager

Cookiebot is installed directly in the website HTML, not through GTM. Do not install a second Cookiebot CMP tag in the GTM container.

Before publishing, configure the active public domains in the supplied Cookiebot domain group: `armoirebellevue.com`, `www.armoirebellevue.com` and `belle-vue.vercel.app` as applicable. Publish the GTM container and verify its tags' consent requirements in Tag Assistant. Installing the container does not configure GA4, advertising pixels or conversion tags.

Google Consent Mode defaults to denied for optional categories. This does not guarantee that every tag stops sending data: some Google tags send cookieless signals with denied storage. Require additional consent and appropriate consent-update triggers in GTM if those requests must also be blocked. The requested noscript fallback cannot use the JavaScript Cookiebot banner; do not configure consent-dependent noscript pixels without a separate consent mechanism.

The cookie declaration belongs on the privacy page, inside the body, not in the head. Keep the essential React module exempt from automatic blocking so the quote form and consent controls remain usable. Replit/local previews must not load either provider, including the noscript fallback.
