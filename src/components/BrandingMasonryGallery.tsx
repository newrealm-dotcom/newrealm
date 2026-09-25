import { brandingGalleryImages } from 'virtual:branding-gallery'
import { MasonryGallery } from './MasonryGallery'

/** Full-bleed masonry gallery for branding samples in /public/branding. */
export function BrandingMasonryGallery() {
  return <MasonryGallery images={brandingGalleryImages} />
}
