import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { ServiceCard } from '../components/ServiceCard'
import { SERVICES } from '../data/services'
import { assetUrl } from '../lib/assetUrl'

export function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Branding & graphic design, website design & development, digital marketing, SEO/AEO, website & app maintenance, packaging, print, and character design — New Realm Graphics' full range of services."
        path="/services"
      />

      <section className="border-b border-[var(--color-line)] bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[var(--container-wide)] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Services</p>
            <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
              Brand, website, and digital work — under one roof.
            </h1>
            <p className="prose-copy mt-6 text-lg text-[var(--color-ink-dim)]">
              Twenty-plus years spanning both traditional creative services and modern digital marketing — most studios
              specialize in one; New Realm works across both.
            </p>
          </div>
          <div className="w-full">
            <img
              src={assetUrl('/services/img-hero-services.webp')}
              alt=""
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section
        className="w-full bg-repeat pt-[50px] md:pt-[100px] md:pb-[100px]"
        style={{
          backgroundImage: `url(${assetUrl('/services/service-boxes-bg.webp')})`,
        }}
      >
        <div className="w-full px-5 pb-[50px] sm:px-8 md:px-[100px] md:pb-0">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 xl:grid-cols-3 xl:gap-[100px]">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60} className="min-w-0">
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band border-t border-[var(--color-line)] px-6 py-20 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium md:text-4xl">
          Not sure which service fits?
        </h2>
        <p className="mt-4 md:whitespace-nowrap">
          Tell us what you're trying to accomplish — we'll point you in the right direction.
        </p>
        <Link to="/contact" className="btn btn-inverse mt-8">
          Start a Project
        </Link>
      </section>
    </>
  )
}
