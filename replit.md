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

### Construction R. Lavallee Inc. (sergerie-website)
- **Type**: Presentation-first React + Vite website (shared construction template reused per client)
- **Path**: `/` (root)
- **Port**: 25729
- **Pages**: Homepage (`/`), Soumission (`/soumission`)
- **Brand colors**: Accent `#FF0000` (red), Hover `#CC0000` (darker red), Light red highlight `#FF4D4D` (text on dark), Dark `#1B1B1B`, Text `#E4E4E4`, White `#FFFFFF`. CSS `--primary`/`--accent` HSL = `0 100% 50%`.
- **Design rules**: Solid colors only — no gradients. Navbar & footer are BLACK `#1B1B1B` (to host the white-text logo). Red used for CTA/highlights/icons.
- **Font**: Inter (Google Fonts)
- **Routing**: wouter
- **Logo**: `public/images/logo-r-lavallee.png` (white text + red graphic, transparent bg → needs dark background)
- **Images**: `public/images/` — uses `photo-*.jpg` and `marinier-*.jpg` set (toiture → `photo-toiture.jpg`)
- **Components**: `src/components/layout/` — Navbar, Footer, FadeIn, CountUp, MapSection, TestimonialsSection, ContactSection, PageWrapper. Note: `certifications-section.tsx` exists but is NOT rendered (client has no confirmed certifications — do not invent RBQ/associations).
- **Contact**: (438) 888-9601, constructionrlavallee@gmail.com, Saint-Constant, QC, Canada
- **Zones served**: Rive-Sud de Montréal, Ouest-de-l'Île
- **Core message**: "Entrepreneur spécialisé en toiture & rénovation résidentielle"
- **Services**: Toiture résidentielle, Rénovation générale, Rénovation de salle de bain, Cuisine, Revêtement extérieur, Travaux extérieurs

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
