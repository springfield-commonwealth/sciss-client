import { SectionHeader } from "../ui";

const Testimonials = ({ testimonials, title, desc, className = "" }) => {
  // Handle missing testimonials prop
  if (!testimonials || !Array.isArray(testimonials)) {
    return null;
  }

  return (
    <section className={`section testimonials-section ${className}`}>
      <div className="container">
        <SectionHeader
          title={title}
          description={desc}
          align="center"
          showDivider={true}
        />
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
