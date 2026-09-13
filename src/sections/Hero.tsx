import { KineticText } from '../components/KineticText'
import { MagneticButton } from '../components/MagneticButton'

export function Hero() {
  return (
    <section
      id="top"
      data-realm-preset="hero"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 md:px-10"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <p className="eyebrow mb-6">Denver, Colorado — Est. design studio</p>

        <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[13vw] font-light leading-[0.95] tracking-tight text-[var(--color-bone)] sm:text-[9vw] lg:text-[6.4vw]">
          <KineticText as="span" text="Trends come and go." className="block" />
          <KineticText as="span" text="Diamonds are forever." className="gradient-text block" delay={0.15} />
        </h1>

        <div className="mt-10 flex max-w-xl flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p className="text-lg text-[var(--color-bone-dim)]">
            New Realm Graphics has spent over 20 years helping small businesses
            succeed online — website design, branding, packaging, and print built
            to last.
          </p>

          <div className="flex shrink-0 items-center gap-4">
            <MagneticButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-[var(--color-bone)] px-6 py-3 text-sm font-semibold text-[var(--color-void)] transition-transform hover:scale-[1.03]"
            >
              Get a Quote
            </MagneticButton>
            <a
              href="#work"
              data-cursor="hover"
              className="text-sm font-medium text-[var(--color-bone-dim)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-bone)]"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <span className="eyebrow">Scroll</span>
        <div className="mx-auto mt-3 h-10 w-px animate-pulse bg-gradient-to-b from-[var(--color-ion-cyan)] to-transparent" />
      </div>
    </section>
  )
}
