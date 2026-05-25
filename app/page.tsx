import Hero from "@/components/shared/Hero"
import Marquee from "@/components/shared/Marquee"
import Menu from "@/components/shared/Menu"
import Reviews from "@/components/shared/Reviews"
import ContactLocation from "@/components/shared/ContactLocation"
import MenuIcon from "@/components/icons/MenuIcon"
import { links } from "@/utils/links"
import { menuItems } from "@/utils/menu-items"
import { reviews } from "@/utils/reviews"

const menuHref = links.find((link) => link.label === "Menu")?.href ?? "/menu"
const findUsLink = links.find((link) => link.label === "Find Us")

export default function Home() {
  return (
    <>
      <Hero
        title={"Crispy.\nJuicy.\nTaiwanese."}
        description="Experience the ultimate crunch of our jumbo fried chicken cutlets. Infused with aromatic five-spice, white pepper, and fresh basil, fried to absolute golden perfection."
        image={{
          src: "/images/placeholder.jpg",
          alt: "JiJi team preparing Taiwanese fried chicken in the kitchen",
          priority: true,
        }}
        eyebrow="Authentic Taipei Night Market Recipe"
        primaryAction={{
          href: findUsLink?.href ?? "#",
          icon: "→",
          label: "Find Us",
          target: findUsLink?.target,
        }}
        secondaryAction={{
          href: menuHref,
          icon: <MenuIcon className="size-5" />,
          iconPosition: "start",
          label: "View Full Menu",
          variant: "secondary",
        }}
        usps={[
          { label: "100% Fresh Daily" },
          { label: "Secret Pepper Salt Mix" },
          { label: "Made-To-Order Crispness" },
        ]}
        sizeBadge={{
          ariaLabel: "XL size, 100% Halal!",
          eyebrow: "XL Size",
          label: "100% Halal!",
        }}
        quote={{
          avatar: {
            src: "/images/placeholder.jpg",
            alt: "",
            sizes: "48px",
          },
          eyebrow: "Jiji says:",
          text: "“Crispiest bite you'll ever have!”",
        }}
      />
      <Marquee />
      <Menu
        eyebrow="Taste The Street Food Sensation"
        title="JiJi Signature Favorites"
        description="Prepared fresh with premium ingredients and our secret Taipei night market seasoning blend. Always hot, always crunchy."
        items={menuItems}
        action={{
          href: menuHref,
          icon: "→",
          label: "Explore Full Menu",
        }}
      />
      <Reviews
        eyebrow="Loved By Locals"
        title="What JiJi Fans Say"
        ratingLabel="4.7/5 Rating (200+ Reviews)"
        reviews={reviews}
      />
      <ContactLocation />
    </>
  )
}
