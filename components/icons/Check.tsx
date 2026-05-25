import type { SVGProps } from "react"

export default function Check(props: SVGProps<SVGSVGElement>) {
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
      <path d="m5 12.4 4.2 4.2L19 6.8" />
    </svg>
  )
}
