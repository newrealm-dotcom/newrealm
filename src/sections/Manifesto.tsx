import { KineticText } from '../components/KineticText'
import { Reveal } from '../components/Reveal'

export function Manifesto() {
  return (
    <section data-realm-preset="manifesto" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-8">02 / Realm — Manifesto</p>
        </Reveal>

        <h2 className="font-[family-name:var(--font-display)] text-4xl font-light leading-tight tracking-tight text-[var(--color-bone)] md:text-6xl">
          <KineticText
            text="Most studios decorate a brand. We construct the world it lives in —"
            className="block"
          />{' '}
          <KineticText
            text="every facet considered, nothing left to template."
            className="block text-[var(--color-bone-dim)]"
            delay={0.1}
          />
        </h2>
      </div>
    </section>
  )
}
