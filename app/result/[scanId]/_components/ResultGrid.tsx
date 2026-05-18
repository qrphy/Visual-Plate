"use client";

import { useState } from "react";
import DishCard from "@/app/_components/DishCard";
import DishModal, { type ModalDish } from "./DishModal";
import PaywallBanner from "./PaywallBanner";

interface ResultGridProps {
  dishes: ModalDish[];
  freeCount?: number;
}

export default function ResultGrid({ dishes, freeCount = 2 }: ResultGridProps) {
  const [selectedDish, setSelectedDish] = useState<ModalDish | null>(null);
  const hasLocked = dishes.length > freeCount;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {dishes.map((dish, i) => {
          const isLocked = i >= freeCount;
          return isLocked ? (
            <div key={dish.id}>
              <DishCard
                name={dish.name}
                description={dish.description}
                emoji={dish.emoji}
                imagePlaceholderBg={dish.imagePlaceholderBg}
                isLocked
              />
            </div>
          ) : (
            <div
              key={dish.id}
              role="button"
              tabIndex={0}
              aria-label={`View ${dish.name}`}
              onClick={() => setSelectedDish(dish)}
              onKeyDown={(e) => e.key === "Enter" && setSelectedDish(dish)}
              className="cursor-pointer"
            >
              <DishCard
                name={dish.name}
                description={dish.description}
                emoji={dish.emoji}
                imagePlaceholderBg={dish.imagePlaceholderBg}
              />
            </div>
          );
        })}
      </div>

      {hasLocked && <PaywallBanner />}

      {selectedDish && (
        <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </>
  );
}
