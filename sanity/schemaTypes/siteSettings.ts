import { defineField, defineType } from "sanity"

const targetOptions = [
  { title: "Same tab", value: "_self" },
  { title: "New tab", value: "_blank" },
]

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "businessName",
      title: "Business Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "footerDescription",
      title: "Footer Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainNavigation",
      title: "Main Navigation",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "target",
              title: "Target",
              type: "string",
              options: {
                list: targetOptions,
              },
              initialValue: "_self",
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "href",
            },
          },
        },
      ],
    }),
    defineField({
      name: "legalLinks",
      title: "Legal Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "href",
            },
          },
        },
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Details",
      type: "object",
      fields: [
        defineField({
          name: "phoneLabel",
          title: "Phone Label",
          type: "string",
        }),
        defineField({
          name: "phoneHref",
          title: "Phone Link",
          type: "string",
          description: "Use a tel: link, e.g. tel:+31201234567.",
        }),
        defineField({
          name: "emailLabel",
          title: "Email Label",
          type: "string",
        }),
        defineField({
          name: "emailHref",
          title: "Email Link",
          type: "string",
          description: "Use a mailto: link, e.g. mailto:hello@example.com.",
        }),
        defineField({
          name: "addressLines",
          title: "Address Lines",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "openingHours",
          title: "Opening Hours",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "directionsUrl",
          title: "Directions URL",
          type: "url",
        }),
        defineField({
          name: "menuPdfUrl",
          title: "Menu PDF URL",
          type: "string",
          initialValue: "/menu.pdf",
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "href",
            },
          },
        },
      ],
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "businessName",
    },
  },
})
