import Link from "next/link";

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  return (
    <section className="hero-base hero-primary">
      {backgroundImage && (
        <img
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          className="hero-background"
        />
      )}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        <h1 className="hero-title">{title}</h1>
        {description && <p className="hero-description">{description}</p>}

        <div className="hero-actions">
          {ctaText && ctaLink && (
            <Link href={ctaLink} className="btn btn-primary btn-large">
              {ctaText}
            </Link>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Link
              href={secondaryCtaLink}
              className="btn btn-secondary btn-large"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
