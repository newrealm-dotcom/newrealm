import { Link, useParams } from 'react-router-dom'
import { SEO, SITE_URL } from '../components/SEO'
import { getInsightBySlug, INSIGHTS } from '../data/insights'
import { assetUrl } from '../lib/assetUrl'
import { NotFound } from './NotFound'

export function InsightArticle() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getInsightBySlug(slug) : undefined

  if (!article) return <NotFound />

  const more = INSIGHTS.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          author: { '@type': 'Organization', name: 'New Realm Graphics' },
          publisher: { '@type': 'Organization', name: 'New Realm Graphics', url: SITE_URL },
          articleSection: article.category,
        }}
      />

      <article className="border-b border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-content)]">
          <Link to="/insights" className="link-underline text-sm text-[var(--color-ink-dim)]">
            ← All insights
          </Link>
          <p className="eyebrow mb-4 mt-6 text-center">{article.category}</p>
          {article.cover ? (
            <img
              src={assetUrl(article.cover)}
              alt=""
              className="w-full"
            />
          ) : null}
          <div className="py-[25px]">
            <h1 className="text-center font-[family-name:var(--font-display)] text-4xl font-medium leading-tight text-[var(--color-ink)] md:text-5xl">
              {article.title}
            </h1>
            <p className="prose-copy mx-auto mt-0 text-center text-lg text-[var(--color-ink-dim)]">{article.excerpt}</p>
          </div>
        </div>
      </article>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="prose-copy mx-auto space-y-10">
          {article.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-ink)]">
                  {section.heading}
                </h2>
              )}
              {section.body.map((p, j) => (
                <p key={j} className="mb-4 leading-relaxed text-[var(--color-ink-dim)]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {more.length > 0 && (
        <section className="border-t border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[var(--container-wide)]">
            <p className="eyebrow mb-8">More Insights</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {more.map((a) => (
                <Link key={a.slug} to={`/insights/${a.slug}`} className="group block">
                  <p className="eyebrow mb-2 text-[var(--color-ink-faint)]">{a.category}</p>
                  {a.cover ? (
                    <img
                      src={assetUrl(a.cover)}
                      alt=""
                      className="mb-4 block h-auto w-full"
                    />
                  ) : null}
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)]">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-band border-t border-[var(--color-line)] px-6 py-20 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium md:text-4xl">
          Ready to put this into practice?
        </h2>
        <Link to="/contact" className="btn btn-inverse mt-8">
          Start a Project
        </Link>
      </section>
    </>
  )
}
