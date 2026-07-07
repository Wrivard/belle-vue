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

### Construction Pro-S (sergerie-website)
- **Type**: Presentation-first React + Vite website (shared construction template reused per client)
- **Path**: `/` (root)
- **Port**: 25729
- **Pages**: Homepage (`/`), Soumission (`/soumission`)
- **Brand colors**: Accent `#0077C8` (blue), Hover `#005B99` (darker blue), Light blue highlight `#4DA8DA` (text on dark), Dark `#1B1B1B`, Text `#E4E4E4`, White `#FFFFFF`. CSS `--primary`/`--accent` HSL = `204 100% 39%`.
- **Design rules**: Solid colors only — no gradients. Navbar & footer are BLACK `#1B1B1B` (to host the white logo). Blue used for CTA/highlights/icons.
- **Font**: Inter (Google Fonts)
- **Routing**: wouter
- **Logo**: `public/images/logo-pro-s.png` (white PRO-S CONSTRUCTION logo, transparent bg → needs dark background)
- **Images**: `public/images/` — uses `photo-*.jpg` set (construction → `photo-construction.jpg`, toiture → `photo-toiture.jpg`)
- **Components**: `src/components/layout/` — Navbar, Footer, FadeIn, CountUp, MapSection, TestimonialsSection, ContactSection, PageWrapper. Note: `certifications-section.tsx` exists but is NOT rendered (client has no confirmed certifications — do not invent RBQ/associations).
- **Contact**: (418) 487-8865, constructionpro-s@hotmail.com, 400 rue du Lis-Blanc, Chicoutimi (QC) G7G 0L4
- **Zones served**: Région du Saguenay
- **Core message**: "Entrepreneur spécialisé en construction, rénovation & toiture résidentielle"
- **Services**: Construction résidentielle, Rénovation générale, Toiture, Revêtement extérieur, Agrandissement, Travaux de finition

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
