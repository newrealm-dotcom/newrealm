/// <reference types="vite/client" />

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

declare module 'virtual:branding-gallery' {
  export type BrandingGalleryImage = GalleryImage
  export const brandingGalleryImages: BrandingGalleryImage[]
}

declare module 'virtual:characters-gallery' {
  export type CharactersGalleryImage = GalleryImage
  export const charactersGalleryImages: CharactersGalleryImage[]
}
