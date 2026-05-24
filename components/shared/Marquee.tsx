const marqueeItems = [
  { label: "Taiwanese Street Food", icon: "flame" },
  { label: 'Jumbo 12" Cutlet', icon: "medal" },
  { label: "Always Crunchy", icon: "spark" },
  { label: "Fresh Daily At 5:00 AM", icon: "check" },
  { label: "Secret Night Market", icon: "star" },
]

const icons = {
  flame: (
    <path d="M12 21c-3.2 0-5.4-2.2-5.4-5.3 0-2.2 1.3-4.3 3.8-6.2.5-.4.6-1.1.3-1.7-.4-.8-.2-1.8.5-2.4 2.9 2 5.1 5.3 5.1 8.5 0 .6-.1 1.1-.2 1.6.7-.6 1.2-1.5 1.4-2.6 1.1 1 1.8 2.4 1.8 4 0 2.4-1.9 4.1-4.3 4.1H12Z" />
  ),
  medal: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="m9.7 11.2-1.2 7.1 3.5-2 3.5 2-1.2-7.1" />
    </>
  ),
  spark: (
    <path d="m12 3 1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3Zm6.5 10.5.7 2.2 2.3.8-2.3.8-.7 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
  ),
  check: <path d="m5 12.4 4.2 4.2L19 6.8" />,
  star: (
    <path d="m12 3 2.4 5 5.5.8-4 3.9.9 5.5-4.8-2.6-4.8 2.6.9-5.5-4-3.9 5.5-.8L12 3Z" />
  ),
}

function MarqueeTrack() {
  return (
    <div className="site-marquee-track flex min-w-max flex-none">
      {marqueeItems.map((item) => (
        <span
          className="inline-flex items-center gap-4 whitespace-nowrap px-7 py-3 font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.14em]"
          key={item.label}
        >
          <span>{item.label}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-4 shrink-0 text-brand-2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            {icons[item.icon as keyof typeof icons]}
          </svg>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      className="site-marquee overflow-hidden border-y-2 border-black bg-brand-1 text-grey-1"
      aria-label="JiJi highlights"
    >
      <ul className="sr-only hidden">
        {marqueeItems.map((item) => (
          <li key={item.label}>{item.label}</li>
        ))}
      </ul>

      <div className="flex w-full overflow-hidden" aria-hidden="true">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </section>
  )
}
