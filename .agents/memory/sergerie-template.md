---
name: sergerie-website is a white-label construction template
description: The sergerie-website artifact is reused per client; replit.md can lag behind the live content.
---

# sergerie-website = shared white-label construction site

The `artifacts/sergerie-website` site is a single React+Vite template that gets fully
re-skinned for each new construction client (company name, colors, logo, services, contact).

**Why:** The agency reuses one codebase across clients ("on va utiliser le même site mais
pour un autre client"). `public/images/` accumulates assets from many past clients
(logo-*.png, *-hero-video.mp4, client-prefixed photos) — leftover files are normal.

**How to apply:** Before rebranding, do NOT trust the replit.md artifact block or the folder
name ("sergerie") to know the current client — they go stale. Read the actual source
(navbar/footer/home.tsx) to find the live company name, colors, and logo, then update
replit.md after. Client briefs may say "don't invent certifications/RBQ" → the
`certifications-section.tsx` component stays in the tree but is left unrendered in that case.
