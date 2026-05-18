"use client";

import { useEffect, useRef } from "react";

export interface ModalDish {
  id: string;
  name: string;
  description: string;
  emoji?: string;
  imagePlaceholderBg?: string;
}

interface DishModalProps {
  dish: ModalDish;
  onClose: () => void;
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

export default function DishModal({ dish, onClose }: DishModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-sm rounded-3xl bg-white shadow-2xl overflow-hidden">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
        >
          <XIcon />
        </button>

        <div
          className={`aspect-[4/3] w-full flex items-center justify-center ${dish.imagePlaceholderBg ?? "bg-amber-100"}`}
        >
          <span className="text-7xl" aria-hidden="true">
            {dish.emoji ?? "🍽️"}
          </span>
        </div>

        <div className="p-5">
          <h2
            id="dish-modal-title"
            className="text-xl font-bold text-slate-900"
          >
            {dish.name}
          </h2>
          <p className="mt-2 text-slate-500 leading-relaxed">
            {dish.description}
          </p>
        </div>
      </div>
    </div>
  );
}
