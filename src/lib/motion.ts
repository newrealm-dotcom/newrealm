import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const EASE = {
  out: 'expo.out',
  inOut: 'power2.inOut',
} as const

export const DURATION = {
  micro: 0.15,
  ui: 0.3,
  section: 0.6,
  hero: 1.2,
} as const

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
