import type { ReactNode } from "react"
import Button from "./Button"
import MenuCard from "./MenuCard"
import type { MenuItem } from "./menu-types"

type MenuProps = {
  action?: {
    href: string
    icon?: ReactNode
    label: string
  }
  description?: string
  eyebrow: string
  items: MenuItem[]
  title: string
}

export default function Menu({
  action,
  description,
  eyebrow,
  items,
  title,
}: MenuProps) {
  return (
    <section
      className="container mx-auto bg-grey-1 px-4 py-16 sm:py-20"
      aria-labelledby="menu-heading"
    >
      <header className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)] md:items-end">
        <div>
          <p className="font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.18em] text-brand-1">
            {eyebrow}
          </p>
          <h2
            id="menu-heading"
            className="mt-3 max-w-2xl font-heading text-[clamp(2rem,5vw,3.4rem)]! font-black uppercase leading-none! tracking-[-0.07em] text-black"
          >
            {title}
          </h2>
        </div>

        {description && (
          <p className="max-w-md text-small! leading-6! text-black/60 md:justify-self-end">
            {description}
          </p>
        )}
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <MenuCard key={item.name} {...item} />
        ))}
      </div>

      {action && (
        <div className="mt-10 flex justify-center">
          <Button href={action.href} icon={action.icon} className="min-h-12 px-6">
            {action.label}
          </Button>
        </div>
      )}
    </section>
  )
}