import Hero from "@/components/shared/Hero"
import Marquee from "@/components/shared/Marquee"
import About from "@/components/shared/About"
import Menu from "@/components/shared/Menu"
import Reviews from "@/components/shared/Reviews"
import ContactLocation from "@/components/shared/ContactLocation"
import MenuIcon from "@/components/icons/MenuIcon"
import { getHomePageData } from "@/utils/home-page-data"

export const dynamic = "force-dynamic"

export default async function Home() {
  const { about, contact, hero, marqueeItems, menu, reviews } =
    await getHomePageData()

  return (
    <>
      <Hero
        title={hero.title}
        description={hero.description}
        image={hero.image}
        eyebrow={hero.eyebrow}
        primaryAction={{
          ...hero.primaryAction,
          icon: "→",
        }}
        secondaryAction={{
          ...hero.secondaryAction,
          icon: <MenuIcon className="size-5" />,
          iconPosition: "start",
        }}
        usps={hero.usps}
        sizeBadge={hero.sizeBadge}
        quote={hero.quote}
      />
      <Marquee items={marqueeItems} />
      <Menu
        eyebrow={menu.eyebrow}
        title={menu.title}
        description={menu.description}
        items={menu.items}
        action={{
          ...menu.action,
          icon: "→",
        }}
      />
      <About
        eyebrow={about.eyebrow}
        title={about.title}
        descriptions={about.descriptions}
        images={about.images}
        usps={about.usps}
        action={about.action ? { ...about.action, icon: "→" } : undefined}
      />
      <Reviews
        eyebrow={reviews.eyebrow}
        title={reviews.title}
        ratingLabel={reviews.ratingLabel}
        reviews={reviews.items}
      />
      <ContactLocation
        contact={contact.details}
        eyebrow={contact.eyebrow}
        title={contact.title}
      />
    </>
  )
}
