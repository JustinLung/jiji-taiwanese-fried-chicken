import type { SVGProps } from "react"

export default function TikTok(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M14 5v8.25a4.25 4.25 0 1 1-3.6-4.2v2.35a2 2 0 1 0 1.25 1.85V5h2.35c.4 2 1.6 3.25 3.5 3.65v2.35A6.75 6.75 0 0 1 14 9.75" />
    </svg>
  )
}
