import { Reveal } from '../components/Reveal'
import { KineticText } from '../components/KineticText'

const STEPS = [
  { n: '01', title: 'Discovery', desc: 'We map the brief, the audience, and the technical constraints before a single pixel moves.' },
  { n: '02', title: 'Concept', desc: 'Art direction, material studies, and motion sketches — the world’s rules get defined.' },
  { n: '03', title: 'Build', desc: 'Production in 3D, motion, and code, with staged reviews so nothing drifts off-brief.' },
  { n: '04', title: 'Launch', desc: 'Optimized delivery across web, film, and print — plus the assets to extend it yourself.' },
]

export function Process() {
  return (
    <section id="process" data-realm-preset="hidden" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow mb-6">04 / Realm — Process</p>
        </Reveal>
        <h2 className="mb-20 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-light tracking-tight text-[var(--color-bone)] md:text-5xl">
          <KineticText text="How it comes together" />
        </h2>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-[var(--color-line)] md:block" />
          <ol className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <li className="relative">
                  <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-void)] font-[family-name:var(--font-display)] text-sm text-[var(--color-bone)]">
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-medium text-[var(--color-bone)]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-bone-dim)]">{step.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
