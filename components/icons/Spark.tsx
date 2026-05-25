import type { SVGProps } from "react"

export default function Spark(props: SVGProps<SVGSVGElement>) {
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
      <path d="m12 3 1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3Zm6.5 10.5.7 2.2 2.3.8-2.3.8-.7 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </svg>
  )
}
