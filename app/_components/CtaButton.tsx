"use client";

type CtaButtonSize = "default" | "lg";
type CtaButtonVariant = "primary" | "secondary";

interface CtaButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: CtaButtonSize;
  variant?: CtaButtonVariant;
  fullWidthOnMobile?: boolean;
}

const sizeClasses: Record<CtaButtonSize, string> = {
  default: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

const variantClasses: Record<CtaButtonVariant, string> = {
  primary:
    "bg-green-500 text-white hover:bg-green-600 active:bg-green-700 focus-visible:ring-green-500",
  secondary:
    "border-2 border-slate-900 text-slate-900 bg-transparent hover:bg-slate-900 hover:text-white active:bg-slate-800 focus-visible:ring-slate-900",
};

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-full transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export default function CtaButton({
  label,
  href,
  onClick,
  size = "default",
  variant = "primary",
  fullWidthOnMobile = true,
}: CtaButtonProps) {
  const widthClass = fullWidthOnMobile ? "w-full sm:w-auto" : "";
  const className =
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`.trim();

  if (href) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
    </button>
  );
}
