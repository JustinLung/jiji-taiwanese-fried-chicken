import Image from "next/image"
import Link from "next/link"
import Instagram from "@/components/icons/Instagram"
import TikTok from "@/components/icons/TikTok"
import { getFooterData } from "@/utils/site-settings-data"

const socialIcons = {
  Instagram: <Instagram aria-hidden="true" className="size-4" />,
  TikTok: <TikTok aria-hidden="true" className="size-4" />,
}

export default async function Footer() {
  const {
    businessName,
    contact,
    copyrightText,
    footerDescription,
    legalLinks,
    mainNavigation,
    socialLinks,
  } = await getFooterData()

  return (
    <footer
      className="site-footer bg-black text-grey-0"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="site-footer-grid">
          <section aria-labelledby="footer-brand">
            <Link
              href="/"
              className="inline-flex items-center gap-4 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              <Image
                src="/images/logo-red.png"
                alt={businessName}
                width={200}
                height={200}
              />
            </Link>

            <p className="mt-7 max-w-sm text-small! leading-6! text-grey-0/60">
              {footerDescription}
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
                    {socialIcons[social.label as keyof typeof socialIcons] ?? social.label}
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
              {mainNavigation.map((link, index) => (
                <li key={`${link.href}-${link.label}-${index}`}>
                  <Link
                    href={link.href}
                    target={link.target}
                    rel={link.target === "_blank" ? "noreferrer" : undefined}
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
                {contact.addressLines.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </p>
              <p className="text-small! leading-6!">
                Call Us:{" "}
                <Link
                  href={contact.phoneHref}
                  className="text-small! transition hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                >
                  {contact.phoneLabel}
                </Link>
                <br />
                Email:{" "}
                <Link
                  href={contact.emailHref}
                  className="text-small! transition hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                >
                  {contact.emailLabel}
                </Link>
              </p>
            </address>
          </section>
        </div>

        <div className="site-footer-bottom mt-12 flex flex-row flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8 text-extra-small! text-grey-0/45">
          <p className="text-extra-small! leading-5!">
            {copyrightText}
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
