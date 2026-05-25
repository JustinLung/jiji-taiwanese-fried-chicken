import type { Review } from "@/utils/component-types"

export const reviews = [
    {
        avatarSrc: "/images/placeholder.jpg",
        name: "Audrey Chen",
        quote:
            "This is the real deal! The crispy texture is perfect, and they use real sweet potato starch. The basil is extremely fragrant, just like Shilin!",
        role: "Food Critic & Taipei Native",
    },
    {
        avatarSrc: "/images/placeholder.jpg",
        name: "Marcus Reynolds",
        quote:
            "JiJi XXL Cutlet is literally bigger than my face! Super juicy on the inside and stays crunchy even during delivery. Totally addicted to the spicy ones.",
        role: "Local Foodie",
    },
    {
        avatarSrc: "/images/placeholder.jpg",
        name: "Jin-Woo Park",
        quote:
            "The popcorn chicken combined with their sweet potato fries is the ultimate late-night comfort food. Awesome customer service too!",
        role: "Regular Customer",
    },
] satisfies Review[]