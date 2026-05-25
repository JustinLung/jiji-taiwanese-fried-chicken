import Link from "next/link"
import type {
  ButtonBaseProps,
  ButtonElementProps,
  ButtonLinkProps,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "@/utils/component-types"

const baseClassName =
  "inline-flex items-center justify-center rounded-2xl border-2 border-black font-heading font-black uppercase tracking-[0.08em] shadow-[0_5px_0_#181816] transition hover:-translate-y-0.5 hover:shadow-[0_7px_0_#181816] active:translate-y-0.5 active:shadow-[0_3px_0_#181816] outline-none focus-visible:ring-2 focus-visible:ring-brand-1 focus-visible:ring-offset-4 focus-visible:ring-offset-grey-1"

const sizeClassNames: Record<ButtonSize, string> = {
  default: "min-h-14 gap-3 px-7 text-small!",
  compact: "min-h-7 gap-1.5 px-2.5 py-0 text-[0.5rem]!",
}

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
    size = "default",
    variant = "primary",
  } = props

  const combinedClassName = classNames(
    baseClassName,
    sizeClassNames[size],
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
    "aria-haspopup": ariaHasPopup,
    "aria-label": ariaLabel,
    "aria-pressed": ariaPressed,
    disabled,
    onClick,
    ref,
    title,
    type = "button",
  } = props

  return (
    <button
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      className={combinedClassName}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      title={title}
      type={type}
    >
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  )
}
