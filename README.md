# New Realm Graphics

Marketing site for New Realm Graphics — a premium, interactive 3D single-page
experience. See [`DESIGN.md`](./DESIGN.md) for the full creative direction,
experience journey, hero art direction, and motion system this build follows.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- `@react-three/fiber` / `@react-three/drei` / `three` — the signature 3D hero
- GSAP + ScrollTrigger — scroll choreography and reveals
- Lenis — smooth scroll

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build
npm run preview  # preview the production build
```

## Notes for launch

- The `Scene` (WebGL) component is code-split and lazy-loaded so the initial
  bundle stays light; it mounts after first paint.
- All motion respects `prefers-reduced-motion`: smooth scroll, the cursor
  ring, kinetic text, and the 3D scene's continuous motion are disabled and
  content renders in its final state immediately.
- The contact form (`src/sections/CTA.tsx`) is UI-complete but not wired to a
  backend — plug in a form provider (e.g. Formspree) or a serverless
  endpoint where the `onSubmit` handler currently simulates a request.
- `public/robots.txt` and `public/sitemap.xml` reference
  `https://newrealmgraphics.com` — update to the real production domain
  before launch, along with the Open Graph/Twitter URLs in `index.html`.
