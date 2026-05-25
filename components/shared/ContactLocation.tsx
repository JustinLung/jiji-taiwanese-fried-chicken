"use client"

import dynamic from "next/dynamic"
import ClockIcon from "@/components/icons/ClockIcon"
import DownloadIcon from "@/components/icons/DownloadIcon"
import LocationPinIcon from "@/components/icons/LocationPinIcon"
import PhoneIcon from "@/components/icons/PhoneIcon"
import Button from "./Button"
import { contactDetails, links } from "@/utils/links"

const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full min-h-72 place-items-center bg-grey-3 text-center font-heading text-extra-small! font-black uppercase tracking-[0.12em] text-black/45">
      Loading map...
    </div>
  ),
})

const findUsLink = links.find((link) => link.label === "Find Us")

const contactItems = [
  {
    Icon: LocationPinIcon,
    label: "Our Location",
    lines: contactDetails.addressLines,
  },
  {
    Icon: ClockIcon,
    label: "Opening Hours",
    lines: ["Mon - Thu: 11:30 AM - 10:00 PM", "Fri - Sun: 11:30 AM - Midnight"],
    highlightLastLine: true,
  },
  {
    Icon: PhoneIcon,
    label: "Contact & Inquiries",
    lines: [contactDetails.phoneLabel, contactDetails.emailLabel],
  },
]

export default function ContactLocation() {
  return (
    <section
      id="contact"
      className="border-y-[3px] border-black bg-grey-3 px-4 py-16 sm:py-20"
      aria-labelledby="contact-location-heading"
    >
      <div className="container mx-auto grid gap-10 lg:grid-cols-[minmax(18rem,0.4fr)_minmax(0,0.6fr)] lg:items-center">
        <div>
          <p className="font-heading text-[0.62rem]! font-black uppercase leading-none! tracking-[0.18em] text-brand-1">
            Come Visit Us!
          </p>
          <h2
            id="contact-location-heading"
            className="mt-3 max-w-sm font-heading text-[clamp(2rem,5vw,3.2rem)]! font-black uppercase leading-[0.9]! tracking-[-0.07em] text-black"
          >
            JiJi&apos;s Fried Chicken Taipei Stall
          </h2>

          <div className="mt-8 grid gap-4">
            {contactItems.map(({ Icon, ...item }) => (
              <div className="flex gap-3" key={item.label}>
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-brand-1/25 bg-brand-1/10 text-brand-1">
                  <Icon className="size-3.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-[0.66rem]! font-black uppercase leading-none! tracking-widest text-black">
                    {item.label}
                  </h3>
                  <div className="mt-1.5 space-y-0.5">
                    {item.lines.map((line, index) => (
                      <p
                        className={`text-[0.78rem]! leading-5! ${
                          item.highlightLastLine && index === item.lines.length - 1
                            ? "font-heading font-black text-brand-1"
                            : "text-black/58"
                        }`}
                        key={line}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={findUsLink?.href ?? "#"}
              target={findUsLink?.target}
              icon={<LocationPinIcon className="size-4" />}
              iconPosition="start"
              className="min-h-11 px-5 text-[0.68rem]!"
            >
              Get Directions
            </Button>
            <Button
              href="/menu.pdf"
              download
              variant="secondary"
              icon={<DownloadIcon className="size-4" />}
              iconPosition="start"
              className="min-h-11 px-5 text-[0.68rem]!"
            >
              Download Menu PDF
            </Button>
          </div>
        </div>

        <div className="jiji-location-map relative h-96 overflow-hidden rounded-[1.6rem] border-[3px] border-black bg-grey-4 shadow-[0_6px_0_#181816] lg:h-112">
          <LocationMap />
          <div
            className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/35"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
