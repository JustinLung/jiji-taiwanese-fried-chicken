export type NavLink = {
  label: string
  href: string
  target?: "_blank" | "_self"
}

export type SocialLink = {
  label: string
  href: string
}

export const links: NavLink[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Find Us",
    href: "https://www.google.com/maps/dir//JiJi+Taiwanese+Fried+Chicken,+Leidsekruisstraat+10,+1017+RH+Amsterdam/@51.9879228,5.9532538,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47c60958136c19a5:0x3d689e1ed8529ab8!2m2!1d4.8852537!2d52.3638403?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D",
    target: "_blank",
  },
]

export const contactDetails = {
  phoneLabel: "+31 20 123 45 67",
  phoneHref: "tel:+31201234567",
  emailLabel: "hello@jijitfc.com",
  emailHref: "mailto:hello@jijitfc.com",
  addressLines: ["Leidsekruisstraat 10", "1017 RH Amsterdam"],
}

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/jijifriedchicken/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@jijifriedchicken",
  },
]
