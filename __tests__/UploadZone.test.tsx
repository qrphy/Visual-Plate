import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import UploadZone from "../app/upload/_components/UploadZone";

describe("UploadZone", () => {
  it("renders Take Photo button", () => {
    render(<UploadZone onFileSelected={jest.fn()} />);
    expect(screen.getByRole("button", { name: /Take Photo/i })).toBeInTheDocument();
  });

  it("renders Upload Photo button", () => {
    render(<UploadZone onFileSelected={jest.fn()} />);
    expect(screen.getByRole("button", { name: /Upload Photo/i })).toBeInTheDocument();
  });

  it("renders hidden file input accepting images", () => {
    render(<UploadZone onFileSelected={jest.fn()} />);
    const input = screen.getByLabelText("Upload menu photo");
    expect(input).toHaveAttribute("type", "file");
    expect(input).toHaveAttribute("accept", "image/*");
  });

  it("renders camera input with capture=environment", () => {
    render(<UploadZone onFileSelected={jest.fn()} />);
    const input = screen.getByLabelText("Take menu photo");
    expect(input).toHaveAttribute("type", "file");
    expect(input).toHaveAttribute("capture", "environment");
    expect(input).toHaveAttribute("accept", "image/*");
  });

  it("calls onFileSelected with the chosen file", () => {
    const handler = jest.fn();
    render(<UploadZone onFileSelected={handler} />);
    const input = screen.getByLabelText("Upload menu photo");
    const file = new File(["menu"], "menu.jpg", { type: "image/jpeg" });
    fireEvent.change(input, { target: { files: [file] } });
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(file);
  });

  it("calls onFileSelected via camera input", () => {
    const handler = jest.fn();
    render(<UploadZone onFileSelected={handler} />);
    const input = screen.getByLabelText("Take menu photo");
    const file = new File(["photo"], "photo.jpg", { type: "image/jpeg" });
    fireEvent.change(input, { target: { files: [file] } });
    expect(handler).toHaveBeenCalledWith(file);
  });

  it("renders the drop zone region", () => {
    render(<UploadZone onFileSelected={jest.fn()} />);
    expect(screen.getByRole("region", { name: /Upload zone/i })).toBeInTheDocument();
  });

  it("shows drop instruction text", () => {
    render(<UploadZone onFileSelected={jest.fn()} />);
    expect(screen.getByText(/Drop your menu photo here/i)).toBeInTheDocument();
  });

  it("shows file type hint", () => {
    render(<UploadZone onFileSelected={jest.fn()} />);
    expect(screen.getByText(/PNG, JPG, HEIC/i)).toBeInTheDocument();
  });
});
