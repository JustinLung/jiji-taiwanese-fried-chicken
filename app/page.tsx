import Hero from "@/components/shared/Hero"
import Marquee from "@/components/shared/Marquee"
import { links } from "@/utils/links"

const menuHref = links.find((link) => link.label === "Menu")?.href ?? "/menu"
const findUsLink = links.find((link) => link.label === "Find Us")

function MenuIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 5.5h9a3 3 0 0 1 3 3v10H7a3 3 0 0 1-3-3v-10Z" />
      <path d="M16 8.5h1a3 3 0 0 1 3 3v7h-4" />
      <path d="M7.5 9.5h5" />
      <path d="M7.5 13h4" />
    </svg>
  )
}

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
          icon: <MenuIcon />,
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
          ariaLabel: "Jumbo size, 12 inches",
          eyebrow: "Jumbo Size",
          label: "12 Inches",
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
    </>
  )
}
