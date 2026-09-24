import { Link } from 'react-router-dom'
import type { ServiceCategory } from '../data/services'

const SERVICE_CARD_THEMES = [
  { bg: '#2dd4bf', fg: '#151412', muted: 'rgba(21, 20, 18, 0.72)', line: 'rgba(21, 20, 18, 0.18)' },
  { bg: '#60a5fa', fg: '#151412', muted: 'rgba(21, 20, 18, 0.72)', line: 'rgba(21, 20, 18, 0.18)' },
  { bg: '#fbbf24', fg: '#151412', muted: 'rgba(21, 20, 18, 0.72)', line: 'rgba(21, 20, 18, 0.18)' },
  { bg: '#34d399', fg: '#151412', muted: 'rgba(21, 20, 18, 0.72)', line: 'rgba(21, 20, 18, 0.18)' },
  { bg: '#fb7185', fg: '#151412', muted: 'rgba(21, 20, 18, 0.72)', line: 'rgba(21, 20, 18, 0.18)' },
  { bg: '#a3e635', fg: '#151412', muted: 'rgba(21, 20, 18, 0.72)', line: 'rgba(21, 20, 18, 0.18)' },
  { bg: '#fb923c', fg: '#151412', muted: 'rgba(21, 20, 18, 0.72)', line: 'rgba(21, 20, 18, 0.18)' },
  { bg: '#67e8f9', fg: '#151412', muted: 'rgba(21, 20, 18, 0.72)', line: 'rgba(21, 20, 18, 0.18)' },
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
      className="@container/card group relative flex h-full min-h-[420px] min-w-0 flex-col overflow-hidden rounded-2xl px-5 pb-5 pt-7 sm:px-6 sm:pb-6 sm:pt-8 md:px-8 md:pb-8 md:pt-9 md:shadow-[inset_0_0_0_7px_#fff] lg:px-[50px] lg:pb-[50px] md:group-hover:shadow-none"
      style={{ color: theme.fg }}
    >
      <div
        className="absolute inset-0 -z-10 transition-[filter] duration-300 ease-out group-hover:brightness-[3]"
        style={{ backgroundColor: theme.bg }}
        aria-hidden="true"
      />
      <span
        className="text-[0.9rem] font-semibold tracking-[0.16em] transition-opacity duration-300 group-hover:opacity-0"
        style={{ color: theme.muted }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-5 max-w-full font-[family-name:var(--font-display)] text-[clamp(1.38rem,6cqi,2.22rem)] font-medium leading-snug text-balance transition-opacity duration-300 group-hover:opacity-0">
        {service.navLabel}
      </h3>
      <p
        className="mt-3 max-w-full text-[clamp(0.96rem,3.84cqi,1.08rem)] leading-relaxed text-pretty transition-opacity duration-300 group-hover:opacity-0"
        style={{ color: theme.muted }}
      >
        {service.shortDescription}
      </p>
      <ul className="mt-6 min-w-0 flex-1 transition-opacity duration-300 group-hover:opacity-0 sm:mt-8">
        {service.subServices.map((item) => (
          <li
            key={item}
            className="max-w-full border-b py-2.5 text-[clamp(0.96rem,3.84cqi,1.08rem)] leading-snug text-pretty sm:py-3"
            style={{ borderColor: theme.line, color: theme.fg }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div
        className="pointer-events-none absolute inset-0 z-10 flex min-w-0 flex-col items-center justify-center gap-4 overflow-hidden px-5 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 sm:gap-6 sm:px-6 md:px-8 lg:px-[50px]"
        style={{ color: theme.fg }}
      >
        <h3 className="w-full max-w-full text-center font-[family-name:var(--font-display)] text-[clamp(1.5rem,8.4cqi,3.3rem)] font-medium leading-snug text-balance">
          {service.navLabel}
        </h3>
        <span className="shrink-0 text-[1.05rem] font-bold hover:underline hover:underline-offset-4">Learn more →</span>
      </div>
    </Link>
  )
}
