"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"
import Star from "@/components/icons/Star"
import type { MenuCardProps } from "@/utils/component-types"
import MenuItemModal from "@/components/shared/MenuItemModal"
import Button from "./Button"

export default function MenuCard({
  badge,
  description,
  details,
  image,
  name,
  price,
  rating,
}: MenuCardProps) {
  const roundedRating = Math.round(rating)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const closeDetails = useCallback(() => {
    setIsDetailsOpen(false)
    window.requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border-[3px] border-black bg-grey-1 shadow-[0_5px_0_#181816] transition hover:-translate-y-1 hover:shadow-[0_8px_0_#181816]">
        <div className="relative aspect-5/4 overflow-hidden border-b-[3px] border-black bg-grey-3">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 100vw"
            className={`object-cover transition duration-500 group-hover:scale-105 ${image.className ?? ""}`}
          />
          <span className="absolute left-3 top-3 rounded-md border-2 border-black bg-brand-2 px-2.5 py-1 font-heading text-[0.58rem]! font-black uppercase leading-none! tracking-widest text-black shadow-[0_2px_0_#181816]">
            {badge}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <header className="flex items-start justify-between gap-4">
            <h3 className="max-w-34 font-heading text-sm! font-black uppercase leading-tight! tracking-[-0.03em] text-black">
              {name}
            </h3>
            <p
              className="font-heading text-extra-small! font-black leading-none! text-brand-1"
              aria-label={`Price ${price}`}
            >
              {price}
            </p>
          </header>

          <p className="mt-3 flex-1 text-extra-small! leading-5! text-black/60">
            {description}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3">
            <div
              className="flex gap-0.5 text-brand-2"
              role="img"
              aria-label={`${rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  aria-hidden="true"
                  className="size-3.5"
                  fill={index < roundedRating ? "currentColor" : "none"}
                  key={`${name}-star-${index}`}
                  strokeWidth="2.2"
                />
              ))}
            </div>

            <Button
              ref={triggerRef}
              type="button"
              onClick={() => setIsDetailsOpen(true)}
              aria-haspopup="dialog"
              className="px-2! py-1! text-[0.4rem]! cursor-pointer"
            >
              View Details
            </Button>
          </div>
        </div>
      </article>

      <MenuItemModal
        item={{ badge, description, details, image, name, price, rating }}
        isOpen={isDetailsOpen}
        onClose={closeDetails}
      />
    </>
  )
}
