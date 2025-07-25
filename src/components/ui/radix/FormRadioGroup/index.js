import * as RadioGroup from "@radix-ui/react-radio-group";
import { forwardRef } from "react";

// Enhanced Radix RadioGroup with SCISS design system integration
const FormRadioGroup = forwardRef(
  (
    {
      options = [],
      value,
      onValueChange,
      disabled = false,
      error = false,
      size = "medium",
      className = "",
      orientation = "vertical",
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
      "radix-radio-group",
      `radix-radio-group-${orientation}`,
      sizeClass,
      variantClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <RadioGroup.Root
        ref={ref}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        orientation={orientation}
        className={rootClasses}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        {...props}
      >
        {options.map((option, index) => (
          <div key={option.value} className="radix-radio-item">
            <RadioGroup.Item
              value={option.value}
              id={`radio-${option.value}-${index}`}
              className="radix-radio-input"
              disabled={option.disabled || disabled}
            >
              <RadioGroup.Indicator className="radix-radio-indicator" />
            </RadioGroup.Item>
            <label
              htmlFor={`radio-${option.value}-${index}`}
              className="radix-radio-label"
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    );
  }
);

FormRadioGroup.displayName = "FormRadioGroup";

export default FormRadioGroup;
