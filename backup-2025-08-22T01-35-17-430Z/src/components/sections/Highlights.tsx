import React from "react";

interface Highlight {
  title: string;
  description: string;
  image: string;
}

interface HighlightsProps {
  highlights: Highlight[];
  title?: string;
  desc?: string;
}

const Highlights: React.FC<HighlightsProps> = ({ highlights, title, desc }) => {
  // Handle missing highlights prop
  if (!highlights || !Array.isArray(highlights)) {
    return null;
  }

  return (
    <section className="section highlights-section bg-light">
      <div className="container">
        <div className="text--center mb--lg">
          {title && <h2>{title}</h2>}
          {desc && <p>{desc}</p>}
        </div>
        <div className="grid grid--3">
          {highlights.map((highlight, index) => (
            <div key={index} className="card">
              <div className="card__image">
                <img src={highlight.image} alt={highlight.title} />
              </div>
              <div className="card__content">
                <h3 className="card__title">{highlight.title}</h3>
                <p className="card__description">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
