const Testimonials = ({ testimonials, title, desc }) => {
  // Handle missing testimonials prop
  if (!testimonials || !Array.isArray(testimonials)) {
    return null;
  }

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="text--center mb--lg">
          {title && <h2>{title}</h2>}
          {desc && <p>{desc}</p>}
        </div>
        <div className="grid grid--3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card testimonial-card">
              <div className="quote-icon">"</div>
              <blockquote>"{testimonial.quote}"</blockquote>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.program}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
