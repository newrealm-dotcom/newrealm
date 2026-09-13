import { Link } from 'react-router-dom'
import { SEO, SITE_URL } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'
import { INSIGHTS } from '../data/insights'
import { TEAM } from '../data/team'

const DIFFERENTIATORS = [
  { label: '20+ Years Experience', detail: 'Design and digital work spanning two decades, not a recent pivot.' },
  { label: 'Web + Print Expertise', detail: 'A combination most studios have given up specializing in one direction.' },
  { label: 'End-to-End Creative Services', detail: 'Brand, site, print, and packaging handled under one roof.' },
  { label: 'Ongoing Digital Support', detail: 'Maintenance, security, and updates continue after launch.' },
]

const WHY_US = [
  {
    title: 'A small, focused studio',
    body: 'Direct communication with the people doing the work — not a rotating account team.',
  },
  {
    title: 'Multidisciplinary by design',
    body: 'Design, development, print, and digital marketing under one roof, so a project never gets stuck at a handoff.',
  },
  {
    title: 'Built for the long term',
    body: 'Sites and brands built to be maintained for years, backed by ongoing support after launch.',
  },
  {
    title: 'Business outcomes first',
    body: "Creative work judged by whether it makes a business easier to understand, trust, and do business with.",
  },
]

export function Home() {
  const featured = PROJECTS[0]

  return (
    <>
      <SEO
        title="New Realm Graphics — Branding, Websites & Digital Marketing"
        description="New Realm Graphics is a Denver, Colorado design studio with 20+ years of experience in branding, website design and development, print, packaging, SEO/AEO, and digital marketing for small businesses."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'New Realm Graphics',
          url: SITE_URL,
        }}
      />

      {/* 01 — Hero */}
      <section className="border-b border-[var(--color-line)] px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-6">New Realm Graphics — Denver, Colorado</p>
          <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
            We Build Brands, Websites, and Digital Experiences That Perform.
          </h1>
          <p className="prose-copy mt-8 text-lg text-[var(--color-ink-dim)]">
            20+ years of design and digital experience — brand identity, website design and development, print and
            packaging, digital marketing, and SEO/AEO — for small businesses that need to look credible and be found
            online.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/work" className="btn btn-primary">
              View Our Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Start a Project
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['Brand & Design', 'Web Design & Dev', 'SEO / AEO', 'Print & Packaging'].map((label) => (
              <div key={label} className="border-t border-[var(--color-line-strong)] pt-3">
                <p className="text-sm font-medium text-[var(--color-ink)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Selected Work */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Selected Work</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
                Real projects, real outcomes.
              </h2>
            </div>
            <Link to="/work" className="link-underline text-sm font-medium text-[var(--color-ink)]">
              View all work →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — What We Do */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="mb-14 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
            Design and digital work that makes a business easier to understand, trust, and do business with.
          </h2>
          <div className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 60}
                className={i === SERVICES.length - 1 ? 'md:col-span-2' : undefined}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col justify-between bg-[var(--color-paper)] p-8 transition-colors hover:bg-[var(--color-paper-2)] md:p-10"
                >
                  <div>
                    <span className="eyebrow text-[var(--color-ink-faint)]">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-ink)]">
                      {s.navLabel}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm text-[var(--color-ink-dim)]">{s.shortDescription}</p>
                  </div>
                  <span className="link-underline mt-6 inline-block w-fit text-sm font-medium text-[var(--color-ink)]">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Experience / Differentiator */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-2)] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-4">20+ Years of Design + Digital Experience</p>
          <h2 className="prose-copy mb-14 font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
            Most studios specialize in traditional creative or in digital. New Realm has spent two decades in both.
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIATORS.map((d) => (
              <Reveal key={d.label}>
                <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-ink)]">{d.label}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{d.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Featured Case Study */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-4">Featured Case Study</p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
                {featured.client}
              </h2>
              <p className="eyebrow mt-4 text-[var(--color-ink-faint)]">{featured.industry}</p>
              <p className="prose-copy mt-6 text-[var(--color-ink-dim)]">{featured.challenge}</p>
              <Link to={`/work/${featured.slug}`} className="btn btn-secondary mt-8">
                Read the case study
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <div className="border border-[var(--color-line)] p-8">
                <p className="eyebrow mb-3 text-[var(--color-ink-faint)]">The Solution</p>
                <p className="text-[var(--color-ink-dim)]">{featured.solution}</p>
                <p className="eyebrow mb-3 mt-6 text-[var(--color-ink-faint)]">The Result</p>
                <p className="text-[var(--color-ink-dim)]">{featured.results}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 — Why New Realm */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-4">Why New Realm</p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item) => (
              <Reveal key={item.title}>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — About / Leadership */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-2)] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow mb-4">Owner &amp; Operator</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
                {TEAM[0].name}
              </h2>
              <p className="prose-copy mt-6 text-[var(--color-ink-dim)]">{TEAM[0].bio[0]}</p>
              <Link to="/about" className="link-underline mt-6 inline-block text-sm font-medium text-[var(--color-ink)]">
                More about New Realm →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 — Insights */}
      <section className="border-b border-[var(--color-line)] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Insights</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
                Recent thinking on design and digital.
              </h2>
            </div>
            <Link to="/insights" className="link-underline text-sm font-medium text-[var(--color-ink)]">
              View all insights →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {INSIGHTS.slice(0, 3).map((a) => (
              <Reveal key={a.slug}>
                <Link to={`/insights/${a.slug}`} className="group block">
                  <p className="eyebrow mb-3 text-[var(--color-ink-faint)]">{a.category}</p>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)]">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Final CTA */}
      <section className="px-6 py-24 text-center md:px-10 md:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
            Let's build something that works.
          </h2>
          <p className="mt-6 text-[var(--color-ink-dim)]">
            Tell us about your project — brand, website, or ongoing digital support — and we'll follow up shortly.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link to="/work" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
