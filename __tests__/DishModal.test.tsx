import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import DishModal from "../app/result/[scanId]/_components/DishModal";

const DISH = {
  id: "1",
  name: "Tonkotsu Ramen",
  description: "Rich pork bone broth, soft-boiled egg",
  emoji: "🍜",
  imagePlaceholderBg: "bg-amber-100",
};

describe("DishModal", () => {
  it("renders with role=dialog and aria-modal", () => {
    render(<DishModal dish={DISH} onClose={jest.fn()} />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });

  it("renders the dish name as a heading", () => {
    render(<DishModal dish={DISH} onClose={jest.fn()} />);
    expect(
      screen.getByRole("heading", { name: "Tonkotsu Ramen" })
    ).toBeInTheDocument();
  });

  it("renders the dish description", () => {
    render(<DishModal dish={DISH} onClose={jest.fn()} />);
    expect(
      screen.getByText("Rich pork bone broth, soft-boiled egg")
    ).toBeInTheDocument();
  });

  it("renders the close button", () => {
    render(<DishModal dish={DISH} onClose={jest.fn()} />);
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<DishModal dish={DISH} onClose={onClose} />);
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when backdrop is clicked", () => {
    const onClose = jest.fn();
    const { container } = render(<DishModal dish={DISH} onClose={onClose} />);
    const backdrop = container.querySelector('[aria-hidden="true"]');
    fireEvent.click(backdrop!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape key is pressed", () => {
    const onClose = jest.fn();
    render(<DishModal dish={DISH} onClose={onClose} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renders the dish emoji", () => {
    render(<DishModal dish={DISH} onClose={jest.fn()} />);
    expect(screen.getByText("🍜")).toBeInTheDocument();
  });

  it("renders default emoji when none provided", () => {
    const dish = { id: "1", name: "Mystery", description: "Unknown dish" };
    render(<DishModal dish={dish} onClose={jest.fn()} />);
    expect(screen.getByText("🍽️")).toBeInTheDocument();
  });
});
