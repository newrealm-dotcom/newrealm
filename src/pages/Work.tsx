import { useState } from 'react'
import { SEO } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { PROJECTS, CATEGORY_LABELS, type ProjectCategory } from '../data/projects'
import { assetUrl } from '../lib/assetUrl'

type FilterKey = 'all' | ProjectCategory

const FILTERS: FilterKey[] = ['all', 'branding', 'graphic-design', 'web', 'packaging', 'print']

export function Work() {
  const [filter, setFilter] = useState<FilterKey>('all')

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))

  return (
    <>
      <SEO
        title="Our Work"
        description="Selected branding, website, and design work from New Realm Graphics — a Fort Lauderdale, FL creative and digital agency."
        path="/work"
      />

      <section
        className="border-b border-[var(--color-line)] bg-cover bg-center px-6 py-16 md:px-10 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${assetUrl('/projects/chaotic-pattern-design.png')})`,
        }}
      >
        <div className="mx-auto max-w-[var(--container-wide)]">
          <p className="eyebrow mb-4">Work</p>
          <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
            Selected projects.
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-wide)]">
          <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Filter work by category">
            {FILTERS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`border px-4 py-2 text-sm transition-colors ${
                  filter === key
                    ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]'
                    : 'border-[var(--color-line-strong)] text-[var(--color-ink-dim)] hover:border-[var(--color-ink)] hover:bg-white hover:text-[var(--color-ink)]'
                }`}
              >
                {CATEGORY_LABELS[key].toUpperCase()}
              </button>
            ))}
          </div>

          {visible.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((project) => (
                <Reveal key={project.slug} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-[var(--color-ink-dim)]">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  )
}
