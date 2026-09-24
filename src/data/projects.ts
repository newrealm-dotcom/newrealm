export type ProjectCategory =
  | 'branding'
  | 'graphic-design'
  | 'web'
  | 'packaging'
  | 'print'
  | 'digital'
  | 'characters'

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
  /** Optional hero right-column fade slider. When set, replaces the single hero image. */
  heroImages?: string[]
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
    slug: 'lemira-estee',
    client: 'Lemira Estee',
    industry: 'Beauty',
    tag: 'Graphic Design',
    categories: ['graphic-design'],
    summary:
      "Self-Care Journal created for independent lipstick line, Lemira Estee and it's founder, Eileen Lemelman.",
    servicesProvided: ['Graphic Design'],
    challenge:
      'Lemira Estee needed to live in two worlds at once. It had to feel elegant and luxurious enough to stand beside established beauty brands, while honoring its faith-based roots with sincerity and grace. Every shade is tied to a woman of the Bible, so the design had to make those stories feel personal and inviting, not preachy or dated. On top of that, the brand speaks to two very different audiences: individual women shopping for themselves, and churches and organizations buying for fundraising and outreach. The identity had to connect with both.',
    strategy:
      "We started with Eileen's story. The image of her mother and grandmother applying lipstick before greeting the world became the emotional heart of the brand: beauty as a daily act of dignity, faith, and confidence. From there, we defined a visual language built on three ideas: timeless elegance, quiet strength, and legacy. We treated each shade as a character with its own story, giving every woman of the Bible a distinct identity within a cohesive system. The goal was a brand that feels like a keepsake, something passed down rather than simply purchased.",
    solution:
      "We designed a self-care journal that brought the Lemira Estee story off the lipstick tube and into women's daily lives. Created to promote a brand event, the journal became both a meaningful keepsake and a natural extension of the brand. Its pages invite women to slow down, reflect, and nurture their faith and confidence, echoing the same daily ritual of dignity that inspired the brand. We carried the brand's elegant palette, graceful typography, and scripture-inspired messaging throughout, so every page felt unmistakably Lemira Estee. More than a promotional piece, the journal gave attendees something personal to take home and return to long after the event ended.",
    results:
      "The journal did exactly what great brand pieces should: it kept the conversation going. Lemira Estee expanded its reach well beyond the event itself, introducing the brand to new women and communities who connected with its message of faith, beauty, and purpose. The response was overwhelmingly positive, with attendees embracing the journal as a thoughtful, beautifully crafted gift. By turning a single event into a lasting touchpoint, the journal helped establish Lemira Estee as a brand that doesn't just sell beauty products, but supports women in living with intention every day.",
    sourceUrl: 'https://newrealm.com/pf/case-study-popcorn-frights/',
    cover: '/projects/selectedwork-lemiraestee.webp',
    hero: '/projects/hero-lemiraestee.webp',
    resultsImage: '/projects/results-lemiraestee.webp',
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
  {
    slug: 'authentically-hemp',
    client: 'Authentically Hemp',
    industry: 'CBD',
    tag: 'Packaging Design',
    categories: ['packaging'],
    summary:
      'Full website, collateral design and label creation provided for Authentically Hemp, a provider of 100% natural, organically grown, low-THC, high-CBD industrial hemp oil.',
    servicesProvided: ['Packaging Design'],
    challenge:
      "The CBD market grew fast, and with that growth came confusion. Shelves and websites filled up with products making big promises, inconsistent quality, and little transparency, leaving many customers unsure who to trust. Authentically Hemp had something genuinely different to offer: pure, organically grown, quality-tested hemp oil made right here in the USA. But in an industry still shaking off old stigmas and crowded with look-alike brands, the challenge was making that authenticity visible. The brand needed to feel clean, credible, and approachable to everyday wellness seekers, including people trying CBD for the very first time, without looking clinical or getting lost in the noise.",
    strategy:
      "We built everything around the one word already in the brand's name: authentic. Rather than chasing the loud, trend-driven look common in the CBD space, we leaned into honesty, simplicity, and nature. The goal was to let the product's integrity speak for itself, from its organic roots to its rigorous quality testing, and to present hemp not as something edgy or mysterious, but as a natural part of a healthy, balanced lifestyle. We focused on building trust first: clear communication, a calm and grounded visual language, and a warm, welcoming tone that would make customers feel informed and comfortable from their very first interaction with the brand.",
    solution:
      "We created an e-commerce website, business collateral and packaging design that brings Authentically Hemp's natural, trustworthy character to life. Earthy tones, clean typography, and botanical details reflect the purity of the product, while clear, easy-to-read information highlights what matters most to customers: organic ingredients, quality testing, and American-made standards. Every touchpoint was designed to feel consistent and genuine, giving the brand a polished, professional presence that stands confidently apart from its competitors.",
    results:
      "Authentically Hemp now has a brand that looks as pure and trustworthy as the products behind it. The refreshed presence helped grow its customer base and strengthened its social following helping to support retail and online sales, and customers responded to the brand's honest, approachable feel. Most importantly, Authentically Hemp is now positioned as a name people can rely on in a crowded market, proving that in wellness, authenticity isn't just a promise, it's the brand.",
    sourceUrl: 'https://newrealm.com/pf/case-study-popcorn-frights/',
    cover: '/projects/work-authenticallhemp.webp',
    hero: '/projects/hero-authentically-hemp.webp',
    resultsImage: '/projects/hero-authenticallyhemp.webp',
  },
  {
    slug: 'dapple-gang',
    client: 'Dapple Gang',
    industry: 'Character Design',
    tag: 'Character Design',
    categories: ['characters'],
    summary:
      "Original characters have been designed and are being developed for a future animated kid's show that's currently in the works.",
    servicesProvided: ['Character Design'],
    challenge:
      "Dapple Gang set out to build something every dog lover could fall in love with: a crew of lovable pups, each with a personality big enough to carry its own stories. But a group of cute dogs alone isn't enough to build a lasting brand. With a cast this large, the biggest risk is sameness, characters that blur together, feel interchangeable, and never truly connect with an audience. Each pup needed to be instantly recognizable on its own while still looking and feeling like part of the same team. On top of that, the brand needed a way to turn casual fans into a real community, not just an audience watching from the sidelines.",
    strategy:
      'We approached the Dapple Gang like a team roster, where every member plays a role. Before designing a single character, we defined who each pup was and what they brought to the group: Buddy, the loyal leader and heart of the team; Pepper, the nonstop chatterbox and comedian; Whiskerz, the scruffy, wise elder; Shadow, the quiet strategist; Biscotti, the gentle giant and peacemaker; and more. Those personalities then shaped every visual decision, from breed, coat, and fur texture to posture and expression. To tie the crew together, we gave every member a signature jersey in their own color, creating a unified team look while making each character easy to spot and remember. And to invite fans in, we left the tenth spot on the team open.',
    solution:
      "We designed and developed a cast of distinctive characters, each with its own look, backstory, and role within the group. Rusty's long, flowing fur matches his untamed, adventurous spirit, Alfonse's sleek black-and-tan coat gives him his effortless cool, and Fredo Woofz carries the determined, kind-hearted energy of the newcomer destined to become an unlikely hero. Together, they form a balanced ensemble of leaders, dreamers, jokers, and protectors, with the natural chemistry and contrast that great stories are built on.",
    results:
      "The Dapple Gang now has a memorable, story-ready cast built to grow across books, animation, merchandise, and social media. Each character stands out with a clear personality and visual identity, while the matching jerseys make the group instantly recognizable as a team. The result is more than a set of characters: it's a world audiences can connect with, root for, and see themselves in.",
    sourceUrl: 'https://newrealm.com/pf/case-study-popcorn-frights/',
    cover: '/projects/work-dapplegang.webp',
    heroImages: [
      '/projects/hero-dapple-logo.webp',
      '/projects/hero-fredo.webp',
      '/projects/hero-fonzie.webp',
      '/projects/hero-alfie.webp',
      '/projects/hero-buddy.webp',
    ],
    resultsImage: '/projects/results-dapplegang.webp',
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
  'graphic-design': 'Graphics',
  web: 'Web',
  packaging: 'Packaging',
  print: 'Print',
  digital: 'Digital',
  characters: 'Characters',
}
