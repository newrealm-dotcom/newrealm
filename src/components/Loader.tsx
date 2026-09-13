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
      <span className="rounded-lg bg-white px-3 py-2">
        <img src="/nrg-logo.svg" alt="New Realm Graphics" className="h-10 w-auto" />
      </span>
      <div className="h-px w-40 bg-[var(--color-line)]">
        <div ref={barRef} className="h-full w-full bg-gradient-to-r from-[var(--color-ion-violet)] to-[var(--color-ion-cyan)]" />
      </div>
    </div>
  )
}
