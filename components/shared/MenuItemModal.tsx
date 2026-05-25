"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useId, useRef } from "react"
import type { MenuItemModalProps } from "@/utils/component-types"

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",")

export default function MenuItemModal({
  isOpen,
  item,
  onClose,
}: MenuItemModalProps) {
  const titleId = useId()
  const descriptionId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
        return
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return
      }

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      )

      if (!focusableElements.length) {
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onMouseDown={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative max-h-[calc(100svh-2rem)] w-full max-w-2xl overflow-hidden rounded-3xl border-[3px] border-black bg-grey-1 text-black shadow-[0_14px_0_#181816]"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex min-h-11 items-center justify-center rounded-full border-2 border-black bg-brand-1 px-4 font-heading text-[0.62rem]! font-black uppercase leading-none! tracking-[0.12em] text-white shadow-[0_4px_0_#181816] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#181816] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-grey-1 active:translate-y-0.5 active:shadow-[0_2px_0_#181816]"
            >
              Close
            </button>
            <div className="max-h-[calc(100svh-2.4rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="relative aspect-16/8.5 min-h-52 overflow-hidden border-b-[3px] border-black bg-grey-3">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className={`object-cover ${item.image.className ?? ""}`}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/45 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-4 right-4 rounded-full border-2 border-white/80 bg-brand-1 px-4 py-2 font-heading text-[0.62rem]! font-black uppercase leading-none! tracking-widest text-white shadow-[0_3px_0_#181816]">
                  {item.details.spiceLevel}
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-heading text-[0.62rem]! font-black uppercase leading-none! tracking-[0.18em] text-brand-1">
                      {item.badge}
                    </p>
                    <h2
                      id={titleId}
                      className="mt-2 font-heading text-[clamp(1.65rem,5vw,2.6rem)]! font-black uppercase leading-none! tracking-[-0.06em] text-black"
                    >
                      {item.name}
                    </h2>
                  </div>
                  <p
                    className="shrink-0 font-heading text-3xl! font-black leading-none! text-brand-1"
                    aria-label={`Price ${item.price}`}
                  >
                    {item.price}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 border-b border-black/10 pb-5 text-extra-small! text-black/55">
                  <span>{item.details.prepTime}</span>
                  {item.details.servingNote && (
                    <span>{item.details.servingNote}</span>
                  )}
                </div>

                <p
                  id={descriptionId}
                  className="mt-5 text-small! leading-6! text-black/62"
                >
                  {item.description}
                </p>

                <div className="mt-7 grid gap-7 md:grid-cols-2">
                  <section aria-labelledby={`${titleId}-ingredients`}>
                    <h3
                      id={`${titleId}-ingredients`}
                      className="font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.14em] text-black"
                    >
                      Key Ingredients
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.details.ingredients.map((ingredient) => (
                        <li
                          key={ingredient}
                          className="rounded-md bg-grey-4 px-3 py-1.5 font-heading text-[0.65rem]! font-black leading-none! text-black/72"
                        >
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section aria-labelledby={`${titleId}-nutrition`}>
                    <h3
                      id={`${titleId}-nutrition`}
                      className="font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.14em] text-black"
                    >
                      Nutrition
                    </h3>
                    <dl className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
                      {item.details.nutrition.map((nutrition) => (
                        <div
                          key={nutrition.label}
                          className="flex items-center justify-between gap-3 border-b border-dashed border-black/15 pb-2"
                        >
                          <dt className="text-extra-small! leading-none! text-black/48">
                            {nutrition.label}
                          </dt>
                          <dd className="font-heading text-extra-small! font-black leading-none! text-black">
                            {nutrition.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </section>
                </div>

                <div className="mt-7 border-t border-black/10 pt-5">
                  <h3 className="font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.14em] text-black/65">
                    Allergens
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.details.allergens.map((allergen) => (
                      <li
                        key={allergen}
                        className="rounded-md border border-brand-1 px-2.5 py-1 font-heading text-[0.58rem]! font-black uppercase leading-none! tracking-[0.08em] text-brand-1"
                      >
                        {allergen}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
