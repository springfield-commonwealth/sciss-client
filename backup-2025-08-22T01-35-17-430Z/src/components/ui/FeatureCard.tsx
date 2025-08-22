"use client";

import React from "react";

interface FeatureCardProps {
  icon?: string | React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "accent";
  onClick?: () => void;
  hoverable?: boolean;
}

interface Feature {
  icon?: string | React.ReactNode;
  title: string;
  description?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: number;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "accent";
  hoverable?: boolean;
  onFeatureClick?: (feature: Feature, index: number) => void;
}

/**
 * Reusable FeatureCard component for displaying features with icons
 * Used across parent-information, about-us, and other pages
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
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
const FeatureGrid: React.FC<FeatureGridProps> = ({
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
