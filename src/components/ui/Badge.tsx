import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface BadgeItem {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  text?: string;
}

interface BadgeGroupProps {
  children?: React.ReactNode;
  badges?: BadgeItem[];
  className?: string;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";
  size?: "small" | "medium" | "large";
  onBadgeClick?: (badge: BadgeItem, index: number) => void;
}

/**
 * Reusable Badge component for displaying tags, categories, and status indicators
 * Used across activities, trips, courses, and other pages
 */
const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
  onClick,
  disabled = false,
}) => {
  const baseClasses = "badge";
  const variantClasses = {
    default: "badge--default",
    primary: "badge--primary",
    secondary: "badge--secondary",
    success: "badge--success",
    warning: "badge--warning",
    error: "badge--error",
    info: "badge--info",
  };

  const sizeClasses = {
    small: "badge--sm",
    medium: "badge--md",
    large: "badge--lg",
  };

  const stateClasses = disabled ? "badge--disabled" : "";
  const clickClasses = onClick && !disabled ? "badge--clickable" : "";

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
const BadgeGroup: React.FC<BadgeGroupProps> = ({
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
            {badge.children || badge.text || String(badge)}
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
