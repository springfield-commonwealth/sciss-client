import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";

interface CheckboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface FormCheckboxGroupProps {
  options?: CheckboxOption[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  error?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  orientation?: "horizontal" | "vertical";
  "aria-label"?: string;
  "aria-describedby"?: string;
  [key: string]: any;
}

// Enhanced Radix Checkbox Group with SCISS design system integration
const FormCheckboxGroup = forwardRef<HTMLDivElement, FormCheckboxGroupProps>(
  (
    {
      options = [],
      value = [],
      onValueChange,
      disabled = false,
      error = false,
      size = "medium",
      className = "",
      orientation = "horizontal",
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    // Generate CSS classes using design system tokens
    const sizeClass = `radix-size-${size}`;
    const variantClass = error
      ? "radix-variant-error"
      : "radix-variant-primary";
    const rootClasses = [
      "radix-checkbox-group",
      `radix-checkbox-group-${orientation}`,
      sizeClass,
      variantClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Handle checkbox changes for array-based values
    const handleCheckedChange = (optionValue, checked) => {
      let newValue;
      if (checked) {
        // Add to array if checked and not already included
        newValue = value.includes(optionValue)
          ? value
          : [...value, optionValue];
      } else {
        // Remove from array if unchecked
        newValue = value.filter((v) => v !== optionValue);
      }
      onValueChange(newValue);
    };

    return (
      <div
        ref={ref}
        className={rootClasses}
        role="group"
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        {...props}
      >
        {options.map((option, index) => (
          <div key={option.value} className="radix-checkbox-item">
            <Checkbox.Root
              id={`checkbox-${option.value}-${index}`}
              checked={value.includes(option.value)}
              onCheckedChange={(checked) =>
                handleCheckedChange(option.value, checked)
              }
              disabled={option.disabled || disabled}
              className="radix-checkbox-input"
            >
              <Checkbox.Indicator className="radix-checkbox-indicator">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label
              htmlFor={`checkbox-${option.value}-${index}`}
              className="radix-checkbox-label"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    );
  }
);

FormCheckboxGroup.displayName = "FormCheckboxGroup";

export default FormCheckboxGroup;
