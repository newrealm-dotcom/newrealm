import { SEO } from '../components/SEO'

export function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How New Realm Graphics collects and uses information from this website." path="/privacy-policy" />
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="prose-copy mx-auto">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
            Privacy Policy
          </h1>
          <div className="space-y-5 text-[var(--color-ink-dim)]">
            <p>
              This page outlines, in general terms, how New Realm Graphics handles information submitted through this
              website. It is a starting draft and should be reviewed by qualified legal counsel before launch to
              ensure it reflects actual data handling practices and applicable law.
            </p>
            <p>
              Information submitted through the Start a Project form (name, company, email, phone, and project
              details) is used only to respond to your inquiry. We do not sell or share this information with third
              parties for marketing purposes.
            </p>
            <p>
              This site may use analytics tools to understand how visitors use the site in aggregate. These tools do
              not collect more personal information than necessary to measure site usage and improve the experience.
            </p>
            <p>Questions about this policy can be directed to us through the Contact page.</p>
          </div>
        </div>
      </section>
    </>
  )
}
