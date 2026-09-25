/// <reference types="vite/client" />

declare module 'virtual:branding-gallery' {
  export interface BrandingGalleryImage {
    src: string
    alt: string
    width: number
    height: number
  }

  export const brandingGalleryImages: BrandingGalleryImage[]
}
