import Image, { type StaticImageData } from "next/image"
import type { ReactNode } from "react"
import Button from "./Button"

type HeroImage = {
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  src: StaticImageData | string
}

type HeroAction = {
  href: string
  icon?: ReactNode
  iconPosition?: "start" | "end"
  label: string
  target?: "_blank" | "_self"
  variant?: "primary" | "secondary"
}

type HeroSizeBadge = {
  ariaLabel?: string
  eyebrow: string
  label: string
}

type HeroQuote = {
  avatar?: HeroImage
  eyebrow: string
  text: string
}

type HeroUsp = {
  label: string
}

interface HeroProps {
  description: string
  image: HeroImage
  title: string
  eyebrow?: string
  primaryAction?: HeroAction
  quote?: HeroQuote
  secondaryAction?: HeroAction
  sizeBadge?: HeroSizeBadge
  usps?: HeroUsp[]
}

function CheckIcon() {
  return (
    <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.25 8.35 6.35 11.45 12.9 4.55"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9 4.55c.1 2.7-.86 5.18-2.86 6.86-1.86 1.56-4.47 1.56-6.79-.26"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.22"
      />
    </svg>
  )
}

function getTitleLines(title: string) {
  const explicitLines = title
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)

  if (explicitLines.length > 1) {
    return explicitLines
  }

  return title
    .split(/(?<=\.)\s+/)
    .map((line) => line.trim())
    .filter(Boolean)
}

export default function Hero({
  title,
  description,
  image,
  eyebrow,
  primaryAction,
  quote,
  secondaryAction,
  sizeBadge,
  usps,
}: HeroProps) {
  const titleLines = getTitleLines(title)
  const actions = [primaryAction, secondaryAction].filter(
    (action): action is HeroAction => Boolean(action),
  )

  return (
    <section
      className="relative isolate overflow-hidden bg-grey-1"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(255, 206, 36, 0.3), transparent 22rem), radial-gradient(circle at 84% 14%, rgba(227, 27, 21, 0.14), transparent 18rem)",
        }}
      />

      <div className="container mx-auto grid min-h-[calc(100svh-4.5rem)] min-w-0 items-center gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="min-w-0 max-w-2xl text-center lg:text-left">
          {eyebrow ? (
            <p className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full bg-brand-2 px-4 py-2 font-heading text-[0.68rem]! font-black uppercase leading-none! tracking-[0.16em] text-black shadow-[0_4px_0_rgba(24,24,22,0.1)] lg:mx-0">
              <span
                className="size-2.5 rounded-full bg-brand-1"
                aria-hidden="true"
              />
              {eyebrow}
            </p>
          ) : null}

          <h1
            id="hero-heading"
            className="font-heading text-[clamp(3.15rem,10vw,6.8rem)]! font-black uppercase leading-[0.88]! tracking-[-0.08em] text-black"
          >
            {titleLines.map((line, index) => (
              <span
                className={
                  index === titleLines.length - 1 ? "block text-brand-1" : "block"
                }
                key={`${line}-${index}`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-8 max-w-148 text-base! leading-8! text-black/62 lg:mx-0">
            {description}
          </p>

          {actions.length ? (
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              {actions.map((action) => (
                <Button
                  href={action.href}
                  icon={action.icon}
                  iconPosition={action.iconPosition}
                  key={`${action.href}-${action.label}`}
                  target={action.target}
                  variant={action.variant}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}

          {usps?.length ? (
            <ul className="mt-10 grid gap-4 border-t border-black/10 pt-7 text-left sm:grid-cols-3">
              {usps.map((usp, index) => (
                <li
                  key={`${usp.label}-${index}`}
                  className="flex items-center gap-3 font-heading text-extra-small! font-black leading-tight! text-black/78"
                >
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-1/10 text-brand-1"
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </span>
                  {usp.label}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="relative mx-auto w-full max-w-full min-w-0 sm:max-w-140 lg:mr-0">
          {sizeBadge ? (
            <div
              className="absolute right-2 top-3 z-20 rotate-[7deg] rounded-[1.2rem] border-[3px] border-black bg-brand-1 px-4 py-2 text-center font-heading font-black uppercase text-white shadow-[0_5px_0_#181816] sm:-right-5 sm:-top-8 sm:px-7 sm:py-3"
              aria-label={sizeBadge.ariaLabel}
            >
              <span className="block text-[0.62rem]! leading-none! tracking-[0.16em]">
                {sizeBadge.eyebrow}
              </span>
              <span className="mt-1 block text-2xl! leading-none! tracking-[-0.05em] sm:text-3xl!">
                {sizeBadge.label}
              </span>
            </div>
          ) : null}

          <div className="relative w-full overflow-hidden rounded-4xl border-[3px] border-black bg-black shadow-[0_16px_40px_rgba(24,24,22,0.18)] sm:rounded-[2.6rem]">
            <div className="relative aspect-[4/4.55] w-full sm:aspect-4/4.75 sm:min-h-116">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={image.priority}
                sizes={
                  image.sizes ??
                  "(min-width: 1024px) 42vw, (min-width: 640px) 34rem, 100vw"
                }
                className={`object-cover object-[50%_42%] ${image.className ?? ""}`}
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,232,0.28),rgba(0,0,0,0)_30%,rgba(0,0,0,0.12)_100%)]"
                aria-hidden="true"
              />
            </div>

            {quote ? (
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex min-w-0 items-center gap-3 rounded-3xl border-[3px] border-black bg-brand-2 p-3 pr-4 shadow-[0_7px_0_rgba(24,24,22,0.22)] sm:w-[82%]">
                  {quote.avatar ? (
                    <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-grey-1 ring-2 ring-black/10">
                      <Image
                        src={quote.avatar.src}
                        alt={quote.avatar.alt}
                        fill
                        sizes={quote.avatar.sizes ?? "48px"}
                        className={`object-cover object-[27%_58%] ${quote.avatar.className ?? ""}`}
                      />
                    </span>
                  ) : null}
                  <p className="min-w-0 font-heading text-[0.72rem]! font-black uppercase leading-tight! text-black">
                    {quote.eyebrow}
                    <span className="block text-[0.8rem]! normal-case leading-tight!">
                      {quote.text}
                    </span>
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <div
            className="absolute -bottom-7 -left-4 -z-10 h-28 w-40 rounded-full bg-brand-2/60 blur-3xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
