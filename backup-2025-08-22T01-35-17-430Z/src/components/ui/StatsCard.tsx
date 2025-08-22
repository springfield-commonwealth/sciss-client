"use client";

/**
 * Reusable StatsCard component for displaying statistics
 * Used across activities, trips, courses, staff, and other directory pages
 */
const StatsCard = ({
  number,
  label,
  icon,
  className = "",
  variant = "default",
  onClick,
  hoverable = false,
}) => {
  const baseClasses = "card card--feature";
  const variantClasses = {
    default: "",
    primary: "card--primary",
    secondary: "card--secondary",
    accent: "card--accent",
  };

  const hoverClasses = hoverable ? "card--hoverable" : "";
  const clickClasses = onClick ? "card--clickable" : "";

  const cardClasses =
    `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${clickClasses} ${className}`.trim();

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon && <div className="card__icon">{icon}</div>}
      <div className="card__content">
        <span className="card__number">{number}</span>
        <span className="card__label">{label}</span>
      </div>
    </div>
  );
};

/**
 * StatsGrid component for displaying multiple stats in a grid layout
 */
const StatsGrid = ({
  stats,
  columns = 3,
  className = "",
  variant = "default",
  hoverable = false,
  onStatClick,
}) => {
  const gridClasses = `grid grid--${columns} ${className}`.trim();

  return (
    <div className={gridClasses}>
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          number={stat.number}
          label={stat.label}
          icon={stat.icon}
          variant={variant}
          hoverable={hoverable}
          onClick={onStatClick ? () => onStatClick(stat, index) : undefined}
        />
      ))}
    </div>
  );
};

export { StatsCard, StatsGrid };
export default StatsCard;
