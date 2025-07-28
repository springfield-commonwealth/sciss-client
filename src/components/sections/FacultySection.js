import FacultyCard from "@/components/ui/FacultyCard";

const FacultySection = ({ title, desc, faculty, gridsize }) => (
  <section className="section faculty-section bg-light">
    <div className="container">
      <div className="text-center mb-5">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className={`grid-base grid-faculty grid-${gridsize}`}>
        {faculty.map((f, idx) => (
          <FacultyCard key={idx} {...f} />
        ))}
      </div>
    </div>
  </section>
);

export default FacultySection;
