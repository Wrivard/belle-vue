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

### Construction Pro 3M (sergerie-website)
- **Type**: Presentation-first React + Vite website
- **Path**: `/` (root)
- **Port**: 25729
- **Pages**: Homepage (`/`), Soumission (`/soumission`)
- **Brand colors**: Accent `#F47A1F` (orange), Secondary accent `#FF8C2A` (light orange), Primary `#0B0B0B` (black), Text `#EDEDED`, Background `#FFFFFF`
- **Design rules**: Solid colors only — no gradients, no fading. Black dominant, orange for CTA/highlights/icons only.
- **Font**: Inter (Google Fonts)
- **Routing**: wouter
- **Logo**: `public/images/logo-construction-pro-3m.png`
- **Images**: `public/images/` — 20+ client photos, logo
- **Components**: `src/components/layout/` — Navbar, Footer, FadeIn, CountUp, MapSection, TestimonialsSection, ContactSection, PageWrapper
- **Contact**: 450-502-3399, constructionpro3m@gmail.com, 850 rang des bas étangs, Québec
- **Core message**: "Votre tranquillité d'esprit, notre savoir-faire !"
- **Services**: Rénovation, Portes et fenêtres, Agrandissement, Travaux résidentiels

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
