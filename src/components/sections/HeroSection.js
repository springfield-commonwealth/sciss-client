import Link from 'next/link';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  ctaText = "Learn More", 
  ctaLink = "/program-overview",
  secondaryCtaText,
  secondaryCtaLink,
  height = "90vh",
  textAlign = "center" 
}) => {
  return (
    <section className="hero" style={{ height, textAlign }}>
      {backgroundImage && (
        <img 
          src={backgroundImage} 
          alt="" 
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
            <Link href={secondaryCtaLink} className="btn btn-secondary btn-large">
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
