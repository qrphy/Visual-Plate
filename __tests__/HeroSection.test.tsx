import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroSection from "../app/_components/HeroSection";

describe("HeroSection", () => {
  it("renders the main heading", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "hero-heading");
  });

  it("heading contains key text", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/See every dish/, { exact: false })
    ).toBeInTheDocument();
  });

  it("renders scan CTA link pointing to /upload", () => {
    render(<HeroSection />);
    const link = screen.getByRole("link", { name: /Scan your menu/i });
    expect(link).toHaveAttribute("href", "/upload");
  });

  it("renders the badge pill", () => {
    render(<HeroSection />);
    expect(screen.getByText("AI-Powered · No account needed")).toBeInTheDocument();
  });

  it("renders the subtext trust line", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Free to try · No sign-up required/i)
    ).toBeInTheDocument();
  });

  it("section has aria-labelledby pointing to hero-heading", () => {
    const { container } = render(<HeroSection />);
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("aria-labelledby", "hero-heading");
  });
});
