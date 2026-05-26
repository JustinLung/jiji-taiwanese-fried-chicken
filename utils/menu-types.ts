import type { StaticImageData } from "next/image"

export type MenuItemDetail = {
  prepTime?: string
  servingNote?: string
  spiceLevel: string
}

export type MenuItem = {
  badge: string
  description: string
  details: MenuItemDetail
  image: {
    alt: string
    className?: string
    src: StaticImageData | string
  }
  name: string
  price: string
  rating: number
}
