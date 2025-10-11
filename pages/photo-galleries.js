import Layout from "@/components/layouts/Layout";
import { SectionHeader } from "@/components/ui";
import FooterCTA from "@/components/ui/FooterCTA";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const galleryImages = [
  {
    src: "/images/featured/school-building-0.JPG",
    alt: "Springfield Commonwealth Campus",
    category: "Campus Life",
  },
  {
    src: "/images/slider/home/flute performance 2.JPG",
    alt: "Student performing flute on stage",
    category: "Performing Arts",
  },
  {
    src: "/images/slider/home/fencing.JPG",
    alt: "Student fencing during summer camp activity",
    category: "Sports & Activities",
  },
  {
    src: "/images/slider/home/archery.JPG",
    alt: "Student practicing archery outdoors",
    category: "Sports & Activities",
  },
  {
    src: "/images/slider/home/rowing.jpg",
    alt: "Students rowing on the river",
    category: "Sports & Activities",
  },
  {
    src: "/images/slider/home/investment-presentation.JPG",
    alt: "Student giving investment presentation",
    category: "Academics",
  },
  {
    src: "/images/slider/home/harvard-trip.JPG",
    alt: "Group photo during Harvard trip",
    category: "Field Trips",
  },
];

const PhotoGalleries = ({ breadcrumbs = [] }) => {
  return (
    <Layout
      title="Photo Galleries - SCISS"
      description="Explore photos from SCISS summer sessions. See students learning, creating, and making unforgettable memories."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Main Gallery Grid */}
      <section className="section photo-galleries-section">
        <div className="container">
          <SectionHeader
            title="Summer 2025 Highlights"
            description="See the fun and growth from 2025 - your child's 2026 experience awaits!"
            align="center"
            showDivider={true}
          />

          <div className="photo-gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="photo-gallery-item"
                style={{ '--animation-delay': index }}
              >
                <div className="photo-gallery-image-wrapper">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="photo-gallery-image"
                    loading="lazy"
                  />
                  <div className="photo-gallery-overlay">
                    <span className="photo-gallery-category">{image.category}</span>
                    <p className="photo-gallery-caption">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="photo-gallery-cta">
        <div className="container">
          <h3>Ready to Create Your Own Memories?</h3>
          <p>Join SCISS Summer 2026 and be part of our next success story</p>
          <div className="photo-gallery-cta-buttons">
            <a href="/apply" className="btn btn--primary btn--large">
              Apply Now
            </a>
            <a href="/program-overview" className="btn btn--secondary btn--large">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhotoGalleries;

export async function getStaticProps() {
    const breadcrumbs = generateBreadcrumbs([
        { label: "Home", href: "/" },
        { label: "Photo Galleries", href: "/photo-galleries", active: true },
    ]);

    return {
        props: {
            breadcrumbs,
        },
    };
}

