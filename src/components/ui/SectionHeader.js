/**
 * Reusable SectionHeader component for consistent section headers
 * Used across all pages for section titles and descriptions
 */
const SectionHeader = ({
  title,
  subtitle,
  description,
  className = "",
  variant = "default",
  align = "center",
  showDivider = false,
  children,
}) => {
  const baseClasses = "section-header";
  const variantClasses = {
    default: "section-header--default",
    primary: "section-header--primary",
    secondary: "section-header--secondary",
    accent: "section-header--accent",
    directory: "section-header--directory",
  };

  const alignClasses = {
    left: "section-header--left",
    center: "section-header--center",
    right: "section-header--right",
  };

  const dividerClasses = showDivider ? "section-header--with-divider" : "";

  const headerClasses =
    `${baseClasses} ${variantClasses[variant]} ${alignClasses[align]} ${dividerClasses} ${className}`.trim();

  return (
    <div className={headerClasses}>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      {title && <h2 className="section__title">{title}</h2>}
      {description && <p className="section__description">{description}</p>}
      {children}
    </div>
  );
};

/**
 * PageHeader component for main page headers with hero-like styling
 */
const PageHeader = ({
  title,
  subtitle,
  description,
  className = "",
  variant = "default",
  backgroundImage,
  children,
}) => {
  const baseClasses = "page-header";
  const variantClasses = {
    default: "page-header--default",
    hero: "page-header--hero",
    minimal: "page-header--minimal",
  };

  const headerClasses =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <div
      className={headerClasses}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      <div className="page-header-content">
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
        {title && <h1 className="page-title">{title}</h1>}
        {description && <p className="page-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export { PageHeader, SectionHeader };
export default SectionHeader;
