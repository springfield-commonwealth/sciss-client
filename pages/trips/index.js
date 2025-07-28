import Layout from "@/components/layouts/Layout";
import { DirectoryPage } from "@/components/ui";
import {
  getAllTrips,
  getTripCategories,
  getTripStats,
} from "@/lib/content/trips";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

// Trips Directory Page Component - Using Universal Directory System
const TripsDirectory = ({ trips, categories, stats, breadcrumbs = [] }) => {
  // Custom content renderer for trips
  const renderTripContent = (trip) => {
    return (
      <>
        <div className="card-highlights">
          {trip.highlights?.slice(0, 3).map((highlight, index) => (
            <span key={index} className="highlight-tag">
              {highlight}
            </span>
          ))}
          {trip.highlights?.length > 3 && (
            <span className="highlight-more">
              +{trip.highlights.length - 3} more
            </span>
          )}
        </div>
        <div className="card-info">
          <div className="info-item">
            <strong>Duration:</strong> {trip.duration}
          </div>
        </div>
      </>
    );
  };

  // Custom badge renderer for trips
  const renderTripBadges = (trip) => {
    return (
      <>
        <span className="category-badge">{trip.category}</span>
        <span className="duration-badge">{trip.duration}</span>
      </>
    );
  };

  // Function to get trip categories for grouping
  const getTripCategories = (trip) => trip.category;

  return (
    <Layout
      title="Day Trips - SCISS"
      description="Explore exciting day trips and educational excursions at SCISS."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <DirectoryPage
        type="trips"
        title="Day Trips & Excursions Directory"
        description="Discover our exciting day trips and educational excursions designed to expand your horizons. From prestigious university visits to cultural adventures, explore the best of New England with SCISS."
        items={trips}
        categories={categories}
        stats={stats}
        breadcrumbs={breadcrumbs}
        renderCardContent={renderTripContent}
        renderBadges={renderTripBadges}
        getItemCategories={getTripCategories}
        ctaConfig={{
          showCTA: true,
          title: "Ready to Explore?",
          description:
            "Join our exciting trips and excursions designed to expand your horizons, build cultural awareness, and create unforgettable memories at SCISS.",
          primaryAction: {
            text: "Apply Now",
            href: "/apply",
          },
          secondaryAction: {
            text: "Learn More",
            href: "/day-trips",
          },
        }}
        seoConfig={{
          title: "Trips Directory | SCISS Day Trips & Excursions",
          description:
            "Explore our exciting day trips and educational excursions including university visits, cultural experiences, and recreational adventures.",
          keywords:
            "SCISS trips, day trips, university visits, educational tours, cultural excursions, student travel",
          ogTitle: "Trips Directory | SCISS Day Trips & Excursions",
          ogDescription:
            "Explore our exciting day trips and educational excursions including university visits, cultural experiences, and recreational adventures.",
          canonicalUrl: "https://sciss.org/trips",
        }}
      />
    </Layout>
  );
};

export default TripsDirectory;

export async function getStaticProps() {
  const trips = getAllTrips();
  const categories = getTripCategories();
  const stats = getTripStats();

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Day Trips", href: "/day-trips" },
    { label: "Trips Directory", href: "/trips", active: true },
  ]);

  return {
    props: {
      trips,
      categories,
      stats,
      breadcrumbs,
    },
  };
}
