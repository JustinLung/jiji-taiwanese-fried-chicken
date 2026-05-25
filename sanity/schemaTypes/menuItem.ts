import { defineField, defineType } from "sanity"

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Small label shown over the menu item image.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.required().min(0).max(5),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "className",
          title: "Image Position Class",
          type: "string",
          description: "Optional Tailwind object-position class, e.g. object-[50%_48%].",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "object",
      fields: [
        defineField({
          name: "prepTime",
          title: "Prep Time",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "servingNote",
          title: "Serving Note",
          type: "string",
        }),
        defineField({
          name: "spiceLevel",
          title: "Spice Level",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
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
      title: "name",
      subtitle: "price",
      media: "image",
    },
  },
})
