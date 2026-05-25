import Image from "next/image"
import type { AboutProps } from "@/utils/component-types"
import Button from "./Button"

export default function About({
  action,
  descriptions,
  eyebrow,
  images,
  title,
  usps,
}: AboutProps) {
  return (
    <section
      id="about"
      className="bg-brand-2 py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <article className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,1fr)] lg:gap-18">
        <figure
          className="relative isolate mx-auto aspect-[1.48] w-full max-w-150"
          aria-label={images.label}
        >
          <Image
            src={images.main.src}
            alt={images.main.alt}
            fill
            sizes="(min-width: 1024px) 46vw, (min-width: 640px) 37rem, 92vw"
            className="rounded-4xl border-4 border-black object-cover shadow-[0_10px_0_#181816]"
          />
          <Image
            src={images.mascot.src}
            alt={images.mascot.alt}
            width={86}
            height={126}
            sizes="86px"
            className="absolute -left-5 -top-6 z-10 h-20 w-20 rounded-full border-4 border-black bg-grey-0 object-contain p-1 shadow-[0_5px_0_#181816] sm:h-23 sm:w-23"
          />
          <Image
            src={images.detail.src}
            alt={images.detail.alt}
            width={220}
            height={168}
            sizes="(min-width: 640px) 13.75rem, 9.5rem"
            className="absolute -bottom-8 right-3 z-10 aspect-[1.28] w-38 rounded-3xl border-4 border-black object-cover object-[45%_60%] shadow-[0_7px_0_#181816] sm:-right-8 sm:w-55 sm:rounded-[1.8rem]"
          />
          <figcaption className="sr-only">{images.caption}</figcaption>
        </figure>

        <header className="mx-auto max-w-150 text-center lg:mx-0 lg:text-left">
          {eyebrow && (
            <span className="font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.18em] text-brand-1">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2
              id="about-heading"
              className="mt-3 font-heading text-[clamp(2.1rem,5vw,3.4rem)]! font-black uppercase leading-none! tracking-[-0.07em] text-black"
            >
              {title}
            </h2>
          )}
          {descriptions.map((description, index) => (
            <p
              className={`${index === 0 ? "mt-6" : "mt-4"} text-small! leading-7! text-black/72`}
              key={`${description}-${index}`}
            >
              {description}
            </p>
          ))}

          <ul className="mt-8 grid gap-5 text-left sm:grid-cols-2">
            {usps.map(({ description, icon: Icon, title }, index) => (
              <li key={`${title}-${index}`} className="flex gap-3">
                <span
                  className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-brand-1"
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </span>
                <span>
                  <strong className="block font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.08em] text-black">
                    {title}
                  </strong>
                  <small className="mt-1 block text-[0.68rem]! leading-4! text-black/56">
                    {description}
                  </small>
                </span>
              </li>
            ))}
          </ul>

          {action && (
            <Button
              href={action.href}
              icon={action.icon}
              className="mt-9 min-h-12 border-[3px] px-6"
            >
              {action.label}
            </Button>
          )}
        </header>
      </article>
    </section>
  )
}
