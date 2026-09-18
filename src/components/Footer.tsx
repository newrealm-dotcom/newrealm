import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { assetUrl } from '../lib/assetUrl'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line-strong)] bg-[var(--color-ink)] px-6 py-16 text-[var(--color-paper)] md:px-10">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="grid grid-cols-2 gap-10 pb-14 md:grid-cols-5">
          <div className="col-span-2">
            <img src={assetUrl('nrg-logo-white.png')} alt="New Realm Graphics" className="h-32 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-[var(--color-paper)]/60">
              A Fort Lauderdale, FL design studio with 20+ years of experience across branding, website design and
              development, print, packaging, and digital marketing.
            </p>
          </div>

          <div>
            <p className="footer-heading mb-4">Services</p>
            <ul className="space-y-2.5 text-sm text-[var(--color-paper)]/70">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading mb-4">Company</p>
            <ul className="space-y-2.5 text-sm text-[var(--color-paper)]/70">
              <li>
                <Link to="/work" className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4">
                  About
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading mb-4">Start a Project</p>
            <p className="mb-4 text-sm text-[var(--color-paper)]/70">Tell us what you're building. We'll follow up shortly.</p>
            <Link to="/contact" className="btn btn-secondary border-[var(--color-paper)]/30 text-[var(--color-paper)] hover:border-[var(--color-paper)]">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--color-paper)]/10 pt-8 text-xs text-[var(--color-paper)]/50 md:flex-row md:items-center md:justify-between">
          <p>Fort Lauderdale, FL — © {YEAR} New Realm Graphics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-[var(--color-paper)]/80 hover:underline hover:underline-offset-4">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[var(--color-paper)]/80 hover:underline hover:underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
