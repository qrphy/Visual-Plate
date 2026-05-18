import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProcessingSteps from "../app/upload/_components/ProcessingSteps";

describe("ProcessingSteps", () => {
  it("renders all three step labels", () => {
    render(<ProcessingSteps currentStep={0} />);
    expect(screen.getByText("Detecting text…")).toBeInTheDocument();
    expect(screen.getByText("Extracting dishes…")).toBeInTheDocument();
    expect(screen.getByText("Matching images…")).toBeInTheDocument();
  });

  it("renders the progress bar element", () => {
    const { container } = render(<ProcessingSteps currentStep={1} />);
    expect(container.querySelector('[data-testid="progress-bar"]')).toBeInTheDocument();
  });

  it("progress bar is 0% when currentStep is 0", () => {
    const { container } = render(<ProcessingSteps currentStep={0} />);
    const bar = container.querySelector('[data-testid="progress-bar"]');
    expect(bar).toHaveStyle({ width: "0%" });
  });

  it("progress bar is 33% when currentStep is 1", () => {
    const { container } = render(<ProcessingSteps currentStep={1} />);
    const bar = container.querySelector('[data-testid="progress-bar"]');
    expect(bar).toHaveStyle({ width: "33%" });
  });

  it("progress bar is 67% when currentStep is 2", () => {
    const { container } = render(<ProcessingSteps currentStep={2} />);
    const bar = container.querySelector('[data-testid="progress-bar"]');
    expect(bar).toHaveStyle({ width: "67%" });
  });

  it("progress bar is 100% when currentStep is 3", () => {
    const { container } = render(<ProcessingSteps currentStep={3} />);
    const bar = container.querySelector('[data-testid="progress-bar"]');
    expect(bar).toHaveStyle({ width: "100%" });
  });

  it("step 1 is active (animate-pulse) when currentStep is 1", () => {
    const { container } = render(<ProcessingSteps currentStep={1} />);
    const steps = container.querySelectorAll(".animate-pulse");
    expect(steps.length).toBeGreaterThanOrEqual(1);
  });

  it("step 1 shows checkmark SVG when currentStep is 2 (step 1 done)", () => {
    const { container } = render(<ProcessingSteps currentStep={2} />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });
});
