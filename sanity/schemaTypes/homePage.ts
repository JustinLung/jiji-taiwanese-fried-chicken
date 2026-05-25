import { defineField, defineType } from "sanity"

const targetOptions = [
  { title: "Same tab", value: "_self" },
  { title: "New tab", value: "_blank" },
]

const iconOptions = [
  { title: "Medal", value: "medal" },
  { title: "Spark", value: "spark" },
]

const marqueeIconOptions = [
  { title: "Check", value: "check" },
  { title: "Flame", value: "flame" },
  { title: "Medal", value: "medal" },
  { title: "Spark", value: "spark" },
  { title: "Star", value: "star" },
]

const actionFields = [
  defineField({
    name: "label",
    title: "Label",
    type: "string",
  }),
  defineField({
    name: "href",
    title: "URL",
    type: "string",
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
]

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          description: "Use line breaks to control the title wrapping.",
          validation: (Rule) => Rule.required(),
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
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "primaryAction",
          title: "Primary Action",
          type: "object",
          fields: actionFields,
        }),
        defineField({
          name: "secondaryAction",
          title: "Secondary Action",
          type: "object",
          fields: [
            ...actionFields,
            defineField({
              name: "variant",
              title: "Variant",
              type: "string",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                ],
              },
              initialValue: "secondary",
            }),
          ],
        }),
        defineField({
          name: "usps",
          title: "USPs",
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
              ],
              preview: {
                select: {
                  title: "label",
                },
              },
            },
          ],
        }),
        defineField({
          name: "sizeBadge",
          title: "Size Badge",
          type: "object",
          fields: [
            defineField({
              name: "eyebrow",
              title: "Eyebrow",
              type: "string",
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "ariaLabel",
              title: "Accessible Label",
              type: "string",
            }),
          ],
        }),
        defineField({
          name: "quote",
          title: "Quote Badge",
          type: "object",
          fields: [
            defineField({
              name: "eyebrow",
              title: "Eyebrow",
              type: "string",
            }),
            defineField({
              name: "text",
              title: "Text",
              type: "string",
            }),
            defineField({
              name: "avatar",
              title: "Avatar",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "menuSection",
      title: "Menu Section",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "featuredItems",
          title: "Featured Menu Items",
          type: "array",
          of: [{ type: "reference", to: [{ type: "menuItem" }] }],
        }),
        defineField({
          name: "action",
          title: "Action",
          type: "object",
          fields: actionFields,
        }),
      ],
    }),
    defineField({
      name: "marqueeItems",
      title: "Marquee Items",
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
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: marqueeIconOptions,
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "icon",
            },
          },
        },
      ],
    }),
    defineField({
      name: "about",
      title: "About Section",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "descriptions",
          title: "Descriptions",
          type: "array",
          of: [{ type: "text", rows: 3 }],
        }),
        defineField({
          name: "images",
          title: "Images",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Figure Label",
              type: "string",
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
            defineField({
              name: "main",
              title: "Main Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                }),
              ],
            }),
            defineField({
              name: "detail",
              title: "Detail Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                }),
              ],
            }),
            defineField({
              name: "mascot",
              title: "Mascot Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "usps",
          title: "USPs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Description",
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
              ],
              preview: {
                select: {
                  title: "title",
                  subtitle: "description",
                },
              },
            },
          ],
        }),
        defineField({
          name: "action",
          title: "Action",
          description: "Optional. Leave empty to hide the About section button.",
          type: "object",
          fields: actionFields,
        }),
      ],
    }),
    defineField({
      name: "reviewsSection",
      title: "Reviews Section",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "ratingLabel",
          title: "Rating Label",
          type: "string",
        }),
        defineField({
          name: "featuredReviews",
          title: "Featured Reviews",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "role",
                  title: "Role",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "quote",
                  title: "Quote",
                  type: "text",
                  rows: 4,
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "avatar",
                  title: "Avatar",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                    }),
                  ],
                }),
              ],
              preview: {
                select: {
                  title: "name",
                  subtitle: "role",
                  media: "avatar",
                },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "contactSection",
      title: "Contact Section",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Home Page",
    }),
  },
})
