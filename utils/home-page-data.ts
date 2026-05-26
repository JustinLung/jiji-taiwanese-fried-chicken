import Medal from "@/components/icons/Medal"
import Spark from "@/components/icons/Spark"
import { client } from "@/sanity/lib/client"
import {
  homePageQuery,
  menuItemsQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries"
import type {
  CmsFeaturedMenuItem,
  CmsHomePage,
  CmsImage,
  CmsMarqueeItem,
  CmsMenuItem,
  CmsReview,
  CmsSiteSettings,
} from "@/utils/cms-types"
import { links } from "@/utils/links"
import { marqueeItems } from "@/utils/marquee-items"
import { menuItems } from "@/utils/menu-items"
import type { MenuItem } from "@/utils/menu-types"

const menuHref = links.find((link) => link.label === "Menu")?.href ?? "/menu"
const findUsLink = links.find((link) => link.label === "Find Us")

const aboutIcons = {
  medal: Medal,
  spark: Spark,
}

function cmsImage(
  image: CmsImage | null | undefined,
  fallback: { alt: string; className?: string; src: string },
) {
  return {
    alt: image?.alt ?? fallback.alt,
    className: image?.className ?? fallback.className,
    src: image?.src ?? fallback.src,
  }
}

function normalizeMenuItems(
  featuredItems: Array<CmsFeaturedMenuItem | null> | null | undefined,
  allItems: Array<CmsMenuItem | null> | null | undefined,
): MenuItem[] {
  const resolvedFeaturedItems = featuredItems?.map(
    (featuredItem) => featuredItem?.item ?? null,
  )
  const items = resolvedFeaturedItems?.length ? resolvedFeaturedItems : allItems
  const normalizedItems =
    items
      ?.filter((item): item is CmsMenuItem => Boolean(item?.name))
      .map((item) => ({
        badge: item.badge ?? "Fresh",
        description: item.description ?? "",
        details: {
          prepTime: item.details?.prepTime ?? undefined,
          servingNote: item.details?.servingNote,
          spiceLevel: item.details?.spiceLevel ?? "",
        },
        image: cmsImage(item.image, {
          alt: item.image?.alt ?? item.name,
          className: item.image?.className ?? undefined,
          src: "/images/placeholder.jpg",
        }),
        name: item.name,
        price: item.price ?? "",
        rating: item.rating ?? 5,
      })) ?? []

  const finalItems = normalizedItems.length ? normalizedItems : menuItems

  return finalItems
}

function normalizeReviews(items: Array<CmsReview | null> | null | undefined) {
  return (
    items
      ?.filter(
        (review): review is CmsReview =>
          Boolean(review?.name && review.quote && review.role),
      )
      .map((review) => ({
        avatarSrc: review.avatarSrc ?? "/images/placeholder.jpg",
        name: review.name ?? "",
        quote: review.quote ?? "",
        role: review.role ?? "",
      })) ?? []
  )
}

function normalizeMarqueeItems(items: CmsMarqueeItem[] | null | undefined) {
  return (
    items
      ?.filter((item) => item.icon && item.label)
      .map((item) => ({
        icon: item.icon ?? "star",
        label: item.label ?? "",
      })) ?? marqueeItems
  )
}

function normalizeAboutAction(about: CmsHomePage["about"], hasHomePage: boolean) {
  if (about?.action?.href && about.action.label) {
    return {
      href: about.action.href,
      label: about.action.label,
    }
  }

  if (!hasHomePage) {
    return {
      href: "#menu",
      label: "Read Our Full Heritage",
    }
  }

  return undefined
}

export async function getHomePageData() {
  const [homePage, siteSettings, cmsMenuItems] = await Promise.all([
    client.fetch<CmsHomePage | null>(homePageQuery, {}, { cache: "no-store" }),
    client.fetch<CmsSiteSettings | null>(
      siteSettingsQuery,
      {},
      { cache: "no-store" },
    ),
    client.fetch<CmsMenuItem[] | null>(
      menuItemsQuery,
      {},
      { cache: "no-store" },
    ),
  ])

  const hero = homePage?.hero
  const menuSection = homePage?.menuSection
  const about = homePage?.about
  const reviewsSection = homePage?.reviewsSection
  const contactSection = homePage?.contactSection

  return {
    about: {
      action: normalizeAboutAction(about, Boolean(homePage)),
      descriptions: about?.descriptions ?? [
        "JiJi's began with a simple dream: to share the exact crunch, warmth, and flavor of Taipei's legendary night markets. Our journey started in a small corner stall in Shilin, where our secret 24-hour spice marinade and custom sweet potato flour batter became an overnight sensation.",
        "Today, we bring that authentic, hand-cut crispiness to you. Every single cutlet is butterfly-sliced, freshly seasoned, and hand-battered to achieve the famous 12-inch crispy signature bite that our happy mascot, JiJi, is so proud of.",
      ],
      eyebrow: about?.eyebrow ?? "Our Story",
      images: {
        caption:
          about?.images?.caption ??
          "A three-image collage showing JiJi's mascot and kitchen prep.",
        detail: cmsImage(about?.images?.detail, {
          alt: "Close-up of JiJi's fresh kitchen preparation",
          src: "/images/placeholder.jpg",
        }),
        label: about?.images?.label ?? "JiJi kitchen story collage",
        main: cmsImage(about?.images?.main, {
          alt: "JiJi team frying Taiwanese chicken in the kitchen",
          src: "/images/placeholder.jpg",
        }),
        mascot: cmsImage(about?.images?.mascot, {
          alt: "JiJi mascot",
          src: "/images/logo-no-text.png",
        }),
      },
      title: about?.title ?? "From Shilin Market To Your Plate",
      usps: about?.usps
        ?.filter((usp) => usp.title && usp.description && usp.icon)
        .map((usp) => ({
          description: usp.description ?? "",
          icon: aboutIcons[usp.icon ?? "spark"],
          title: usp.title ?? "",
        })) ?? [
        {
          description: "Passed down family spice recipe.",
          icon: Spark,
          title: "Crafted With Love",
        },
        {
          description: "Bringing street food lovers together.",
          icon: Medal,
          title: "Community Stall",
        },
      ],
    },
    contact: {
      details: {
        addressLines: siteSettings?.contact?.addressLines ?? undefined,
        directionsUrl: siteSettings?.contact?.directionsUrl ?? undefined,
        emailLabel: siteSettings?.contact?.emailLabel ?? undefined,
        menuPdfUrl: siteSettings?.contact?.menuPdfUrl ?? undefined,
        openingHours: siteSettings?.contact?.openingHours ?? undefined,
        phoneLabel: siteSettings?.contact?.phoneLabel ?? undefined,
      },
      eyebrow: contactSection?.eyebrow ?? undefined,
      title: contactSection?.title ?? undefined,
    },
    hero: {
      description:
        hero?.description ??
        "Experience the ultimate crunch of our jumbo fried chicken cutlets. Infused with aromatic five-spice, white pepper, and fresh basil, fried to absolute golden perfection.",
      eyebrow: hero?.eyebrow ?? "Authentic Taipei Night Market Recipe",
      image: cmsImage(hero?.image, {
        alt: "JiJi team preparing Taiwanese fried chicken in the kitchen",
        src: "/images/placeholder.jpg",
      }),
      primaryAction: {
        href: hero?.primaryAction?.href ?? findUsLink?.href ?? "#",
        label: hero?.primaryAction?.label ?? "Find Us",
        target: hero?.primaryAction?.target ?? findUsLink?.target,
      },
      quote: {
        avatar: {
          ...cmsImage(hero?.quote?.avatar, {
            alt: "",
            src: "/images/placeholder.jpg",
          }),
          sizes: "48px",
        },
        eyebrow: hero?.quote?.eyebrow ?? "Jiji says:",
        text: hero?.quote?.text ?? "“Crispiest bite you'll ever have!”",
      },
      secondaryAction: {
        href: hero?.secondaryAction?.href ?? menuHref,
        label: hero?.secondaryAction?.label ?? "View Full Menu",
        variant: hero?.secondaryAction?.variant ?? "secondary",
      },
      sizeBadge: {
        ariaLabel: hero?.sizeBadge?.ariaLabel ?? "XL size, 100% Halal!",
        eyebrow: hero?.sizeBadge?.eyebrow ?? "XL Size",
        label: hero?.sizeBadge?.label ?? "100% Halal!",
      },
      title: hero?.title ?? "Crispy.\nJuicy.\nTaiwanese.",
      usps: hero?.usps
        ?.filter((usp) => usp.label)
        .map((usp) => ({ label: usp.label ?? "" })) ?? [
        { label: "100% Fresh Daily" },
        { label: "Secret Pepper Salt Mix" },
        { label: "Made-To-Order Crispness" },
      ],
    },
    marqueeItems: normalizeMarqueeItems(homePage?.marqueeItems),
    menu: {
      action: {
        href: menuSection?.action?.href ?? menuHref,
        label: menuSection?.action?.label ?? "Explore Full Menu",
        target: menuSection?.action?.target ?? undefined,
      },
      action2:
        menuSection?.action2?.href && menuSection.action2.label
          ? {
              href: menuSection.action2.href,
              label: menuSection.action2.label,
              target: menuSection.action2.target ?? undefined,
              variant: "secondary" as const,
            }
          : undefined,
      description:
        menuSection?.description ??
        "Prepared fresh with premium ingredients and our secret Taipei night market seasoning blend. Always hot, always crunchy.",
      eyebrow: menuSection?.eyebrow ?? "Taste The Street Food Sensation",
      items: normalizeMenuItems(menuSection?.featuredItems, cmsMenuItems),
      title: menuSection?.title ?? "JiJi Signature Favorites",
    },
    reviews: {
      eyebrow: reviewsSection?.eyebrow ?? "Loved By Locals",
      items: normalizeReviews(reviewsSection?.featuredReviews),
      ratingLabel: reviewsSection?.ratingLabel ?? "4.7/5 Rating (200+ Reviews)",
      title: reviewsSection?.title ?? "What JiJi Fans Say",
    },
  }
}
