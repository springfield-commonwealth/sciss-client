import React from "react";
import LoadingSpinner from "./LoadingSpinner";

interface EnhancedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "blurred";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  [key: string]: any;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  className = "",
  onClick,
  type = "button",
  "aria-label": ariaLabel,
  ...props
}) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    blurred: "btn--blurred",
  };

  const sizeClasses = {
    small: "btn--sm",
    medium: "",
    large: "btn--lg",
  };

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    loading ? "btn-loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e) => {
    if (!loading && !disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >
      <span className="btn__content">{children}</span>
      {loading && (
        <LoadingSpinner
          size="small"
          className="loading-spinner"
          aria-label="Loading..."
        />
      )}
    </button>
  );
};

export default EnhancedButton;
