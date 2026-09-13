export interface FAQItem {
  question: string
  answer: string
}

/** Real sales questions, answered honestly and generically — no fabricated
 * pricing or timelines presented as fixed facts. */
export const FAQ: FAQItem[] = [
  {
    question: 'How much does a professionally designed website cost?',
    answer:
      'It depends on scope — a small business marketing site, an e-commerce build, and a custom web application are different projects with different budgets. We scope cost against what the site actually needs to do, not a flat package price, and provide a quote after understanding your project.',
  },
  {
    question: 'How long does a website redesign take?',
    answer:
      'Most redesigns run several weeks to a few months, depending on the number of pages, whether content and photography already exist, and how much back-and-forth review is needed. We give a realistic timeline once we know the scope.',
  },
  {
    question: 'What is the difference between SEO and AEO?',
    answer:
      'SEO (Search Engine Optimization) is about ranking well in traditional search results like Google. AEO (Answer Engine Optimization) is about being the source that AI tools — Google AI Overviews, ChatGPT search, Copilot — pull from and cite directly when answering a question. The two overlap heavily but AEO puts more weight on clear, well-structured, directly quotable content.',
  },
  {
    question: "Does New Realm maintain websites it didn't build?",
    answer:
      'Yes. Website and app maintenance is a standing service here, independent of who originally built the site — including WordPress maintenance, security updates, performance work, and ongoing content changes.',
  },
  {
    question: 'Can New Realm handle design and printing?',
    answer:
      'Yes — graphic design and printing (brochures, catalogs, packaging, signage, business cards, and more) sit alongside the web and digital marketing services, produced by the same team.',
  },
  {
    question: 'Can New Realm manage an existing WordPress site?',
    answer:
      "Yes. We take on existing WordPress sites for ongoing maintenance, security, and updates — you don't need to have built the site with us originally.",
  },
  {
    question: 'How does a website redesign affect SEO?',
    answer:
      'A redesign can help or hurt SEO depending on how it\'s handled. Done carefully — with redirects preserved, page structure intact, and content improved rather than stripped — a redesign is usually a net gain. Done carelessly, it can break rankings overnight. We treat redirect mapping and technical SEO as part of the redesign process itself, not an afterthought.',
  },
]
