import BadgePill from "./BadgePill";
import DishCard from "./DishCard";

const DEMO_DISHES = [
  {
    id: "1",
    name: "Tonkotsu Ramen",
    description:
      "Rich pork bone broth, soft-boiled egg, chashu pork, bamboo shoots",
    imagePlaceholderBg: "bg-amber-100",
    emoji: "🍜",
  },
  {
    id: "2",
    name: "Gyoza",
    description:
      "Pan-fried pork and cabbage dumplings with ponzu dipping sauce",
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

export default function InstantDemoSection() {
  return (
    <section className="bg-white py-16 px-4" aria-label="Example dish cards">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <BadgePill label="Live example" variant="orange" />
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
            Here&apos;s what you&apos;ll get
          </h2>
          <p className="mt-3 text-stone-500">
            Real dish cards from a Japanese restaurant menu
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {DEMO_DISHES.map((dish) => (
            <DishCard
              key={dish.id}
              name={dish.name}
              description={dish.description}
              imagePlaceholderBg={dish.imagePlaceholderBg}
              emoji={dish.emoji}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
