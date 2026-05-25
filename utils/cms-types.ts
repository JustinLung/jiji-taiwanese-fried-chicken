import type { MenuItem } from "./menu-types"

export type CmsImage = {
  alt?: string | null
  className?: string | null
  src?: string | null
}

export type CmsMenuItem = Omit<MenuItem, "details" | "image"> & {
  details?: Partial<MenuItem["details"]> | null
  image?: CmsImage | null
}

export type CmsReview = {
  avatarSrc?: string | null
  name?: string | null
  quote?: string | null
  role?: string | null
}

export type CmsHomePage = {
  about?: {
    action?: {
      href?: string | null
      label?: string | null
      target?: "_blank" | "_self" | null
    } | null
    descriptions?: string[] | null
    eyebrow?: string | null
    images?: {
      caption?: string | null
      detail?: CmsImage | null
      label?: string | null
      main?: CmsImage | null
      mascot?: CmsImage | null
    } | null
    title?: string | null
    usps?: Array<{
      description?: string | null
      icon?: "medal" | "spark" | null
      title?: string | null
    }> | null
  } | null
  contactSection?: {
    eyebrow?: string | null
    title?: string | null
  } | null
  hero?: {
    description?: string | null
    eyebrow?: string | null
    image?: CmsImage | null
    primaryAction?: {
      href?: string | null
      label?: string | null
      target?: "_blank" | "_self" | null
    } | null
    quote?: {
      avatar?: CmsImage | null
      eyebrow?: string | null
      text?: string | null
    } | null
    secondaryAction?: {
      href?: string | null
      label?: string | null
      target?: "_blank" | "_self" | null
      variant?: "primary" | "secondary" | null
    } | null
    sizeBadge?: {
      ariaLabel?: string | null
      eyebrow?: string | null
      label?: string | null
    } | null
    title?: string | null
    usps?: Array<{ label?: string | null }> | null
  } | null
  menuSection?: {
    action?: {
      href?: string | null
      label?: string | null
      target?: "_blank" | "_self" | null
    } | null
    description?: string | null
    eyebrow?: string | null
    featuredItems?: Array<CmsMenuItem | null> | null
    title?: string | null
  } | null
  marqueeItems?: CmsMarqueeItem[] | null
  reviewsSection?: {
    eyebrow?: string | null
    featuredReviews?: Array<CmsReview | null> | null
    ratingLabel?: string | null
    title?: string | null
  } | null
}

export type CmsSiteSettings = {
  businessName?: string | null
  contact?: {
    addressLines?: string[] | null
    directionsUrl?: string | null
    emailLabel?: string | null
    emailHref?: string | null
    menuPdfUrl?: string | null
    openingHours?: string[] | null
    phoneLabel?: string | null
    phoneHref?: string | null
  } | null
  copyrightText?: string | null
  footerDescription?: string | null
  legalLinks?: Array<{
    href?: string | null
    label?: string | null
  }> | null
  mainNavigation?: Array<{
    href?: string | null
    label?: string | null
    target?: "_blank" | "_self" | null
  }> | null
  socialLinks?: Array<{
    href?: string | null
    label?: string | null
  }> | null
}

export type CmsMarqueeItem = {
  icon?: "check" | "flame" | "medal" | "spark" | "star" | null
  label?: string | null
}
