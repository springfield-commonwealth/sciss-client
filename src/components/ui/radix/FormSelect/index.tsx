import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import { forwardRef } from "react";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

interface FormSelectProps {
  options?: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  searchable?: boolean;
  groupedOptions?: boolean;
  "aria-label"?: string;
  "aria-describedby"?: string;
  [key: string]: any;
}

// Enhanced Radix Select with SCISS design system integration
const FormSelect = forwardRef<HTMLButtonElement, FormSelectProps>(
  (
    {
      options = [],
      value,
      onValueChange,
      placeholder = "Select...",
      disabled = false,
      error = false,
      size = "medium",
      className = "",
      searchable = false,
      groupedOptions = false,
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
    const triggerClasses = [
      "radix-select-trigger",
      "radix-component-base",
      sizeClass,
      variantClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const contentClasses = [
      "radix-select-content",
      searchable && "radix-select-searchable",
    ]
      .filter(Boolean)
      .join(" ");

    // Enhanced option rendering with search support
    const renderOptions = () => {
      if (groupedOptions && options.some((opt) => opt.group)) {
        // Group options by group property
        const groups = options.reduce((acc, option) => {
          const group = option.group || "Other";
          if (!acc[group]) acc[group] = [];
          acc[group].push(option);
          return acc;
        }, {});

        return Object.entries(groups).map(([groupName, groupOptions]) => (
          <Select.Group key={groupName}>
            <Select.Label className="radix-select-label">
              {groupName}
            </Select.Label>
            {(groupOptions as SelectOption[]).map((option) => (
              <SelectOption key={option.value} option={option} />
            ))}
          </Select.Group>
        ));
      }

      return options.map((option) => (
        <SelectOption key={option.value} option={option} />
      ));
    };

    return (
      <Select.Root
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        {...props}
      >
        <Select.Trigger
          ref={ref}
          className={triggerClasses}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon className="radix-select-icon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className={contentClasses} position="popper">
            <Select.Viewport className="radix-select-viewport">
              {renderOptions()}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
  }
);

// Individual option component
const SelectOption = ({ option }) => (
  <Select.Item value={option.value} className="radix-select-item">
    <Select.ItemText>{option.label}</Select.ItemText>
    <Select.ItemIndicator className="radix-select-item-indicator">
      <CheckIcon />
    </Select.ItemIndicator>
  </Select.Item>
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
