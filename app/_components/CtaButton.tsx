"use client";

type CtaButtonSize = "default" | "lg";

interface CtaButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  size?: CtaButtonSize;
  fullWidthOnMobile?: boolean;
}

const sizeClasses: Record<CtaButtonSize, string> = {
  default: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center font-semibold bg-orange-500 text-white rounded-full transition-colors hover:bg-orange-600 active:bg-orange-700 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2";

export default function CtaButton({
  label,
  href,
  onClick,
  size = "default",
  fullWidthOnMobile = true,
}: CtaButtonProps) {
  const widthClass = fullWidthOnMobile ? "w-full sm:w-auto" : "";
  const className = `${baseClasses} ${sizeClasses[size]} ${widthClass}`.trim();

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
