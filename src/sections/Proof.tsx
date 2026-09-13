import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { KineticText } from '../components/KineticText'
import { gsap } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

const WORK = [
  { n: '01', title: 'Aurora — Retail Flagship', tag: 'Spatial / 3D', from: '#7C5CFF', to: '#4CE0D2' },
  { n: '02', title: 'Lumen — Audio Launch Film', tag: 'Motion', from: '#4CE0D2', to: '#C9A66B' },
  { n: '03', title: 'Strata — Product Configurator', tag: 'Interactive Web', from: '#C9A66B', to: '#7C5CFF' },
  { n: '04', title: 'Vantage — Brand World', tag: '3D / Motion', from: '#7C5CFF', to: '#EDEBE6' },
]

const METRICS = [
  { value: '60+', label: 'Worlds shipped' },
  { value: '14', label: 'Countries served' },
  { value: '4.2M', label: 'Interactive sessions' },
  { value: '98%', label: 'Client return rate' },
]

function WorkTile({ item }: { item: (typeof WORK)[number] }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-line)]"
      style={{ willChange: 'transform' }}
    >
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
      />
      <div className="absolute inset-0 bg-[var(--color-void)]/40" />
      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="eyebrow text-[var(--color-bone-dim)]">{item.n}</span>
        <div>
          <p className="eyebrow mb-2 text-[var(--color-bone-dim)]">{item.tag}</p>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-bone)] md:text-2xl">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export function Proof() {
  return (
    <section id="work" data-realm-preset="hidden" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow mb-6">05 / Realm — Proof</p>
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

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-[var(--color-line)] pt-12 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div>
                <p className="font-[family-name:var(--font-display)] text-4xl font-light text-[var(--color-bone)] md:text-5xl">
                  {m.value}
                </p>
                <p className="mt-2 text-sm text-[var(--color-bone-dim)]">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
