const CourseShowcase = ({
  title,
  description,
  leadText,
  detailsText,
  highlightText,
  image,
  badges = [],
  features = [],
  metrics = [],
  techStack = [],
  theme = "default",
  imagePosition = "right",
}) => {
  const themeClass = `course-showcase--${theme}`;
  const imageOrder = imagePosition === "left" ? 1 : 2;
  const textOrder = imagePosition === "left" ? 2 : 1;

  return (
    <section className={`course-showcase ${themeClass}`}>
      <div className="container-lg">
        <div className="course-showcase__content">
          <div className="course-showcase__header">
            <div className="course-showcase__icon">
              <div className="course-showcase__icon-bg">{image.icon}</div>
            </div>
            <div className="course-showcase__title-group">
              <h2 className="course-showcase__title">{title}</h2>
              <div className="course-showcase__badges">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className={`course-showcase__badge course-showcase__badge--${badge.type}`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="course-showcase__body">
            <div className="course-showcase__text" style={{ order: textOrder }}>
              <div className="course-showcase__description">
                <p className="course-showcase__lead">{leadText}</p>
                <p className="course-showcase__details">{detailsText}</p>
                {highlightText && (
                  <div className="course-showcase__highlight">
                    <div className="course-showcase__highlight-icon">🎯</div>
                    <div className="course-showcase__highlight-text">
                      <strong>{highlightText.title}:</strong>{" "}
                      {highlightText.description}
                    </div>
                  </div>
                )}
              </div>

              {features.length > 0 && (
                <div className="course-showcase__features">
                  {features.map((feature, index) => (
                    <div key={index} className="course-showcase__feature">
                      <div className="course-showcase__feature-icon">
                        {feature.icon}
                      </div>
                      <div className="course-showcase__feature-content">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="course-showcase__visual"
              style={{ order: imageOrder }}
            >
              <div className="course-showcase__image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="course-showcase__image"
                />
                <div className="course-showcase__overlay">
                  <div className="course-showcase__overlay-content">
                    {metrics.length > 0 && (
                      <div className="course-showcase__metrics">
                        {metrics.map((metric, index) => (
                          <div key={index} className="course-showcase__metric">
                            <span className="course-showcase__metric-value">
                              {metric.value}
                            </span>
                            <span className="course-showcase__metric-label">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {techStack.length > 0 && (
                      <div className="course-showcase__tech-stack">
                        {techStack.map((tech, index) => (
                          <span key={index} className="course-showcase__tech">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;
