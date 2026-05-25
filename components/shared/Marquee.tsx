import { icons, marqueeItems } from "@/utils/marquee-items"
import type { MarqueeProps, MarqueeTrackProps } from "@/utils/component-types"

function MarqueeTrack({ items }: MarqueeTrackProps) {
  return (
    <div className="site-marquee-track flex min-w-max flex-none">
      {items.map((item) => {
        const Icon = icons[item.icon]

        return (
          <span
            className="inline-flex items-center gap-4 whitespace-nowrap px-7 py-3 font-heading font-black uppercase leading-none! tracking-[0.14em]"
            key={item.label}
          >
            <span>{item.label}</span>
            <Icon aria-hidden="true" className="size-6 shrink-0 text-brand-2" />
          </span>
        )
      })}
    </div>
  )
}

export default function Marquee({ items = marqueeItems }: MarqueeProps) {
  return (
    <section
      id="highlights"
      className="site-marquee overflow-hidden border-y-2 border-black bg-brand-1 text-grey-1"
      aria-label="JiJi highlights"
    >
      <ul className="sr-only hidden">
        {marqueeItems.map((item) => (
          <li key={item.label}>{item.label}</li>
        ))}
      </ul>

      <div className="flex w-full overflow-hidden" aria-hidden="true">
        <MarqueeTrack items={items} />
        <MarqueeTrack items={items} />
      </div>
    </section>
  )
}
