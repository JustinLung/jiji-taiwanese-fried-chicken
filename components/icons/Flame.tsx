import type { SVGProps } from "react"

export default function Flame(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 21c-3.2 0-5.4-2.2-5.4-5.3 0-2.2 1.3-4.3 3.8-6.2.5-.4.6-1.1.3-1.7-.4-.8-.2-1.8.5-2.4 2.9 2 5.1 5.3 5.1 8.5 0 .6-.1 1.1-.2 1.6.7-.6 1.2-1.5 1.4-2.6 1.1 1 1.8 2.4 1.8 4 0 2.4-1.9 4.1-4.3 4.1H12Z" />
    </svg>
  )
}
