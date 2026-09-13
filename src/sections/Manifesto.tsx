import { KineticText } from '../components/KineticText'
import { Reveal } from '../components/Reveal'

export function Manifesto() {
  return (
    <section data-realm-preset="manifesto" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-8">Owner &amp; Operator</p>
        </Reveal>

        <h2 className="font-[family-name:var(--font-display)] text-4xl font-light leading-tight tracking-tight text-[var(--color-bone)] md:text-6xl">
          <KineticText text="Mike Franco" className="block" />
        </h2>

        <Reveal delay={0.1}>
          <div className="mt-8 max-w-2xl space-y-5 text-lg text-[var(--color-bone-dim)]">
            <p>
              Mike Franco has spent 25 years turning design and marketing
              challenges into results that hold up in print and online. His
              background spans graphic and web design, with deep roots in both
              the design and print sectors — a combination that's increasingly
              rare as the industry specializes.
            </p>
            <p>
              Running his own business for most of that career, Mike has
              learned to move fluidly between roles: designer one day,
              fundraiser the next, team collaborator on the same project. That
              range shows up in how he works, approaching problems from
              multiple angles rather than a single fixed process.
            </p>
            <p>
              Today, he leads the company's online data services, digital
              marketing, SEO/AEO strategy, and the ongoing maintenance of all
              company websites and apps.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
