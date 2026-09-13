import { useEffect, useRef } from 'react'
import { gsap } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const ring = ringRef.current
    if (!ring) return

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const target = { ...pos }
    let active = false

    gsap.set(ring, { xPercent: -50, yPercent: -50 })

    const move = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      if (!active) {
        active = true
        ring.style.opacity = '1'
      }
    }

    const onOver = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest('a, button, [data-cursor="hover"]')
      ring.classList.toggle('cursor-ring--active', Boolean(el))
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', onOver)
    window.addEventListener('pointerleave', () => {
      active = false
      ring.style.opacity = '0'
    })

    const ticker = () => {
      pos.x = gsap.utils.interpolate(pos.x, target.x, 0.18)
      pos.y = gsap.utils.interpolate(pos.y, target.y, 0.18)
      gsap.set(ring, { x: pos.x, y: pos.y })
    }
    gsap.ticker.add(ticker)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', onOver)
      gsap.ticker.remove(ticker)
    }
  }, [reduced])

  if (reduced) return null

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="cursor-ring pointer-events-none fixed left-0 top-0 z-50 hidden h-[18px] w-[18px] rounded-full border border-[var(--color-ion-cyan)] opacity-0 mix-blend-difference transition-[width,height,background-color] duration-300 md:block"
    />
  )
}
