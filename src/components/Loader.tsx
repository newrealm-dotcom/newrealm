import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

export function Loader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true)
  const barRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setVisible(false)
      onDone()
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false)
        onDone()
      },
    })

    tl.fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power2.inOut', transformOrigin: 'left' })
      .to(rootRef.current, { opacity: 0, duration: 0.5, ease: 'power2.out' }, '+=0.1')

    return () => {
      tl.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced])

  if (!visible) return null

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-6 bg-[var(--color-void)]"
    >
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <defs>
          <linearGradient id="loader-g" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#7C5CFF" />
            <stop offset="1" stopColor="#4CE0D2" />
          </linearGradient>
        </defs>
        <path
          d="M32 6 L54 22 L46 50 L18 50 L10 22 Z"
          stroke="url(#loader-g)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M32 6 L32 32 M10 22 L32 32 L54 22 M18 50 L32 32 L46 50"
          stroke="url(#loader-g)"
          strokeWidth="1.4"
          opacity="0.75"
        />
      </svg>
      <div className="h-px w-40 bg-[var(--color-line)]">
        <div ref={barRef} className="h-full w-full bg-gradient-to-r from-[var(--color-ion-violet)] to-[var(--color-ion-cyan)]" />
      </div>
    </div>
  )
}
