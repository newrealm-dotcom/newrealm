import { Reveal } from '../components/Reveal'
import { KineticText } from '../components/KineticText'

export function Testimonial() {
  return (
    <section data-realm-preset="hidden" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow mb-10">06 / Realm — Testimonial</p>
        </Reveal>
        <blockquote className="font-[family-name:var(--font-display)] text-3xl font-light leading-snug tracking-tight text-[var(--color-bone)] md:text-4xl">
          <KineticText
            text="“They didn’t just design our launch film — they designed the world it lives in. Every frame still feels considered a year later.”"
            start="top 90%"
          />
        </blockquote>
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--color-ion-violet)] to-[var(--color-ion-cyan)]" />
            <div className="text-left">
              <p className="text-sm font-medium text-[var(--color-bone)]">Head of Brand, Vantage</p>
              <p className="text-xs text-[var(--color-bone-dim)]">Consumer Electronics</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
