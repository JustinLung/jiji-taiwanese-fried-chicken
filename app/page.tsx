import Hero from "@/components/shared/Hero"
import Marquee from "@/components/shared/Marquee"
import About from "@/components/shared/About"
import Menu from "@/components/shared/Menu"
import Reviews from "@/components/shared/Reviews"
import ContactLocation from "@/components/shared/ContactLocation"
import Medal from "@/components/icons/Medal"
import MenuIcon from "@/components/icons/MenuIcon"
import Spark from "@/components/icons/Spark"
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
      <About
        eyebrow="Our Story"
        title="From Shilin Market To Your Plate"
        descriptions={[
          "JiJi's began with a simple dream: to share the exact crunch, warmth, and flavor of Taipei's legendary night markets. Our journey started in a small corner stall in Shilin, where our secret 24-hour spice marinade and custom sweet potato flour batter became an overnight sensation.",
          "Today, we bring that authentic, hand-cut crispiness to you. Every single cutlet is butterfly-sliced, freshly seasoned, and hand-battered to achieve the famous 12-inch crispy signature bite that our happy mascot, JiJi, is so proud of.",
        ]}
        images={{
          caption: "A three-image collage showing JiJi's mascot and kitchen prep.",
          detail: {
            src: "/images/placeholder.jpg",
            alt: "Close-up of JiJi's fresh kitchen preparation",
          },
          label: "JiJi kitchen story collage",
          main: {
            src: "/images/placeholder.jpg",
            alt: "JiJi team frying Taiwanese chicken in the kitchen",
          },
          mascot: {
            src: "/images/logo-no-text.png",
            alt: "JiJi mascot",
          },
        }}
        usps={[
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
        ]}
        action={{
          href: "#menu",
          icon: "→",
          label: "Read Our Full Heritage",
        }}
      />
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
