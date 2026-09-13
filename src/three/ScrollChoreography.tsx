import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '../lib/motion'
import { sceneState, REALM_PRESETS } from './sceneState'
import { useReducedMotion } from '../lib/useReducedMotion'

export function ScrollChoreography() {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return

    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-realm-preset]'))
    const triggers = sections.map((el) => {
      const preset = REALM_PRESETS[el.dataset.realmPreset ?? 'hidden']
      return ScrollTrigger.create({
        trigger: el,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => gsap.to(sceneState, { ...preset, duration: 1.1, ease: 'power2.out' }),
        onEnterBack: () => gsap.to(sceneState, { ...preset, duration: 1.1, ease: 'power2.out' }),
      })
    })

    return () => triggers.forEach((t) => t.kill())
  }, [reduced])

  return null
}
