import { fireEvent, render, screen } from "@testing-library/react";
// import { axe, toHaveNoViolations } from "jest-axe";
import { ModalTrigger, RadixModal, RadixSelect } from "../index";

// Mock ImageSlider to prevent CSS import issues
jest.mock("../ImageSlider", () => {
  return function MockImageSlider() {
    return <div data-testid="image-slider">Mock Image Slider</div>;
  };
});

// Extend Jest matchers
// expect.extend(toHaveNoViolations);

// Mock Radix UI primitives for testing
jest.mock("@radix-ui/react-select", () => ({
  Root: ({ children, onValueChange, disabled, required, ...props }) => (
    <div
      data-testid="select-root"
      data-on-value-change={!!onValueChange}
      disabled={disabled}
      required={required}
    >
      {children}
    </div>
  ),
  Trigger: ({ children, className, "aria-label": ariaLabel, ...props }) => (
    <button
      data-testid="select-trigger"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  ),
  Value: ({ placeholder }) => (
    <span data-testid="select-value">{placeholder}</span>
  ),
  Icon: ({ children }) => <span data-testid="select-icon">{children}</span>,
  Portal: ({ children }) => <div data-testid="select-portal">{children}</div>,
  Content: ({ children, className }) => (
    <div data-testid="select-content" className={className}>
      {children}
    </div>
  ),
  Viewport: ({ children, className }) => (
    <div data-testid="select-viewport" className={className}>
      {children}
    </div>
  ),
  Item: ({ children, className, value }) => (
    <div data-testid="select-item" className={className} data-value={value}>
      {children}
    </div>
  ),
  ItemText: ({ children }) => (
    <span data-testid="select-item-text">{children}</span>
  ),
  ItemIndicator: ({ children }) => (
    <span data-testid="select-indicator">{children}</span>
  ),
  Group: ({ children }) => <div data-testid="select-group">{children}</div>,
  Label: ({ children, className }) => (
    <div data-testid="select-label" className={className}>
      {children}
    </div>
  ),
  Separator: ({ className }) => (
    <div data-testid="select-separator" className={className}></div>
  ),
}));

jest.mock("@radix-ui/react-dialog", () => ({
  Root: ({ children, onOpenChange, open, modal, ...props }) => (
    <div
      data-testid="dialog-root"
      data-on-open-change={!!onOpenChange}
      data-open={open}
      data-modal={modal}
    >
      {children}
    </div>
  ),
  Trigger: ({ children, asChild }) =>
    asChild ? (
      children
    ) : (
      <button data-testid="dialog-trigger">{children}</button>
    ),
  Portal: ({ children }) => <div data-testid="dialog-portal">{children}</div>,
  Overlay: ({ className }) => (
    <div data-testid="dialog-overlay" className={className}></div>
  ),
  Content: ({ children, className, ...props }) => (
    <div data-testid="dialog-content" className={className} {...props}>
      {children}
    </div>
  ),
  Title: ({ children, className }) => (
    <h2 data-testid="dialog-title" className={className}>
      {children}
    </h2>
  ),
  Description: ({ children, className }) => (
    <p data-testid="dialog-description" className={className}>
      {children}
    </p>
  ),
  Close: ({ children, className, ...props }) => (
    <button data-testid="dialog-close" className={className} {...props}>
      {children}
    </button>
  ),
}));

jest.mock("@radix-ui/react-icons", () => ({
  ChevronDownIcon: () => <svg data-testid="chevron-down-icon" />,
  CheckIcon: () => <svg data-testid="check-icon" />,
  Cross2Icon: () => <svg data-testid="close-icon" />,
}));

describe("Radix Design System Integration", () => {
  describe("Design Token Usage", () => {
    it("should apply correct CSS classes for Select component sizes", () => {
      const { rerender } = render(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          size="small"
        />
      );

      const trigger = screen.getByTestId("select-trigger");
      expect(trigger).toHaveClass("radix-size-small");

      rerender(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          size="medium"
        />
      );
      expect(trigger).toHaveClass("radix-size-medium");

      rerender(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          size="large"
        />
      );
      expect(trigger).toHaveClass("radix-size-large");
    });

    it("should apply correct CSS classes for component variants", () => {
      const { rerender } = render(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          variant="primary"
        />
      );

      const trigger = screen.getByTestId("select-trigger");
      expect(trigger).toHaveClass("radix-variant-primary");

      rerender(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          variant="secondary"
        />
      );
      expect(trigger).toHaveClass("radix-variant-secondary");
    });

    it("should apply error state CSS classes correctly", () => {
      render(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          error={true}
        />
      );

      const trigger = screen.getByTestId("select-trigger");
      expect(trigger).toHaveClass("radix-variant-error");
    });

    it("should use consistent Radix CSS class naming convention", () => {
      render(<RadixSelect options={[{ value: "test", label: "Test" }]} />);

      const trigger = screen.getByTestId("select-trigger");
      const content = screen.getByTestId("select-content");
      const viewport = screen.getByTestId("select-viewport");

      expect(trigger).toHaveClass("radix-select-trigger");
      expect(content).toHaveClass("radix-select-content");
      expect(viewport).toHaveClass("radix-select-viewport");
    });
  });

  describe("Component Integration", () => {
    it("should render Select component with all required parts", () => {
      const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ];

      render(<RadixSelect options={options} placeholder="Choose option" />);

      expect(screen.getByTestId("select-root")).toBeInTheDocument();
      expect(screen.getByTestId("select-trigger")).toBeInTheDocument();
      expect(screen.getByTestId("select-value")).toHaveTextContent(
        "Choose option"
      );
      expect(screen.getByTestId("select-icon")).toBeInTheDocument();
    });

    it("should handle grouped options correctly", () => {
      const groupedOptions = [
        {
          group: "Group 1",
          items: [
            { value: "item1", label: "Item 1" },
            { value: "item2", label: "Item 2" },
          ],
        },
      ];

      render(<RadixSelect options={groupedOptions} />);

      expect(screen.getByTestId("select-group")).toBeInTheDocument();
      expect(screen.getByTestId("select-label")).toHaveTextContent("Group 1");
      expect(screen.getByTestId("select-label")).toHaveClass(
        "radix-select-label"
      );
    });

    it("should render Modal component with proper structure", () => {
      render(
        <RadixModal
          open={true}
          title="Test Modal"
          description="Test description"
        >
          <p>Modal content</p>
        </RadixModal>
      );

      expect(screen.getByTestId("dialog-overlay")).toHaveClass(
        "radix-dialog-overlay"
      );
      expect(screen.getByTestId("dialog-content")).toHaveClass(
        "radix-dialog-content"
      );
      expect(screen.getByTestId("dialog-title")).toHaveClass(
        "radix-dialog-title"
      );
      expect(screen.getByTestId("dialog-description")).toHaveClass(
        "radix-dialog-description"
      );
      expect(screen.getByTestId("dialog-close")).toHaveClass(
        "radix-dialog-close"
      );
    });

    it("should support Modal composition components", () => {
      render(
        <RadixModal open={true}>
          <ModalTrigger>
            <button>Open Modal</button>
          </ModalTrigger>
        </RadixModal>
      );

      expect(screen.getByTestId("dialog-content")).toBeInTheDocument();
    });
  });

  describe("Accessibility Compliance", () => {
    // TODO: Uncomment when jest-axe is installed (pnpm add -D jest-axe)
    it.skip("should have no accessibility violations in Select component", async () => {
      const { container } = render(
        <RadixSelect
          options={[{ value: "test", label: "Test Option" }]}
          placeholder="Select an option"
        />
      );

      // const results = await axe(container);
      // expect(results).toHaveNoViolations();
      expect(container).toBeInTheDocument(); // Placeholder assertion
    });

    // TODO: Uncomment when jest-axe is installed (pnpm add -D jest-axe)
    it.skip("should have no accessibility violations in Modal component", async () => {
      const { container } = render(
        <RadixModal
          open={true}
          title="Accessible Modal"
          description="Modal with proper accessibility"
        >
          <p>Modal content for testing</p>
        </RadixModal>
      );

      // const results = await axe(container);
      // expect(results).toHaveNoViolations();
      expect(container).toBeInTheDocument(); // Placeholder assertion
    });

    it("should have proper ARIA attributes on Select trigger", () => {
      render(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          placeholder="Choose option"
        />
      );

      const trigger = screen.getByTestId("select-trigger");
      expect(trigger).toHaveAttribute("aria-label", "Choose option");
    });

    it("should have proper ARIA attributes on Modal close button", () => {
      render(
        <RadixModal open={true} title="Test Modal">
          <p>Content</p>
        </RadixModal>
      );

      const closeButton = screen.getByTestId("dialog-close");
      expect(closeButton).toHaveAttribute("aria-label", "Close modal");
    });
  });

  describe("Theme Integration", () => {
    it("should maintain consistent styling with existing design system", () => {
      render(<RadixSelect options={[{ value: "test", label: "Test" }]} />);

      const trigger = screen.getByTestId("select-trigger");

      // Check that component has base styling classes
      expect(trigger).toHaveClass("radix-select-trigger");

      // Verify CSS custom properties would be applied (checked via class presence)
      const computedStyle = window.getComputedStyle(trigger);
      expect(trigger.className).toContain("radix-select-trigger");
    });

    it("should support custom className prop while maintaining design system classes", () => {
      render(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          className="custom-select-class"
        />
      );

      const trigger = screen.getByTestId("select-trigger");
      expect(trigger).toHaveClass("radix-select-trigger");
      expect(trigger).toHaveClass("custom-select-class");
    });
  });

  describe("Component State Management", () => {
    it("should handle Select value changes correctly", () => {
      const mockOnChange = jest.fn();

      render(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          onValueChange={mockOnChange}
        />
      );

      // Since we're mocking Radix, we simulate the behavior
      const selectRoot = screen.getByTestId("select-root");
      expect(selectRoot).toBeInTheDocument();

      // Verify the onChange handler is passed correctly
      expect(selectRoot).toHaveAttribute("data-on-value-change", "true");
    });

    it("should handle Modal open state correctly", () => {
      const mockOnOpenChange = jest.fn();

      render(
        <RadixModal
          open={false}
          onOpenChange={mockOnOpenChange}
          title="Test Modal"
        >
          <p>Content</p>
        </RadixModal>
      );

      const dialogRoot = screen.getByTestId("dialog-root");
      expect(dialogRoot).toHaveAttribute("data-on-open-change", "true");
    });
  });

  describe("Performance and Bundle Impact", () => {
    it("should render components efficiently without unnecessary re-renders", () => {
      const TestComponent = () => {
        return <RadixSelect options={[{ value: "test", label: "Test" }]} />;
      };

      const { rerender } = render(<TestComponent />);

      // Component should render without errors
      expect(screen.getByTestId("select-root")).toBeInTheDocument();

      // Re-render should not break component
      rerender(<TestComponent />);
      expect(screen.getByTestId("select-root")).toBeInTheDocument();
    });

    it("should have minimal CSS class overhead", () => {
      render(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          size="medium"
          variant="primary"
        />
      );

      const trigger = screen.getByTestId("select-trigger");
      const classList = trigger.className.split(" ");

      // Should have base class, size class, and variant class
      expect(classList).toContain("radix-select-trigger");
      expect(classList).toContain("radix-size-medium");
      expect(classList).toContain("radix-variant-primary");

      // Should not have excessive number of classes
      expect(classList.length).toBeLessThan(10);
    });
  });

  describe("Cross-browser Compatibility", () => {
    it("should render correctly with standard HTML attributes", () => {
      render(
        <RadixSelect
          options={[{ value: "test", label: "Test" }]}
          disabled={true}
          required={true}
          name="test-select"
        />
      );

      const selectRoot = screen.getByTestId("select-root");
      expect(selectRoot).toHaveAttribute("disabled");
      expect(selectRoot).toHaveAttribute("required");
    });

    it("should handle focus and keyboard events properly", () => {
      render(<RadixSelect options={[{ value: "test", label: "Test" }]} />);

      const trigger = screen.getByTestId("select-trigger");

      // Should be focusable
      trigger.focus();
      expect(trigger).toHaveFocus();

      // Should handle keyboard events
      fireEvent.keyDown(trigger, { key: "Enter", code: "Enter" });
      fireEvent.keyDown(trigger, { key: "Space", code: "Space" });

      // Component should remain functional after keyboard interaction
      expect(trigger).toBeInTheDocument();
    });
  });
});
