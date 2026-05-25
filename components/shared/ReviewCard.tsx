import Image from "next/image"
import Star from "@/components/icons/Star"
import type { ReviewCardProps } from "@/utils/component-types"

export default function ReviewCard({
  avatarSrc,
  name,
  quote,
  role,
}: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-[1.65rem] border-[3px] border-black bg-grey-1 p-5 shadow-[0_6px_0_rgba(24,24,22,0.08)] sm:p-6">
      <div>
        <div
          className="flex gap-.5 text-brand-2"
          role="img"
          aria-label="5 out of 5 stars"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              aria-hidden="true"
              className="size-5"
              fill="currentColor"
              key={`review-star-${index}`}
            />
          ))}
        </div>

        <blockquote className="mt-5 text-small! font-bold italic leading-7! text-black/70">
          “{quote}”
        </blockquote>
      </div>

      <figcaption className="mt-8 flex items-center gap-4 border-t border-black/10 pt-5">
        <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-full bg-grey-0 ring-1 ring-black/10">
          <Image
            src={avatarSrc}
            alt=""
            fill
            sizes="48px"
            className="object-cover object-[52%_58%]"
          />
        </span>
        <span>
          <span className="block font-heading text-extra-small! font-black uppercase leading-tight! tracking-[-0.02em] text-black">
            {name}
          </span>
          <span className="mt-0.5 block text-extra-small! leading-tight! text-black/50">
            {role}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
