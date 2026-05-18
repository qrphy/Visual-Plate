import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ResultGrid from "../app/result/[scanId]/_components/ResultGrid";

const DISHES = [
  {
    id: "1",
    name: "Tonkotsu Ramen",
    description: "Rich pork bone broth",
    emoji: "🍜",
    imagePlaceholderBg: "bg-amber-100",
  },
  {
    id: "2",
    name: "Gyoza",
    description: "Pan-fried dumplings",
    emoji: "🥟",
    imagePlaceholderBg: "bg-orange-100",
  },
  {
    id: "3",
    name: "Karaage",
    description: "Crispy fried chicken",
    emoji: "🍗",
    imagePlaceholderBg: "bg-yellow-100",
  },
  {
    id: "4",
    name: "Matcha Ice Cream",
    description: "Green tea soft serve",
    emoji: "🍦",
    imagePlaceholderBg: "bg-green-100",
  },
];

describe("ResultGrid", () => {
  it("renders all dish names", () => {
    render(<ResultGrid dishes={DISHES} freeCount={2} />);
    expect(screen.getByText("Tonkotsu Ramen")).toBeInTheDocument();
    expect(screen.getByText("Gyoza")).toBeInTheDocument();
    expect(screen.getByText("Karaage")).toBeInTheDocument();
    expect(screen.getByText("Matcha Ice Cream")).toBeInTheDocument();
  });

  it("first 2 cards are interactive buttons", () => {
    render(<ResultGrid dishes={DISHES} freeCount={2} />);
    expect(
      screen.getByRole("button", { name: "View Tonkotsu Ramen" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "View Gyoza" })
    ).toBeInTheDocument();
  });

  it("locked cards do not have interactive button role", () => {
    render(<ResultGrid dishes={DISHES} freeCount={2} />);
    expect(
      screen.queryByRole("button", { name: "View Karaage" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "View Matcha Ice Cream" })
    ).not.toBeInTheDocument();
  });

  it("clicking an unlocked card opens the dish modal", () => {
    render(<ResultGrid dishes={DISHES} freeCount={2} />);
    fireEvent.click(screen.getByRole("button", { name: "View Tonkotsu Ramen" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Tonkotsu Ramen" })
    ).toBeInTheDocument();
  });

  it("modal closes when close button is clicked", () => {
    render(<ResultGrid dishes={DISHES} freeCount={2} />);
    fireEvent.click(screen.getByRole("button", { name: "View Gyoza" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("clicking a locked card does not open a modal", () => {
    render(<ResultGrid dishes={DISHES} freeCount={2} />);
    fireEvent.click(screen.getByText("Karaage"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders the paywall banner when there are locked cards", () => {
    render(<ResultGrid dishes={DISHES} freeCount={2} />);
    expect(
      screen.getByRole("button", { name: /Unlock all dishes/i })
    ).toBeInTheDocument();
  });

  it("does not render paywall when all cards are free", () => {
    render(<ResultGrid dishes={DISHES} freeCount={4} />);
    expect(
      screen.queryByRole("button", { name: /Unlock all dishes/i })
    ).not.toBeInTheDocument();
  });
});
