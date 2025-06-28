const FeatureSection = ({ heading, image, paragraphs }) => (
  <section className="section bg-light feature-section">
    <div className="container">
      <h2 className="text-center mb-5">{heading}</h2>
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
                    objectFit: "cover",
                    width: "80%",
                    height: "auto",
                    borderRadius: "0.5rem",
                  }}
                />
              </picture>
            </figure>
          </div>
        )}
        <article className="feature-section-text text-left mb-5">
          {paragraphs.map((text, idx) => (
            <p className="lead" key={idx}>
              {text}
            </p>
          ))}
        </article>
      </div>
    </div>
  </section>
);

export default FeatureSection;
