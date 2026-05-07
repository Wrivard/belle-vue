# Workspace

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

### Réno-Action FB inc. (sergerie-website)
- **Type**: Presentation-first React + Vite website
- **Path**: `/` (root)
- **Port**: 25729
- **Pages**: Homepage (`/`), Soumission (`/soumission`)
- **Brand colors**: Primary `#114D8B` (deep blue), Hover `#1A6BB8` (lighter blue), Light Grey `#D9D9D9`, Dark Grey `#2A2A2A`, White `#FFFFFF`. Dark sections still use `#1B1B1B` for contrast (about, faq, hero overlay, cta).
- **Design rules**: Solid colors only — no gradients. Navbar & footer are WHITE (to host the dark logo). Deep blue used for CTA/highlights/icons.
- **Font**: Inter (Google Fonts)
- **Routing**: wouter
- **Logo**: `public/images/logo-reno-action.png`
- **Images**: `public/images/` — uses `photo-*.jpg` and `marinier-*.jpg` set
- **Components**: `src/components/layout/` — Navbar, Footer, FadeIn, CountUp, MapSection, TestimonialsSection, ContactSection, PageWrapper
- **Contact**: (819) 849-6999, reno-action@hotmail.com, Coaticook, QC, Canada, J1A 1J1
- **License**: RBQ 5698-3927-01
- **Core message**: "Entrepreneur général — Construction & rénovation résidentielle, commerciale et industrielle"
- **Services**: Construction résidentielle, Construction commerciale, Construction industrielle, Rénovation, Agrandissement, Portes et fenêtres, Finition intérieure, Revêtement extérieur

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
