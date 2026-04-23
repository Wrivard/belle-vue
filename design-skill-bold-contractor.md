# BOLD CONTRACTOR
**Design Skill — Reusable Visual System for High-Trust Service & Construction Sites**

---

## 1. Design Philosophy

- **Visual tone:** Bold, industrial, high-contrast, premium yet approachable
- **General feel:** Confident authority. The interface communicates expertise through weight, uppercase hierarchy, and restrained use of a single accent color. No decorative gradients. No fading colors. No visual noise.
- **Design intent:** Build immediate trust. Every section serves a conversion purpose. Dark and light sections alternate deliberately to create rhythm and punctuate calls to action.

---

## 2. Layout System

### Container
- Max-width: `1200px`
- Horizontal padding: `px-6` (1.5rem) on all screen sizes
- Centered with `mx-auto`

### Section Spacing
- Standard section: `py-24 md:py-32` (6rem / 8rem vertical padding)
- Compact sections (stats, logos): `py-16` (4rem)
- CTA section: `py-32` (8rem, always)

### Grid System
- **Services:** 1 col → 2 col → 3 col (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- **Stats / Logos:** 2 col → 4 col (`grid-cols-2 md:grid-cols-4`)
- **About / Contact:** 2 equal columns (`md:grid-cols-2 gap-16`)
- **Process steps:** 3 equal columns (`md:grid-cols-3`)
- **Projects grid:** 3 equal columns (`md:grid-cols-3`)
- Column gaps: `gap-6` for cards, `gap-8` for feature grids, `gap-16` for split layouts

### Alignment
- Hero: left-aligned text, max-width `max-w-3xl`
- Section titles: left-aligned by default, centered only for symmetrical sections (services, certifications)
- All content constrained to `max-w-[1200px]` container

---

## 3. Page Structure (Homepage)

Sections in order, top to bottom:

1. **Navbar** — fixed, transparent → dark on scroll
2. **Hero** — full-viewport height, full-bleed image background with dark overlay, left-aligned text block
3. **Stats bar** — compact 4-column count-up row, white background
4. **Certifications / Logos bar** — compact logo strip, white background, no visible divider between stats and logos (they merge into one white band)
5. **Services** — 3-column card grid, light grey background
6. **About / Expertise** — dark background, 2-column split: text left, image right with decorative offset border
7. **Projects / Réalisations** — 3-column image gallery with hover overlay, light grey background
8. **Process** — 3-column numbered steps, dark background
9. **Testimonials** — light grey or white
10. **FAQ** — accordion, alternating background
11. **CTA** — full-bleed image with dark overlay, centered text + single button
12. **Contact** — 2-column: contact info left + form right, light grey background
13. **Footer** — dark background

---

## 4. Typography System

### Font Families
- **Primary font:** `Inter` (Google Fonts) — used for everything
- No secondary or accent font. The entire system uses Inter at different weights and sizes.

### Font Import
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```
Applied via: `--app-font-sans: 'Inter', sans-serif;`

---

### Font Usage Rules

| Element | Font | Size (desktop) | Size (mobile) | Weight | Transform | Tracking |
|---|---|---|---|---|---|---|
| H1 (hero) | Inter | `text-7xl` (4.5rem) | `text-5xl` (3rem) | 700 bold | `uppercase` | `tracking-tight` |
| H2 (sections) | Inter | `text-5xl` (3rem) | `text-4xl` (2.25rem) | 700 bold | `uppercase` | `tracking-tight` |
| H2 (CTA) | Inter | `text-7xl` (4.5rem) | `text-5xl` | 700 bold | `uppercase` | `tracking-tight` |
| H3 (cards) | Inter | `text-2xl` (1.5rem) | same | 700 bold | none | default |
| H3 (process numbers) | Inter | `text-7xl` (4.5rem) | same | 700 bold | none | default |
| Body / paragraph | Inter | `text-lg` (1.125rem) | same | 500 medium | none | default |
| Small labels / taglines | Inter | `text-sm` (0.875rem) | same | 700 bold | `uppercase` | `tracking-widest` |
| Button text | Inter | `text-base` (1rem) | same | 700 bold | `uppercase` | `tracking-wide` |
| Nav links | Inter | `text-sm` | same | 600 semibold | `uppercase` | `tracking-wide` |
| Stat numbers | Inter | `text-5xl` (3rem) | `text-4xl` | 700 bold | none | default |
| Stat labels | Inter | `text-sm` | same | 700 bold | `uppercase` | `tracking-wider` |
| Form labels | Inter | `text-sm` | same | 700 bold | `uppercase` | `tracking-wide` |

---

### Typography Behavior
- **Letter spacing:** `tracking-tight` on all headings (tight, condensed feel). `tracking-widest` or `tracking-wide` on labels and buttons.
- **Line height:** `leading-[1.05]` on hero H1 (very compressed). `leading-relaxed` on body text.
- **Text transform:** `uppercase` is applied aggressively — all headings, all labels, all buttons, all nav links.
- **Accent word:** A single word or phrase in the heading receives the accent color (`text-[#F97316]`). The rest remains white or dark.

---

## 5. Color System

### Palette (exact values)
| Role | Color | Hex |
|---|---|---|
| Background (dark sections) | Near-black charcoal | `#1B1B1B` |
| Background (light sections) | Warm light grey | `#E4E4E4` |
| Background (white sections) | Pure white | `#FFFFFF` |
| Accent / CTA | Vivid orange | `#F97316` |
| Body text on dark | Off-white | `#E4E4E4` |
| Muted text on dark | Off-white at 60% opacity | `rgba(#E4E4E4, 0.6)` |
| Muted text on light | Near-black at 50% opacity | `rgba(#1B1B1B, 0.5)` |
| Subtle borders | Black at 5% opacity | `rgba(0,0,0,0.05)` |

### Rules
- **Accent (`#F97316`)** is used ONLY for: CTAs, section label tags, decorative dashes, stat numbers, hover states on icons/buttons, and a single accent word inside headings.
- **No gradients** — accent color is always solid, never faded or blended.
- **Section alternation:** dark (`#1B1B1B`) → light grey (`#E4E4E4`) → dark → light. This creates strong rhythmic contrast.
- **White sections** (stats + logos) merge into a single white band between the dark hero and the grey services section.

### CSS Variables (HSL)
```css
--accent: 25 95% 53%;         /* #F97316 */
--primary: 25 95% 53%;
--background: 0 0% 89.4%;     /* #E4E4E4 */
--foreground: 0 0% 10.6%;     /* #1B1B1B */
--radius: .5rem;
```

---

## 6. Component System

### Buttons

**Primary CTA (filled orange):**
```
bg-[#F97316] hover:bg-[#F97316]/90
text-white font-bold rounded-md
px-8 py-6 uppercase tracking-wide text-base
transition-transform hover:scale-105
```

**Secondary outline (dark background context):**
```
border-2 border-[#E4E4E4] bg-transparent
hover:bg-[#E4E4E4] hover:text-[#1B1B1B]
text-[#E4E4E4] font-bold rounded-md
px-8 py-6 uppercase tracking-wide
```

**Secondary outline (light background context):**
```
border-2 border-[#1B1B1B] bg-transparent
text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-[#E4E4E4]
font-bold rounded-md px-6 py-6 uppercase tracking-wide
```

**Form submit (inverted, hover to accent):**
```
bg-[#1B1B1B] hover:bg-[#F97316]
text-white font-bold rounded-md
py-6 uppercase tracking-wide
```

---

### Section Labels (taglines above headings)
```
flex items-center gap-3 mb-4
→ div: w-8 h-1 bg-[#F97316]    ← left dash
→ span: text-[#F97316] font-bold tracking-widest uppercase text-sm
→ div: w-8 h-1 bg-[#F97316]    ← right dash (centered variant only)
```
Left-aligned sections: one dash on the left only.
Centered sections: dash on both sides of the label.

---

### Service Cards
```
bg-white rounded-md shadow-sm border border-black/5
hover:shadow-xl hover:-translate-y-2 transition-all duration-300
overflow-hidden
→ Image block: h-48 w-full object-cover, scale-110 on group-hover
→ Content block: p-8
→ Title: text-2xl font-bold, hover:text-[#F97316]
→ Body: text-[#1B1B1B]/70 leading-relaxed
→ Arrow circle: w-10 h-10 rounded-full border, hover fills with accent
```

---

### Project Gallery Cards
```
relative overflow-hidden rounded-md h-[400px]
→ Full-bleed image
→ Gradient overlay: bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/40 to-transparent
→ Label: text-[#F97316] text-sm uppercase tracking-widest
→ Title: text-[#E4E4E4] text-2xl font-bold uppercase
→ On hover: image scale-110, text slides up (translate-y-4 → translate-y-0)
```

---

### Contact Info Items
```
flex items-start gap-6
→ Icon box: w-14 h-14 bg-[#1B1B1B] text-[#F97316] rounded-md flex items-center justify-center
→ Label: font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider
→ Value: text-2xl font-bold
```

---

### Form (Contact / Soumission)
```
bg-white p-10 rounded-md shadow-xl border-t-4 border-[#F97316]
→ Labels: text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70
→ Inputs: bg-[#E4E4E4]/50 border-0 h-14 rounded-sm focus-visible:ring-[#F97316]
→ Textarea: min-h-[150px] resize-none
→ Submit: full-width, bg-[#1B1B1B] hover:bg-[#F97316]
```
Orange top border is the card's signature detail.

---

### About / Expertise Image Treatment
```
relative
→ Decorative border offset: absolute -inset-4 border-2 border-[#F97316]/30 rounded-md transform translate-x-4 translate-y-4
→ Image: w-full h-[500px] object-cover rounded-md shadow-2xl grayscale hover:grayscale-0 transition-all duration-500
```
Image starts in grayscale, reveals color on hover.

---

### Navbar
- Fixed, full-width, `z-50`
- **Transparent + `py-5`** when at top of page
- **`bg-[#1B1B1B]` + `py-3` + `shadow-lg`** after scrolling 50px
- Nav links: uppercase, semibold, `text-sm`, `hover:text-[#F97316]`
- CTA button: always visible (right side)
- Mobile: full-screen overlay `bg-[#1B1B1B]`, large links `text-2xl font-bold uppercase`

---

## 7. Visual Style

### Border Radius
- Standard components: `rounded-md` (`0.375rem`)
- Form inputs: `rounded-sm` (smaller, more industrial feel)
- Stat/icon boxes: `rounded-md`
- Image cards: `rounded-md`
- **No `rounded-xl` or `rounded-full`** except for small icon circles

### Shadows
- Service cards (default): `shadow-sm`
- Service cards (hover): `shadow-xl`
- Form card: `shadow-xl`
- About image: `shadow-2xl`
- Navbar on scroll: `shadow-lg`

### Image Handling
- Hero / CTA: full-bleed `object-cover` + dark overlay `bg-[#1B1B1B]/80` or `/85`
- Service cards: fixed height `h-48`, `object-cover`
- Project gallery: fixed height `h-[400px]`, `object-cover`
- About image: fixed height `h-[500px]`, `object-cover`, starts grayscale
- All images zoom slightly on hover (`scale-110`, `duration-500–700`)

### Decorative Elements
- Orange horizontal bars: `w-8 h-1 bg-[#F97316]` (section labels) or `w-12 h-1` (hero)
- Orange process step accent: `w-10 h-1 bg-[#F97316] mb-6`
- Accent word in H2: single word wrapped in `<span className="text-[#F97316]">`
- Clip-path geometric panel on About section: `clip-path-polygon` on a `#222222` div
- About image offset border: `border-2 border-[#F97316]/30`, translated 4px right and down

### Icon Style
- Lucide icons throughout
- Size `16–24px` depending on context
- Icons in contact items: inside `bg-[#1B1B1B]` square box, colored `text-[#F97316]`

---

## 8. Animation System

### Scroll Reveal (FadeIn)
All major content blocks use an `IntersectionObserver`-based fade-in:
```
opacity-0 translate-y-8 → opacity-100 translate-y-0
transition-all duration-700 ease-out
```
- Fires once when element enters viewport at `threshold: 0.1`
- Staggered via `delay` prop (0ms, 80ms, 100ms, 150ms, 200ms, 300ms)
- Applied per section: titles first, then cards staggered

### Count-Up Numbers
Stats section uses animated number counters triggered by visibility. Eased, from 0 to target value.

### Hover Interactions
| Element | Hover effect |
|---|---|
| Service card | `shadow-xl` + `translate-y-[-8px]` |
| Service card image | `scale-110` |
| Project gallery image | `scale-110` |
| Project gallery text | `translate-y-0` (slides up from `translate-y-4`) |
| About image | `grayscale-0` (reveals color from B&W) |
| Logo strip | `[filter:none]` (reveals color from B&W+contrast) |
| CTA/Primary button | `scale-105` |
| Outline button | Background fill transition |
| Arrow circle (card) | Fill with `#F97316`, icon turns white |
| Nav links | `text-[#F97316]` |

### Navbar
- Scroll-driven class swap: transparent → dark solid, `transition-all duration-300`

---

## 9. Design Rules

1. **NO gradients** on backgrounds or decorative elements. Only one exception: project card overlays use a gradient FROM dark (bottom) to transparent (top) — this is functional, not decorative.
2. **NO `rounded-xl` or pill shapes** on cards or buttons. Everything is `rounded-md` or `rounded-sm` for an industrial, precise feel.
3. **ONE accent color, ONE use case.** Orange (`#F97316`) only appears on: CTAs, section labels, decorative dashes, stat numbers, icon accents, and one highlighted word per heading.
4. **ALL headings and labels are uppercase.** No sentence-case headings.
5. **Every section title is preceded by a colored mini-label** (dash + orange label text + optional second dash). This is the universal section identifier pattern.
6. **Dark and light sections alternate.** Never two dark or two light sections back-to-back (white stats+logos band counts as one unit).
7. **Container max-width is always `max-w-[1200px]` with `px-6`.** No full-bleed text content.
8. **Spacing is always from the scale: 4, 6, 8, 10, 12, 16.** No arbitrary values for margins/padding.
9. **Images always have a fixed height** inside cards/sections. Never auto-height with aspect-ratio tricks. Use `object-cover`.
10. **Forms always have an orange top border** (`border-t-4 border-[#F97316]`) as the card's signature.
11. **Stagger all repeated items** (cards, steps, etc.) with incrementing animation delays (80–200ms per item).
12. **Icons are never bare** — they live inside a square box (`w-14 h-14 rounded-md`) when used in contact/feature lists.

---

## 10. Implementation Notes

### Stack
- React + Vite + TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"`) with custom CSS variables in `:root`
- `tw-animate-css` for base animation utilities
- `@tailwindcss/typography` plugin
- `wouter` for routing
- `lucide-react` for icons
- shadcn/ui `Button`, `Input`, `Textarea` base components (customized inline via Tailwind)

### Component Patterns
- **`FadeIn` wrapper:** wraps any block to apply scroll-triggered reveal. Accepts `delay` (ms) and `className`.
- **`PageWrapper`:** applies global layout shell (navbar + footer + `<main>`).
- **`CountUp`:** animated number from 0 → `end` with a `suffix` string.
- **Section label pattern** (reused identically across all sections):
  ```tsx
  <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-1 bg-[#F97316]"></div>
    <span className="text-[#F97316] font-bold tracking-widest uppercase text-sm">Label</span>
  </div>
  ```
- **All section containers follow the same wrapper:**
  ```tsx
  <section className="py-24 md:py-32 bg-[...] text-[...]">
    <div className="container mx-auto px-6 max-w-[1200px]">
      ...
    </div>
  </section>
  ```

### Responsiveness Strategy
- Mobile-first via Tailwind breakpoints (`md:`, `lg:`)
- Grids collapse: 3-col → 2-col → 1-col
- Stats: 4-col → 2-col
- Hero H1: `text-5xl` → `text-7xl`
- Section py: `py-24` → `py-32`
- Navbar: desktop horizontal links hidden, replaced by fullscreen mobile overlay with hamburger toggle

### Asset Conventions
- All public images in `public/images/`
- Referenced via `img()` utility from `@/lib/utils` (resolves to `/images/filename.ext` with base URL prefix)
- Logo images referenced by filename directly (e.g., `logo-apchq.png`)

---

## 11. JSON Summary

```json
{
  "design_name": "Bold Contractor",
  "layout_type": "Full-page scroll, alternating dark/light sections, fixed max-width container",
  "hero_type": "Full-viewport height, full-bleed photo background with dark overlay, left-aligned text",
  "spacing": "Section py-24/py-32, container px-6 max-w-1200px, gaps 6/8/16",
  "typography_style": "Uppercase, tight tracking, single font family (Inter), heavy weights (700-900)",
  "font_primary": "Inter (Google Fonts), wght 300-900",
  "font_secondary": "None — Inter only",
  "visual_style": "Industrial precision: rounded-md, minimal shadow, no gradients, orange accent only",
  "complexity": "Medium-high — multiple section types, scroll animations, interactive cards",
  "tone": "Bold, trustworthy, expert, high-contrast"
}
```
