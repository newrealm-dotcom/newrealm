import { useEffect, useState } from 'react'
import { assetUrl } from '../lib/assetUrl'

interface HeroImageFaderProps {
  images: string[]
  /** Milliseconds each slide is fully visible before fading to the next. */
  intervalMs?: number
  /** Crossfade / blur dissolve length in milliseconds. */
  transitionMs?: number
}

/**
 * Crossfades stacked hero images with a blur dissolve, looping forever.
 */
export function HeroImageFader({
  images,
  intervalMs = 5000,
  transitionMs = 1000,
}: HeroImageFaderProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length < 2) return

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [images.length, intervalMs])

  if (images.length === 0) return null

  const transition = `opacity ${transitionMs}ms ease-in-out, filter ${transitionMs}ms ease-in-out`

  return (
    <div className="relative w-full lg:h-[650px]">
      <img
        src={assetUrl(images[0])}
        alt=""
        aria-hidden
        className="invisible h-auto w-full object-contain lg:hidden"
      />
      {images.map((src, i) => {
        const isActive = i === active
        return (
          <img
            key={src}
            src={assetUrl(src)}
            alt=""
            className={`absolute inset-0 h-full w-full object-contain ${isActive ? 'z-[1]' : 'z-0'}`}
            style={{
              opacity: isActive ? 1 : 0,
              filter: isActive ? 'blur(0px)' : 'blur(16px)',
              transition,
            }}
          />
        )
      })}
    </div>
  )
}
