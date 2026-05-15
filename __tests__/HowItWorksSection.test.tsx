import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HowItWorksSection from "../app/_components/HowItWorksSection";

describe("HowItWorksSection", () => {
  it("renders the section heading", () => {
    render(<HowItWorksSection />);
    const heading = screen.getByRole("heading", { name: /Three taps. Full menu./i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "how-it-works-heading");
  });

  it("renders all three step titles", () => {
    render(<HowItWorksSection />);
    expect(screen.getByText("Take a photo")).toBeInTheDocument();
    expect(screen.getByText("AI reads it")).toBeInTheDocument();
    expect(screen.getByText("See your food")).toBeInTheDocument();
  });

  it("renders all three step body texts", () => {
    render(<HowItWorksSection />);
    expect(
      screen.getByText(/Point your phone at any menu/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Our AI identifies every dish/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Every dish appears as a photo/i)
    ).toBeInTheDocument();
  });

  it("renders as an ordered list with 3 items", () => {
    const { container } = render(<HowItWorksSection />);
    const ol = container.querySelector("ol");
    expect(ol).toBeInTheDocument();
    const items = container.querySelectorAll("li");
    expect(items).toHaveLength(3);
  });

  it("section has aria-labelledby pointing to how-it-works-heading", () => {
    const { container } = render(<HowItWorksSection />);
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("aria-labelledby", "how-it-works-heading");
  });

  it("renders three SVG icons", () => {
    const { container } = render(<HowItWorksSection />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(3);
  });
});
