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
  /** Optional looping muted video for hero right column */
  heroVideo?: string
  /** Optional iframe src for hero right column (e.g. carousel embed) */
  heroEmbed?: string
}

/**
 * Grounded in the verbatim service copy supplied from newrealm.com/services/
 * (see git history) plus the real facts established there: 25+ years,
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
      lead: 'Most studios hand you a brand and walk away. We stay for the part where it has to work.',
      paragraphs: [
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
    heroEmbed: '/revolving-carousel.html?v=7',
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
    whatMakesUsDifferent: {
      lead: 'Design and development happen under one roof, alongside the copywriting, motion graphics, and digital marketing that go into the site — so the people building the pages are the same people who\'ll be asked to maintain and market them later.',
      paragraphs: [
        'Your website is often the first real conversation a customer has with your business, and it needs to do a lot at once: communicate who you are, earn trust quickly, work flawlessly on every device, and guide visitors toward taking action. A great site balances all of this without feeling crowded or complicated. Our design and development process starts with understanding your goals and your audience, then builds a site that looks distinctive, loads fast, is easy to navigate, and is structured to grow alongside your business.',
        'Design and development happen under one roof, alongside the copywriting, motion graphics, and digital marketing that go into the site. That means the words, visuals, animation, and code are shaped together from the start rather than pieced together at the end. Designers work directly with developers, so what gets approved is what gets built, and copy is written for the layout it will live in instead of being squeezed into boxes after the fact. The result is a site that feels cohesive, with every element working toward the same purpose.',
        'Just as important, the people building your pages are the same people who will be asked to maintain and market them later. That shared accountability changes how a site gets built. We make choices with the long term in mind: clean, well-organized code that\'s easy to update, content structures that support SEO and campaigns, and landing pages designed to convert when marketing starts driving traffic. You end up with a website that isn\'t just impressive on launch day, but ready to perform, adapt, and improve for years to come.',
      ],
    },
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
    heroEmbed: '/revolving-carousel.html?set=webdesign&v=3',
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
    whatMakesUsDifferent: {
      lead: 'Because we also design and build the sites and brands this marketing points to, strategy and execution stay connected — a campaign doesn\'t hand off to a landing page nobody involved in the campaign has seen.',
      paragraphs: [
        'Digital marketing works best when it\'s treated as part of a larger system rather than a standalone service. A campaign can drive thousands of clicks, but if those clicks land on a page that feels disconnected from the ad, loads slowly, or buries the next step, the budget is wasted. Our approach covers the full picture: search and social advertising, SEO, email, content, and analytics, all planned around clear goals and measured against real business outcomes rather than vanity metrics.',
        'Because we also design and build the sites and brands this marketing points to, strategy and execution stay connected. A campaign doesn\'t hand off to a landing page nobody involved in the campaign has seen. The same team that shapes the message also shapes where it leads, so the visual identity, tone, and offer carry through from the first impression to the final conversion. When the data shows something isn\'t working, we don\'t have to coordinate across three vendors to fix it. We can adjust the ad, the page, or the funnel itself, quickly and in step with each other.',
        'This continuity pays off over time. Every campaign teaches us something about your audience, and that insight flows directly back into your website, your messaging, and your brand. Instead of a series of disconnected efforts, you get a marketing operation that learns and improves as a whole, with each piece strengthening the others and every dollar working toward the same goal.',
      ],
    },
    nextStep: { label: 'Request a quote', to: '/contact' },
    subServices: ['Digital strategy', 'Search marketing', 'Content marketing', 'Conversion optimization', 'Campaign development'],
    hero: '/services/hero-digitalmarketing.png',
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
    whatMakesUsDifferent: {
      lead: 'SEO and AEO aren\'t bolted onto a finished site here — because we build the site too, technical fixes (page structure, schema, load speed) get made directly in the code rather than routed through a third party.',
      paragraphs: [
        'How people find information is changing. Traditional search engines still drive a large share of traffic, but more and more questions are now answered directly by AI assistants, voice search, and the summaries that appear at the top of search results. Search engine optimization (SEO) helps your site rank well when people search, while answer engine optimization (AEO) helps your content get recognized, cited, and surfaced by the tools that deliver answers instead of links. Together, they make sure your business is visible wherever your customers are looking, whether they\'re scrolling results pages or asking a question out loud.',
        'SEO and AEO aren\'t bolted onto a finished site here. Because we build the site too, technical fixes like page structure, schema markup, and load speed get made directly in the code rather than routed through a third party. There\'s no waiting on another vendor to implement recommendations, and no gap between the people who identify an issue and the people who fix it. Clean heading hierarchies, structured data that helps search engines and AI tools understand your content, fast load times, and mobile-friendly layouts are built in from the foundation, not patched on afterward.',
        'That technical groundwork is paired with content strategy designed for how people actually search today. We research the questions your customers are asking, write clear and authoritative content that answers them directly, and organize it so both search engines and answer engines can easily interpret and trust it. As search behavior and algorithms evolve, we monitor performance and refine both the content and the code behind it, so your visibility continues to grow instead of quietly slipping over time.',
      ],
    },
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
    hero: '/services/hero-SEO-AEO.webp',
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
    whatMakesUsDifferent: {
      lead: 'Ongoing maintenance of client sites and apps is handled by the same team responsible for New Realm\'s own online data services and digital properties — this is a standing discipline here, not an afterthought add-on.',
      paragraphs: [
        'A website or app is never truly finished. Once it launches, the real work begins: software updates, security patches, performance tuning, content changes, and the steady stream of small fixes that keep everything running smoothly. Left unattended, even a well-built site gradually slows down, falls behind on security, and starts to feel dated to the people using it. Our maintenance service keeps your digital properties healthy, secure, and current, so they continue to perform the way they did on launch day, and better.',
        'Ongoing maintenance of client sites and apps is handled by the same team responsible for New Realm\'s own online data services and digital properties. This is a standing discipline here, not an afterthought add-on. We rely on these same practices every day to keep our own systems reliable, which means the monitoring, backups, update schedules, and incident response we apply to your site are tested against real stakes, not just written into a service agreement. When something needs attention, it\'s handled by people who know the work intimately and treat uptime and security as core responsibilities.',
        'That consistency gives you something most maintenance plans can\'t: continuity. The team looking after your site understands how it was built, why decisions were made, and how it fits into your broader business. Instead of explaining your setup to a new support contact every time an issue comes up, you work with people who already know it, can spot problems before they become outages, and can recommend improvements as your needs grow. The result is a site or app that stays dependable over the long term, and a partner who treats its care as seriously as its creation.',
      ],
    },
    nextStep: { label: 'Talk about ongoing support', to: '/contact' },
    subServices: ['Content updates', 'WordPress maintenance', 'Security', 'Performance optimization', 'Troubleshooting', 'App/site management'],
    hero: '/services/hero-web-app-maint.webp',
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
    whatMakesUsDifferent: {
      lead: 'The same team designing the packaging also handles print production more broadly — so production constraints get caught during design, not after the first run comes back wrong.',
      paragraphs: [
        'Packaging is often the moment a customer decides whether to pick up your product or walk past it. It has to stand out on a crowded shelf or in a shipping box, communicate what\'s inside at a glance, reflect the quality of the brand, and still protect the product on its way to the customer. Good product design works the same way, balancing how something looks with how it feels, functions, and holds up in real use. Our process starts with your product, your customer, and the environment where they\'ll meet, then builds packaging and product designs that are as practical as they are memorable.',
        'The same team designing the packaging also handles print production more broadly, so production constraints get caught during design, not after the first run comes back wrong. Dielines, material choices, finishing effects like foils and embossing, color accuracy across different substrates, and the realities of how a box folds, stacks, and ships are all considered from the first concept. Designs are developed with manufacturing in mind, which means fewer surprises at the proof stage, fewer costly reprints, and a finished product that matches what was approved.',
        'This approach keeps creativity and practicality working together rather than pulling against each other. Ambitious ideas get tested against what\'s actually achievable within your budget and timeline, and when a constraint appears, we can adjust the design with a clear understanding of the tradeoffs. Because packaging is designed alongside your broader brand, it also stays consistent with your website, marketing, and printed materials. The result is packaging that looks great in the mockup, arrives exactly right from the printer, and represents your product well from the shelf to the customer\'s hands.',
      ],
    },
    nextStep: { label: 'Start a project', to: '/contact' },
    subServices: ['Packaging design', 'Product graphics', 'Prototyping', 'Production preparation'],
    heroEmbed: '/revolving-carousel.html?set=packaging&v=4',
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
    whatMakesUsDifferent: {
      lead: 'Twenty-plus years in print and production sit alongside the digital side of the business — a combination that has gotten rare as most studios specialize in one or the other.',
      paragraphs: [
        'Print remains one of the most tangible ways a brand shows up in the world. Business cards, brochures, packaging, signage, and trade show materials are often the pieces people hold in their hands, keep on their desks, or see in person, and they leave a lasting impression when they\'re done well. Getting print right takes more than good design. It requires a working knowledge of paper stocks, color management, finishing techniques, and production timelines, along with the judgment to know what will look great on screen but fall flat on press, and how to fix it before it does.',
        'Twenty-plus years in print and production sit alongside the digital side of our business, a combination that has become rare as most studios specialize in one or the other. That experience means we understand the details that separate a polished printed piece from an expensive reprint: proper bleeds and color profiles, how inks behave on different surfaces, and how to work with printers and vendors to keep quality high and costs in check. We manage the process from concept through final delivery, so you\'re not left translating between a designer and a print shop on your own.',
        'Having both disciplines under one roof keeps your brand consistent wherever it appears. The colors, typography, and messaging on your website carry through to your brochures, packaging, and signage without the drift that often happens when separate teams handle each medium. Campaigns can move seamlessly between digital and physical channels, and decisions made in one space inform the other. The result is a brand that feels unified and deliberate, whether someone encounters it on a phone screen or picks it up off a table.',
      ],
    },
    nextStep: { label: 'Start a project', to: '/contact' },
    subServices: ['Brochures', 'Catalogs', 'Direct mail', 'Signage', 'Corporate collateral', 'Specialty production'],
    hero: '/services/hero-printprod.webp',
  },
  {
    slug: 'character-design-development',
    navLabel: 'Character Design & Development',
    title: 'Character Design & Development',
    shortDescription:
      "From first sketch to full animation, we create characters people remember. Original characters, crafted by top Independent studios and animators, built from concept to creation. We don't just design characters. We give them a life of their own.",
    problem:
      'Most brands know they need a character, but few know how to build one that lasts. Generic mascots blend into the background, stock-style designs feel forgettable, and characters created without a clear personality or purpose rarely connect with an audience. Even worse, a character that looks great in a single illustration often falls apart the moment it needs to move, speak, appear on packaging, or scale across a series, game, or campaign. The result is wasted budget, inconsistent branding, and a character nobody remembers.',
    solution:
      'We collaborate with a hand-picked network of design studios and animators to create original characters with real depth, from the first rough sketch to a fully realized, production-ready personality. Every character begins with strategy: who your audience is, what the character stands for, and where it will live. From there, we develop personality profiles, backstories, and visual concepts, then refine them into model sheets, turnarounds, expression studies, and pose libraries. When your character is ready to move, our animation partners bring it to life with motion that feels true to who it is. You get a character designed not just to look good, but to work everywhere you need it.',
    result:
      'A distinctive character that audiences recognize instantly and genuinely care about. Your character becomes a lasting brand asset, one that builds emotional connection, strengthens recognition, and gives your story a face. With a complete style guide and production-ready files, your team and partners can use the character consistently across animation, packaging, merchandise, social media, games, and print for years to come.',
    whoItsFor:
      "Our character design and development services are built for brands looking for a memorable mascot, game studios and app developers who need heroes, villains, and supporting casts, publishers and authors bringing children's books or graphic novels to life, animation and media producers developing new series or IP, toy and merchandise companies creating licensable characters, and agencies that need a reliable creative partner for client campaigns.",
    whatsIncluded: [
      'Character concept',
      'Personality & backstory',
      'Model sheets & turnarounds',
      'Expression studies',
      'Pose libraries',
      'Animation-ready assets',
      'Style guides',
    ],
    whatMakesUsDifferent: {
      lead: "We don't rely on a single in-house style.",
      paragraphs: [
        "Instead, we match every project with the studios and animators best suited to it, whether that's playful 2D, stylized 3D, or something entirely new. That means you get specialist talent without having to find, vet, and manage it yourself. We also design for longevity: every character is built with its full lifecycle in mind, so it's ready to animate, merchandise, and grow as your brand does. And because we manage the entire process from concept to creation, you have one team, one point of contact, and one consistent vision from start to finish.",
        'We believe great characters start with a story, not a sketch. Before a single line is drawn, we dig into what makes your brand or project tick, who your audience is, and what emotions your character needs to spark. That foundation shapes every decision that follows, from silhouette and color palette to the way your character walks, talks, and reacts. The result is a character with genuine personality and purpose, one that feels authentic rather than manufactured, and gives audiences a reason to come back again and again.',
        'Just as importantly, you stay involved every step of the way. Our collaborative process includes clear milestones, structured feedback rounds, and transparent timelines, so there are no surprises and no guesswork. We hold every stage to the same high standard of quality control, ensuring consistency across every studio and animator involved. And when the project is complete, you receive full ownership of your character along with a comprehensive style guide, giving you the freedom and confidence to use it wherever your brand goes next.',
      ],
    },
    nextStep: { label: 'Start your project', to: '/contact' },
    subServices: [
      'Character concept',
      'Personality & backstory',
      'Model sheets & turnarounds',
      'Expression studies',
      'Pose libraries',
      'Animation-ready assets',
      'Style guides',
    ],
    heroVideo: '/services/hello.mp4',
  },
]

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}
