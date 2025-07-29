/**
 * Reusable FeatureCard component for displaying features with icons
 * Used across parent-information, about-us, and other pages
 */
const FeatureCard = ({
  icon,
  title,
  description,
  className = "",
  variant = "default",
  onClick,
  hoverable = true,
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
      {icon && <div className="feature-icon">{icon}</div>}
      <h3 className="feature-title">{title}</h3>
      {description && <p className="feature-description">{description}</p>}
    </div>
  );
};

/**
 * FeatureGrid component for displaying multiple features in a grid layout
 */
const FeatureGrid = ({
  features,
  columns = 3,
  className = "",
  variant = "default",
  hoverable = true,
  onFeatureClick,
}) => {
  const gridClasses = `grid grid--${columns} ${className}`.trim();

  return (
    <div className={gridClasses}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          variant={variant}
          hoverable={hoverable}
          onClick={
            onFeatureClick ? () => onFeatureClick(feature, index) : undefined
          }
        />
      ))}
    </div>
  );
};

const FeatureCardGrid = ({ features, className = "" }) => {
  const gridClasses = `grid grid--auto-fit ${className}`.trim();

  return (
    <div className={gridClasses}>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export { FeatureCard, FeatureGrid };
export default FeatureCard;
