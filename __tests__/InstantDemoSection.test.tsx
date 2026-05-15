import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InstantDemoSection from "../app/_components/InstantDemoSection";

describe("InstantDemoSection", () => {
  it("renders the section heading", () => {
    render(<InstantDemoSection />);
    expect(screen.getByText("Here's what you'll get")).toBeInTheDocument();
  });

  it("renders the live example badge", () => {
    render(<InstantDemoSection />);
    expect(screen.getByText("Live example")).toBeInTheDocument();
  });

  it("renders all 4 demo dish names", () => {
    render(<InstantDemoSection />);
    expect(screen.getByText("Tonkotsu Ramen")).toBeInTheDocument();
    expect(screen.getByText("Gyoza")).toBeInTheDocument();
    expect(screen.getByText("Karaage")).toBeInTheDocument();
    expect(screen.getByText("Matcha Ice Cream")).toBeInTheDocument();
  });

  it("renders all 4 dish emojis", () => {
    render(<InstantDemoSection />);
    expect(screen.getByText("🍜")).toBeInTheDocument();
    expect(screen.getByText("🥟")).toBeInTheDocument();
    expect(screen.getByText("🍗")).toBeInTheDocument();
    expect(screen.getByText("🍦")).toBeInTheDocument();
  });

  it("renders subtitle text about Japanese restaurant", () => {
    render(<InstantDemoSection />);
    expect(
      screen.getByText(/Real dish cards from a Japanese restaurant menu/i)
    ).toBeInTheDocument();
  });

  it("has accessible aria-label on the section", () => {
    const { container } = render(<InstantDemoSection />);
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("aria-label", "Example dish cards");
  });
});
