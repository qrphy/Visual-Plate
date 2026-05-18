import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SkeletonCard from "../app/upload/_components/SkeletonCard";

describe("SkeletonCard", () => {
  it("renders without errors", () => {
    const { container } = render(<SkeletonCard />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("has rounded-2xl class", () => {
    const { container } = render(<SkeletonCard />);
    expect(container.firstChild).toHaveClass("rounded-2xl");
  });

  it("has an image placeholder with aspect ratio", () => {
    const { container } = render(<SkeletonCard />);
    const imagePlaceholder = container.querySelector(".aspect-\\[4\\/3\\]");
    expect(imagePlaceholder).toBeInTheDocument();
  });

  it("has animate-pulse on the image area", () => {
    const { container } = render(<SkeletonCard />);
    const pulseEl = container.querySelector(".animate-pulse");
    expect(pulseEl).toBeInTheDocument();
  });

  it("has text skeleton lines in the content area", () => {
    const { container } = render(<SkeletonCard />);
    const lines = container.querySelectorAll(".animate-pulse");
    expect(lines.length).toBeGreaterThanOrEqual(2);
  });
});
