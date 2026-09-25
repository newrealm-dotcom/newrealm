# New Realm Graphics — Design System & Creative Direction

Single source of truth for this build's visual and content direction.

> **Revision history:** the first version of this site built a dark, neon-accented "3D
> crystal" concept (Three.js hero, custom cursor ring, GSAP scroll choreography, a
> preloader) around an invented studio narrative. A later pass corrected the invented
> content with real, supplied facts but kept the same visual treatment. This revision
> replaces the visual system entirely: the crystal/cursor/neon direction is exactly the
> kind of generic "digital agency" gimmick a premium, editorial creative-and-digital
> agency site should avoid, and the underlying libraries added real bundle weight for
> decorative effect only. Nothing here is invented — see `src/data/*.ts` for sourcing.

---

## 1. Creative Direction

**Positioning.** New Realm Graphics has 25+ years of experience spanning traditional
design/print and modern web/digital marketing — a combination most studios have
specialized away from. The site should read as an established, multidisciplinary
creative-and-digital agency, not a template-driven "graphic design company" site.

**Visual world.** Editorial and paper-toned rather than dark/neon: a warm off-white
background, near-black ink type, hairline borders instead of shadows or glass panels,
and one restrained gold accent used only for hover/focus states and small emphasis —
never as a decorative gradient.

**Typography.** Display: **Bricolage Grotesque** (variable, weights 300–700) — a grotesk
with enough personality to feel authored, not templated. Body/UI: **Inter**. Numerals and
labels use the `.eyebrow` utility: uppercase, wide tracking, small size, muted color —
acting as museum wall-labels for section context.

**Motion.** Subtle and performance-conscious only: a single `Reveal` component
(IntersectionObserver + CSS transition, translateY 24px → 0, opacity 0 → 1, ~600ms
`cubic-bezier(0.16, 1, 0.3, 1)`), link/button underline and color transitions (~200ms),
and native `<details>` disclosure for FAQs. No parallax, no cursor gimmicks, no
scroll-jacking, no preloader — content paints immediately and is fully present in the DOM
with motion off (`prefers-reduced-motion` disables all `.reveal` transitions globally).

---

## 2. Design Tokens (`src/index.css`)

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#f6f4ef` | Base background |
| `--color-paper-2` | `#eeebe2` | Card/panel background, alternating section backgrounds |
| `--color-ink` | `#16140f` | Primary text, headings, primary button fill |
| `--color-ink-dim` | `#5c5848` | Body copy, secondary text |
| `--color-ink-faint` | `#6a6555` | Tertiary text, icons, eyebrow labels (5.3:1 on paper — meets WCAG AA) |
| `--color-line` | `rgba(22,20,15,0.12)` | Hairline dividers, card borders |
| `--color-line-strong` | `rgba(22,20,15,0.22)` | Form borders, filter-pill borders |
| `--color-gold` | `#8f5c24` | Sparse accent — hover states, link color on hover, selection (5.1:1 on paper) |
| `--color-ink-2` | `#100e0a` | Footer / inverse-section background |

**Containers.** `--container-content: 1280px` (reading-focused pages), `--container-wide:
1440px` (grids, nav). Side padding `px-6` (mobile) → `px-10` (desktop).

**Type scale.** H1 `text-4xl`–`text-7xl` (display font, weight 500, tight tracking), H2
`text-3xl`–`text-4xl`, H3 `text-xl`–`text-2xl`, body `text-base`/`text-lg` with
`.prose-copy` capping measure at `68ch`.

**Radius.** 2px on buttons only — square, editorial blocks throughout; no large rounded
"card" or "glass panel" shapes.

**Buttons.** `.btn-primary` (ink fill → gold on hover), `.btn-secondary` (hairline border
→ solid ink border on hover). **Links.** `.link-underline` — a background-size underline
that grows in on hover/focus, not a color-only change, so it works for keyboard focus too.

**Forms.** 1px `--color-line-strong` border, no radius, gold border on focus (no removed
outline — `:focus-visible` also gets a 2px gold outline site-wide).

**Cards.** `.card` / ad hoc hairline-bordered blocks — no drop shadows, no glassmorphism.

**Breakpoints.** Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280) — verified at
320/375/390/430/768/1024/1440.

---

## 3. Information Architecture

```
/                     Home
/work                 Portfolio index (filterable: All/Branding/Graphic Design/Web/Packaging/Print/Digital)
/work/:slug           Case study (2 real projects)
/services             Services overview
/services/:slug       7 individual, independently-rankable service pages
/about                Company history + Mike Franco profile
/insights             Article index
/insights/:slug       5 educational articles
/contact              Start a Project qualification form + FAQ
/privacy-policy
/terms
```

Nav: **Work · Services (mega-menu) · About · Insights · Contact**, plus a visually
distinct **Start a Project** button. Services dropdown is click-toggled (not hover-only),
closes on outside click/Escape, and has a mobile full-panel equivalent — no interaction
depends exclusively on hover.

---

## 4. SEO / AEO

- Per-route `<title>`/meta description/canonical/OG/Twitter tags and JSON-LD via
  `src/components/SEO.tsx` (mounts/unmounts tags on route change).
- JSON-LD: `ProfessionalService` + `Person` (index.html, site-wide), `WebSite` (Home),
  `Service` (each service page), `CreativeWork` (each case study), `Article` (each
  insight), `FAQPage` (Contact), `AboutPage` (About).
- `public/sitemap.xml` lists every real route; `public/robots.txt` points to it.
- **Known limitation:** this is a client-rendered SPA with no SSR/prerendering, so the
  per-route metadata is only visible to crawlers that execute JavaScript. See README's
  "Known gaps" section — prerendering each route is the recommended follow-up for full
  AI/answer-engine crawler coverage.

---

## 5. Content Policy

Every fact on this site is either directly sourced from newrealm.com (tagline, years in
business, Mike Franco's bio, service descriptions, the two case studies) or is generic,
non-company-specific educational content (the Insights articles, FAQ answers). No
metrics, testimonials, additional team members, or client logos are fabricated. Where a
real number wasn't available, copy describes the qualitative outcome instead of
inventing a statistic.
