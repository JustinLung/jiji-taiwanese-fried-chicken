"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { links } from "@/utils/links"

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-grey-1"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 border-b border-black/10 bg-grey-1">
      <nav
        className="container mx-auto flex items-center justify-between gap-6 p-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={`inline-flex shrink-0 items-center gap-3 rounded-sm ${focusRing}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/images/logo-no-text.png"
            alt="JiJi Fried Chicken"
            width={50}
            height={50}
          />
        </Link>

        <ul className="hidden items-center gap-4 md:flex xl:gap-8">
          {links.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              <Link
                href={link.href}
                target={link.target ?? "_self"}
                rel={link.target === "_blank" ? "noreferrer" : undefined}
                className={`whitespace-nowrap rounded-sm font-heading text-extra-small! font-bold leading-none! text-black/70 transition hover:text-brand-1 ${focusRing}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className={`grid size-11 place-items-center rounded-lg border border-black/10 bg-grey-0 text-black md:hidden ${focusRing}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <span className="relative block h-4 w-6" aria-hidden="true">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-6 bg-current"
              animate={isMenuOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="absolute left-0 top-[7px] h-0.5 w-6 bg-current"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="absolute left-0 top-[14px] h-0.5 w-6 bg-current"
              animate={
                isMenuOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }
              }
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full w-full border-y border-black/10 bg-grey-1 px-6 py-5 shadow-xl md:hidden"
          >
            <ul className="grid gap-4">
              {links.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    target={link.target ?? "_self"}
                    rel={link.target === "_blank" ? "noreferrer" : undefined}
                    className={`block rounded-sm font-heading text-small! font-bold text-black transition hover:text-brand-1 ${focusRing}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
