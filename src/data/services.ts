export interface SubService {
  name: string
}

export interface ServiceCategory {
  slug: string
  navLabel: string
  title: string
  shortDescription: string
  problem: string
  solution: string
  result: string
  whoItsFor: string
  whatsIncluded: string[]
  /** Plain string, or structured copy with a bold lead sentence + paragraphs */
  whatMakesUsDifferent: string | { lead: string; paragraphs: string[] }
  nextStep: { label: string; to: string; /** Optional CTA band heading; defaults to label */ ctaHeading?: string }
  subServices: string[]
  /** Optional hero image for /services/:slug right column */
  hero?: string
  /** Optional iframe src for hero right column (e.g. carousel embed) */
  heroEmbed?: string
}

/**
 * Grounded in the verbatim service copy supplied from newrealm.com/services/
 * (see git history) plus the real facts established there: 20+ years,
 * HTML/CSS/PHP/Java experience, an in-house team spanning digital marketing,
 * motion graphics, animation, copywriting and PR, and systems built so
 * clients can update their own sites or hand updates back to New Realm.
 * Category structure follows the requested navigation IA; sub-service
 * bullet lists are standard capability listings, not specific factual claims.
 */
export const SERVICES: ServiceCategory[] = [
  {
    slug: 'branding-graphic-design',
    navLabel: 'Branding & Graphic Design',
    title: 'Branding & Graphic Design',
    shortDescription: 'Identity systems and design work that make a business easier to recognize, trust, and remember.',
    problem:
      'Many small and mid-sized businesses operate with a logo and a handful of mismatched materials assembled over time — no consistent system tying them together across print and digital.',
    solution:
      'We build identity systems (marks, color, type, layout rules) and apply them consistently across everything a business puts in front of customers, from a business card to a website to a trade-show banner.',
    result:
      'A business that looks like one coherent company everywhere it shows up, with materials that are faster to produce because the system is already decided.',
    whoItsFor: 'Businesses launching a new brand, outgrowing a dated identity, or tired of inconsistent materials across vendors.',
    whatsIncluded: ['Brand identity', 'Logo design', 'Marketing collateral', 'Corporate design', 'Campaign creative'],
    whatMakesUsDifferent: {
      lead: 'Most studios hand you a brand and walk away.',
      paragraphs: [
        'We stay for the part where it has to work.',
        'A brand identity looks flawless in a presentation deck, but a deck is the easiest place a brand will ever live. The real test comes when the logo has to be foil-stamped on a business card, the palette has to survive uncoated paper, and the typography has to stay legible on a phone at arm\'s length. That\'s where most identities start to fray, because the studio that designed them is long gone and everyone else is left guessing.',
        'We carry the identity all the way through. We design and produce the packaging, signage, and print collateral, and we design, develop and build the website where your brand spends most of its working life. Because we\'re responsible for every medium, we design for all of them from day one: colors specified for screen and press, type chosen to read at 12 pixels and 12 feet, marks built to scale from a favicon to a storefront.',
        'The result is a brand that doesn\'t just photograph well. It shows up the same way everywhere your customers meet you, on paper and on screen, and keeps showing up that way long after the launch. One team, one standard, from the first sketch to the final print run to the live site.',
      ],
    },
    nextStep: {
      label: "Let's Get This Project Started",
      ctaHeading: 'Talk about your brand',
      to: '/contact',
    },
    subServices: ['Brand identity', 'Logo design', 'Marketing collateral', 'Corporate design', 'Campaign creative'],
    heroEmbed: '/revolving-carousel.html?v=6',
  },
  {
    slug: 'website-design-development',
    navLabel: 'Website Design & Development',
    title: 'Website Design & Development',
    shortDescription: 'Websites built and coded in-house — designed to represent the business well and hold up over years, not months.',
    problem:
      "A website that looked fine at launch but hasn't aged well, doesn't work on phones the way it should, or can't be updated without calling a developer for every small change.",
    solution:
      "We design and develop sites in HTML, CSS, PHP, and WordPress, built responsive from the start, with systems that make it easy for a client's own team to update content — or we handle updates directly if that's preferred.",
    result: 'A site the business can actually keep current, on any device, without starting over every redesign cycle.',
    whoItsFor: 'Businesses redesigning an aging site, launching a new one, or replacing a site nobody in-house can safely touch.',
    whatsIncluded: [
      'Custom website design',
      'WordPress development',
      'Responsive development',
      'E-commerce',
      'Landing pages',
      'Website redesign',
      'UI/UX',
    ],
    whatMakesUsDifferent:
      "Design and development happen under one roof, alongside the copywriting, motion graphics, and digital marketing that go into the site — so the people building the pages are the same people who'll be asked to maintain and market them later.",
    nextStep: { label: 'Discuss your website', to: '/contact' },
    subServices: [
      'Custom website design',
      'WordPress development',
      'Responsive development',
      'E-commerce',
      'Landing pages',
      'Website redesign',
      'UI/UX',
    ],
  },
  {
    slug: 'digital-marketing',
    navLabel: 'Digital Marketing',
    title: 'Digital Marketing',
    shortDescription: 'Strategy, content, and paid programs built around a specific brand and audience, not a generic playbook.',
    problem: "Running ads or posting content without a plan tied to the business's actual goals, audience, and offer.",
    solution:
      'We build a digital strategy first, then execute it — paid search, content, social, and email working toward the same measurable goal, with reporting that shows what is and isn\'t working.',
    result: 'Marketing spend and effort pointed at the channels that actually move the business forward, with ongoing testing to improve return over time.',
    whoItsFor: 'Businesses that need a coordinated digital presence, not one more disconnected campaign.',
    whatsIncluded: ['Digital strategy', 'Search marketing', 'Content marketing', 'Conversion optimization', 'Campaign development'],
    whatMakesUsDifferent:
      "Because we also design and build the sites and brands this marketing points to, strategy and execution stay connected — a campaign doesn't hand off to a landing page nobody involved in the campaign has seen.",
    nextStep: { label: 'Request a quote', to: '/contact' },
    subServices: ['Digital strategy', 'Search marketing', 'Content marketing', 'Conversion optimization', 'Campaign development'],
  },
  {
    slug: 'seo-aeo',
    navLabel: 'SEO + AEO',
    title: 'SEO + AEO',
    shortDescription: 'Technical and content work that helps a business get found in search results — and in the AI-generated answers that increasingly sit in front of them.',
    problem:
      'A well-built site that still doesn\'t show up in search, or that ranked fine a few years ago but is now getting bypassed by AI Overviews, ChatGPT search, and Copilot answers built from other sites\' content.',
    solution:
      'We handle technical SEO (site speed, structure, indexability), on-page and local SEO, and structured data/schema — plus Answer Engine Optimization: writing and structuring content so answer engines can extract and cite it directly.',
    result: 'Better visibility in traditional search results, and a real shot at being the source an AI answer engine quotes or links to.',
    whoItsFor: 'Businesses whose organic visibility has stalled, or who are starting to notice AI answers replacing clicks to their site.',
    whatsIncluded: [
      'Technical SEO',
      'On-page SEO',
      'Local SEO',
      'Content optimization',
      'Answer Engine Optimization',
      'AI-search optimization',
      'Structured data / schema',
    ],
    whatMakesUsDifferent:
      "SEO and AEO aren't bolted onto a finished site here — because we build the site too, technical fixes (page structure, schema, load speed) get made directly in the code rather than routed through a third party.",
    nextStep: { label: 'Request a website audit', to: '/contact' },
    subServices: [
      'Technical SEO',
      'On-page SEO',
      'Local SEO',
      'Content optimization',
      'Answer Engine Optimization',
      'AI-search optimization',
      'Structured data / schema',
    ],
  },
  {
    slug: 'website-app-maintenance',
    navLabel: 'Website & App Maintenance',
    title: 'Website & App Maintenance',
    shortDescription: "Ongoing care for a site or app — including ones New Realm didn't originally build.",
    problem: 'A site that goes stale, breaks after a plugin or platform update, or simply has no one responsible for keeping it running.',
    solution:
      'We handle content updates, WordPress maintenance, security patching, performance tuning, and troubleshooting as an ongoing relationship — the same care we apply to our own company\'s sites and apps.',
    result: 'A site that keeps working, keeps loading fast, and keeps getting updated, without the business needing an in-house developer.',
    whoItsFor: 'Businesses with a working site that just needs someone reliably keeping it maintained — including sites New Realm did not design.',
    whatsIncluded: ['Content updates', 'WordPress maintenance', 'Security', 'Performance optimization', 'Troubleshooting', 'App/site management'],
    whatMakesUsDifferent:
      'Ongoing maintenance of client sites and apps is handled by the same team responsible for New Realm\'s own online data services and digital properties — this is a standing discipline here, not an afterthought add-on.',
    nextStep: { label: 'Talk about ongoing support', to: '/contact' },
    subServices: ['Content updates', 'WordPress maintenance', 'Security', 'Performance optimization', 'Troubleshooting', 'App/site management'],
  },
  {
    slug: 'packaging-product-design',
    navLabel: 'Packaging & Product Design',
    title: 'Packaging & Product Design',
    shortDescription: 'Packaging designed to work on the shelf and in production, not just on screen.',
    problem: 'Packaging that looks good as a mockup but is expensive, awkward, or impossible to actually produce and ship.',
    solution:
      'We design packaging and product graphics using current software and production standards, then prepare files and prototypes so what gets approved is what actually gets manufactured.',
    result: 'Packaging that differentiates the product in the marketplace and holds up once it leaves the design file.',
    whoItsFor: 'Product businesses launching a new SKU or refreshing packaging that no longer stands out.',
    whatsIncluded: ['Packaging design', 'Product graphics', 'Prototyping', 'Production preparation'],
    whatMakesUsDifferent:
      'The same team designing the packaging also handles print production more broadly — so production constraints get caught during design, not after the first run comes back wrong.',
    nextStep: { label: 'Start a project', to: '/contact' },
    subServices: ['Packaging design', 'Product graphics', 'Prototyping', 'Production preparation'],
  },
  {
    slug: 'print-production',
    navLabel: 'Print & Production',
    title: 'Print & Production',
    shortDescription: 'Design and printing of the physical materials a business still relies on — catalogs, collateral, signage, and direct mail.',
    problem: 'Print materials treated as an afterthought, designed without production in mind, or disconnected from the brand shown online.',
    solution:
      'We design and print catalogs, brochures, corporate annual reports, flyers, magazines, postcards, business cards, signage, and direct mail — any project, any size — matched to the same brand system used online.',
    result: 'Print materials that read as part of the same company as the website, produced correctly the first time.',
    whoItsFor: 'Businesses that still need physical materials — trade shows, direct mail, retail signage, leave-behinds — done right.',
    whatsIncluded: ['Brochures', 'Catalogs', 'Direct mail', 'Signage', 'Corporate collateral', 'Specialty production'],
    whatMakesUsDifferent:
      'Twenty-plus years in print and production sit alongside the digital side of the business — a combination that has gotten rare as most studios specialize in one or the other.',
    nextStep: { label: 'Start a project', to: '/contact' },
    subServices: ['Brochures', 'Catalogs', 'Direct mail', 'Signage', 'Corporate collateral', 'Specialty production'],
  },
]

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}
