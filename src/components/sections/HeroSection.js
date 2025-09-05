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
    <section className="hero">
      {backgroundImage && (
        <div className="hero-background">
          <img
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            className="hero-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -2,
            }}
          />
        </div>
      )}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="container-sm">
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          <h1 className="hero-title">{title}</h1>
          {description && <p className="hero-description">{description}</p>}

          <div className="hero-actions">
            {ctaText && ctaLink && (
              <Link href={ctaLink} className="btn btn--primary btn--lg">
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="btn btn--secondary btn--lg"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
