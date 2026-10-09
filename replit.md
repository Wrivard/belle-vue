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

Import the repository **once**, with **Root Directory blank or `.`**. The root `vercel.json` builds `belle-vue-website` and deploys `api/quote.ts` as a serverless function. Do not import the detected artifact folders as separate Vercel projects. The Express preview server and design sandbox are not required on Vercel.

Quote-email logic is shared in `lib/quote-mail`; see `docs/vercel-resend.md` for configuration and delivery verification.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
