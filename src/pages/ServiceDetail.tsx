import { Link, useParams } from 'react-router-dom'
import { SEO, SITE_URL } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { getServiceBySlug, SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'
import { NotFound } from './NotFound'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) return <NotFound />

  const relatedProjects = PROJECTS.filter((p) => p.slug === 'popcorn-frights-film-festival' || p.slug === 'eric-kline-productions').slice(0, 2)
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <SEO
        title={service.title}
        description={service.shortDescription}
        path={`/services/${service.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: service.title,
          provider: { '@type': 'ProfessionalService', name: 'New Realm Graphics', url: SITE_URL },
          areaServed: 'Denver, Colorado',
          description: service.shortDescription,
        }}
      />

      <section className="border-b border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-content)]">
          <Link to="/services" className="link-underline text-sm text-[var(--color-ink-dim)]">
            ← All services
          </Link>
          <p className="eyebrow mb-4 mt-6">Services</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
            {service.title}
          </h1>
          <p className="prose-copy mt-6 text-lg text-[var(--color-ink-dim)]">{service.shortDescription}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to={service.nextStep.to} className="btn btn-primary">
              {service.nextStep.label}
            </Link>
            <Link to="/work" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[var(--container-content)] grid-cols-1 gap-12 md:grid-cols-3">
          <Reveal>
            <p className="eyebrow mb-3">The Problem</p>
            <p className="text-[var(--color-ink-dim)]">{service.problem}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow mb-3">The Solution</p>
            <p className="text-[var(--color-ink-dim)]">{service.solution}</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="eyebrow mb-3">The Result</p>
            <p className="text-[var(--color-ink-dim)]">{service.result}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-2)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[var(--container-content)] grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">Who It's For</p>
            <p className="text-[var(--color-ink-dim)]">{service.whoItsFor}</p>

            <p className="eyebrow mb-3 mt-8">What's Included</p>
            <ul className="space-y-2">
              {service.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-ink-dim)]">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-[var(--color-ink-faint)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow mb-3">What Makes Us Different</p>
            <p className="text-[var(--color-ink-dim)]">{service.whatMakesUsDifferent}</p>
          </Reveal>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[var(--container-content)]">
            <p className="eyebrow mb-8">Related Work</p>
            <div className="flex flex-wrap gap-4">
              {relatedProjects.map((p) => (
                <Link key={p.slug} to={`/work/${p.slug}`} className="link-underline text-sm font-medium text-[var(--color-ink)]">
                  {p.client} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-8">Other Services</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="link-underline block text-sm font-medium text-[var(--color-ink)]">
                {s.navLabel} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band border-t border-[var(--color-line)] px-6 py-20 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium md:text-4xl">
          {service.nextStep.label}.
        </h2>
        <Link to={service.nextStep.to} className="btn btn-inverse mt-8">
          {service.nextStep.label}
        </Link>
      </section>
    </>
  )
}
