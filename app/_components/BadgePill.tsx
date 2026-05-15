type BadgePillVariant = "amber" | "orange" | "stone";

interface BadgePillProps {
  label: string;
  variant?: BadgePillVariant;
}

const variantClasses: Record<BadgePillVariant, string> = {
  amber: "bg-amber-100 text-amber-800",
  orange: "bg-orange-100 text-orange-700",
  stone: "bg-stone-100 text-stone-600",
};

export default function BadgePill({ label, variant = "amber" }: BadgePillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
