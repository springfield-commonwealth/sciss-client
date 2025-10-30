import Layout from "@/components/layouts/Layout";
import FeatureVideo from "@/components/ui/FeatureVideo";
import { WelcomeVideo } from "@/constants/videos";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/featured/school-building-0.JPG",
    alt: "Springfield Commonwealth Campus",
    category: "Campus Life",
  },
  {
    src: "/images/slider/home/flute performance 2.JPG",
    alt: "Talent Show Performance",
    category: "Performing Arts",
  },
  {
    src: "/images/slider/home/fencing.JPG",
    alt: "Fencing Tournament",
    category: "Sports & Activities",
  },
  {
    src: "/images/slider/home/archery.JPG",
    alt: "Archery Competition",
    category: "Sports & Activities",
  },
  {
    src: "/images/slider/home/rowing.jpg",
    alt: "Water Sports",
    category: "Sports & Activities",
  },
  {
    src: "/images/slider/home/investment-presentation.JPG",
    alt: "Investment Pitch Deck",
    category: "Academics",
  },
  {
    src: "/images/slider/home/harvard-trip.JPG",
    alt: "Harvard University Visit",
    category: "Field Trips",
  },
  // New carousel images
  {
    src: "/images/carousel/art.png",
    alt: "Music & Performing Arts Showcase",
    category: "Performing Arts",
  },
  {
    src: "/images/carousel/whysciss1.png",
    alt: "Campus Life Moments",
    category: "Campus Life",
  },
  {
    src: "/images/carousel/whysciss2.png",
    alt: "Campus Life Moments",
    category: "Campus Life",
  },
  {
    src: "/images/carousel/whysciss3.png",
    alt: "SCISS Highlights",
    category: "Campus Life",
  },
  // Newly added carousel images (HEIC) included in gallery
  { src: "/images/carousel/newImage.jpeg", alt: "Campus Life Moments", category: "Campus Life" },
  { src: "/images/carousel/newImage2.jpeg", alt: "Campus Life Moments", category: "Campus Life" },
  { src: "/images/carousel/newImage3.jpeg", alt: "Campus Life Moments", category: "Campus Life" },
  { src: "/images/carousel/newImage4.jpeg", alt: "Campus Life Moments", category: "Campus Life" },

  { src: "/images/carousel/newImage5.jpg", alt: "Campus Life Moments", category: "Campus Life" },
  { src: "/images/carousel/newImage6.jpg", alt: "Campus Life Moments", category: "Campus Life" },
  { src: "/images/carousel/newImage7.jpg", alt: "Campus Life Moments", category: "Campus Life" },
];

const PhotoGalleries = ({ breadcrumbs = [] }) => {
  return (
    <Layout
      title="Photo Galleries - SCISS"
      description="Explore photos from SCISS summer sessions. See students learning, creating, and making unforgettable memories."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      <div className="padding-top-100"></div>
      {/* Page Header Section */}
      <section className="section page-header-section">
        <div className="container">
          <div className="page-header-content">
            <p className="page-subtitle">See SCISS in Action</p>
            <h1 className="page-title">Student Life Gallery</h1>
            <p className="page-description">Explore photos from SCISS summer sessions. See students learning, creating, and making unforgettable memories - your child's 2026 experience awaits!</p>
          </div>
        </div>
      </section>
      {/* Main Gallery Grid */}
      <section className="section photo-galleries-section topBorder">
        <div className="container">

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

      {/* Welcome Video Section */}
      <FeatureVideo
        VideoObject={WelcomeVideo}
        autoPlay={false}
        muted={false}
        loop={true}
        playsInline={true}
        playBackSpeed={0.7}
      />

      <div className="photo-gallery-cta">
        <div className="container">
          <h3>Ready to Create Your Own Memories?</h3>
          <p>Join SCISS Summer 2026 and be part of our next success story</p>
          <div className="photo-gallery-cta-buttons">
            <Link href="/apply" className="btn btn--primary btn--large">
              Apply Now
            </Link>
            <Link href="/program-overview" className="btn btn--secondary btn--large">
              Learn More
            </Link>
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

