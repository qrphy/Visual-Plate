import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CtaButton from "../app/_components/CtaButton";

describe("CtaButton", () => {
  it("renders a button when no href is given", () => {
    render(<CtaButton label="Click me" />);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("renders an anchor when href is given", () => {
    render(<CtaButton label="Go" href="/upload" />);
    const link = screen.getByRole("link", { name: "Go" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/upload");
  });

  it("calls onClick handler when clicked", () => {
    const handler = jest.fn();
    render(<CtaButton label="Click" onClick={handler} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("applies default size classes", () => {
    render(<CtaButton label="Default" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("h-11");
    expect(btn).toHaveClass("px-6");
    expect(btn).toHaveClass("text-base");
  });

  it("applies lg size classes when size is lg", () => {
    render(<CtaButton label="Large" size="lg" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("h-14");
    expect(btn).toHaveClass("px-8");
    expect(btn).toHaveClass("text-lg");
  });

  it("applies full width class by default on mobile", () => {
    render(<CtaButton label="Full" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("w-full");
  });

  it("does not apply full width class when fullWidthOnMobile is false", () => {
    render(<CtaButton label="Narrow" fullWidthOnMobile={false} />);
    const btn = screen.getByRole("button");
    expect(btn).not.toHaveClass("w-full");
  });

  it("applies primary variant (green) by default", () => {
    render(<CtaButton label="Primary" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-green-500");
  });

  it("applies secondary variant (outlined dark)", () => {
    render(<CtaButton label="Secondary" variant="secondary" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("border-slate-900");
    expect(btn).toHaveClass("text-slate-900");
    expect(btn).not.toHaveClass("bg-green-500");
  });

  it("has rounded-full class", () => {
    render(<CtaButton label="Round" />);
    expect(screen.getByRole("button")).toHaveClass("rounded-full");
  });
});
