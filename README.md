# New Realm Graphics

Marketing site for New Realm Graphics — a Denver, Colorado design studio with 20+ years of
experience across branding, website design and development, print, packaging, and digital
marketing (SEO/AEO). This is a multi-page, editorial-style marketing site: Home, Work
(portfolio + case studies), Services (overview + 7 individual service pages), About, Insights
(articles), and a Start a Project contact/qualification form.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Router (client-side routing across all pages)
- No animation/3D libraries — motion is CSS transitions plus a small
  IntersectionObserver-based `Reveal` component, all respecting
  `prefers-reduced-motion`

An earlier version of this build used a dark, neon-accented "3D crystal" hero (Three.js,
GSAP, a custom cursor ring, a preloader). That direction was replaced: it read as a generic
"digital agency" gimmick rather than a premium, editorial creative-and-digital agency site,
and it pulled in three large runtime dependencies for effects that added no informational
value. The current build is a light paper/ink editorial system built around real,
sourced content only.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build
npm run preview  # preview the production build
```

## Content sourcing

All company facts on this site (the "Trends come and go. Diamonds are forever." tagline,
20+ years in business, the Mike Franco bio, the service descriptions, and the two portfolio
case studies — Popcorn Frights Film Festival and Eric Kline Productions) are grounded in
real, supplied content from newrealm.com. Nothing has been invented: no fabricated metrics,
testimonials, additional team members, client logos, or case-study numbers. Where a real
statistic wasn't available, the copy describes the strategic outcome qualitatively instead —
see `src/data/*.ts` for the source of truth for every page's content.

## Known gaps before a real launch

- **No real photography.** Only the two logo SVGs exist as real assets. Portfolio cards,
  the About page's team photo slot, and case-study galleries currently use typographic
  treatments or empty placeholders rather than stock imagery — swap in real project
  screenshots and a professional headshot for Mike Franco when available.
- **Contact form has no backend.** `src/pages/Contact.tsx` validates client-side and
  simulates a submission. Wire the `onSubmit` handler to a real form provider (e.g.
  Formspree) or serverless endpoint before launch, and connect the `trackEvent()` call to
  a real analytics setup.
- **No analytics configured.** No GA4/GSC/Clarity IDs are wired in — `trackEvent()` in
  `Contact.tsx` calls `window.gtag` if present but nothing initializes it. Add a real
  measurement ID and consent-aware initialization before launch.
- **No SSR/prerendering.** This is a client-rendered SPA; `src/components/SEO.tsx` updates
  `<title>`/meta/JSON-LD per route after mount, which Googlebot's renderer picks up but
  which crawlers that don't execute JavaScript (some AI/answer-engine crawlers) will not.
  For full AEO/AI-search coverage, prerender each route to static HTML at build time (e.g.
  `vite-plugin-ssr`, or a simple headless-browser prerender step in CI) before launch.
- **Legal pages are drafts.** `/privacy-policy` and `/terms` are placeholder starting
  points, not reviewed legal copy — have counsel review before launch.
- **No real social profiles.** None were supplied, so none are linked in the footer or
  schema `sameAs` — add them if real profiles exist.
