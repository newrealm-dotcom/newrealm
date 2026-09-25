import { useEffect, useState } from 'react'
import { assetUrl } from '../lib/assetUrl'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

/**
 * Branding gallery sources — swap entries here to change the set.
 * Paths are under /public/branding.
 */
const BRANDING_GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/branding/greenbag-lunch2go-lunchmenu.webp',
    alt: 'Lunch2Go green bag lunch menu design',
    width: 650,
    height: 864,
  },
  {
    src: '/branding/greenbag-lunch2go-perfectgift.webp',
    alt: 'Lunch2Go perfect gift green bag packaging design',
    width: 649,
    height: 864,
  },
  {
    src: '/branding/logo-BDE.webp',
    alt: 'Black Diamond Enterprises logo',
    width: 1200,
    height: 637,
  },
  {
    src: '/branding/logo-EKP.webp',
    alt: 'Eric Kline Productions logo',
    width: 1200,
    height: 827,
  },
  {
    src: '/branding/logo-TGB.webp',
    alt: 'The Green Bag logo',
    width: 1099,
    height: 1200,
  },
  {
    src: '/branding/logo-beetyoutoit.webp',
    alt: 'Beet You To It logo',
    width: 1200,
    height: 1200,
  },
  {
    src: '/branding/logo-cousin-chichi.webp',
    alt: 'Cousin Chi Chi logo',
    width: 1200,
    height: 1200,
  },
  {
    src: '/branding/logo-olfattorio.webp',
    alt: 'Olfattorio logo',
    width: 1200,
    height: 550,
  },
  {
    src: '/branding/logo-stoopidcookies.webp',
    alt: 'Stoopid Cookies logo',
    width: 1200,
    height: 508,
  },
  {
    src: '/branding/logo-thedapper-dachsie.webp',
    alt: 'The Dapper Dachsie logo',
    width: 1200,
    height: 1200,
  },
  {
    src: '/branding/logo-thedirty-dachsie.webp',
    alt: 'The Dirty Dachsie logo',
    width: 1000,
    height: 1000,
  },
  {
    src: '/branding/quick-lunch2go-menu-front.webp',
    alt: 'Quick Lunch2Go menu front cover',
    width: 930,
    height: 1200,
  },
  {
    src: '/branding/quick-lunch2go-menu-inside.webp',
    alt: 'Quick Lunch2Go menu inside spread',
    width: 930,
    height: 1200,
  },
  {
    src: '/branding/signature%20soups.webp',
    alt: 'Signature soups wallpaper design',
    width: 1000,
    height: 667,
  },
  {
    src: '/branding/signaturebites-wallpaper.webp',
    alt: 'Signature bites wallpaper design',
    width: 1000,
    height: 667,
  },
  {
    src: '/branding/signaturesalads-wallpaper.webp',
    alt: 'Signature salads wallpaper design',
    width: 1000,
    height: 667,
  },
  {
    src: '/branding/signaturesmoothies-wallpaper.webp',
    alt: 'Signature smoothies wallpaper design',
    width: 1000,
    height: 667,
  },
  {
    src: '/branding/signaturewraps-wallpaper.webp',
    alt: 'Signature wraps wallpaper design',
    width: 1000,
    height: 667,
  },
]

function fisherYatesShuffle<T>(items: T[]): T[] {
  const next = items.slice()
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = next[i]
    next[i] = next[j]
    next[j] = tmp
  }
  return next
}

function columnCountForWidth(width: number): number {
  if (width >= 1400) return 5
  if (width >= 1024) return 4
  if (width >= 768) return 3
  if (width >= 480) return 2
  return 1
}

/**
 * Shortest-column-first packing (not CSS columns).
 * CSS multi-column fills top-to-bottom per column, which clusters shuffled
 * items into vertical runs and weakens the random masonry feel. Packing by
 * current shortest column spreads the shuffled order across the row while
 * keeping natural aspect ratios and tight vertical stacking.
 */
function distributeByShortestColumn(images: GalleryImage[], columnCount: number): GalleryImage[][] {
  const columns: GalleryImage[][] = Array.from({ length: columnCount }, () => [])
  const heights = Array.from({ length: columnCount }, () => 0)

  for (const image of images) {
    let shortest = 0
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i
    }
    columns[shortest].push(image)
    heights[shortest] += image.height / image.width
  }

  return columns
}

function GalleryImageItem({
  image,
  onOpen,
}: {
  image: GalleryImage
  onOpen: () => void
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <button
      type="button"
      onClick={onOpen}
      className="block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
      aria-label={`View larger: ${image.alt}`}
    >
      <img
        src={assetUrl(image.src)}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`block h-auto w-full transition-opacity duration-500 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
      />
    </button>
  )
}

function GalleryLightbox({
  images,
  index,
  onClose,
  onChangeIndex,
}: {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onChangeIndex: (next: number) => void
}) {
  const image = images[index]

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') {
        onChangeIndex((index - 1 + images.length) % images.length)
      }
      if (event.key === 'ArrowRight') {
        onChangeIndex((index + 1) % images.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onChangeIndex, index, images.length])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-[101] border border-white/30 bg-black/40 px-3 py-2 text-sm text-white hover:bg-black/60"
        aria-label="Close lightbox"
      >
        Close
      </button>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onChangeIndex((index - 1 + images.length) % images.length)
            }}
            className="absolute left-3 top-1/2 z-[101] -translate-y-1/2 border border-white/30 bg-black/40 px-3 py-3 text-white hover:bg-black/60 md:left-6"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onChangeIndex((index + 1) % images.length)
            }}
            className="absolute right-3 top-1/2 z-[101] -translate-y-1/2 border border-white/30 bg-black/40 px-3 py-3 text-white hover:bg-black/60 md:right-6"
            aria-label="Next image"
          >
            →
          </button>
        </>
      ) : null}

      <img
        src={assetUrl(image.src)}
        alt={image.alt}
        width={image.width}
        height={image.height}
        decoding="async"
        className="max-h-[min(92vh,100%)] max-w-[min(96vw,100%)] object-contain"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}

/**
 * Full-bleed responsive masonry gallery for branding work samples.
 */
export function BrandingMasonryGallery() {
  // Shuffle once on first client render (Vite SPA — no SSR hydration mismatch).
  const [shuffled] = useState(() => fisherYatesShuffle(BRANDING_GALLERY_IMAGES))
  const [columnCount, setColumnCount] = useState(() =>
    typeof window !== 'undefined' ? columnCountForWidth(window.innerWidth) : 4,
  )
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    const updateColumns = () => {
      setColumnCount(columnCountForWidth(window.innerWidth))
    }
    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const columns = distributeByShortestColumn(shuffled, columnCount)
  const padding = columnCount === 1 ? 20 : 50

  return (
    <div className="box-border w-full max-w-none overflow-x-hidden" style={{ padding }}>
      <div className="flex w-full items-start" style={{ gap: 16 }}>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex min-w-0 flex-1 flex-col" style={{ gap: 16 }}>
            {column.map((image) => (
              <GalleryImageItem
                key={image.src}
                image={image}
                onOpen={() => {
                  const index = shuffled.findIndex((entry) => entry.src === image.src)
                  if (index >= 0) setLightboxIndex(index)
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <GalleryLightbox
          images={shuffled}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
        />
      ) : null}
    </div>
  )
}
