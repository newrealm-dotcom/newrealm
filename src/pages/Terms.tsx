import { SEO } from '../components/SEO'

export function Terms() {
  return (
    <>
      <SEO title="Terms of Use" description="Terms governing use of the New Realm Graphics website." path="/terms" />
      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="prose-copy mx-auto">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
            Terms of Use
          </h1>
          <div className="space-y-5 text-[var(--color-ink-dim)]">
            <p>
              This page outlines general terms for using this website. It is a starting draft and should be reviewed
              by qualified legal counsel before launch.
            </p>
            <p>
              Content on this site — including project descriptions, images, and copy — is the property of New Realm
              Graphics unless otherwise noted, and may not be reproduced without permission.
            </p>
            <p>
              This website is provided as-is. While we work to keep information accurate and current, New Realm
              Graphics makes no warranty as to completeness or fitness for a particular purpose.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
