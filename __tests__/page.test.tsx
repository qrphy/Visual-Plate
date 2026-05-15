import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home page", () => {
  it("renders h1 heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders the CTA link to /upload", () => {
    render(<Home />);
    const links = screen.getAllByRole("link", { name: /Scan your menu/i });
    expect(links.length).toBeGreaterThanOrEqual(1);
    links.forEach((link) => expect(link).toHaveAttribute("href", "/upload"));
  });

  it("renders the footer with copyright", () => {
    render(<Home />);
    expect(screen.getByText("© 2026 VisualPlate")).toBeInTheDocument();
  });

  it("renders how it works heading", () => {
    render(<Home />);
    expect(screen.getByText(/Three taps. Full menu./i)).toBeInTheDocument();
  });

  it("renders all 4 demo dishes", () => {
    render(<Home />);
    expect(screen.getByText("Tonkotsu Ramen")).toBeInTheDocument();
    expect(screen.getByText("Gyoza")).toBeInTheDocument();
    expect(screen.getByText("Karaage")).toBeInTheDocument();
    expect(screen.getByText("Matcha Ice Cream")).toBeInTheDocument();
  });

  it("renders social proof statistics", () => {
    render(<Home />);
    expect(screen.getByText("1,200+")).toBeInTheDocument();
  });

  it("renders main element with flex layout", () => {
    const { container } = render(<Home />);
    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass("flex");
    expect(main).toHaveClass("flex-col");
    expect(main).toHaveClass("min-h-screen");
  });
});
