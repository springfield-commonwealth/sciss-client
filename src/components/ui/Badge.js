/**
 * Reusable Badge component for displaying tags, categories, and status indicators
 * Used across activities, trips, courses, and other pages
 */
const Badge = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
  onClick,
  disabled = false,
}) => {
  const baseClasses = "badge-base";
  const variantClasses = {
    default: "badge-default",
    primary: "badge-primary",
    secondary: "badge-secondary",
    success: "badge-success",
    warning: "badge-warning",
    error: "badge-error",
    info: "badge-info",
  };

  const sizeClasses = {
    small: "badge-sm",
    medium: "badge-md",
    large: "badge-lg",
  };

  const stateClasses = disabled ? "badge-disabled" : "";
  const clickClasses = onClick && !disabled ? "badge-clickable" : "";

  const badgeClasses =
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${stateClasses} ${clickClasses} ${className}`.trim();

  return (
    <span
      className={badgeClasses}
      onClick={onClick && !disabled ? onClick : undefined}
      role={onClick && !disabled ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
    >
      {children}
    </span>
  );
};

/**
 * BadgeGroup component for displaying multiple badges together
 * Supports both badges array prop and children JSX elements
 */
const BadgeGroup = ({
  children,
  badges,
  className = "",
  variant = "default",
  size = "medium",
  onBadgeClick,
}) => {
  const groupClasses = `badge-group ${className}`.trim();

  // If badges array is provided, render badges from array
  if (badges && Array.isArray(badges)) {
    return (
      <div className={groupClasses}>
        {badges.map((badge, index) => (
          <Badge
            key={index}
            variant={badge.variant || variant}
            size={badge.size || size}
            onClick={
              onBadgeClick ? () => onBadgeClick(badge, index) : badge.onClick
            }
            disabled={badge.disabled}
          >
            {badge.children || badge.text || badge}
          </Badge>
        ))}
      </div>
    );
  }

  // If children are provided, render them directly
  return <div className={groupClasses}>{children}</div>;
};

export { Badge, BadgeGroup };
export default Badge;
