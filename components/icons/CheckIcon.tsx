import type { SVGProps } from "react"

export default function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M3.25 8.35 6.35 11.45 12.9 4.55"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9 4.55c.1 2.7-.86 5.18-2.86 6.86-1.86 1.56-4.47 1.56-6.79-.26"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.22"
      />
    </svg>
  )
}
