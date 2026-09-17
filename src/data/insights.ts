export interface InsightSection {
  heading?: string
  body: string[]
}

export interface InsightArticle {
  slug: string
  title: string
  category: string
  excerpt: string
  cover?: string
  sections: InsightSection[]
}

export const INSIGHTS: InsightArticle[] = [
  {
    slug: 'seo-vs-aeo',
    title: 'SEO vs. AEO: What Businesses Need to Know',
    category: 'SEO',
    cover: '/insights/seo-vs-aeo.webp',
    excerpt:
      'Search engines and answer engines reward different things now. Here is what changes and what stays the same.',
    sections: [
      {
        body: [
          'For twenty years, "getting found online" mostly meant one thing: ranking on the first page of Google. That is still true, but it is no longer the whole picture. A growing share of questions get answered directly — in an AI Overview, a ChatGPT search response, or a Copilot summary — without the user ever clicking through to a website. That shift is what Answer Engine Optimization (AEO) responds to.',
        ],
      },
      {
        heading: 'What SEO still does',
        body: [
          'Traditional SEO — technical site health, page speed, on-page optimization, backlinks, local listings — remains the foundation. If a site is slow, poorly structured, or thin on content, no amount of AEO work will fix that. SEO gets a site into the running.',
        ],
      },
      {
        heading: 'What AEO adds',
        body: [
          'AEO is about being the source an AI system chooses to cite or summarize. That means writing content that directly and clearly answers specific questions, structuring it so the answer is easy to extract (clear headings, concise definitions, well-formed lists), and using structured data (schema markup) so machines can understand what a page is actually saying — not just what it contains.',
          'In practice, the two disciplines overlap more than they conflict. A technically sound, well-organized, genuinely useful page tends to perform well in both traditional rankings and AI-generated answers. The difference is emphasis: AEO rewards content that answers a question in the first sentence, with reasoning and support below it — rather than burying the answer three paragraphs into a long, discursive post.',
        ],
      },
      {
        heading: 'The practical takeaway',
        body: [
          'Businesses do not need a separate AEO strategy bolted on top of SEO. They need content built to be quotable: clear entities (who you are, what you do, who you serve), direct answers to real customer questions, and clean structured data behind the page. Do that well, and both search engines and answer engines have a reason to surface you.',
        ],
      },
    ],
  },
  {
    slug: 'how-often-should-you-redesign-your-website',
    title: 'How Often Should You Redesign Your Website?',
    category: 'Web Design',
    cover: '/insights/how-often-should-you-redesign-your-website.webp',
    excerpt: 'There is no fixed number of years — but there are clear signs a site has fallen behind.',
    sections: [
      {
        body: [
          "\"Every three to five years\" is the answer people expect, and it is a reasonable rule of thumb — but it is the symptoms, not the calendar, that actually indicate a redesign is due.",
        ],
      },
      {
        heading: 'Signs it is time',
        body: [
          "The site does not work well on phones, even though most visitors arrive on one. Updating content requires calling a developer for even small changes. The design looks visibly dated next to competitors. Page speed has degraded as more plugins, scripts, and images have piled on over the years. Or the business itself has changed — new services, a repositioned brand, a different audience — and the site still represents the old version of the company.",
        ],
      },
      {
        heading: 'What does not require a full redesign',
        body: [
          'Not every problem needs a rebuild. Slow load times are sometimes a hosting or image-optimization problem. A dated look on an otherwise solid structure can sometimes be addressed with a visual refresh rather than a ground-up rebuild. A good maintenance relationship catches most of these issues before they compound into "we need to start over."',
        ],
      },
      {
        heading: 'The real cost of waiting too long',
        body: [
          'The longer a redesign is delayed, the more technical debt accumulates — outdated code, unsupported plugins, content that no longer matches search intent. Redesigns done reactively, under pressure, tend to be more expensive and riskier for SEO than ones planned proactively with redirects and content strategy built in from the start.',
        ],
      },
    ],
  },
  {
    slug: 'what-makes-a-website-convert',
    title: 'What Makes a Website Convert?',
    category: 'Web Design',
    cover: '/insights/what-makes-a-website-convert.webp',
    excerpt: 'Good design gets attention. Conversion is a different, more specific discipline.',
    sections: [
      {
        body: [
          'A beautiful website and a website that converts visitors into leads are related but not the same thing. Conversion depends on clarity and friction as much as aesthetics.',
        ],
      },
      {
        heading: 'Clarity first',
        body: [
          'A visitor should understand what a business does, who it is for, and why they should trust it within the first few seconds on the page. Vague headlines and generic stock imagery cost more conversions than bad color choices ever do.',
        ],
      },
      {
        heading: 'One clear next step',
        body: [
          'Pages with five competing calls to action convert worse than pages with one obvious one. Every page should answer: what does this visitor do next? A specific action ("Request a Quote," "View Our Work") outperforms a vague one ("Learn More") because it sets a clear expectation.',
        ],
      },
      {
        heading: 'Proof, placed early',
        body: [
          'Credibility signals — real work samples, years in business, specific outcomes — work best when they appear before the visitor has to go looking for them, not buried on a separate page three clicks deep.',
        ],
      },
      {
        heading: 'Friction is the silent killer',
        body: [
          'Slow load times, forms that ask for more information than necessary, and unclear pricing or process all add friction that quietly reduces conversion rate, even when nobody complains about it directly. Removing unnecessary form fields is often the single highest-leverage conversion fix available.',
        ],
      },
    ],
  },
  {
    slug: 'brand-identity-vs-logo-design',
    title: 'Brand Identity vs. Logo Design',
    category: 'Branding',
    cover: '/insights/brand-identity-vs-logo-design.webp',
    excerpt: 'A logo is one asset. A brand identity is the system that makes every asset feel like the same company.',
    sections: [
      {
        body: [
          'These terms get used interchangeably, but they describe different scopes of work — and confusing them is a common reason new businesses end up with a logo and nothing else to build on.',
        ],
      },
      {
        heading: 'Logo design',
        body: [
          'A logo is a single mark: a symbol, a wordmark, or a combination of the two. It is often the first deliverable a new business commissions, and it matters — but on its own, it does not tell a designer how to lay out a brochure, what colors to use in a presentation, or how a website header should look.',
        ],
      },
      {
        heading: 'Brand identity',
        body: [
          'A brand identity is the full system built around that mark: a defined color palette, typography choices, spacing and layout rules, photography or illustration style, and guidance for how the mark can and cannot be used. It is the difference between owning a logo file and owning a system that makes every future design decision faster and more consistent.',
        ],
      },
      {
        heading: 'Why the distinction matters',
        body: [
          'A business with only a logo tends to see its materials drift — different colors on the website than on the business cards, inconsistent fonts across print and digital. A business with a real identity system produces new materials faster, because most of the decisions were already made once, correctly, at the start.',
        ],
      },
    ],
  },
  {
    slug: 'wordpress-maintenance-checklist',
    title: 'WordPress Maintenance Checklist',
    category: 'Technology',
    cover: '/insights/wordpress-maintenance-checklist.webp',
    excerpt: 'What ongoing WordPress maintenance actually covers — and why "it still loads fine" is not the same as "it is maintained."',
    sections: [
      {
        body: [
          'WordPress powers a large share of the web, which also makes it a large target. A site that has not been actively maintained can look fine to a visitor while quietly accumulating risk and technical debt underneath.',
        ],
      },
      {
        heading: 'Core and plugin updates',
        body: [
          'WordPress core, themes, and plugins all receive security and compatibility updates. Skipping them is the most common way sites get compromised — and the most common reason a site breaks the one time an update finally does get applied, because three years of updates are being forced through at once.',
        ],
      },
      {
        heading: 'Security basics',
        body: [
          'Strong admin credentials, limits on login attempts, monitoring for injected code or unfamiliar admin accounts, and a real backup strategy that has actually been tested — not just scheduled and forgotten.',
        ],
      },
      {
        heading: 'Performance housekeeping',
        body: [
          'Image optimization, database cleanup, caching configuration, and removing plugins that are no longer used all keep a site fast. Performance tends to degrade gradually, one added plugin at a time, which is why it is easy to miss without someone checking regularly.',
        ],
      },
      {
        heading: 'Content and functionality checks',
        body: [
          'Forms that still deliver to the right inbox, broken links, 404s, and pages that render correctly after a theme or plugin update — the kind of small breakage that is easy for a business to miss because they are not the ones filling out their own contact form.',
        ],
      },
    ],
  },
]

export function getInsightBySlug(slug: string) {
  return INSIGHTS.find((i) => i.slug === slug)
}
