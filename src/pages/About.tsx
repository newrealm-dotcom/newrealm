import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SEO, SITE_URL } from '../components/SEO'
import { Reveal } from '../components/Reveal'
import { TEAM } from '../data/team'
import { assetUrl } from '../lib/assetUrl'

const CREDIBILITY = [
  {
    label: '25+ Years',
    detail: 'Design and digital experience',
    icon: '/icon-20plus-years.png',
  },
  {
    label: 'Multiple Industries',
    detail: 'Small businesses across sectors',
    icon: '/icon-multiple-industries.png',
  },
  {
    label: 'Web + Print',
    detail: 'Both, under one roof',
    icon: '/icon-web-and-print.png',
  },
  {
    label: 'Ongoing Support',
    detail: 'Maintenance after launch',
    icon: '/icon-ongoing-support.png',
  },
]

/** Clockwise (forward clip), then counter-clockwise (reversed clip), repeating. */
function SeamlessLoopVideo({
  src,
  reverseSrc,
  className,
}: {
  src: string
  reverseSrc: string
  className?: string
}) {
  const forwardRef = useRef<HTMLVideoElement>(null)
  const reverseRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const forward = forwardRef.current
    const reverse = reverseRef.current
    if (!forward || !reverse) return

    let mode: 'forward' | 'reverse' = 'forward'

    const show = (el: HTMLVideoElement, visible: boolean) => {
      el.style.opacity = visible ? '1' : '0'
      el.style.zIndex = visible ? '1' : '0'
    }

    const playForward = async () => {
      mode = 'forward'
      reverse.pause()
      reverse.currentTime = 0
      show(forward, true)
      show(reverse, false)
      forward.currentTime = 0
      try {
        await forward.play()
      } catch {
        /* ignore */
      }
    }

    const playReverse = async () => {
      mode = 'reverse'
      forward.pause()
      forward.currentTime = 0
      show(reverse, true)
      show(forward, false)
      reverse.currentTime = 0
      try {
        await reverse.play()
      } catch {
        /* ignore */
      }
    }

    const onForwardEnded = () => {
      if (mode === 'forward') void playReverse()
    }
    const onReverseEnded = () => {
      if (mode === 'reverse') void playForward()
    }

    forward.addEventListener('ended', onForwardEnded)
    reverse.addEventListener('ended', onReverseEnded)

    void playForward()

    return () => {
      forward.removeEventListener('ended', onForwardEnded)
      reverse.removeEventListener('ended', onReverseEnded)
    }
  }, [src, reverseSrc])

  return (
    <div className="relative">
      <video
        ref={forwardRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className={className}
      />
      <video
        ref={reverseRef}
        src={reverseSrc}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className={`${className ?? ''} pointer-events-none absolute inset-0 h-full w-full`}
        style={{ opacity: 0 }}
      />
    </div>
  )
}

export function About() {
  const mike = TEAM[0]

  return (
    <>
      <SEO
        title="About"
        description="New Realm Graphics is a Fort Lauderdale, FL design studio with 25+ years of experience combining traditional design and print with modern website development and digital marketing."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          about: { '@type': 'ProfessionalService', name: 'New Realm Graphics', url: SITE_URL },
        }}
      />

      <section className="border-b border-[var(--color-line)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[var(--container-wide)] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4">About</p>
            <h1 className="max-w-2xl font-[family-name:var(--font-display)] text-4xl font-medium text-[var(--color-ink)] md:text-5xl">
              25+ years of design + digital experience.
            </h1>
            <p className="prose-copy mt-6 text-lg text-[var(--color-ink-dim)]">
              New Realm Graphics is a Fort Lauderdale, FL design studio that has spent over 25 years helping small
              businesses succeed online. The studio combines experience in traditional design and print with modern
              website development and digital marketing — a combination most agencies specialize away from as the
              industry has split into separate creative and digital shops.
            </p>
            <div className="mt-10 hidden flex-wrap gap-4 lg:flex lg:flex-nowrap">
              <Link to="/contact" className="btn btn-primary shrink-0">
                Let's Get This Project Started
              </Link>
              <Link to="/work" className="btn btn-secondary shrink-0">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] overflow-hidden rounded-[15px] border-[5px] border-[#151412] md:max-w-[340px] lg:max-w-[400px]">
              <SeamlessLoopVideo
                src={assetUrl('/dog-spinning.mp4')}
                reverseSrc={assetUrl('/dog-spinning-reverse.mp4')}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-[var(--color-line)] bg-[#eff1de] px-[50px] py-16 md:py-20">
        <div className="w-full">
          <div className="grid grid-cols-2 items-start gap-10 sm:grid-cols-4">
            {CREDIBILITY.map((c) => (
              <Reveal key={c.label} className="flex flex-col items-center">
                <div className="mb-4 flex h-[150px] w-full items-center justify-center">
                  <img
                    src={assetUrl(c.icon)}
                    alt=""
                    aria-hidden="true"
                    className="h-[150px] w-auto max-w-full object-contain"
                  />
                </div>
                <p className="w-full text-center font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-ink)]">
                  {c.label}
                </p>
                <p className="mt-1 w-full text-center text-sm text-[var(--color-ink-dim)]">{c.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-[var(--container-wide)]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[300px_1fr] md:items-center">
            <Reveal>
              <img
                src={assetUrl('mike-franco-about.png?v=2')}
                alt={mike.name}
                className="aspect-square w-full max-w-[300px] border-2 border-[var(--color-line)] object-cover"
              />
            </Reveal>
            <Reveal delay={80} className="min-w-0 w-full">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-ink)]">{mike.name}</h2>
              <p className="eyebrow mt-1 text-[var(--color-ink-faint)]">{mike.role}</p>
              <div className="mt-6 w-full max-w-none space-y-4 text-[var(--color-ink-dim)]">
                {mike.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-band border-t border-[var(--color-line)] px-6 py-20 text-center md:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium md:text-4xl">
          Let's talk about your project.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn btn-inverse">
            Start a Project
          </Link>
          <Link to="/work" className="btn btn-on-blue">
            View Our Work
          </Link>
        </div>
      </section>
    </>
  )
}
