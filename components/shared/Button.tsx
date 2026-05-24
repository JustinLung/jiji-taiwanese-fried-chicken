import Link from "next/link"
import type {
  AnchorHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react"

type ButtonVariant = "primary" | "secondary"

type ButtonBaseProps = {
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: "start" | "end"
  variant?: ButtonVariant
}

type ButtonLinkProps = ButtonBaseProps &
  Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "download" | "rel" | "target" | "title"
  > & {
    "aria-label"?: string
    href: string
    onClick?: MouseEventHandler<HTMLAnchorElement>
  }

type ButtonElementProps = ButtonBaseProps & {
  "aria-controls"?: string
  "aria-expanded"?: boolean
  "aria-label"?: string
  "aria-pressed"?: boolean | "false" | "mixed" | "true"
  disabled?: boolean
  href?: undefined
  onClick?: MouseEventHandler<HTMLButtonElement>
  title?: string
  type?: "button" | "reset" | "submit"
}

type ButtonProps = ButtonLinkProps | ButtonElementProps

const baseClassName =
  "inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border-2 border-black px-7 font-heading text-small! font-black uppercase tracking-[0.08em] shadow-[0_5px_0_#181816] transition hover:-translate-y-0.5 hover:shadow-[0_7px_0_#181816] active:translate-y-0.5 active:shadow-[0_3px_0_#181816] outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-grey-1"

const variantClassNames: Record<ButtonVariant, string> = {
  primary: "bg-brand-1 text-white",
  secondary: "bg-brand-2 text-black",
}

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ")
}

function ButtonContent({
  children,
  icon,
  iconPosition,
}: Pick<ButtonBaseProps, "children" | "icon" | "iconPosition">) {
  const iconElement = icon ? (
    <span aria-hidden="true" className="inline-flex shrink-0 items-center">
      {icon}
    </span>
  ) : null

  return (
    <>
      {iconPosition === "start" ? iconElement : null}
      {children}
      {iconPosition === "end" ? iconElement : null}
    </>
  )
}

function isLinkProps(
  props: ButtonLinkProps | ButtonElementProps,
): props is ButtonLinkProps {
  return typeof props.href === "string"
}

export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    icon,
    iconPosition = "end",
    variant = "primary",
  } = props

  const combinedClassName = classNames(
    baseClassName,
    variantClassNames[variant],
    className,
  )

  if (isLinkProps(props)) {
    const {
      "aria-label": ariaLabel,
      download,
      href,
      onClick,
      rel,
      target,
      title,
    } = props

    return (
      <Link
        aria-label={ariaLabel}
        download={download}
        href={href}
        onClick={onClick}
        rel={target === "_blank" ? rel ?? "noreferrer" : rel}
        target={target}
        title={title}
        className={combinedClassName}
      >
        <ButtonContent icon={icon} iconPosition={iconPosition}>
          {children}
        </ButtonContent>
      </Link>
    )
  }

  const {
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-label": ariaLabel,
    "aria-pressed": ariaPressed,
    disabled,
    onClick,
    title,
    type = "button",
  } = props

  return (
    <button
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      className={combinedClassName}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
    >
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  )
}
