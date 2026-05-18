import ResultGrid from "./_components/ResultGrid";

const DEMO_DISHES = [
  {
    id: "1",
    name: "Tonkotsu Ramen",
    description: "Rich pork bone broth, soft-boiled egg, chashu pork, bamboo shoots",
    imagePlaceholderBg: "bg-amber-100",
    emoji: "🍜",
  },
  {
    id: "2",
    name: "Gyoza",
    description: "Pan-fried pork and cabbage dumplings with ponzu dipping sauce",
    imagePlaceholderBg: "bg-orange-100",
    emoji: "🥟",
  },
  {
    id: "3",
    name: "Karaage",
    description: "Crispy fried chicken thigh, Japanese mayo, lemon wedge",
    imagePlaceholderBg: "bg-yellow-100",
    emoji: "🍗",
  },
  {
    id: "4",
    name: "Matcha Ice Cream",
    description: "Japanese green tea soft serve on a crispy cone",
    imagePlaceholderBg: "bg-green-100",
    emoji: "🍦",
  },
];

export function generateStaticParams() {
  return [{ scanId: "demo" }];
}

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Your menu
          </h1>
          <p className="mt-2 text-slate-500">
            4 dishes found · 2 unlocked
          </p>
        </div>
        <ResultGrid dishes={DEMO_DISHES} freeCount={2} />
      </div>
    </main>
  );
}
