"use client";

import { useEffect, useState } from "react";
import DishCard from "./DishCard";

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

export default function InstantDemoReveal() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = DEMO_DISHES.map((_, i) =>
      setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), i * 400 + 300)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3">
      {DEMO_DISHES.map((dish, i) => (
        <div
          key={dish.id}
          className={`transition-all duration-500 ${
            i < visibleCount ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <DishCard
            name={dish.name}
            description={dish.description}
            imagePlaceholderBg={dish.imagePlaceholderBg}
            emoji={dish.emoji}
          />
        </div>
      ))}
    </div>
  );
}
