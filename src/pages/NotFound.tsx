import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-medium text-[var(--color-ink)] md:text-4xl">
          We couldn't find that page.
        </h1>
        <Link to="/" className="btn btn-primary mt-8">
          Back to Home
        </Link>
      </section>
    </>
  )
}
