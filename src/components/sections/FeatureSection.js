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
          <div className="grid grid--2">
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
    <section className="feature-section">
      <div className="container">
        {heading && (
          <div className="feature-section__header">
            <h2 className="feature-section__title">{heading}</h2>
          </div>
        )}

        <div className="feature-section__content">
          <div className="feature-section__layout">
            {image && (
              <div className="feature-section__media">
                <figure className="feature-section__figure">
                  <picture className="feature-section__picture">
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
                      className="feature-section__img"
                      style={{
                        width: imageWidth || "100%",
                      }}
                    />
                  </picture>
                </figure>
              </div>
            )}

            {paragraphs && paragraphs.length > 0 && (
              <div className="feature-section__text">
                {paragraphs.map((text, idx) => (
                  <p className="feature-section__paragraph" key={idx}>
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
