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
      title: "Who We Are",
      body: [
        "JiJi Fried Chicken operates a Taiwanese fried chicken restaurant in Amsterdam. This privacy policy explains how we handle personal information when you visit our website, contact us, interact with our social channels, or use services connected to our restaurant.",
        `For privacy questions, requests, or concerns, contact us at ${email} or visit us at ${address}.`,
      ],
    },
    {
      title: "Information We Collect",
      body: [
        "We may collect the details you choose to share with us, such as your name, email address, phone number, message content, booking or order information, allergy notes, and any other information included in an enquiry.",
        "When you use the website, basic technical information may be processed automatically, including browser type, device information, pages visited, referring links, approximate location, and cookie or analytics identifiers where those tools are enabled.",
      ],
    },
    {
      title: "How We Use Information",
      body: [
        "We use personal information to respond to enquiries, manage customer requests, process restaurant operations, share service updates, improve the website, understand customer interest, protect the security of our services, and meet legal or accounting obligations.",
        "If you contact us about allergens, dietary preferences, or a service issue, we use that information only to handle the request and keep our restaurant operations accurate and safe.",
      ],
    },
    {
      title: "Cookies And Analytics",
      body: [
        "Our website may use essential cookies or similar technologies needed for normal site functionality. If analytics or marketing tools are added, they may help us understand traffic patterns and improve the experience.",
        "You can control cookies through your browser settings. Blocking some cookies may affect how parts of the website work.",
      ],
    },
    {
      title: "Sharing Information",
      body: [
        "We do not sell personal information. We may share information with trusted service providers who help us run the website, manage communications, process restaurant operations, host data, or provide analytics.",
        "We may also disclose information if required by law, to protect our rights, to respond to lawful requests, or in connection with a business transfer involving the restaurant.",
      ],
    },
    {
      title: "Retention And Security",
      body: [
        "We keep personal information only for as long as needed for the purpose it was collected, including customer service, legal, tax, accounting, and operational recordkeeping requirements.",
        "We use reasonable technical and organisational measures to protect personal information. No website or online service can be guaranteed to be completely secure, so please avoid sending sensitive information unless it is necessary for your request.",
      ],
    },
    {
      title: "Your Rights",
      body: [
        "If you are in the European Economic Area, you may have the right to access, correct, delete, restrict, or object to certain processing of your personal information. You may also have the right to data portability and to withdraw consent where processing is based on consent.",
        `To make a privacy request, email ${email}. We may need to verify your identity before responding.`,
      ],
    },
    {
      title: "Updates",
      body: [
        "We may update this privacy policy when our website, restaurant operations, service providers, or legal obligations change. The latest version will always show the date at the top of this page.",
      ],
    },
  ]
}

export const metadata: Metadata = {
  title: "Privacy Policy | JiJi Fried Chicken",
  description:
    "Learn how JiJi Fried Chicken collects, uses, protects, and manages personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | JiJi Fried Chicken",
    description:
      "Learn how JiJi Fried Chicken collects, uses, protects, and manages personal information.",
    url: "/privacy-policy",
  },
}

export default async function PrivacyPolicyPage() {
  const { contact } = await getFooterData()

  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your Data, Kept Respectfully"
      description={`How ${contact.addressLines[0]} handles customer information, website data, cookies, and privacy requests.`}
      updatedAt={updatedAt}
      sections={getSections(contact)}
    />
  )
}
