import LoadingSpinner from "./LoadingSpinner";

const EnhancedButton = ({
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
