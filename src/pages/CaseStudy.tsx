import { Link, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { getProjectBySlug, PROJECTS } from '../data/projects'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <NotFound />

  const related = PROJECTS.filter((p) => p.slug !== project.slug)

  return (
    <>
      <SEO
        title={project.client}
        description={project.summary}
        path={`/work/${project.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.client,
          about: project.industry,
          description: project.summary,
        }}
      />

      <section className="border-b border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-content)]">
          <Link to="/work" className="link-underline text-sm text-[var(--color-ink-dim)]">
            ← All work
          </Link>
          <p className="eyebrow mb-4 mt-6">{project.industry}</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
            {project.client}
          </h1>
          <p className="prose-copy mt-6 text-lg text-[var(--color-ink-dim)]">{project.summary}</p>

          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-[var(--color-line)] pt-8">
            <div>
              <p className="eyebrow mb-1">Client</p>
              <p className="text-sm text-[var(--color-ink)]">{project.client}</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Industry</p>
              <p className="text-sm text-[var(--color-ink)]">{project.industry}</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Services Provided</p>
              <p className="text-sm text-[var(--color-ink)]">{project.servicesProvided.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[var(--container-content)] grid-cols-1 gap-12 md:grid-cols-3">
          <Reveal>
            <p className="eyebrow mb-3">The Challenge</p>
            <p className="text-[var(--color-ink-dim)]">{project.challenge}</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow mb-3">The Strategy</p>
            <p className="text-[var(--color-ink-dim)]">{project.strategy}</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="eyebrow mb-3">The Solution</p>
            <p className="text-[var(--color-ink-dim)]">{project.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-2)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-content)]">
          <p className="eyebrow mb-3">The Results</p>
          <p className="prose-copy text-lg text-[var(--color-ink-dim)]">{project.results}</p>
          <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="link-underline mt-6 inline-block text-sm font-medium text-[var(--color-ink)]">
            View the full case study on newrealm.com →
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[var(--container-wide)]">
            <p className="eyebrow mb-8">Related Work</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-[var(--color-line)] px-6 py-20 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
          Have a similar project in mind?
        </h2>
        <Link to="/contact" className="btn btn-primary mt-8">
          Start a Project
        </Link>
      </section>
    </>
  )
}
