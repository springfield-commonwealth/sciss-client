import Link from "next/link";

const CTASection = ({
  title,
  benefits,
  ctaText,
  ctaLink,
  image,
  className = "",
}) => {
  return (
    <section className={`cta-section ${className}`}>
      <div className="container">
        <div className="cta-section__content">
          {/* Text Content */}
          <div className="cta-section__text">
            <h2 className="cta-section__title">{title || "Default Title"}</h2>
            <ul className="cta-section__benefits">
              {benefits.map((benefit, index) => {
                const colonIndex = benefit.indexOf(":");
                const boldText =
                  colonIndex > -1
                    ? benefit.substring(0, colonIndex + 1)
                    : benefit;
                const regularText =
                  colonIndex > -1 ? benefit.substring(colonIndex + 1) : "";

                return (
                  <li key={index} className="cta-section__benefit">
                    <strong>{boldText}</strong>
                    {regularText}
                  </li>
                );
              })}
            </ul>
            <Link href={ctaLink} className="cta-section__button">
              {ctaText}
              <svg
                className="cta-section__arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Image Content */}
          <div className="cta-section__media">
            <figure className="cta-section__figure">
              <picture className="cta-section__picture">
                {image.sources &&
                  image.sources.map((source, sourceIdx) => (
                    <source
                      key={sourceIdx}
                      srcSet={source.srcSet}
                      media={source.media}
                    />
                  ))}
                <img
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
                  className="cta-section__img"
                />
              </picture>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
