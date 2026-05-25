import type { SVGProps } from "react"

export default function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 5.5h9a3 3 0 0 1 3 3v10H7a3 3 0 0 1-3-3v-10Z" />
      <path d="M16 8.5h1a3 3 0 0 1 3 3v7h-4" />
      <path d="M7.5 9.5h5" />
      <path d="M7.5 13h4" />
    </svg>
  )
}
