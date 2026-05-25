import { defineQuery } from "next-sanity"

const imageFields = `
  ...,
  "src": asset->url
`

export const homePageQuery = defineQuery(`
  *[_type == "homePage"][0]{
    hero{
      ...,
      image{${imageFields}},
      quote{
        ...,
        avatar{${imageFields}}
      }
    },
    menuSection{
      ...,
      featuredItems[]->{
        badge,
        description,
        details,
        image{${imageFields}},
        name,
        price,
        rating
      }
    },
    marqueeItems,
    about{
      ...,
      images{
        ...,
        main{${imageFields}},
        detail{${imageFields}},
        mascot{${imageFields}}
      }
    },
    reviewsSection{
      ...,
      featuredReviews[]{
        name,
        role,
        quote,
        "avatarSrc": avatar.asset->url
      }
    },
    contactSection
  }
`)

export const menuItemsQuery = defineQuery(`
  *[_type == "menuItem"] | order(sortOrder asc, name asc) {
    badge,
    description,
    details,
    image{${imageFields}},
    name,
    price,
    rating
  }
`)

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    businessName,
    contact,
    copyrightText,
    footerDescription,
    legalLinks,
    mainNavigation,
    socialLinks
  }
`)
