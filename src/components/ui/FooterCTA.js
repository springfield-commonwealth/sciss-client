import Link from "next/link";

const FooterCTA = ({linkTitle, link}) => {
  return (
    <section className="cta-section">
      <div className="container text-center">
        <h2>Start Your Summer at SCISS</h2>
        <p>
          Join students from around the world for an unforgettable experience
        </p>
        <div className="cta-actions">
          <Link href="/apply" className="btn btn-primary btn-large">
            Apply Now
          </Link>
          <Link href={link} className="btn btn-secondary btn-medium">
            Explore {linkTitle}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
