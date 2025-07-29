import FacultyCard from "../ui/FacultyCard";

const FacultySection = ({ faculty, gridsize = 3, title, desc }) => {
  // Handle missing faculty prop
  if (!faculty || !Array.isArray(faculty)) {
    return null;
  }

  return (
    <section className="section faculty-section bg-light">
      <div className="container">
        <div className="text--center mb--lg">
          {title && <h2>{title}</h2>}
          {desc && <p>{desc}</p>}
        </div>
        <div className={`grid grid-${gridsize}`}>
          {faculty.map((f, idx) => (
            <FacultyCard key={idx} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
