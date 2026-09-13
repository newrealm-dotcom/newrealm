import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { KineticText } from '../components/KineticText'
import { MagneticButton } from '../components/MagneticButton'

const PROJECT_TYPES = ['3D & Brand Visuals', 'Motion & Animation', 'Interactive Web', 'Spatial / Immersive', 'Something else']

export function CTA() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const data = new FormData(e.currentTarget)
    const email = String(data.get('email') ?? '')

    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    try {
      // Wire this endpoint up to your form backend of choice (e.g. Formspree, a serverless function).
      await new Promise((resolve) => setTimeout(resolve, 700))
      setStatus('done')
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <section
      id="contact"
      data-realm-preset="cta"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 py-32 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1400px] gap-16 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">07 / Realm — Start</p>
          </Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-light leading-[1.05] tracking-tight text-[var(--color-bone)] md:text-6xl">
            <KineticText text="Tell us about the world you're building." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-[var(--color-bone-dim)]">
              Share a few details and we'll respond within two business days with
              next steps — no automated sales funnel, just the studio.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {status === 'done' ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-void-2)] p-10 text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-bone)]">
                Received.
              </p>
              <p className="mt-3 text-[var(--color-bone-dim)]">
                Thanks — we'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-void-2)] p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Company" name="company" type="text" />

              <div>
                <label htmlFor="project-type" className="mb-2 block text-sm text-[var(--color-bone-dim)]">
                  Project type
                </label>
                <select
                  id="project-type"
                  name="projectType"
                  className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-void)] px-4 py-3 text-sm text-[var(--color-bone)] outline-none focus-visible:border-[var(--color-ion-cyan)]"
                >
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-[var(--color-bone-dim)]">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[var(--color-line)] bg-[var(--color-void)] px-4 py-3 text-sm text-[var(--color-bone)] outline-none focus-visible:border-[var(--color-ion-cyan)]"
                  placeholder="Timeline, budget range, and what you're trying to build."
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <MagneticButton
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-[var(--color-bone)] px-6 py-3 text-sm font-semibold text-[var(--color-void)] transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Project Brief'}
              </MagneticButton>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string
  name: string
  type: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-[var(--color-bone-dim)]">
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-void)] px-4 py-3 text-sm text-[var(--color-bone)] outline-none focus-visible:border-[var(--color-ion-cyan)]"
      />
    </div>
  )
}
