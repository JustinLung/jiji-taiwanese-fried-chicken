import type { Metadata } from "next"
import LegalPage from "@/components/shared/LegalPage"
import { getFooterData } from "@/utils/site-settings-data"

const updatedAt = "25 May 2026"

type LegalContact = Awaited<ReturnType<typeof getFooterData>>["contact"]

function formatAddress(contact: LegalContact) {
  return contact.addressLines.join(", ")
}

function getSections(contact: LegalContact) {
  const address = formatAddress(contact)
  const email = contact.emailLabel

  return [
    {
      title: "About These Terms",
      body: [
        "These terms apply when you use the JiJi Fried Chicken website, contact us through our published channels, visit our restaurant, or use services connected to our restaurant.",
        "By using the website or placing a request with us, you agree to use our services respectfully and in line with these terms. If you do not agree, please stop using the website.",
      ],
    },
    {
      title: "Restaurant Information",
      body: [
        "We work to keep menu items, prices, opening hours, location details, images, and availability accurate. Restaurant information can change without notice due to supply, staffing, public holidays, platform updates, or operational needs.",
        "Images and descriptions are provided to help you understand our food and may not always match the exact presentation, portion, packaging, or garnish served on a given day.",
      ],
    },
    {
      title: "Orders, Bookings, And Requests",
      body: [
        "If ordering, booking, delivery, or reservation features are offered directly or through third-party platforms, the relevant checkout, confirmation, cancellation, refund, and delivery terms may also apply.",
        "Submitting an enquiry does not guarantee availability, a booking, a menu item, or a specific service time until we or the relevant platform confirm it.",
      ],
    },
    {
      title: "Allergens And Dietary Needs",
      body: [
        "Our kitchen may handle common allergens, including but not limited to gluten, soy, sesame, egg, dairy, peanuts, tree nuts, fish, shellfish, and other ingredients depending on the menu.",
        "Please tell our team about allergies or dietary needs before ordering. We will do our best to help, but we cannot guarantee that any item is completely free from cross-contact.",
      ],
    },
    {
      title: "Acceptable Use",
      body: [
        "You agree not to misuse the website, attempt to disrupt its operation, access systems without permission, submit harmful code, scrape content at scale, or use the website in a way that violates applicable law.",
        "You are responsible for making sure that any information you send to us is accurate and that you have permission to share it.",
      ],
    },
    {
      title: "Intellectual Property",
      body: [
        "The JiJi Fried Chicken name, branding, photographs, illustrations, copy, website design, and related materials are owned by us or used with permission unless stated otherwise.",
        "You may view and share links to the website for personal, non-commercial purposes. You may not copy, reproduce, modify, or exploit our materials without prior written permission.",
      ],
    },
    {
      title: "Third-Party Links",
      body: [
        "The website may link to maps, social media pages, delivery platforms, reservation services, or other third-party websites. Those services are operated by their own providers and may have separate terms and privacy policies.",
        "We are not responsible for third-party websites, content, policies, availability, or transactions that happen outside our direct control.",
      ],
    },
    {
      title: "Liability",
      body: [
        "We provide the website on an as-is and as-available basis. We do not promise that the website will always be uninterrupted, error-free, or fully up to date.",
        "Nothing in these terms limits liability where it would be unlawful to do so. To the fullest extent permitted by law, we are not liable for indirect losses, loss of profit, loss of data, or issues caused by third-party services.",
      ],
    },
    {
      title: "Governing Law And Contact",
      body: [
        "These terms are governed by the laws of the Netherlands, unless mandatory consumer protection rules require otherwise.",
        `Questions about these terms can be sent to ${email} or raised with our team at ${address}.`,
      ],
    },
  ]
}

export const metadata: Metadata = {
  title: "Terms of Service | JiJi Fried Chicken",
  description:
    "Read the terms that apply when using the JiJi Fried Chicken website and restaurant services.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | JiJi Fried Chicken",
    description:
      "Read the terms that apply when using the JiJi Fried Chicken website and restaurant services.",
    url: "/terms-of-service",
  },
}

export default async function TermsOfServicePage() {
  const { contact } = await getFooterData()

  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="The House Rules"
      description="The terms for using our website, contacting our team, and enjoying JiJi Fried Chicken services."
      updatedAt={updatedAt}
      sections={getSections(contact)}
    />
  )
}
