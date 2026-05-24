import Image from "next/image"
import Link from "next/link"
import { contactDetails, links, socialLinks } from "@/utils/links"

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
]

const socialIcons = {
  Instagram: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.25" />
      <path d="M16.85 7.2h.01" />
    </>
  ),
  TikTok: (
    <path d="M14 5v8.25a4.25 4.25 0 1 1-3.6-4.2v2.35a2 2 0 1 0 1.25 1.85V5h2.35c.4 2 1.6 3.25 3.5 3.65v2.35A6.75 6.75 0 0 1 14 9.75" />
  ),
}

export default function Footer() {
  return (
    <footer
      className="site-footer mt-24 bg-black text-grey-0"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="site-footer-grid">
          <section aria-labelledby="footer-brand">
            <Link
              href="/"
              className="inline-flex items-center gap-4 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              <span className="relative grid size-14 place-items-center overflow-hidden rounded-full bg-grey-1 ring-1 ring-white/15">
                <Image
                  src="/images/placeholder.jpg"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover object-[52%_58%]"
                />
              </span>
              <span>
                <span
                  id="footer-brand"
                  className="block font-heading text-huge! font-black uppercase leading-none! tracking-wide text-brand-1"
                >
                  JiJi
                </span>
                <span className="mt-1 block font-heading text-extra-small! font-bold uppercase leading-tight! tracking-[0.18em] text-grey-0">
                  Fried Chicken
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-sm text-small! leading-6! text-grey-0/60">
              Bringing the crunch to the heart of Amsterdam—XL Taiwanese fried
              chicken and crispy popcorn chicken. Taste the tradition with every
              bite!
            </p>

            <ul className="mt-7 flex gap-3" aria-label="Social links">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit JiJi on ${social.label}`}
                    className="grid size-9 place-items-center rounded-md border border-white/15 bg-white/6 text-grey-0/75 transition hover:border-brand-1 hover:bg-brand-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {socialIcons[social.label as keyof typeof socialIcons]}
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <nav aria-labelledby="footer-explore">
            <h3
              id="footer-explore"
              className="text-extra-small! font-black uppercase leading-none! tracking-[0.18em] text-brand-1"
            >
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {links.map((link, index) => (
                <li key={`${link.href}-${link.label}-${index}`}>
                  <Link
                    href={link.href}
                    className="text-small! leading-6! text-grey-0/65 transition hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-details">
            <h3
              id="footer-details"
              className="text-extra-small! font-black uppercase leading-none! tracking-[0.18em] text-brand-1"
            >
              Location Details
            </h3>
            <address className="mt-6 space-y-3 text-small! not-italic leading-6! text-grey-0/65">
              <p className="text-small! leading-6!">
                {contactDetails.addressLines[0]}
                <br />
                {contactDetails.addressLines[1]}
              </p>
              <p className="text-small! leading-6!">
                Call Us:{" "}
                <Link
                  href={contactDetails.phoneHref}
                  className="text-small! transition hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                >
                  {contactDetails.phoneLabel}
                </Link>
                <br />
                Email:{" "}
                <Link
                  href={contactDetails.emailHref}
                  className="text-small! transition hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                >
                  {contactDetails.emailLabel}
                </Link>
              </p>
            </address>
          </section>
        </div>

        <div className="site-footer-bottom mt-12 flex flex-row flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8 text-extra-small! text-grey-0/45">
          <p className="text-extra-small! leading-5!">
            &copy; 2025 JiJi Authentic Taiwanese Fried Chicken. All
            Rights Reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="site-footer-legal flex flex-row flex-wrap gap-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-extra-small! leading-5! transition hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
