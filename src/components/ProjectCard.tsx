import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group relative flex h-full flex-col border border-[var(--color-line)] bg-[var(--color-paper-2)] transition-colors hover:border-[var(--color-ink)]"
    >
      <div className="flex items-start justify-between px-7 pt-7">
        <span className="eyebrow">{project.tag}</span>
        <span className="text-[var(--color-ink-faint)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5 13L13 5M13 5H6M13 5V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {project.cover ? (
        <div className="mt-6 px-7">
          <img
            src={project.cover}
            alt=""
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      ) : null}

      <div className="px-7 pb-7 pt-6">
        <p className="eyebrow mb-2 text-[var(--color-ink-faint)]">{project.industry}</p>
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-ink)]">
          {project.client}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-ink-dim)]">{project.summary}</p>
      </div>
    </Link>
  )
}
