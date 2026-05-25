import Star from "@/components/icons/Star"
import type { ReviewsProps } from "@/utils/component-types"
import ReviewCard from "./ReviewCard"

export default function Reviews({
  eyebrow,
  ratingLabel,
  reviews,
  title,
}: ReviewsProps) {
  return (
    <section
      id="reviews"
      className="bg-grey-1 p-4 py-16 sm:py-20 container mx-auto"
      aria-labelledby="reviews-heading"
    >
      <header className="mx-auto max-w-2xl text-center">
        <p className="font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.18em] text-brand-1">
          {eyebrow}
        </p>
        <h2
          id="reviews-heading"
          className="mt-3 font-heading text-[clamp(2rem,5vw,3.4rem)]! font-black uppercase leading-none! tracking-[-0.07em] text-black"
        >
          {title}
        </h2>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <div
            className="flex gap-.5 text-brand-2"
            role="img"
            aria-label={ratingLabel}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                aria-hidden="true"
                className="size-5"
                fill="currentColor"
                key={`rating-star-${index}`}
              />
            ))}
          </div>
          <p className="font-heading text-extra-small! font-black leading-none! text-black">
            {ratingLabel}
          </p>
        </div>
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={`review-${index}`} {...review} />
        ))}
      </div>
    </section>
  )
}
