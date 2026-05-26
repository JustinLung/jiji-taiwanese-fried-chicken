import type { StaticImageData } from "next/image"
import type {
  AnchorHTMLAttributes,
  ComponentType,
  MouseEventHandler,
  ReactNode,
  Ref,
  SVGProps,
} from "react"
import type { MenuItem } from "./menu-types"

export type ButtonSize = "default" | "compact"
export type ButtonVariant = "primary" | "secondary"

export type ButtonBaseProps = {
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: "start" | "end"
  size?: ButtonSize
  variant?: ButtonVariant
}

export type ButtonLinkProps = ButtonBaseProps &
  Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "download" | "rel" | "target" | "title"
  > & {
    "aria-label"?: string
    href: string
    onClick?: MouseEventHandler<HTMLAnchorElement>
  }

export type ButtonElementProps = ButtonBaseProps & {
  "aria-controls"?: string
  "aria-expanded"?: boolean
  "aria-haspopup"?:
    | "dialog"
    | "false"
    | "grid"
    | "listbox"
    | "menu"
    | "true"
    | "tree"
  "aria-label"?: string
  "aria-pressed"?: boolean | "false" | "mixed" | "true"
  disabled?: boolean
  href?: undefined
  onClick?: MouseEventHandler<HTMLButtonElement>
  ref?: Ref<HTMLButtonElement>
  title?: string
  type?: "button" | "reset" | "submit"
}

export type ButtonProps = ButtonLinkProps | ButtonElementProps

export type HeroImage = {
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  src: StaticImageData | string
}

export type HeroAction = {
  href: string
  icon?: ReactNode
  iconPosition?: "start" | "end"
  label: string
  target?: "_blank" | "_self"
  variant?: "primary" | "secondary"
}

export type HeroSizeBadge = {
  ariaLabel?: string
  eyebrow: string
  label: string
}

export type HeroQuote = {
  avatar?: HeroImage
  eyebrow: string
  text: string
}

export type HeroUsp = {
  label: string
}

export type HeroProps = {
  description: string
  image: HeroImage
  title: string
  eyebrow?: string
  primaryAction?: HeroAction
  quote?: HeroQuote
  secondaryAction?: HeroAction
  sizeBadge?: HeroSizeBadge
  usps?: HeroUsp[]
  showGradient?: boolean
}

export type AboutImage = {
  alt: string
  src: StaticImageData | string
}

export type AboutUsp = {
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
}

export type AboutAction = {
  href: string
  icon?: ReactNode
  label: string
}

export type AboutProps = {
  action?: AboutAction
  descriptions: string[]
  eyebrow: string
  images: {
    caption: string
    detail: AboutImage
    label: string
    main: AboutImage
    mascot: AboutImage
  }
  title: string
  usps: AboutUsp[]
}

export type MenuAction = {
  href: string
  icon?: ReactNode
  label: string
  target?: "_blank" | "_self"
  variant?: ButtonVariant
}

export type MenuProps = {
  action?: MenuAction
  action2?: MenuAction
  description?: string
  eyebrow: string
  items: MenuItem[]
  title: string
}

export type MenuCardProps = MenuItem

export type MenuItemModalProps = {
  isOpen: boolean
  item: MenuItem
  onClose: () => void
}

export type Review = {
  avatarSrc: string
  name: string
  quote: string
  role: string
}

export type ReviewCardProps = Review

export type ReviewsProps = {
  eyebrow: string
  ratingLabel: string
  reviews: Review[]
  title: string
}

export type ContactLocationProps = {
  contact?: {
    addressLines?: string[]
    directionsUrl?: string
    emailLabel?: string
    menuPdfUrl?: string
    openingHours?: string[]
    phoneLabel?: string
  }
  eyebrow?: string
  title?: string
}

export type MarqueeItem = {
  icon: "check" | "flame" | "medal" | "spark" | "star"
  label: string
}

export type MarqueeProps = {
  items?: MarqueeItem[]
}

export type MarqueeTrackProps = {
  items: MarqueeItem[]
}
