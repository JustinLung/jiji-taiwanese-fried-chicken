import type { SVGProps } from "react"

export default function LocationPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M8 14s4.7-4.1 4.7-7.5A4.7 4.7 0 0 0 3.3 6.5C3.3 9.9 8 14 8 14Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <circle cx="8" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  )
}
