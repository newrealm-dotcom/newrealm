import { Reveal } from '../components/Reveal'
import { KineticText } from '../components/KineticText'

const CAPABILITIES = [
  {
    n: '01',
    title: '3D Product & Brand Visuals',
    desc: 'Photoreal and stylized 3D renders, hero objects, and campaign visuals built to spec.',
  },
  {
    n: '02',
    title: 'Motion & Animation',
    desc: 'Kinetic identity systems, launch films, and interface motion that carries a brand voice.',
  },
  {
    n: '03',
    title: 'Interactive Web Experiences',
    desc: 'Real-time 3D sites and product configurators — engineered, not just decorated.',
  },
  {
    n: '04',
    title: 'Spatial & Immersive Design',
    desc: 'Environment design for exhibitions, AR previews, and virtual showrooms.',
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" data-realm-preset="hidden" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow mb-6">03 / Realm — Capabilities</p>
        </Reveal>
        <h2 className="mb-16 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-light tracking-tight text-[var(--color-bone)] md:text-5xl">
          <KineticText text="What we build" />
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.n} delay={i * 0.08} y={20}>
              <div
                data-cursor="hover"
                className="group relative h-full bg-[var(--color-void-2)] p-8 transition-colors duration-500 hover:bg-[var(--color-void-3)] md:p-12"
              >
                <span className="eyebrow text-[var(--color-bone-dim)]">{cap.n}</span>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-bone)] md:text-3xl">
                  {cap.title}
                </h3>
                <p className="mt-4 max-w-sm text-[var(--color-bone-dim)]">{cap.desc}</p>
                <div className="mt-8 h-px w-10 bg-[var(--color-line)] transition-all duration-500 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-[var(--color-ion-violet)] group-hover:to-[var(--color-ion-cyan)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
