import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BadgePill from "../app/_components/BadgePill";

describe("BadgePill", () => {
  it("renders the label text", () => {
    render(<BadgePill label="AI-Powered" />);
    expect(screen.getByText("AI-Powered")).toBeInTheDocument();
  });

  it("applies amber classes by default", () => {
    render(<BadgePill label="Default" />);
    const el = screen.getByText("Default");
    expect(el).toHaveClass("bg-amber-100");
    expect(el).toHaveClass("text-amber-800");
  });

  it("applies orange classes when variant is orange", () => {
    render(<BadgePill label="Orange" variant="orange" />);
    const el = screen.getByText("Orange");
    expect(el).toHaveClass("bg-orange-100");
    expect(el).toHaveClass("text-orange-700");
  });

  it("applies stone classes when variant is stone", () => {
    render(<BadgePill label="Stone" variant="stone" />);
    const el = screen.getByText("Stone");
    expect(el).toHaveClass("bg-stone-100");
    expect(el).toHaveClass("text-stone-600");
  });

  it("has base pill classes", () => {
    render(<BadgePill label="Base" />);
    const el = screen.getByText("Base");
    expect(el).toHaveClass("inline-flex");
    expect(el).toHaveClass("items-center");
    expect(el).toHaveClass("rounded-full");
    expect(el).toHaveClass("text-xs");
    expect(el).toHaveClass("font-semibold");
  });
});
