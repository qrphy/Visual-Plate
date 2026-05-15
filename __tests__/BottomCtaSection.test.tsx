import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BottomCtaSection from "../app/_components/BottomCtaSection";

describe("BottomCtaSection", () => {
  it("renders the heading", () => {
    render(<BottomCtaSection />);
    expect(
      screen.getByText("Your next meal starts here.")
    ).toBeInTheDocument();
  });

  it("renders the subtext", () => {
    render(<BottomCtaSection />);
    expect(
      screen.getByText(/Scan any menu in seconds/i)
    ).toBeInTheDocument();
  });

  it("renders the CTA link to /upload", () => {
    render(<BottomCtaSection />);
    const link = screen.getByRole("link", { name: /Scan your menu/i });
    expect(link).toHaveAttribute("href", "/upload");
  });

  it("renders the trust text", () => {
    render(<BottomCtaSection />);
    expect(screen.getByText(/Free to start · Instant results/i)).toBeInTheDocument();
  });

  it("has aria-label on section", () => {
    const { container } = render(<BottomCtaSection />);
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("aria-label", "Call to action");
  });

  it("has dark background", () => {
    const { container } = render(<BottomCtaSection />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("bg-stone-900");
  });
});
