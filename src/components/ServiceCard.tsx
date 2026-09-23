import { Link } from 'react-router-dom'
import type { ServiceCategory } from '../data/services'

const SERVICE_CARD_THEMES = [
  { bg: '#2dd4bf', fg: '#0f2f2a', muted: 'rgba(15, 47, 42, 0.72)', line: 'rgba(15, 47, 42, 0.18)' },
  { bg: '#60a5fa', fg: '#0f2744', muted: 'rgba(15, 39, 68, 0.72)', line: 'rgba(15, 39, 68, 0.18)' },
  { bg: '#fbbf24', fg: '#3b2505', muted: 'rgba(59, 37, 5, 0.72)', line: 'rgba(59, 37, 5, 0.18)' },
  { bg: '#34d399', fg: '#0f2f24', muted: 'rgba(15, 47, 36, 0.72)', line: 'rgba(15, 47, 36, 0.18)' },
  { bg: '#fb7185', fg: '#4a1020', muted: 'rgba(74, 16, 32, 0.72)', line: 'rgba(74, 16, 32, 0.18)' },
  { bg: '#a3e635', fg: '#1f2e08', muted: 'rgba(31, 46, 8, 0.72)', line: 'rgba(31, 46, 8, 0.18)' },
] as const

interface ServiceCardProps {
  service: ServiceCategory
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const theme = SERVICE_CARD_THEMES[index % SERVICE_CARD_THEMES.length]

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative flex h-full min-h-[420px] min-w-0 flex-col overflow-hidden rounded-2xl px-6 pb-6 pt-8 md:px-[50px] md:pb-[50px] md:shadow-[inset_0_0_0_7px_#fff] md:pt-9 md:group-hover:shadow-none"
      style={{ color: theme.fg }}
    >
      <div
        className="absolute inset-0 -z-10 transition-[filter] duration-300 ease-out group-hover:brightness-[3]"
        style={{ backgroundColor: theme.bg }}
        aria-hidden="true"
      />
      <span
        className="text-xs font-semibold tracking-[0.16em] transition-opacity duration-300 group-hover:opacity-0"
        style={{ color: theme.muted }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-5 break-words font-[family-name:var(--font-display)] text-[calc(1.5rem*1.4)] font-medium leading-tight transition-opacity duration-300 group-hover:opacity-0">
        {service.navLabel}
      </h3>
      <p
        className="mt-3 break-words text-sm leading-relaxed transition-opacity duration-300 group-hover:opacity-0"
        style={{ color: theme.muted }}
      >
        {service.shortDescription}
      </p>
      <ul className="mt-8 min-w-0 flex-1 transition-opacity duration-300 group-hover:opacity-0">
        {service.subServices.map((item) => (
          <li
            key={item}
            className="break-words border-b py-3 text-sm"
            style={{ borderColor: theme.line, color: theme.fg }}
          >
            {item}
          </li>
        ))}
      </ul>
      <span
        className="mt-6 inline-block text-sm font-medium transition-opacity duration-300 group-hover:opacity-0"
        style={{ color: theme.fg }}
      >
        Learn more →
      </span>
      <div
        className="pointer-events-none absolute inset-0 z-10 flex min-w-0 flex-col items-center justify-center gap-6 overflow-hidden px-6 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 md:px-[50px]"
        style={{ color: theme.fg }}
      >
        <h3 className="w-full max-w-full break-words text-center font-[family-name:var(--font-display)] text-3xl font-medium leading-tight sm:text-4xl lg:text-[calc(1.5rem*1.4*2)]">
          {service.navLabel}
        </h3>
        <span className="text-sm font-bold hover:underline hover:underline-offset-4">Learn more →</span>
      </div>
    </Link>
  )
}
