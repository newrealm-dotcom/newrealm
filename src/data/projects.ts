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
    cover: '/projects/black-diamond.webp',
    hero: '/BDE-hero-image.webp',
    resultsImage: '/projects/black-diamond.webp',
  },
]

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
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
