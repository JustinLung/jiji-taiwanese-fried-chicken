import Image from "next/image"
import Button from "@/components/shared/Button"
import Flame from "@/components/icons/Flame"
import Spark from "@/components/icons/Spark"

const crumbs = ["crispy crumbs", "wrong turn", "extra spice", "lost sauce"]

export default function NotFound() {
  return (
    <section
      className="relative isolate grid min-h-[calc(100svh-4.5rem)] overflow-hidden bg-brand-2 px-4 py-16 md:px-6 lg:py-20"
      aria-labelledby="not-found-heading"
    >
      <div className="container mx-auto grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1fr)]">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border-2 border-black bg-grey-0 px-4 py-2 font-heading text-[0.68rem]! font-black uppercase leading-none! tracking-[0.16em] text-black shadow-[0_4px_0_#181816] lg:mx-0">
            <Flame className="size-4 text-brand-1" aria-hidden="true" />
            Kitchen dispatch says 404
          </p>

          <h1
            id="not-found-heading"
            className="mt-7 font-heading text-[clamp(4.8rem,18vw,12rem)]! font-black uppercase leading-[0.76]! tracking-[-0.12em] text-black"
          >
            4<span className="text-brand-1">0</span>4
          </h1>

          <h2 className="mt-6 font-heading text-[clamp(2.2rem,6vw,4.4rem)]! font-black uppercase leading-[0.88]! tracking-[-0.08em] text-black">
            This page flew the coop.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base! leading-8! text-black/66 lg:mx-0">
            The crunch is real, but this URL is not on the menu. Head back to
            the counter and we will get you something hot.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href="/" icon="→">
              Back to Home
            </Button>
            <Button href="/#menu" variant="secondary" icon="→">
              See the Menu
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-130">
          <div
            className="absolute -left-4 top-6 z-20 rotate-[-8deg] rounded-2xl border-[3px] border-black bg-brand-1 px-4 py-3 font-heading font-black uppercase text-white shadow-[0_5px_0_#181816] sm:-left-8"
            aria-hidden="true"
          >
            <span className="block text-[0.62rem]! leading-none! tracking-[0.16em]">
              Missing
            </span>
            <span className="mt-1 block text-2xl! leading-none! tracking-[-0.06em]">
              Page
            </span>
          </div>

          <div className="relative overflow-hidden rounded-4xl border-4 border-black bg-grey-1 p-8 shadow-[0_14px_0_#181816] sm:rounded-[2.6rem] sm:p-12">
            <div className="absolute inset-x-6 top-7 flex justify-between text-brand-1/80">
              <Spark className="size-6 -rotate-12" aria-hidden="true" />
              <Spark className="size-8 rotate-18" aria-hidden="true" />
            </div>

            <div className="relative mx-auto grid aspect-square max-w-80 place-items-center rounded-full border-4 border-black bg-grey-0 shadow-[inset_0_-10px_0_rgba(24,24,22,0.08)]">
              <div
                className="absolute -bottom-4 h-8 w-52 rounded-[999px] bg-black/12 blur-sm"
                aria-hidden="true"
              />
              <Image
                src="/images/logo-no-text.png"
                alt="JiJi Fried Chicken mascot looking for the missing page"
                width={210}
                height={310}
                priority
                className="relative z-10 h-auto w-38 rotate-[-4deg] drop-shadow-[0_12px_0_rgba(24,24,22,0.12)] sm:w-48"
              />
            </div>

            <ul
              className="mt-8 flex flex-wrap justify-center gap-2"
              aria-label="Breadcrumb trail"
            >
              {crumbs.map((crumb, index) => (
                <li
                  className="rounded-full border-2 border-black bg-brand-2 px-3 py-1 font-heading text-[0.62rem]! font-black uppercase leading-none! tracking-[0.12em] text-black shadow-[0_3px_0_#181816]"
                  key={crumb}
                  style={{ transform: `rotate(${index % 2 ? 3 : -3}deg)` }}
                >
                  {crumb}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
