const Highlights = ({ highlights }) => (
  <section className="section highlights-section bg-light">
    <div className="container">
      <div className="text-center mb-5">
        <h2>Experience Highlights</h2>
        <p>Unforgettable moments that will shape your future</p>
      </div>
      <div className="grid grid-3 highlights-grid">
        {highlights.map((highlight, index) => (
          <div key={index} className="card highlight-card">
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

export default Highlights;
