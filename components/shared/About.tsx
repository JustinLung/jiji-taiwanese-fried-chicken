import Image from "next/image"

export default function About() {
  return (
    <section className="container mx-auto grid gap-8 py-12 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center md:py-20">
      <div className="relative">
        <div className="absolute -top-4 -left-4 hidden h-24 w-24 rounded-full bg-brand-2 md:block" />
        <div className="absolute -right-3 -bottom-3 hidden h-20 w-20 rounded-full bg-brand-3 md:block" />

        <div className="relative overflow-hidden rounded-4xl bg-grey-0 p-3 shadow-sm">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/placeholder.JPG"
              alt="Freshly prepared Taiwanese fried chicken at JiJi"
              className="aspect-4/5 h-full w-full object-cover"
              loading="eager"
              width={900}
              height={1125}
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2>Taiwanese street food with serious crunch.</h2>

        <p className="max-w-xl text-grey-5">
          JiJi brings bold Taiwanese fried chicken to the heart of Amsterdam
          with golden crusts, juicy bites, and the kind of comfort food you
          instantly want again.
        </p>

        <p className="max-w-xl text-grey-5">
          From XL chicken cutlets to crispy popcorn chicken, everything is made
          to feel generous, vibrant, and easy to share.
        </p>
      </div>
    </section>
  )
}
