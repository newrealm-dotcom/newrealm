import { packagingGalleryImages } from 'virtual:packaging-gallery'
import { MasonryGallery } from './MasonryGallery'

/** Full-bleed masonry gallery for packaging samples in /public/packaging. */
export function PackagingMasonryGallery() {
  return <MasonryGallery images={packagingGalleryImages} />
}
