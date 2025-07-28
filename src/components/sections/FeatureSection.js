import FeatureCard from "../ui/FeatureCard";

const FeatureSection = ({
  features,
  heading,
  paragraphs,
  image,
  imageWidth,
}) => {
  // Handle new API with features array
  if (features && Array.isArray(features)) {
    return (
      <section className="feature-section">
        <div className="container">
          <div className="grid grid-2">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Handle old API with heading, paragraphs, image
  return (
    <section className="section bg-light feature-section">
      <div className="container">
        <h1 className="text-center mb-5">{heading}</h1>
        <div className="grid grid-2">
          {image && (
            <div className="feature-section-image">
              <figure className="feature-section-image__figure">
                <picture className="feature-section-image__picture">
                  {image.sources &&
                    image.sources.map((source, idx) => (
                      <source
                        key={idx}
                        srcSet={source.srcSet}
                        media={source.media}
                      />
                    ))}
                  <img
                    loading="lazy"
                    src={image.src}
                    alt={image.alt}
                    className="feature-section-image__img"
                    style={{
                      width: `${imageWidth}`,
                    }}
                  />
                </picture>
              </figure>
            </div>
          )}
          <article className="feature-section-text text-left mb-5">
            {paragraphs &&
              paragraphs.map((text, idx) => (
                <p className="lead" key={idx}>
                  {text}
                </p>
              ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
