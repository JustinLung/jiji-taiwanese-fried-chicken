import { client } from "@/sanity/lib/client"
import { siteSettingsQuery } from "@/sanity/lib/queries"
import type { CmsSiteSettings } from "@/utils/cms-types"
import {
  contactDetails,
  legalLinks,
  links,
  socialLinks,
  type NavLink,
  type SocialLink,
} from "@/utils/links"

function validNavLinks(
  items: CmsSiteSettings["mainNavigation"],
  fallback: NavLink[],
) {
  const links = items
    ?.filter((item) => item.href && item.label)
    .map((item) => ({
      href: item.href ?? "#",
      label: item.label ?? "",
      target: item.target ?? undefined,
    }))

  return links?.length ? links : fallback
}

function validSimpleLinks<T extends { href: string; label: string }>(
  items: Array<{ href?: string | null; label?: string | null }> | null | undefined,
  fallback: T[],
) {
  const links = items
    ?.filter((item) => item.href && item.label)
    .map((item) => ({
      href: item.href ?? "#",
      label: item.label ?? "",
    }))

  return links?.length ? links : fallback
}

export async function getFooterData() {
  const siteSettings = await client.fetch<CmsSiteSettings | null>(
    siteSettingsQuery,
    {},
    { cache: "no-store" },
  )
  const contact = siteSettings?.contact

  return {
    businessName: siteSettings?.businessName ?? "JiJi Fried Chicken",
    contact: {
      addressLines: contact?.addressLines?.length
        ? contact.addressLines
        : contactDetails.addressLines,
      emailHref: contact?.emailHref ?? contactDetails.emailHref,
      emailLabel: contact?.emailLabel ?? contactDetails.emailLabel,
      phoneHref: contact?.phoneHref ?? contactDetails.phoneHref,
      phoneLabel: contact?.phoneLabel ?? contactDetails.phoneLabel,
    },
    copyrightText:
      siteSettings?.copyrightText ??
      "© 2025 JiJi Authentic Taiwanese Fried Chicken. All Rights Reserved.",
    footerDescription:
      siteSettings?.footerDescription ??
      "Bringing the crunch to the heart of Amsterdam—XL Taiwanese fried chicken and crispy popcorn chicken. Taste the tradition with every bite!",
    legalLinks: validSimpleLinks(siteSettings?.legalLinks, legalLinks),
    mainNavigation: validNavLinks(siteSettings?.mainNavigation, links),
    socialLinks: validSimpleLinks<SocialLink>(
      siteSettings?.socialLinks,
      socialLinks,
    ),
  }
}
