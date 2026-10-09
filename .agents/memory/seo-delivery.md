---
name: Public-page SEO delivery
description: Why Belle-Vue keeps React interactivity while delivering initial HTML for public pages.
---

Keep public marketing pages readable and correctly identified in the initial HTML response, without requiring JavaScript. Client-side navigation and the interactive quote form can remain.

**Why:** The user requested all SEO optimizations after an audit found identical route metadata and JavaScript-only content in the SPA.

**How to apply:** When adding public pages or changing hosting, preserve initial page content, unique metadata, canonical URLs, and static-file routing. Verify the production build, not only the Vite development preview.

Vite's default SPA preview fallback does not apply artifact production rewrites. An extensionless route can return homepage HTML despite a correct pre-rendered document existing for that route.

**Why:** Browser verification found the quote page loading homepage HTML without JavaScript and failing hydration on direct loads, while its generated document was correct.

**How to apply:** Align the local production preview with the artifact's route rules, and check the raw response for the requested route before testing hydration. Do not confuse a correct generated file with a correctly served page.
