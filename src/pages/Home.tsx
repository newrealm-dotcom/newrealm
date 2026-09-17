import { Link } from 'react-router-dom'
import { SEO, SITE_URL } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'
import { INSIGHTS } from '../data/insights'
import { TEAM } from '../data/team'

const DIFFERENTIATORS = [
  {
    label: '20+ Years Experience',
    detail: 'Design and digital work spanning two decades, not a recent pivot.',
    icon: '/icon-20plus-years.png',
  },
  {
    label: 'Web + Print Expertise',
    detail: 'A combination most studios have given up specializing in one direction.',
    icon: '/icon-web-and-print.png',
  },
  {
    label: 'End-to-End Creative Services',
    detail: 'Brand, site, print, and packaging handled under one roof.',
    icon: '/icon-multiple-industries.png',
  },
  {
    label: 'Ongoing Digital Support',
    detail: 'Maintenance, security, and updates continue after launch.',
    icon: '/icon-ongoing-support.png',
  },
]

/** Homepage services grid — first six categories, each with its own color block. */
const HOME_SERVICES = SERVICES.slice(0, 6)

const SERVICE_CARD_THEMES = [
  { bg: '#2dd4bf', fg: '#0f2f2a', muted: 'rgba(15, 47, 42, 0.72)', line: 'rgba(15, 47, 42, 0.18)' },
  { bg: '#60a5fa', fg: '#0f2744', muted: 'rgba(15, 39, 68, 0.72)', line: 'rgba(15, 39, 68, 0.18)' },
  { bg: '#fbbf24', fg: '#3b2505', muted: 'rgba(59, 37, 5, 0.72)', line: 'rgba(59, 37, 5, 0.18)' },
  { bg: '#34d399', fg: '#0f2f24', muted: 'rgba(15, 47, 36, 0.72)', line: 'rgba(15, 47, 36, 0.18)' },
  { bg: '#fb7185', fg: '#4a1020', muted: 'rgba(74, 16, 32, 0.72)', line: 'rgba(74, 16, 32, 0.18)' },
  { bg: '#a3e635', fg: '#1f2e08', muted: 'rgba(31, 46, 8, 0.72)', line: 'rgba(31, 46, 8, 0.18)' },
] as const

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
      <section className="border-b border-[var(--color-line)]">
        <div className="mx-auto grid w-full max-w-[var(--container-wide)] lg:max-w-none lg:grid-cols-2 lg:items-stretch">
          <div className="relative isolate overflow-hidden px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24 lg:flex lg:flex-col lg:justify-center lg:px-0 lg:pb-24 lg:pl-[100px] lg:pr-12 lg:pt-24">
            <div
              className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat lg:hidden"
              style={{ backgroundImage: "url('/hero-bg.webp')" }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 -z-10 bg-white/50 lg:hidden" aria-hidden="true" />
            <div
              className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white md:h-52 lg:hidden"
              aria-hidden="true"
            />
            <div className="relative text-left">
              <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-6xl lg:text-6xl xl:text-7xl">
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
            </div>
          </div>

          <div className="relative hidden min-h-[560px] overflow-hidden lg:block">
            <img
              src={`${import.meta.env.BASE_URL}hero-bg.webp`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-white/50" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* 02 — Selected Work */}
      <section className="border-b border-[var(--color-line)] bg-white px-6 py-20 md:px-10 md:py-28">
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
              <Reveal key={project.slug} className="h-full">
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
          <h2 className="mb-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
            Design and digital work that makes a business easier to understand, trust, and do business with.
          </h2>
          <p className="prose-copy mb-14 text-[var(--color-ink-dim)]">
            Six service areas spanning brand, web, marketing, search, maintenance, and packaging — built to work together
            under one roof.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {HOME_SERVICES.map((s, i) => {
              const theme = SERVICE_CARD_THEMES[i]
              return (
                <Reveal key={s.slug} delay={i * 60}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl p-8 md:p-9"
                    style={{ color: theme.fg }}
                  >
                    <div
                      className="absolute inset-0 -z-10 transition-[filter] duration-300 ease-out group-hover:brightness-[3]"
                      style={{ backgroundColor: theme.bg }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-xs font-semibold tracking-[0.16em] transition-opacity duration-300 group-hover:opacity-0"
                      style={{ color: theme.muted }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-[calc(1.5rem*1.4)] font-medium leading-tight transition-opacity duration-300 group-hover:opacity-0">
                      {s.navLabel}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed transition-opacity duration-300 group-hover:opacity-0"
                      style={{ color: theme.muted }}
                    >
                      {s.shortDescription}
                    </p>
                    <ul className="mt-8 flex-1 transition-opacity duration-300 group-hover:opacity-0">
                      {s.subServices.map((item) => (
                        <li
                          key={item}
                          className="border-b py-3 text-sm"
                          style={{ borderColor: theme.line, color: theme.fg }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span
                      className="mt-6 inline-block text-sm font-medium transition-opacity duration-300 group-hover:opacity-0"
                      style={{ color: theme.fg }}
                    >
                      Learn more →
                    </span>
                    <div
                      className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:px-9"
                      style={{ color: theme.fg }}
                    >
                      <h3 className="max-w-full text-center font-[family-name:var(--font-display)] text-[calc(1.5rem*1.4*2)] font-medium leading-tight">
                        {s.navLabel}
                      </h3>
                      <span className="text-sm font-semibold">Learn more →</span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
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
              <Reveal key={d.label} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-[150px] w-full items-center justify-center">
                  <img
                    src={d.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-[150px] w-auto max-w-full object-contain"
                  />
                </div>
                <p className="w-full font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-ink)]">
                  {d.label}
                </p>
                <p className="mt-2 w-full text-sm text-[var(--color-ink-dim)]">{d.detail}</p>
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
      <section className="relative z-10 overflow-visible border-b border-[var(--color-line)] bg-[var(--color-paper-2)]">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <Reveal className="flex flex-col justify-center px-6 py-20 md:px-10 md:py-28 lg:pl-[120px] lg:pr-12">
            <p className="eyebrow mb-4">Owner &amp; Operator</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
              {TEAM[0].name}
            </h2>
            <img
              src={`${import.meta.env.BASE_URL}signature.png`}
              alt=""
              aria-hidden="true"
              className="mt-4 w-3/4 lg:w-4/5"
            />
            <p className="prose-copy mt-6 text-[var(--color-ink-dim)]">{TEAM[0].bio[0]}</p>
            <Link to="/about" className="link-underline mt-6 inline-block text-sm font-medium text-[var(--color-ink)]">
              More about New Realm →
            </Link>
          </Reveal>
          <Reveal delay={100} className="relative min-h-[520px] lg:min-h-0">
            <div className="group relative mx-auto flex h-full w-full max-w-lg items-end justify-center lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-[-50px] lg:h-auto lg:mx-0 lg:max-w-none">
              <div className="relative h-full w-full max-w-full">
                <img
                  src={`${import.meta.env.BASE_URL}mike-franco.png?v=12`}
                  alt={TEAM[0].name}
                  className="h-full w-full max-w-full object-contain object-bottom transition-none group-hover:opacity-0"
                />
                <img
                  src={`${import.meta.env.BASE_URL}mike-franco-hover.png?v=12`}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-contain object-bottom opacity-0 transition-none group-hover:opacity-100"
                />
              </div>
            </div>
          </Reveal>
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
                  {a.cover ? (
                    <img
                      src={a.cover}
                      alt=""
                      className="mb-4 block h-auto w-full"
                    />
                  ) : null}
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
