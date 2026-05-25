import type { MenuItem } from "@/utils/menu-types"

export const menuItems = [
  {
    badge: "Best Seller",
    description:
      "Our legendary 3-inch crispy butterfly cutlet, seasoned with secret white pepper and fried to a golden crunch.",
    details: {
      prepTime: "8-10 min",
      servingNote: "1 XL cutlet",
      spiceLevel: "Spice Level 1/5",
    },
    image: {
      alt: "Classic JiJi XXL chicken cutlet served hot and crispy",
      className: "object-[50%_48%]",
      src: "/images/placeholder.jpg",
    },
    name: "Classic JiJi XXL Chicken Cutlet",
    price: "$10.99",
    rating: 4.9,
  },
  {
    badge: "Local Favorite",
    description:
      "Bite-sized, extra-crunchy chicken nuggets tossed with fresh-fried aromatic Thai basil leaves and white pepper.",
    details: {
      prepTime: "6-8 min",
      servingNote: "Shareable cup",
      spiceLevel: "Spice Level 2/5",
    },
    image: {
      alt: "Taiwanese popcorn chicken in a paper cup",
      className: "object-[42%_58%]",
      src: "/images/placeholder.jpg",
    },
    name: "Taiwanese Popcorn Chicken",
    price: "$8.99",
    rating: 4.8,
  },
  {
    badge: "Spicy Hot",
    description:
      "Crispy boneless chicken thigh chunks glazed with a sweet, sticky, and mouth-numbing chili sauce.",
    details: {
      prepTime: "8-10 min",
      servingNote: "480 kcal",
      spiceLevel: "Spice Level 3/5",
    },
    image: {
      alt: "Sichuan chili glazed chicken bites with sesame",
      className: "object-[60%_45%]",
      src: "/images/placeholder.jpg",
    },
    name: "Sichuan Chili Glazed Bites",
    price: "$9.49",
    rating: 4.7,
  },
  {
    badge: "Must-Try Side",
    description:
      "Thick-cut sweet potato wedges dusted with plum powder for a sweet, salty, and sour punch.",
    details: {
      prepTime: "5-7 min",
      servingNote: "Vegetarian",
      spiceLevel: "Spice Level 0/5",
    },
    image: {
      alt: "Plum-dusted sweet potato fries in a serving cup",
      className: "object-[35%_52%]",
      src: "/images/placeholder.jpg",
    },
    name: "Plum-Dusted Sweet Potato Fries",
    price: "$5.99",
    rating: 4.6,
  },
] satisfies MenuItem[]
