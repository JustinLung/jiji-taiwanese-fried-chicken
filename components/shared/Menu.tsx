import type { MenuAction, MenuProps } from "@/utils/component-types"
import Button from "./Button"
import MenuCard from "./MenuCard"

function isMenuAction(action: MenuAction | undefined): action is MenuAction {
  return Boolean(action)
}

export default function Menu({
  action,
  action2,
  description,
  eyebrow,
  items,
  title,
}: MenuProps) {
  const actions = [action, action2].filter(isMenuAction)

  return (
    <section
      id="menu"
      className="container mx-auto bg-grey-1 px-4 py-16 sm:py-20"
      aria-labelledby="menu-heading"
    >
      <header className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)] md:items-end">
        <div>
          <span className="font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.18em] text-brand-1">
            {eyebrow}
          </span>
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

      {actions.length > 0 && (
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          {actions.map((item) => (
            <Button
              href={item.href}
              target={item.target}
              icon={item.icon}
              variant={item.variant}
              className="min-h-12 px-6"
              key={`${item.href}-${item.label}`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </section>
  )
}