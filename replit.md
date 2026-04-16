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

### MC Rénovation Construction (sergerie-website)
- **Type**: Presentation-first React + Vite website
- **Path**: `/` (root)
- **Port**: 25729
- **Pages**: Homepage (`/`), Soumission (`/soumission`)
- **Brand colors**: Accent `#F97316` (orange), Primary `#000000` (black), Background `#FFFFFF` (white)
- **Font**: Inter (Google Fonts)
- **Routing**: wouter
- **Images**: `public/images/` — 20+ client photos, logo
- **Components**: `src/components/layout/` — Navbar, Footer, FadeIn, CountUp, MapSection, TestimonialsSection, ContactSection, PageWrapper
- **Contact**: 450-712-0342, micky667@msn.com, Saint-Jérôme QC (Laurentides)
- **Owner**: Michael Charbonneau
- **Services**: Finition cuisine & salle de bain, Finition intérieure, Finition extérieure, Agrandissement, Balcon, Cabanon, Toiture

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
