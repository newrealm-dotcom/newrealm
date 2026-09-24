import { Link, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { getProjectBySlug, getLatestProjects } from '../data/projects'
import { ProjectCardsSlider } from '../components/ProjectCardsSlider'
import { assetUrl } from '../lib/assetUrl'
import { NotFound } from './NotFound'

/**
 * Shared case-study layout for every /work/:slug page.
 * Copy an existing PROJECTS entry and fill hero / resultsImage / clientUrl —
 * the page structure stays the same.
 */
export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <NotFound />

  const related = getLatestProjects(5, project.slug)
  const heroImage = project.hero ?? project.cover
  const resultsImage = project.resultsImage

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

      {/* Hero — full-width 50/50, white */}
      <section className="border-b border-[var(--color-line)] bg-white pb-16 pt-0 md:pb-20">
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[35%_65%]">
          <div className="px-6 lg:px-[100px] lg:py-0">
            <Link to="/work" className="link-underline text-sm text-[var(--color-ink-dim)]">
              ← All work
            </Link>
            <p className="eyebrow mb-4 mt-6">{project.industry}</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
              {project.clientUrl ? (
                <a
                  href={project.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:underline-offset-4"
                >
                  {project.client}
                </a>
              ) : (
                project.client
              )}
            </h1>
            <p className="prose-copy mt-6 text-lg text-[var(--color-ink-dim)]">{project.summary}</p>
          </div>
          {heroImage ? (
            <div className="mt-8 w-full px-6 lg:mt-0 lg:p-[20px] lg:pr-[45px]">
              {project.clientUrl ? (
                <a href={project.clientUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={assetUrl(heroImage)}
                    alt=""
                    className="h-auto w-full object-contain"
                  />
                </a>
              ) : (
                <img
                  src={assetUrl(heroImage)}
                  alt=""
                  className="h-auto w-full object-contain"
                />
              )}
            </div>
          ) : null}
        </div>

        {/* Meta — Client / Industry / Services */}
        <div className="mt-10 w-full px-6 py-10 md:px-[100px] md:py-[20px]">
          <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-3">
            <div>
              <p className="eyebrow mb-3">Client</p>
              {project.clientUrl ? (
                <a
                  href={project.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-[var(--color-ink-dim)]"
                >
                  {project.client}
                </a>
              ) : (
                <p className="text-[var(--color-ink-dim)]">{project.client}</p>
              )}
            </div>
            <div>
              <p className="eyebrow mb-3">Industry</p>
              <p className="text-[var(--color-ink-dim)]">{project.industry}</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Services Provided</p>
              <p className="text-[var(--color-ink-dim)]">{project.servicesProvided.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Strategy / Solution */}
      <section
        className="px-6 py-16 md:p-[100px]"
        style={{
          backgroundColor: '#80c8c5',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
        }}
      >
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
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

      {/* Results — full width, 40% copy / 60% image, 50px side padding */}
      <section className="border-y border-[var(--color-line)] bg-[#fbbf24] py-16 md:py-20">
        <div className="grid w-full grid-cols-1 items-center gap-10 px-[50px] lg:grid-cols-[2fr_3fr] lg:gap-12">
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-3">The Results</p>
            <p className="text-lg text-[var(--color-ink-dim)]">{project.results}</p>
          </div>
          {resultsImage ? (
            <div className="w-full">
              {project.clientUrl ? (
                <a href={project.clientUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={assetUrl(resultsImage)}
                    alt=""
                    className="h-auto w-full object-contain"
                  />
                </a>
              ) : (
                <img
                  src={assetUrl(resultsImage)}
                  alt=""
                  className="h-auto w-full object-contain"
                />
              )}
            </div>
          ) : null}
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[var(--container-wide)]">
            <p className="eyebrow mb-8">Related Work</p>
            <ProjectCardsSlider>
              {related.map((p) => (
                <div key={p.slug} className="min-w-0 snap-start">
                  <ProjectCard project={p} />
                </div>
              ))}
            </ProjectCardsSlider>
          </div>
        </section>
      )}

      <section className="cta-band border-t border-[var(--color-line)] px-6 py-20 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium md:text-4xl">
          Have a similar project in mind?
        </h2>
        <Link to="/contact" className="btn btn-inverse mt-8">
          Start a Project
        </Link>
      </section>
    </>
  )
}
