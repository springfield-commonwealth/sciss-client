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
  const baseClasses = "stat-item";
  const variantClasses = {
    default: "",
    primary: "stat-item-primary",
    secondary: "stat-item-secondary",
    accent: "stat-item-accent",
  };

  const hoverClasses = hoverable ? "stat-item-hoverable" : "";
  const clickClasses = onClick ? "stat-item-clickable" : "";

  const cardClasses =
    `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${clickClasses} ${className}`.trim();

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon && <div className="stat-icon">{icon}</div>}
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
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
  const gridClasses = `stats-grid stats-grid-${columns} ${className}`.trim();

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
