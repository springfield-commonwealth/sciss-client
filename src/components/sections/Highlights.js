const Highlights = ({ highlights, title, desc }) => {
  // Handle missing highlights prop
  if (!highlights || !Array.isArray(highlights)) {
    return null;
  }

  return (
    <section className="section highlights-section bg-light">
      <div className="container">
        <div className="text-center mb-5">
          {title && <h2>{title}</h2>}
          {desc && <p>{desc}</p>}
        </div>
        <div className="grid grid-3">
          {highlights.map((highlight, index) => (
            <div key={index} className="gallery-card">
              <div className="card-image">
                <img src={highlight.image} alt={highlight.title} />
              </div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
