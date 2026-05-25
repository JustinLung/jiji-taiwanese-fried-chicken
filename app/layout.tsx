import type { Metadata, Viewport } from "next"
import { DM_Sans, Space_Grotesk } from "next/font/google"
import "leaflet/dist/leaflet.css"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")

const siteName = "JiJi Taiwanese Fried Chicken"
const siteDescription =
  "Authentic Taiwanese fried chicken in Amsterdam, serving XL crispy chicken cutlets, popcorn chicken, and Taipei night market flavours made fresh to order."
const previewImage = {
  url: "/web-app-manifest-512x512.png",
  width: 512,
  height: 512,
  alt: "JiJi Fried Chicken mascot logo",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Taiwanese Fried Chicken in Amsterdam`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Taiwanese fried chicken Amsterdam",
    "JiJi Fried Chicken",
    "Taiwanese chicken cutlet",
    "popcorn chicken Amsterdam",
    "Taipei night market food",
    "halal fried chicken Amsterdam",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: [
      {
        url: "/favicon-48x48.jpg",
        sizes: "48x48",
        type: "image/jpeg",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${siteName} | Taiwanese Fried Chicken in Amsterdam`,
    description: siteDescription,
    siteName,
    locale: "en_NL",
    type: "website",
    images: [previewImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Taiwanese Fried Chicken in Amsterdam`,
    description: siteDescription,
    images: [previewImage],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="pt-24 md:pt-27">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
