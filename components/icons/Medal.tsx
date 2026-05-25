import type { SVGProps } from "react"

export default function Medal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...props}
    >
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="m9.7 11.2-1.2 7.1 3.5-2 3.5 2-1.2-7.1" />
    </svg>
  )
}
