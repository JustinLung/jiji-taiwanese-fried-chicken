import { defineField, defineType } from "sanity"

const iconOptions = [
  { title: "Check", value: "check" },
  { title: "Flame", value: "flame" },
  { title: "Medal", value: "medal" },
  { title: "Spark", value: "spark" },
  { title: "Star", value: "star" },
]

export const marqueeItem = defineType({
  name: "marqueeItem",
  title: "Marquee Item",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: iconOptions,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "icon",
    },
  },
})
