type LegalSection = {
  title: string
  body: string[]
}

type LegalPageProps = {
  title: string
  eyebrow: string
  description: string
  updatedAt: string
  sections: LegalSection[]
}

export default function LegalPage({
  description,
  eyebrow,
  sections,
  title,
  updatedAt,
}: LegalPageProps) {
  return (
    <article className="relative isolate bg-grey-1">
      <div
        className="absolute inset-0 -z-10 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 8% 8%, rgba(255, 206, 36, 0.28), transparent 22rem), radial-gradient(circle at 92% 18%, rgba(227, 27, 21, 0.12), transparent 18rem)",
        }}
      />

      <div className="container mx-auto px-4 py-16 md:px-6 lg:py-20">
        <header className="mx-auto max-w-4xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-brand-2 px-4 py-2 font-heading text-[0.68rem]! font-black uppercase leading-none! tracking-[0.16em] text-black shadow-[0_4px_0_rgba(24,24,22,0.1)]">
            <span
              className="size-2.5 rounded-full bg-brand-1"
              aria-hidden="true"
            />
            {eyebrow}
          </p>
          <h1 className="mt-7 font-heading text-[clamp(3rem,8vw,6rem)]! font-black uppercase leading-[0.88]! tracking-[-0.08em] text-black">
            {title}
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base! leading-8! text-black/62">
            {description}
          </p>
          <p className="mt-5 font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.16em] text-brand-1">
            Last updated: {updatedAt}
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-[14rem_1fr] lg:gap-8">
          <aside className="h-fit rounded-[1.4rem] border-[3px] border-black bg-brand-2 p-5 shadow-[0_6px_0_#181816] lg:sticky lg:top-24">
            <h2 className="font-heading text-extra-small! font-black uppercase leading-none! tracking-[0.16em] text-black">
              On this page
            </h2>
            <nav aria-label={`${title} sections`}>
              <ol className="mt-5 grid gap-3">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#section-${index + 1}`}
                      className="block rounded-sm text-small! font-bold leading-5! text-black/68 transition hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-2"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="rounded-[1.6rem] border-[3px] border-black bg-grey-0 p-6 shadow-[0_8px_0_#181816] sm:p-8 lg:p-10">
            <div className="grid gap-10">
              {sections.map((section, index) => (
                <section
                  id={`section-${index + 1}`}
                  className="scroll-mt-24 border-b border-black/10 pb-10 last:border-b-0 last:pb-0"
                  key={section.title}
                >
                  <p className="font-heading text-[0.68rem]! font-black uppercase leading-none! tracking-[0.16em] text-brand-1">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-heading text-[clamp(1.65rem,4vw,2.5rem)]! font-black uppercase leading-none! tracking-[-0.06em] text-black">
                    {section.title}
                  </h2>
                  <div className="mt-5 grid gap-4">
                    {section.body.map((paragraph) => (
                      <p
                        className="text-small! leading-7! text-black/66"
                        key={paragraph}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
