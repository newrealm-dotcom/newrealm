# New Realm Graphics — Creative Direction & Design System

This document is the single source of truth for the site build. It covers concept,
visual identity, experience journey, the signature 3D hero, and the motion system.

---

## 1. Creative Direction

**Concept — "The Realm."**
New Realm Graphics builds crafted visual worlds for other brands. The site's
central metaphor is **The Core**: a single faceted object suspended in a dark
void that never fully reveals itself at once — it refracts, rotates, and opens
new facets as you engage with it. It stands for the studio's own craft: precision
geometry, engineered light, and complexity disciplined into something calm.
Every section of the site is a distinct "realm" — a self-contained environment
with its own light and composition — visited in sequence, like chapters.

**Positioning.** Precise, quiet, confident. The studio doesn't shout; the work
does. Confidence expressed through restraint: enormous negative space, one
idea per screen, motion that never fights for attention.

**Visual world.** An obsidian void lit by a single engineered light source.
Materials read as physical and expensive — brushed metal, frosted volumetric
glass, faceted crystal — never flat or "gamey." A fine film-grain overlay keeps
the void from feeling sterile or purely digital.

**Typography.**
- Display: **Bricolage Grotesque** (variable) — a grotesk with just enough
  personality in its curves to feel authored rather than templated. Used large,
  tight tracking, at low weight (300–500) for elegance and high weight (600–800)
  for punctuation moments.
- Body/UI: **Inter** — neutral, legible workhorse for paragraphs, labels, forms.
- Numerals/meta labels: Inter, uppercase, wide tracking, small size — used for
  section eyebrows ("01 / REALM"), acting like museum wall-labels.

**Color system.** 90% neutral, color spent only on energy/interaction:
| Token | Hex | Use |
|---|---|---|
| `--void` | #06070A | Base background |
| `--void-2` | #0B0D12 | Panel background, elevated surfaces |
| `--bone` | #EDEBE6 | Primary text on dark |
| `--bone-dim` | #9A9A9E | Secondary text |
| `--ion-violet` | #7C5CFF | Primary accent — energy, links, focus |
| `--ion-cyan` | #4CE0D2 | Secondary accent — rim light, gradient partner |
| `--metal-gold` | #C9A66B | Premium accent — primary CTA only |
| `--line` | rgba(237,235,230,0.10) | Hairline dividers |

Ion-violet → ion-cyan forms the signature gradient, used sparingly (progress
indicators, gradient text on one hero word, the CTA button glow) so it stays
special.

**Composition.** Asymmetric 12-column grid, generous margins, type large
enough to sit *in* the same depth plane as the 3D object rather than boxed
above it. Alternates full-bleed "realm" scenes with denser two-column
information panels for contrast and pacing.

**Materials, lighting, depth.** Single key light + violet/cyan rim lights,
soft volumetric fog, restrained bloom on emissive edges only. Depth built from
real camera dolly (not just CSS parallax) plus a shallow depth-of-field blur
that sharpens the current focal element and softens the rest.

**Motion language.** Slow, confident, physical. Custom easing
(`expo.out` for entrances, `power2.inOut` for transitions) — nothing bounces,
nothing overshoots. The Core's facets respond to scroll position, not clicks;
text reveals with a clip-path wipe, never a fade-only cheap effect; cursor
becomes a thin reticle ring that magnetizes toward interactive elements.

**Conversion goal.** One primary action — **"Start a Project"** — repeated at
three calibrated moments (nav, mid-page after proof, final CTA realm), leading
to a lightweight qualification form. Secondary action — **"View Selected
Work"** — for browsers not ready to commit.

---

## 2. Experience Journey

| # | Realm | Purpose | Key beats |
|---|---|---|---|
| 0 | Loader | Set tone before content paints | Logo mark assembles from facets, progress as a thin light line |
| 1 | Hero | Unforgettable first impression + instant value clarity | The Core enters, headline wipes in, one-line value prop, scroll cue |
| 2 | Manifesto | Frame *why* — the studio's thesis | Large kinetic type, Core recedes to background, ambient |
| 3 | Capabilities | What we build, make it concrete | 4 capability cards, each with a micro 3D facet preview, hover swaps material |
| 4 | Process | De-risk the engagement, build trust in method | Horizontal-feel scroll-linked steps 01–04 with a traveling light node |
| 5 | Proof | Credibility | Selected work grid (image/video tiles, tilt-on-hover), metrics strip |
| 6 | Testimonial | Emotional/social proof | Single large quote, minimal, client wordmark |
| 7 | CTA / Contact | Convert | The Core re-enters fully assembled + resolved, qualification form |
| 8 | Footer | Wayfinding, secondary conversion | Sitemap, socials, copyright, back-to-top |

Sticky nav is transparent over the hero, gains a blurred `--void-2` backing
past realm 1, and always keeps "Start a Project" visible.

---

## 3. Signature 3D Hero

- **Object:** "The Core" — an icosahedral crystal built from displaced,
  faceted geometry (`icosahedronGeometry` + custom vertex displacement),
  rendered with a physical glass/metal hybrid material (transmission +
  low roughness + anisotropy) so it reads as cut crystal, not a toy.
- **Lighting/camera:** one soft key light above-front, violet rim light left,
  cyan rim light right, slow-drifting environment for reflections, camera on
  a gentle idle orbit plus scroll-driven dolly-in.
- **Entrance:** Core fades in from pure black already mid-rotation, scale
  spring-eases up over ~1.4s while the headline wipes in behind it — object
  and type feel like they belong in the same room.
- **Mouse interaction:** Core's rotation subtly leads the pointer (parallax
  look-at, clamped), a low-opacity light rig follows the cursor for a
  "living" specular highlight.
- **Scroll response:** scroll drives rotation speed + camera dolly + material
  roughness (crystal "frosts" as you leave the hero), cross-fading into the
  Manifesto realm's ambient background version of the same object.
- **Reduced motion / low power:** static hero render (pre-baked look) with
  only opacity/scale entrance, no continuous animation loop.

---

## 4. Motion System

- **Engine:** Lenis for inertial smooth scroll; GSAP + ScrollTrigger for all
  scroll-choreography; no scroll-jacking of native scroll, just easing.
- **Text reveals:** clip-path wipe per line, staggered ~60ms, `expo.out`,
  triggered at 80% viewport entry.
- **Section transitions:** cross-fade + 24px translate, 0.6–0.9s
  `power2.inOut`; the 3D layer never hard-cuts, only continuously interpolates.
- **Hover/cursor:** custom ring cursor (18px), scales to 48px + fills on
  hoverable targets, hidden on touch. Buttons get a magnetic pull (±8px)
  toward the cursor within a 40px radius.
- **Timing scale:** 150ms (micro), 300ms (UI), 600ms (section), 1200ms+
  (hero-scale) — all easing centralized in one JS module, no ad hoc tweens.
- **Accessibility:** every animation respects `prefers-reduced-motion`
  (cross-fades only, no parallax/3D motion, cursor ring disabled); focus-visible
  states are never removed, just restyled to match the ring cursor; all
  scroll-triggered content is present in the DOM and readable with motion off.
- **Performance:** one shared R3F canvas (not one per section), capped pixel
  ratio, geometry disposed off-screen, animations run on transform/opacity
  only outside the canvas, IntersectionObserver gates ScrollTrigger work for
  offscreen sections.
