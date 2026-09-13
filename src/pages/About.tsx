import { Link } from 'react-router-dom'
import { SEO, SITE_URL } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { TEAM } from '../data/team'

const CREDIBILITY = [
  { label: '20+ Years', detail: 'Design and digital experience' },
  { label: 'Multiple Industries', detail: 'Small businesses across sectors' },
  { label: 'Web + Print', detail: 'Both, under one roof' },
  { label: 'Ongoing Support', detail: 'Maintenance after launch' },
]

export function About() {
  const mike = TEAM[0]

  return (
    <>
      <SEO
        title="About"
        description="New Realm Graphics is a Denver, Colorado design studio with 20+ years of experience combining traditional design and print with modern website development and digital marketing."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          about: { '@type': 'ProfessionalService', name: 'New Realm Graphics', url: SITE_URL },
        }}
      />

      <section className="border-b border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-content)]">
          <p className="eyebrow mb-4">About</p>
          <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
            20+ years of design + digital experience.
          </h1>
          <p className="prose-copy mt-6 text-lg text-[var(--color-ink-dim)]">
            New Realm Graphics is a Denver, Colorado design studio that has spent over 20 years helping small
            businesses succeed online. The studio combines experience in traditional design and print with modern
            website development and digital marketing — a combination most agencies specialize away from as the
            industry has split into separate creative and digital shops.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {CREDIBILITY.map((c) => (
              <Reveal key={c.label}>
                <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-ink)]">{c.label}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-dim)]">{c.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-content)]">
          <p className="eyebrow mb-8">Owner &amp; Operator</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
            <Reveal>
              <div className="aspect-square w-full max-w-[200px] border border-[var(--color-line)] bg-[var(--color-paper-2)]" aria-hidden="true" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-ink)]">{mike.name}</h2>
              <p className="eyebrow mt-1 text-[var(--color-ink-faint)]">{mike.role}</p>
              <div className="prose-copy mt-6 space-y-4 text-[var(--color-ink-dim)]">
                {mike.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-6 py-20 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
          Let's talk about your project.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn btn-primary">
            Start a Project
          </Link>
          <Link to="/work" className="btn btn-secondary">
            View Our Work
          </Link>
        </div>
      </section>
    </>
  )
}
