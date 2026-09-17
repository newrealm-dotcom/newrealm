import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { INSIGHTS } from '../data/insights'
import { assetUrl } from '../lib/assetUrl'

export function Insights() {
  return (
    <>
      <SEO
        title="Insights"
        description="Practical thinking on web design, branding, SEO, AEO, and digital marketing from New Realm Graphics."
        path="/insights"
      />

      <section className="border-b border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-4">Insights</p>
          <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
            Practical thinking on design and digital.
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((a) => (
              <Reveal key={a.slug}>
                <Link to={`/insights/${a.slug}`} className="group block">
                  <p className="eyebrow mb-3 text-[var(--color-ink-faint)]">{a.category}</p>
                  {a.cover ? (
                    <img
                      src={assetUrl(a.cover)}
                      alt=""
                      className="mb-4 block h-auto w-full"
                    />
                  ) : null}
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)]">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-sm text-[var(--color-ink-dim)]">{a.excerpt}</p>
                  <span className="link-underline mt-4 inline-block text-sm font-medium text-[var(--color-ink)]">Read →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
