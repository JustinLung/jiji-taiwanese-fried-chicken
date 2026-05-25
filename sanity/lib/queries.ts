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
      featuredReviews[]->{
        name,
        role,
        quote,
        "avatarSrc": avatar.asset->url
      }
    },
    contactSection
  }
`)

export const marqueeItemsQuery = defineQuery(`
  *[_type == "marqueeItem"] | order(sortOrder asc) {
    icon,
    label
  }
`)

export const reviewsQuery = defineQuery(`
  *[_type == "review"] | order(sortOrder asc) {
    name,
    role,
    quote,
    "avatarSrc": avatar.asset->url
  }
`)

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    contact
  }
`)
