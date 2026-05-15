import Image from "next/image";

interface DishCardProps {
  name: string;
  description: string;
  imageUrl?: string;
  imagePlaceholderBg?: string;
  isLocked?: boolean;
  emoji?: string;
}

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-stone-600"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}

export default function DishCard({
  name,
  description,
  imageUrl,
  imagePlaceholderBg,
  isLocked = false,
  emoji,
}: DishCardProps) {
  const placeholderBg = imagePlaceholderBg ?? "bg-amber-100";

  return (
    <article className="rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
        ) : (
          <div
            className={`${placeholderBg} w-full h-full flex items-center justify-center`}
          >
            <span className="text-4xl" aria-hidden="true">
              {emoji ?? "🍽️"}
            </span>
          </div>
        )}
        {isLocked && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
            <LockIcon />
          </div>
        )}
      </div>
      <div className={`p-3 ${isLocked ? "blur-sm" : ""}`}>
        <p className="text-sm font-semibold text-stone-900 leading-snug">{name}</p>
        <p className="text-xs text-stone-500 mt-1 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}
