import { Reveal } from '../components/Reveal'
import { KineticText } from '../components/KineticText'

const CAPABILITIES = [
  {
    n: '01',
    title: 'Website Development & Graphic Design',
    desc: "We've designed and updated websites for a wide variety of companies across many industries — built to stay current for years, with systems that make it easy to update the site yourself, or we're happy to handle updates for you.",
  },
  {
    n: '02',
    title: 'Website Design, Development & Maintenance',
    desc: 'Years of experience in HTML, CSS, PHP, and Java — redesigning older sites or building from scratch, backed by a team covering digital and online marketing, motion graphics, animation, copywriting, and PR.',
  },
  {
    n: '03',
    title: 'Graphic Design & Printing',
    desc: 'Telling customer success stories through catalogs, brochures, corporate annual reports, flyers, magazines, postcards, business cards, and more — any project, any size, designed and printed.',
  },
  {
    n: '04',
    title: 'Product & Packaging Design',
    desc: "Packaging that's as functional as it is appealing, built with the latest software and technology so your product is end-user friendly and differentiates itself in the marketplace.",
  },
  {
    n: '05',
    title: 'Digital Marketing',
    desc: 'Premium digital marketing for brands that want to lead: SEO, Answer Engine Optimization (AEO), paid search/PPC, social media marketing, content strategy, email marketing, local search optimization, reputation management, conversion optimization, marketing automation, and advanced reporting — engineered around your brand and audience, with continuous testing to improve ROI.',
    wide: true,
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" data-realm-preset="hidden" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow mb-6">Services</p>
        </Reveal>
        <h2 className="mb-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-light tracking-tight text-[var(--color-bone)] md:text-5xl">
          <KineticText text="What we do" />
        </h2>
        <Reveal delay={0.1}>
          <p className="mb-16 max-w-2xl text-[var(--color-bone-dim)]">
            In today's digital world, who needs a brick-and-mortar location when
            you can be everywhere at any time? We work with all types of
            organizations to distill the essence of your value to your
            customers in easy-to-understand ways — going beyond a good first
            impression to build credibility, show off your skills, and close
            the sale.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.n} delay={i * 0.08} y={20} className={cap.wide ? 'md:col-span-2' : undefined}>
              <div
                data-cursor="hover"
                className="group relative h-full bg-[var(--color-void-2)] p-8 transition-colors duration-500 hover:bg-[var(--color-void-3)] md:p-12"
              >
                <span className="eyebrow text-[var(--color-bone-dim)]">{cap.n}</span>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-bone)] md:text-3xl">
                  {cap.title}
                </h3>
                <p className={`mt-4 text-[var(--color-bone-dim)] ${cap.wide ? 'max-w-2xl' : 'max-w-sm'}`}>{cap.desc}</p>
                <div className="mt-8 h-px w-10 bg-[var(--color-line)] transition-all duration-500 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-[var(--color-ion-violet)] group-hover:to-[var(--color-ion-cyan)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
