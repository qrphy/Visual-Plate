import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SocialProofStrip from "../app/_components/SocialProofStrip";

describe("SocialProofStrip", () => {
  it("renders menus scanned stat", () => {
    render(<SocialProofStrip />);
    expect(screen.getByText("1,200+")).toBeInTheDocument();
    expect(screen.getByText("menus scanned today")).toBeInTheDocument();
  });

  it("renders dishes recognized stat", () => {
    render(<SocialProofStrip />);
    expect(screen.getByText("28,000+")).toBeInTheDocument();
    expect(screen.getByText("dishes recognized")).toBeInTheDocument();
  });

  it("renders languages supported stat", () => {
    render(<SocialProofStrip />);
    expect(screen.getByText("40+")).toBeInTheDocument();
    expect(screen.getByText("languages supported")).toBeInTheDocument();
  });

  it("has aria region label", () => {
    const { container } = render(<SocialProofStrip />);
    const region = container.querySelector('[role="region"]');
    expect(region).toHaveAttribute("aria-label", "Usage statistics");
  });

  it("stat values have white text class", () => {
    const { container } = render(<SocialProofStrip />);
    const statValues = container.querySelectorAll(".text-white");
    expect(statValues.length).toBeGreaterThanOrEqual(3);
  });
});
