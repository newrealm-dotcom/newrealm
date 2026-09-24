import { Link, useParams } from 'react-router-dom'
import { SEO, SITE_URL } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { ServiceCard } from '../components/ServiceCard'
import { ServiceCardsSlider } from '../components/ServiceCardsSlider'
import { getServiceBySlug, SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'
import { assetUrl } from '../lib/assetUrl'
import { NotFound } from './NotFound'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) return <NotFound />

  const relatedProjects = PROJECTS.filter(
    (p) => p.slug === 'popcorn-frights-film-festival' || p.slug === 'black-diamond-enterprises',
  ).slice(0, 2)
  const otherServices = SERVICES.map((s, index) => ({ service: s, index })).filter(
    ({ service: s }) => s.slug !== service.slug,
  )

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
          areaServed: 'Fort Lauderdale, FL',
          description: service.shortDescription,
        }}
      />

      <section
        className={`border-b border-[var(--color-line)] bg-white py-6 md:py-8 ${
          service.slug === 'seo-aeo' ||
          service.slug === 'digital-marketing' ||
          service.slug === 'website-app-maintenance' ||
          service.slug === 'print-production'
            ? 'md:pb-[calc(2rem+50px)]'
            : ''
        }`}
      >
        <div
          className={`grid w-full grid-cols-1 items-center ${
            service.heroEmbed
              ? 'lg:grid-cols-[minmax(34rem,40%)_1fr] lg:items-stretch'
              : 'lg:grid-cols-[44%_56%]'
          }`}
        >
          <div className="flex min-w-0 flex-col justify-center px-6 lg:px-[64px]">
            <Link to="/services" className="link-underline w-fit text-sm text-[var(--color-ink-dim)]">
              ← All services
            </Link>
            <p className="eyebrow mb-4 mt-6">Services</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
              {service.title}
            </h1>
            <p className="prose-copy mt-6 text-lg text-[var(--color-ink-dim)]">{service.shortDescription}</p>
            <div className="mt-10 flex flex-wrap gap-4 lg:flex-nowrap">
              <Link to={service.nextStep.to} className="btn btn-primary shrink-0">
                {service.nextStep.label}
              </Link>
              <Link to="/work" className="btn btn-secondary shrink-0">
                View Our Work
              </Link>
            </div>
          </div>
          {service.heroEmbed ? (
            <div className="relative mt-6 min-h-[440px] w-full lg:mt-0 lg:min-h-[min(72vh,720px)]">
              <iframe
                src={assetUrl(service.heroEmbed)}
                title={`${service.title} gallery`}
                className="absolute inset-0 block h-full w-full border-0 bg-transparent"
                loading="lazy"
              />
            </div>
          ) : service.hero ? (
            <div className="mt-8 w-full px-6 lg:mt-0 lg:px-[20px] lg:pr-[45px]">
              <img
                src={assetUrl(service.hero)}
                alt=""
                className="h-auto w-full object-contain"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section
        className="px-[100px] py-16 md:py-[100px]"
        style={{
          backgroundColor: '#80c8c5',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
        }}
      >
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-x-[calc(3rem+50px)]">
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

      <section className="border-y border-[var(--color-line)] bg-[#fbbf24] px-[100px] py-16 md:py-[150px]">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal
            className={
              service.slug === 'branding-graphic-design' ||
              service.slug === 'digital-marketing' ||
              service.slug === 'website-app-maintenance' ||
              service.slug === 'print-production' ||
              service.slug === 'website-design-development' ||
              service.slug === 'seo-aeo' ||
              service.slug === 'packaging-product-design'
                ? 'text-[133%] [&_.eyebrow]:text-[1rem]'
                : undefined
            }
          >
            <p className="eyebrow mb-3">Who It's For</p>
            <p className="text-[var(--color-ink-dim)]">{service.whoItsFor}</p>

            <p className="eyebrow mb-3 mt-8">What's Included</p>
            <ul className="space-y-2">
              {service.whatsIncluded.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-2 text-[var(--color-ink-dim)] ${
                    service.slug === 'branding-graphic-design' ||
              service.slug === 'digital-marketing' ||
              service.slug === 'website-app-maintenance' ||
              service.slug === 'print-production' ||
              service.slug === 'website-design-development' ||
              service.slug === 'seo-aeo' ||
              service.slug === 'packaging-product-design'
                      ? 'text-[1em]'
                      : 'text-sm'
                  }`}
                >
                  <span
                    className={`h-1 w-1 shrink-0 bg-[var(--color-ink-faint)] ${
                      service.slug === 'branding-graphic-design' ||
              service.slug === 'digital-marketing' ||
              service.slug === 'website-app-maintenance' ||
              service.slug === 'print-production' ||
              service.slug === 'website-design-development' ||
              service.slug === 'seo-aeo' ||
              service.slug === 'packaging-product-design'
                        ? 'mt-[0.55em]'
                        : 'mt-2'
                    }`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow mb-3 !text-[calc(0.75rem*1.33)]">What Makes Us Different</p>
            {typeof service.whatMakesUsDifferent === 'string' ? (
              <p className="text-[var(--color-ink-dim)]">{service.whatMakesUsDifferent}</p>
            ) : (
              <div className="space-y-4 text-[var(--color-ink-dim)]">
                <p className="font-semibold text-[var(--color-ink)]">{service.whatMakesUsDifferent.lead}</p>
                {service.whatMakesUsDifferent.paragraphs.map((para) => {
                  const boldStart = para.indexOf('One team, one standard')
                  if (boldStart === -1) {
                    return <p key={para.slice(0, 48)}>{para}</p>
                  }
                  return (
                    <p key={para.slice(0, 48)}>
                      {para.slice(0, boldStart)}
                      <strong className="font-semibold text-[var(--color-ink)]">{para.slice(boldStart)}</strong>
                    </p>
                  )
                })}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[var(--container-wide)]">
            <p className="eyebrow mb-8">Related Work</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedProjects.map((p) => (
                <Reveal key={p.slug} className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-8">Other Services</p>
          <ServiceCardsSlider>
            {otherServices.map(({ service: s, index }) => (
              <div key={s.slug} className="min-w-0 snap-start">
                <Reveal className="h-full">
                  <ServiceCard service={s} index={index} />
                </Reveal>
              </div>
            ))}
          </ServiceCardsSlider>
        </div>
      </section>

      <section className="cta-band border-t border-[var(--color-line)] px-6 py-20 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium md:text-4xl">
          {service.nextStep.ctaHeading ?? service.nextStep.label}.
        </h2>
        <Link to={service.nextStep.to} className="btn btn-inverse mt-8">
          {service.nextStep.label}
        </Link>
      </section>
    </>
  )
}
