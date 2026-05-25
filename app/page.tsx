import Hero from "@/components/shared/Hero"
import Marquee from "@/components/shared/Marquee"
import About from "@/components/shared/About"
import Menu from "@/components/shared/Menu"
import Reviews from "@/components/shared/Reviews"
import ContactLocation from "@/components/shared/ContactLocation"
import Medal from "@/components/icons/Medal"
import MenuIcon from "@/components/icons/MenuIcon"
import Spark from "@/components/icons/Spark"
import { client } from "@/sanity/lib/client"
import {
  homePageQuery,
  marqueeItemsQuery,
  reviewsQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries"
import type {
  CmsHomePage,
  CmsImage,
  CmsMarqueeItem,
  CmsMenuItem,
  CmsReview,
  CmsSiteSettings,
} from "@/utils/cms-types"
import { links } from "@/utils/links"
import { menuItems } from "@/utils/menu-items"
import type { MenuItem } from "@/utils/menu-types"
import { marqueeItems } from "@/utils/marquee-items"
import { reviews } from "@/utils/reviews"

const menuHref = links.find((link) => link.label === "Menu")?.href ?? "/menu"
const findUsLink = links.find((link) => link.label === "Find Us")

export const revalidate = 60

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

function cmsMenuItems(
  items: Array<CmsMenuItem | null> | null | undefined,
): MenuItem[] {
  const normalizedItems =
    items
      ?.filter(
        (item): item is CmsMenuItem =>
          Boolean(item?.badge && item.description && item.name && item.price),
      )
      .map((item) => ({
        badge: item.badge,
        description: item.description,
        details: {
          allergens: item.details?.allergens ?? [],
          ingredients: item.details?.ingredients ?? [],
          nutrition: item.details?.nutrition ?? [],
          prepTime: item.details?.prepTime ?? "",
          servingNote: item.details?.servingNote,
          spiceLevel: item.details?.spiceLevel ?? "",
        },
        image: cmsImage(item.image, {
          alt: item.image?.alt ?? item.name,
          className: item.image?.className ?? undefined,
          src: "/images/placeholder.jpg",
        }),
        name: item.name,
        price: item.price,
        rating: item.rating,
      })) ?? []

  return normalizedItems.length ? normalizedItems : menuItems
}

function cmsReviews(items: Array<CmsReview | null> | null | undefined) {
  const normalizedReviews =
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

  return normalizedReviews
}

export default async function Home() {
  const [homePage, siteSettings, cmsMarqueeItems, cmsReviewsList] =
    await Promise.all([
    client.fetch<CmsHomePage | null>(homePageQuery),
    client.fetch<CmsSiteSettings | null>(siteSettingsQuery),
    client.fetch<CmsMarqueeItem[] | null>(marqueeItemsQuery),
    client.fetch<CmsReview[] | null>(reviewsQuery),
  ])

  const hero = homePage?.hero
  const menuSection = homePage?.menuSection
  const about = homePage?.about
  const reviewsSection = homePage?.reviewsSection
  const contactSection = homePage?.contactSection
  const menuSectionItems = cmsMenuItems(menuSection?.featuredItems)
  const featuredReviews = cmsReviews(reviewsSection?.featuredReviews)
  const allCmsReviews = cmsReviews(cmsReviewsList)
  const pageReviews =
    featuredReviews.length ? featuredReviews : allCmsReviews.length ? allCmsReviews : reviews
  const pageMarqueeItems =
    cmsMarqueeItems
      ?.filter((item) => item.icon && item.label)
      .map((item) => ({
        icon: item.icon ?? "star",
        label: item.label ?? "",
      })) ?? marqueeItems
  const aboutUsps =
    about?.usps
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
    ]

  return (
    <>
      <Hero
        title={hero?.title ?? "Crispy.\nJuicy.\nTaiwanese."}
        description={
          hero?.description ??
          "Experience the ultimate crunch of our jumbo fried chicken cutlets. Infused with aromatic five-spice, white pepper, and fresh basil, fried to absolute golden perfection."
        }
        image={cmsImage(hero?.image, {
          alt: "JiJi team preparing Taiwanese fried chicken in the kitchen",
          src: "/images/placeholder.jpg",
        })}
        eyebrow={hero?.eyebrow ?? "Authentic Taipei Night Market Recipe"}
        primaryAction={{
          href: hero?.primaryAction?.href ?? findUsLink?.href ?? "#",
          icon: "→",
          label: hero?.primaryAction?.label ?? "Find Us",
          target: hero?.primaryAction?.target ?? findUsLink?.target,
        }}
        secondaryAction={{
          href: hero?.secondaryAction?.href ?? menuHref,
          icon: <MenuIcon className="size-5" />,
          iconPosition: "start",
          label: hero?.secondaryAction?.label ?? "View Full Menu",
          variant: hero?.secondaryAction?.variant ?? "secondary",
        }}
        usps={
          hero?.usps
            ?.filter((usp) => usp.label)
            .map((usp) => ({ label: usp.label ?? "" })) ?? [
            { label: "100% Fresh Daily" },
            { label: "Secret Pepper Salt Mix" },
            { label: "Made-To-Order Crispness" },
          ]
        }
        sizeBadge={{
          ariaLabel: hero?.sizeBadge?.ariaLabel ?? "XL size, 100% Halal!",
          eyebrow: hero?.sizeBadge?.eyebrow ?? "XL Size",
          label: hero?.sizeBadge?.label ?? "100% Halal!",
        }}
        quote={{
          avatar: {
            ...cmsImage(hero?.quote?.avatar, {
              alt: "",
              src: "/images/placeholder.jpg",
            }),
            sizes: "48px",
          },
          eyebrow: hero?.quote?.eyebrow ?? "Jiji says:",
          text: hero?.quote?.text ?? "“Crispiest bite you'll ever have!”",
        }}
      />
      <Marquee items={pageMarqueeItems} />
      <Menu
        eyebrow={menuSection?.eyebrow ?? "Taste The Street Food Sensation"}
        title={menuSection?.title ?? "JiJi Signature Favorites"}
        description={
          menuSection?.description ??
          "Prepared fresh with premium ingredients and our secret Taipei night market seasoning blend. Always hot, always crunchy."
        }
        items={menuSectionItems}
        action={{
          href: menuSection?.action?.href ?? menuHref,
          icon: "→",
          label: menuSection?.action?.label ?? "Explore Full Menu",
        }}
      />
      <About
        eyebrow={about?.eyebrow ?? "Our Story"}
        title={about?.title ?? "From Shilin Market To Your Plate"}
        descriptions={
          about?.descriptions ?? [
            "JiJi's began with a simple dream: to share the exact crunch, warmth, and flavor of Taipei's legendary night markets. Our journey started in a small corner stall in Shilin, where our secret 24-hour spice marinade and custom sweet potato flour batter became an overnight sensation.",
            "Today, we bring that authentic, hand-cut crispiness to you. Every single cutlet is butterfly-sliced, freshly seasoned, and hand-battered to achieve the famous 12-inch crispy signature bite that our happy mascot, JiJi, is so proud of.",
          ]
        }
        images={{
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
            src: "/images/logo-no-text.png",
            alt: "JiJi mascot",
          }),
        }}
        usps={aboutUsps}
        action={{
          href: about?.action?.href ?? "#menu",
          icon: "→",
          label: about?.action?.label ?? "Read Our Full Heritage",
        }}
      />
      <Reviews
        eyebrow={reviewsSection?.eyebrow ?? "Loved By Locals"}
        title={reviewsSection?.title ?? "What JiJi Fans Say"}
        ratingLabel={reviewsSection?.ratingLabel ?? "4.7/5 Rating (200+ Reviews)"}
        reviews={pageReviews}
      />
      <ContactLocation
        contact={{
          addressLines: siteSettings?.contact?.addressLines ?? undefined,
          directionsUrl: siteSettings?.contact?.directionsUrl ?? undefined,
          emailLabel: siteSettings?.contact?.emailLabel ?? undefined,
          menuPdfUrl: siteSettings?.contact?.menuPdfUrl ?? undefined,
          openingHours: siteSettings?.contact?.openingHours ?? undefined,
          phoneLabel: siteSettings?.contact?.phoneLabel ?? undefined,
        }}
        eyebrow={contactSection?.eyebrow ?? undefined}
        title={contactSection?.title ?? undefined}
      />
    </>
  )
}
