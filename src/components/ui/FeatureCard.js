/**
 * Reusable FeatureCard component for displaying features with icons
 * Used across parent-information, about-us, and other pages
 */
const FeatureCard = ({
  icon,
  title,
  description,
  image,
  level,
  duration,
  highlights,
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
    "image-overlay": "card--image-overlay",
  };

  const hoverClasses = hoverable ? "card--hoverable" : "";
  const clickClasses = onClick ? "card--clickable" : "";

  const cardClasses =
    `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${clickClasses} ${className}`.trim();

  // Image overlay variant
  if (variant === "image-overlay" && image) {
    return (
      <div
        className={cardClasses}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        <div className="card__image-overlay">
          <img src={image.src} alt={image.alt} className="card__image" />
          <div className="card__overlay">
            <div className="card__overlay-content">
              <h3 className="card__title card__title--overlay">{title}</h3>
              {description && (
                <p className="card__description card__description--overlay">
                  {description}
                </p>
              )}
              {/* Additional content for enhanced cards */}
              {(level || duration) && (
                <div className="card__meta card__meta--overlay">
                  {level && <span className="card__level">{level}</span>}
                  {duration && (
                    <span className="card__duration">{duration}</span>
                  )}
                </div>
              )}
              {highlights && highlights.length > 0 && (
                <div className="card__highlights card__highlights--overlay">
                  {highlights.slice(0, 2).map((highlight, idx) => (
                    <span key={idx} className="card__highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon && <div className="card__icon">{icon}</div>}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
      </div>
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
          image={feature.image}
          level={feature.level}
          duration={feature.duration}
          highlights={feature.highlights}
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
