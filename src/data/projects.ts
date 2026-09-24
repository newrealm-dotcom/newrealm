export type ProjectCategory = 'branding' | 'graphic-design' | 'web' | 'packaging' | 'print' | 'digital'

export interface Project {
  slug: string
  client: string
  industry: string
  tag: string
  categories: ProjectCategory[]
  summary: string
  servicesProvided: string[]
  challenge: string
  strategy: string
  solution: string
  results: string
  sourceUrl: string
  /** Optional outbound link on the Client name */
  clientUrl?: string
  /** Card thumbnail on /work and homepage */
  cover?: string
  /** Case-study hero image (right column). Falls back to cover if omitted. */
  hero?: string
  /** Case-study Results image (60% right column) */
  resultsImage?: string
}

/**
 * Case studies for /work/:slug. All entries share one layout in CaseStudy.tsx.
 * To add a project: copy an existing object, set slug/copy/assets (cover, hero,
 * resultsImage), and drop images in public/projects/.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'unearthed-rentals',
    client: 'Unearthed Rentals',
    industry: 'Luxury Event Rentals',
    tag: 'Website Design',
    categories: ['web'],
    summary:
      'Complete website overhaul for the Stuart, FL based Unearthed Rentals led by serial entrepreneur, Jade Smith.',
    servicesProvided: ['Website design & development'],
    challenge:
      "A South Florida rental company that started as the region's first vintage rental house had grown into a full design-forward furniture and décor resource, and its site needed to catch up. It had to serve two very different audiences at once: planners and designers who need to browse inventory quickly and build out large installs, and couples who need inspiration, confidence, and an easy path to booking for the biggest day of their lives.",
    strategy:
      'Treat the inventory like a curated showroom, not a catalog. We organized pieces by style, category, and event type so planners can pull a full look in minutes, while styled event galleries and clear service details (delivery, installation, and removal) help couples picture their day and trust the team behind it.',
    solution:
      "New Realm designed and built a website that reflects Unearthed's reputation for curated, one-of-a-kind rentals, giving the brand a polished online home that speaks to planners, venues, and couples alike, and turns browsing into bookings.",
    results:
      "A website that reflects Unearthed's evolution from South Florida's first vintage rental company into the region's go-to for design-forward event rentals, giving planners and couples a polished place to discover the collection and start booking.",
    sourceUrl: 'https://www.unearthedrentals.com',
    clientUrl: 'https://www.unearthedrentals.com',
    cover: '/projects/work-unearthed.webp',
    hero: '/projects/hero-unearthed.webp',
    resultsImage: '/projects/results-unearthed.webp',
  },
  {
    slug: 'black-diamond-enterprises',
    client: 'Black Diamond Enterprises',
    industry: 'Business Venture',
    tag: 'Website & Logo Design',
    categories: ['web', 'branding'],
    summary:
      'Website and original logo for the West Virginia-based company, Black Diamond Enterprises led by mineral extraction expert, Norm Mullins.',
    servicesProvided: ['Logo design', 'Brand identity', 'Website design & development'],
    challenge:
      'A mineral-extraction company led by Norm Mullins needed a professional mark and website that could represent Black Diamond Enterprises credibly to partners and clients — clear enough to signal expertise, polished enough to stand up in a traditional industry.',
    strategy:
      'Start with an original logo and identity, then build the website around that system so the brand and the site feel like one coherent presence rather than separate pieces.',
    solution:
      "New Realm designed an original logo for Black Diamond Enterprises and built the company's website around that identity.",
    results:
      'A cohesive brand and website that gives Black Diamond Enterprises a professional online presence matching the seriousness of its mineral-extraction work.',
    sourceUrl: 'https://newrealm.com/pf/case-study-eric-kline-productions/',
    clientUrl: 'https://blckdiamondenterprises.com/',
    cover: '/projects/black-diamond.webp',
    hero: '/BDE-hero-image.webp',
    resultsImage: '/projects/black-diamond.webp',
  },
  {
    slug: 'popcorn-frights-film-festival',
    client: 'Popcorn Frights Film Festival',
    industry: 'Entertainment / Film Festival',
    tag: 'Website Design',
    categories: ['web'],
    summary:
      'Website for the leading international genre film festival in the Southeast U.S., founded in Miami in 2015.',
    servicesProvided: ['Website design & development'],
    challenge:
      'An annual genre-film festival needs a site that can serve two very different audiences at once — press and industry contacts researching the festival year-round, and moviegoers who need to quickly find schedules, passes, and film info during the event itself.',
    strategy:
      'Design a site structure that stays useful in the off-season (festival history, press, submissions) while scaling cleanly to the high-traffic, time-sensitive needs of festival week.',
    solution:
      "New Realm designed and built the festival's website, giving Popcorn Frights a consistent, professional online presence to represent the festival to press, filmmakers, and audiences.",
    results:
      'A festival website that has supported Popcorn Frights as it has grown into an established fixture of the genre-film festival circuit.',
    sourceUrl: 'https://newrealm.com/pf/case-study-popcorn-frights/',
    clientUrl: 'https://popcornfrights.com/',
    cover: '/projects/popcorn-frights.jpg',
    hero: '/projects/casestudy-PopcornFrights.webp',
    resultsImage: '/projects/results-PopcornFrights.png',
  },
]


export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}

/** Newest-first project list (array order). Optionally exclude a slug. */
export function getLatestProjects(count = 5, excludeSlug?: string) {
  return PROJECTS.filter((p) => p.slug !== excludeSlug).slice(0, count)
}

export const CATEGORY_LABELS: Record<'all' | ProjectCategory, string> = {
  all: 'All',
  branding: 'Branding',
  'graphic-design': 'Graphic Design',
  web: 'Web',
  packaging: 'Packaging',
  print: 'Print',
  digital: 'Digital',
}
