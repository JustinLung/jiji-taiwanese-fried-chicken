import { client } from "@/sanity/lib/client"
import { siteSettingsQuery } from "@/sanity/lib/queries"
import type { CmsSiteSettings } from "@/utils/cms-types"
import {
  contactDetails,
  legalLinks,
  links,
  socialLinks,
} from "@/utils/links"

const homeSectionIds = new Set(["about", "contact", "menu"])

function normalizeHref(href: string | null | undefined) {
  const value = href?.trim()

  if (!value || value === "#" || value === "/#") {
    return undefined
  }

  if (value.startsWith("#")) {
    return `/${value}`
  }

  const sectionId = value.toLowerCase()

  if (homeSectionIds.has(sectionId)) {
    return `/#${sectionId}`
  }

  return value
}

function fallbackHref(
  label: string,
  fallback: Array<{ href: string; label: string }>,
) {
  const matchingLink = fallback.find(
    (link) => link.label.toLowerCase() === label.toLowerCase(),
  )

  return matchingLink?.href
}

function validSimpleLinks(
  items: Array<{ href?: string | null; label?: string | null }> | null | undefined,
  fallback: Array<{ href: string; label: string }>,
) {
  const links = items?.reduce<Array<{ href: string; label: string }>>(
    (resolvedLinks, item) => {
      if (!item.label) {
        return resolvedLinks
      }

      const href = normalizeHref(item.href) ?? fallbackHref(item.label, fallback)

      if (!href) {
        return resolvedLinks
      }

      resolvedLinks.push({
        href,
        label: item.label,
      })

      return resolvedLinks
    },
    [],
  )

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
    mainNavigation: links,
    socialLinks: validSimpleLinks(siteSettings?.socialLinks, socialLinks),
  }
}
