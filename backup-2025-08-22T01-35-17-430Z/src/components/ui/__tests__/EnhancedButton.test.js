import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import EnhancedButton from "../EnhancedButton";

describe("EnhancedButton", () => {
  test("renders with default props", () => {
    render(<EnhancedButton>Click me</EnhancedButton>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn", "btn--primary");
  });

  test("renders with different variants", () => {
    const { rerender } = render(
      <EnhancedButton variant="secondary">Secondary</EnhancedButton>
    );
    expect(screen.getByRole("button")).toHaveClass("btn--secondary");

    rerender(<EnhancedButton variant="blurred">Blurred</EnhancedButton>);
    expect(screen.getByRole("button")).toHaveClass("btn--blurred");
  });

  test("renders with different sizes", () => {
    const { rerender } = render(
      <EnhancedButton size="small">Small</EnhancedButton>
    );
    expect(screen.getByRole("button")).toHaveClass("btn--sm");

    rerender(<EnhancedButton size="large">Large</EnhancedButton>);
    expect(screen.getByRole("button")).toHaveClass("btn--lg");
  });

  test("shows loading state", () => {
    render(<EnhancedButton loading>Loading</EnhancedButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn-loading");
    expect(button).toBeDisabled();
    expect(screen.getByLabelText("Loading...")).toBeInTheDocument();
  });

  test("handles disabled state", () => {
    render(<EnhancedButton disabled>Disabled</EnhancedButton>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("btn--primary");
  });

  test("calls onClick when not loading or disabled", () => {
    const handleClick = jest.fn();
    render(<EnhancedButton onClick={handleClick}>Click me</EnhancedButton>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when loading", () => {
    const handleClick = jest.fn();
    render(
      <EnhancedButton loading onClick={handleClick}>
        Loading
      </EnhancedButton>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <EnhancedButton disabled onClick={handleClick}>
        Disabled
      </EnhancedButton>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("supports custom aria-label", () => {
    render(<EnhancedButton aria-label="Custom label">Button</EnhancedButton>);

    expect(
      screen.getByRole("button", { name: "Custom label" })
    ).toBeInTheDocument();
  });

  test("supports custom className", () => {
    render(<EnhancedButton className="custom-class">Button</EnhancedButton>);

    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  test("renders as submit button", () => {
    render(<EnhancedButton type="submit">Submit</EnhancedButton>);

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
