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

### Marinier Rénovations (sergerie-website)
- **Type**: Presentation-first React + Vite website
- **Path**: `/` (root)
- **Port**: 25729
- **Pages**: Homepage (`/`), Soumission (`/soumission`)
- **Brand colors**: Primary `#2D4FA8` (royal blue), Hover `#3D62C5` (lighter blue), Light Grey `#D8D8D8`, Dark Grey `#3A3A3A`, White `#FFFFFF`. Dark sections still use `#1B1B1B` for contrast (about, faq, hero overlay, cta).
- **Design rules**: Solid colors only — no gradients. Navbar & footer are WHITE (to host the dark logo). Royal blue used for CTA/highlights/icons.
- **Font**: Inter (Google Fonts)
- **Routing**: wouter
- **Logo**: `public/images/logo-marinier-renovations.png`
- **Images**: `public/images/` — `mc-*.jpg` is the active set used by the site
- **Components**: `src/components/layout/` — Navbar, Footer, FadeIn, CountUp, MapSection, TestimonialsSection, ContactSection, PageWrapper
- **Contact**: (514) 578-5959, info@marinier-renovations.com, Sainte-Julienne, QC, Canada
- **Core message**: "Rénovation résidentielle, intérieure & extérieure"
- **Services**: Rénovation intérieure, Rénovation extérieure, Salle de bain & cuisine, Travaux résidentiels sur mesure

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
