import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DishCard from "../app/_components/DishCard";

describe("DishCard", () => {
  const baseProps = {
    name: "Tonkotsu Ramen",
    description: "Rich pork bone broth with soft-boiled egg",
  };

  it("renders dish name", () => {
    render(<DishCard {...baseProps} />);
    expect(screen.getByText("Tonkotsu Ramen")).toBeInTheDocument();
  });

  it("renders dish description", () => {
    render(<DishCard {...baseProps} />);
    expect(screen.getByText("Rich pork bone broth with soft-boiled egg")).toBeInTheDocument();
  });

  it("renders placeholder emoji when no imageUrl", () => {
    render(<DishCard {...baseProps} emoji="🍜" />);
    expect(screen.getByText("🍜")).toBeInTheDocument();
  });

  it("renders default food emoji when no imageUrl and no emoji prop", () => {
    render(<DishCard {...baseProps} />);
    expect(screen.getByText("🍽️")).toBeInTheDocument();
  });

  it("renders next/image when imageUrl is provided", () => {
    render(<DishCard {...baseProps} imageUrl="https://example.com/dish.jpg" />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Tonkotsu Ramen");
  });

  it("renders as an article element", () => {
    const { container } = render(<DishCard {...baseProps} />);
    expect(container.querySelector("article")).toBeInTheDocument();
  });

  it("applies rounded-2xl to article", () => {
    const { container } = render(<DishCard {...baseProps} />);
    expect(container.querySelector("article")).toHaveClass("rounded-2xl");
  });

  it("shows lock overlay when isLocked is true", () => {
    const { container } = render(<DishCard {...baseProps} isLocked />);
    const lockIcon = container.querySelector("svg");
    expect(lockIcon).toBeInTheDocument();
  });

  it("applies backdrop-blur-sm overlay when isLocked", () => {
    const { container } = render(<DishCard {...baseProps} isLocked />);
    const overlay = container.querySelector(".backdrop-blur-sm");
    expect(overlay).toBeInTheDocument();
  });

  it("uses custom imagePlaceholderBg class", () => {
    const { container } = render(
      <DishCard {...baseProps} imagePlaceholderBg="bg-orange-100" />
    );
    const placeholder = container.querySelector(".bg-orange-100");
    expect(placeholder).toBeInTheDocument();
  });
});
