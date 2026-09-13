# New Realm Graphics — Creative Direction & Design System

This document is the single source of truth for the site build. It covers concept,
visual identity, experience journey, the signature 3D hero, and the motion system.

> **Correction (this revision):** an earlier draft of this document invented a
> "3D and motion design studio" positioning, a fictional 8-realm brand
> narrative, and a made-up portfolio/testimonial/metrics for New Realm
> Graphics. None of that was sourced from the real business. New Realm
> Graphics is an actual Denver, Colorado design studio, 20+ years in
> business, offering website design, graphic and logo design, packaging
> design, product/print design, and digital marketing (verified via search —
> this session could not directly browse newrealm.com due to network
> restrictions). The sections below have been corrected to only state
> verified facts. The dark, crystal-hero, premium visual *treatment* is kept
> as a deliberate stylistic choice for this rebuild, not a claim about the
> studio's own positioning — flagged explicitly wherever that distinction
> matters.

---

## 1. Creative Direction

**Concept.** New Realm Graphics has spent 20+ years helping small businesses
succeed online. Real tagline: *"Trends come and go. Diamonds are forever."*
This rebuild takes that tagline literally as its visual concept — a faceted
crystal ("The Core") that stays legible and well-made regardless of trend —
as a premium *presentation* of real, verified services, not an invented
brand story.

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

**Conversion goal.** One primary action — **"Get a Quote"** (matches the real
site's `/quote/` page) — repeated at three calibrated moments (nav, mid-page,
final CTA), leading to a lightweight project form. Secondary action —
**"View Portfolio"** — for browsers not ready to commit.

---

## 2. Experience Journey

Sourced content only — no invented process steps or testimonials.

| # | Section | Purpose | Content source |
|---|---|---|---|
| 0 | Loader | Set tone before content paints | Stylistic — logo mark assembles, progress as a thin light line |
| 1 | Hero | First impression + instant value clarity | Real tagline ("Trends come and go. Diamonds are forever."), real positioning (20+ yrs, small-business focus) |
| 2 | About | Frame the studio's experience | Real fact: 20+ years, staying progressive with current design standards |
| 3 | Services | What they do, make it concrete | Real service list: Website Design, Graphic & Logo Design, Packaging & Product Design, Digital Marketing |
| 4 | Portfolio | Credibility | Two real, linked case studies: Popcorn Frights Film Festival, Eric Kline Productions |
| 5 | CTA / Contact | Convert | Get a Quote — project form (not yet wired to a real backend/inbox) |
| 6 | Footer | Wayfinding | Sitemap, Denver location, copyright, back-to-top |

Sticky nav is transparent over the hero, gains a blurred `--void-2` backing
once scrolled, and always keeps "Get a Quote" visible.

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
