import FeatureCard from "../ui/FeatureCard";

const FeatureSection = ({
  features,
  heading,
  paragraphs,
  image,
  images, // New prop for multiple images
  imageWidth,
  startAlternating = 0, // New prop to control alternating pattern
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
            <h3 className="feature-section__title">{heading}</h3>
          </div>
        )}

        <div className="feature-section__content">
          {paragraphs && paragraphs.length > 0 && (
            <div className="feature-section__paragraphs">
              {paragraphs.map((text, idx) => {
                const words = text.split(" ");
                const firstTwoWords = words.slice(0, 2).join(" ");
                const restOfText = words.slice(2).join(" ");
                const paragraphImage =
                  images && images[idx] ? images[idx] : null;

                const isEven = (idx + startAlternating) % 2 === 0;
                const textOrder = isEven ? 1 : 2;
                const imageOrder = isEven ? 2 : 1;

                return (
                  <div className="feature-section__paragraph-item" key={idx}>
                    <div className="feature-section__layout">
                      <div
                        className="feature-section__text"
                        style={{ order: textOrder }}
                      >
                        <p className="feature-section__paragraph">
                          <span className="feature-section__first-words">
                            {firstTwoWords}
                          </span>
                          {restOfText && ` ${restOfText}`}
                        </p>
                      </div>

                      {paragraphImage && (
                        <div
                          className="feature-section__media"
                          style={{ order: imageOrder }}
                        >
                          <figure className="feature-section__figure">
                            <picture className="feature-section__picture">
                              {paragraphImage.sources &&
                                paragraphImage.sources.map(
                                  (source, sourceIdx) => (
                                    <source
                                      key={sourceIdx}
                                      srcSet={source.srcSet}
                                      media={source.media}
                                    />
                                  )
                                )}
                              <img
                                loading="lazy"
                                src={paragraphImage.src}
                                alt={paragraphImage.alt}
                                className="feature-section__img"
                                style={{
                                  width: imageWidth || "100%",
                                }}
                              />
                            </picture>
                          </figure>
                        </div>
                      )}

                      {/* Add empty div for alternating when no image */}
                      {!paragraphImage && (
                        <div
                          className="feature-section__media feature-section__media--empty"
                          style={{ order: imageOrder }}
                        ></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
