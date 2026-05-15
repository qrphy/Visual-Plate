import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../app/_components/Footer";

describe("Footer", () => {
  it("renders the copyright text", () => {
    render(<Footer />);
    expect(screen.getByText("© 2026 VisualPlate")).toBeInTheDocument();
  });

  it("renders Privacy link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy" })).toBeInTheDocument();
  });

  it("renders Terms link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Terms" })).toBeInTheDocument();
  });

  it("renders as footer element", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  it("footer has dark background classes", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("bg-stone-900");
  });
});
