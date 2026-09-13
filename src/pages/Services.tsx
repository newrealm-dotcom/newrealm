import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { SERVICES } from '../data/services'

export function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Branding & graphic design, website design & development, digital marketing, SEO/AEO, website & app maintenance, packaging, and print — New Realm Graphics' full range of services."
        path="/services"
      />

      <section className="border-b border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
            Brand, website, and digital work — under one roof.
          </h1>
          <p className="prose-copy mt-6 text-lg text-[var(--color-ink-dim)]">
            Twenty-plus years spanning both traditional creative services and modern digital marketing — most studios
            specialize in one; New Realm works across both.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <div className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50} className={i === SERVICES.length - 1 ? 'md:col-span-2' : undefined}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col justify-between bg-[var(--color-paper)] p-8 transition-colors hover:bg-[var(--color-paper-2)] md:p-10"
                >
                  <div>
                    <span className="eyebrow text-[var(--color-ink-faint)]">{String(i + 1).padStart(2, '0')}</span>
                    <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-ink)]">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm text-[var(--color-ink-dim)]">{s.shortDescription}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.subServices.slice(0, 4).map((sub) => (
                        <li key={sub} className="border border-[var(--color-line-strong)] px-2.5 py-1 text-xs text-[var(--color-ink-dim)]">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="link-underline mt-6 inline-block w-fit text-sm font-medium text-[var(--color-ink)]">
                    Explore {s.navLabel} →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-6 py-20 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
          Not sure which service fits?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[var(--color-ink-dim)]">Tell us what you're trying to accomplish — we'll point you in the right direction.</p>
        <Link to="/contact" className="btn btn-primary mt-8">
          Start a Project
        </Link>
      </section>
    </>
  )
}
