import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import PaywallBanner from "../app/result/[scanId]/_components/PaywallBanner";

describe("PaywallBanner", () => {
  it("renders the 'You're almost there' heading", () => {
    render(<PaywallBanner />);
    expect(screen.getByText(/You're almost there/i)).toBeInTheDocument();
  });

  it("renders the unlock sub-text", () => {
    render(<PaywallBanner />);
    expect(
      screen.getByText(/Unlock all dishes and see the complete menu/i)
    ).toBeInTheDocument();
  });

  it("renders the Unlock all dishes button", () => {
    render(<PaywallBanner />);
    expect(
      screen.getByRole("button", { name: /Unlock all dishes/i })
    ).toBeInTheDocument();
  });

  it("renders the pricing text", () => {
    render(<PaywallBanner />);
    expect(screen.getByText(/5 scans · \$0\.99/i)).toBeInTheDocument();
  });

  it("calls onUnlock when button is clicked", () => {
    const handler = jest.fn();
    render(<PaywallBanner onUnlock={handler} />);
    fireEvent.click(screen.getByRole("button", { name: /Unlock all dishes/i }));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("button has gradient classes", () => {
    render(<PaywallBanner />);
    const btn = screen.getByRole("button", { name: /Unlock all dishes/i });
    expect(btn).toHaveClass("from-green-500");
    expect(btn).toHaveClass("to-emerald-600");
  });

  it("renders the lock icon SVG", () => {
    const { container } = render(<PaywallBanner />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
