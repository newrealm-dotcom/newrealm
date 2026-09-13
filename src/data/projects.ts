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
}

/**
 * Only real, sourced projects. Everything here is grounded in the case
 * studies published at the sourceUrl on newrealm.com — no invented metrics,
 * quotes, or details beyond what's stated there. Where a hard number isn't
 * available, "results" describes the strategic outcome instead of a stat.
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
  },
  {
    slug: 'eric-kline-productions',
    client: 'Eric Kline Productions',
    industry: 'Media / Film Production',
    tag: 'Website & Logo Design',
    categories: ['web', 'branding'],
    summary:
      'Website and original logo for the Florida-based multi-media production company led by producer/director Eric Kline.',
    servicesProvided: ['Logo design', 'Brand identity', 'Website design & development'],
    challenge:
      'A production company built around one director\'s reputation needed a visual identity and website that could stand alongside the production work itself — professional enough to present to studios and clients, distinct enough to be memorable.',
    strategy:
      "Build the identity first, then design the site around it, so the mark and the site reinforce the same impression rather than feeling like two separate projects.",
    solution:
      "New Realm designed an original logo for Eric Kline Productions and built the company's website around that identity.",
    results:
      "A cohesive brand and website that gives Eric Kline Productions a professional online presence matching the quality of its production work.",
    sourceUrl: 'https://newrealm.com/pf/case-study-eric-kline-productions/',
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
