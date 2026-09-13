import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { KineticText } from '../components/KineticText'
import { gsap } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

const WORK = [
  {
    n: '01',
    title: 'Popcorn Frights Film Festival',
    tag: 'Website Design',
    desc: 'Website for the leading international genre film festival in the Southeast U.S., founded in Miami in 2015.',
    href: 'https://newrealm.com/pf/case-study-popcorn-frights/',
    from: '#7C5CFF',
    to: '#4CE0D2',
  },
  {
    n: '02',
    title: 'Eric Kline Productions',
    tag: 'Website & Logo Design',
    desc: 'Website and original logo for the Florida-based multi-media production company led by producer/director Eric Kline.',
    href: 'https://newrealm.com/pf/case-study-eric-kline-productions/',
    from: '#4CE0D2',
    to: '#C9A66B',
  },
]

function WorkTile({ item }: { item: (typeof WORK)[number] }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduced = useReducedMotion()

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(ref.current, {
      rotateX: py * -8,
      rotateY: px * 8,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800,
    })
  }

  const onLeave = () => {
    if (!ref.current) return
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power2.out' })
  }

  return (
    <a
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
      className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-xl border border-[var(--color-line)] p-6"
      style={{ willChange: 'transform' }}
    >
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
      />
      <div className="absolute inset-0 bg-[var(--color-void)]/50" />
      <span className="relative eyebrow text-[var(--color-bone-dim)]">{item.n}</span>
      <div className="relative">
        <p className="eyebrow mb-2 text-[var(--color-bone-dim)]">{item.tag}</p>
        <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-bone)] md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-[var(--color-bone-dim)]">{item.desc}</p>
      </div>
    </a>
  )
}

export function Proof() {
  return (
    <section id="work" data-realm-preset="hidden" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow mb-6">Portfolio</p>
        </Reveal>
        <h2 className="mb-16 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-light tracking-tight text-[var(--color-bone)] md:text-5xl">
          <KineticText text="Selected work" />
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {WORK.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.06}>
              <WorkTile item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 border-t border-[var(--color-line)] pt-10">
            <p className="font-[family-name:var(--font-display)] text-3xl font-light text-[var(--color-bone)] md:text-4xl">
              20+ years
            </p>
            <p className="mt-2 text-sm text-[var(--color-bone-dim)]">in the industry, helping small businesses succeed online.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
