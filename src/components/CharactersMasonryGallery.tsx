import { charactersGalleryImages } from 'virtual:characters-gallery'
import { MasonryGallery } from './MasonryGallery'

/** Full-bleed masonry gallery for character samples in /public/characters. */
export function CharactersMasonryGallery() {
  return <MasonryGallery images={charactersGalleryImages} />
}
