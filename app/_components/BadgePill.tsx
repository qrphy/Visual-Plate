type BadgePillVariant = "amber" | "orange" | "stone" | "green";

interface BadgePillProps {
  label: string;
  variant?: BadgePillVariant;
}

const variantClasses: Record<BadgePillVariant, string> = {
  amber: "bg-amber-100 text-amber-800",
  orange: "bg-orange-100 text-orange-700",
  stone: "bg-stone-100 text-stone-600",
  green: "bg-green-100 text-green-800",
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
