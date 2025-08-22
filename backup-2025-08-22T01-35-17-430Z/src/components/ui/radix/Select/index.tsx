import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import React, { forwardRef } from "react";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
  items?: SelectOption[];
}

interface RadixSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  options?: SelectOption[];
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  className?: string;
  [key: string]: any;
}

// Main Radix Select component with SCISS design system integration
const RadixSelect = forwardRef<HTMLButtonElement, RadixSelectProps>(
  (
    {
      value,
      onValueChange,
      placeholder = "Select an option...",
      options = [],
      size = "medium",
      variant = "primary",
      disabled = false,
      error = false,
      required = false,
      className = "",
      ...props
    },
    ref
  ) => {
    // Generate CSS classes based on props
    const sizeClass = `radix-size-${size}`;
    const variantClass = error
      ? "radix-variant-error"
      : `radix-variant-${variant}`;
    const triggerClasses = `radix-select-trigger ${sizeClass} ${variantClass} ${className}`;

    return (
      <Select.Root
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
        {...props}
      >
        <Select.Trigger
          ref={ref}
          className={triggerClasses}
          aria-label={placeholder}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon className="radix-select-icon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="radix-select-content" position="popper">
            <Select.Viewport className="radix-select-viewport">
              {options.map((option, index) => {
                // Handle grouped options
                if (option.group) {
                  return (
                    <Select.Group key={`group-${index}`}>
                      <Select.Label className="radix-select-label">
                        {option.group}
                      </Select.Label>
                      {option.items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                      {index < options.length - 1 && (
                        <Select.Separator className="radix-select-separator" />
                      )}
                    </Select.Group>
                  );
                }

                // Handle regular options
                return (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                );
              })}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  }
);

// Individual select item component
const SelectItem = forwardRef<
  HTMLDivElement,
  {
    value: string;
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
  }
>(({ value, children, className = "", ...props }, ref) => {
  return (
    <Select.Item
      value={value}
      className={`radix-select-item ${className}`}
      {...props}
      ref={ref}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="radix-select-indicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

// Set display names for better debugging
RadixSelect.displayName = "RadixSelect";
SelectItem.displayName = "SelectItem";

export default RadixSelect;
