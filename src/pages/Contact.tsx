import { useState, type FormEvent } from 'react'
import { SEO } from '../components/SEO'
import { FAQ } from '../data/faq'

const HELP_OPTIONS = ['Branding', 'Graphic Design', 'Website', 'SEO/AEO', 'Digital Marketing', 'Packaging', 'Print', 'Maintenance', 'Other']
const BUDGETS = ['Under $2,500', '$2,500 – $10,000', '$10,000 – $25,000', '$25,000+', 'Not sure yet']
const TIMELINES = ['ASAP', 'Within 1 month', '1–3 months', '3+ months', 'Just exploring']
const SOURCES = ['Google search', 'Referral', 'Social media', 'Existing client', 'Other']

/** Tracks a conversion event once an analytics provider is wired up.
 * TODO(launch): set VITE_GA_MEASUREMENT_ID and initialize GA4 in index.html. */
function trackEvent(name: string, params?: Record<string, unknown>) {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag === 'function') gtag('event', name, params)
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const data = new FormData(e.currentTarget)
    const email = String(data.get('email') ?? '')
    const name = String(data.get('name') ?? '')

    if (!name.trim()) {
      setError('Please enter your name.')
      return
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    try {
      // TODO(launch): replace with a real form backend (e.g. Formspree, a
      // serverless function) — this currently only simulates a request.
      await new Promise((resolve) => setTimeout(resolve, 700))
      trackEvent('generate_lead', { form: 'start_a_project' })
      setStatus('done')
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <>
      <SEO
        title="Start a Project"
        description="Tell New Realm Graphics about your branding, website, or digital marketing project and get a response from our team."
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />

      <section className="border-b border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[var(--container-content)]">
          <p className="eyebrow mb-4">Start a Project</p>
          <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
            Tell us about your project.
          </h1>
          <p className="prose-copy mt-6 text-lg text-[var(--color-ink-dim)]">
            Share a few details and someone from our team will follow up shortly.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl">
          {status === 'done' ? (
            <div className="border border-[var(--color-line)] bg-[var(--color-paper-2)] p-10 text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">Received.</p>
              <p className="mt-3 text-[var(--color-ink-dim)]">Thanks — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" required />
                <Field label="Company" name="company" type="text" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" type="tel" />
              </div>

              <fieldset>
                <legend className="mb-3 text-sm text-[var(--color-ink-dim)]">What can we help with?</legend>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {HELP_OPTIONS.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-sm text-[var(--color-ink-dim)]">
                      <input type="checkbox" name="helpWith" value={option} className="h-4 w-4 accent-[var(--color-ink)]" />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-6 sm:grid-cols-2">
                <SelectField label="Project budget" name="budget" options={BUDGETS} />
                <SelectField label="Project timeline" name="timeline" options={TIMELINES} />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-[var(--color-ink-dim)]">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-none border border-[var(--color-line-strong)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-gold)]"
                  placeholder="What are you trying to build or fix?"
                />
              </div>

              <SelectField label="How did you hear about us?" name="source" options={SOURCES} />

              {error && (
                <p role="alert" className="text-sm text-red-700">
                  {error}
                </p>
              )}

              <button type="submit" disabled={status === 'submitting'} className="btn btn-primary w-full disabled:opacity-60">
                {status === 'submitting' ? 'Sending…' : 'Send Project Details'}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-8">Common Questions</p>
          <div className="divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
            {FAQ.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[var(--color-ink)]">
                  <span className="font-medium">{item.question}</span>
                  <span className="shrink-0 text-[var(--color-ink-faint)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-[var(--color-ink-dim)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-[var(--color-ink-dim)]">
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-[var(--color-line-strong)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-gold)]"
      />
    </div>
  )
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-[var(--color-ink-dim)]">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full border border-[var(--color-line-strong)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus-visible:border-[var(--color-gold)]"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
