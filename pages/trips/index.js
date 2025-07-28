import Layout from "@/components/layouts/Layout";
import { Badge, BadgeGroup, SectionHeader, StatsGrid } from "@/components/ui";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  getAllTrips,
  getTripCategories,
  getTripStats,
} from "@/lib/content/trips";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

// Trips Directory Page Component
const TripsDirectory = ({ trips, categories, stats, breadcrumbs = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter trips based on search and category
  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesSearch =
        searchTerm === "" ||
        trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.highlights.some((highlight) =>
          highlight.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "" || trip.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [trips, searchTerm, selectedCategory]);

  // Group trips by category for the overview cards
  const tripCategories = useMemo(() => {
    const grouped = {};
    trips.forEach((trip) => {
      if (!grouped[trip.category]) {
        grouped[trip.category] = [];
      }
      grouped[trip.category].push(trip);
    });
    return grouped;
  }, [trips]);

  // Prepare stats data for StatsGrid component
  const statsData = [
    {
      number: stats.totalTrips,
      label: "Trips Available",
      icon: "🗺️",
    },
    {
      number: categories.length,
      label: "Trip Categories",
      icon: "📚",
    },
    {
      number: stats.averageGroupSize,
      label: "Avg. Group Size",
      icon: "👥",
    },
  ];

  return (
    <Layout
      title="Day Trips - SCISS"
      description="Explore exciting day trips and educational excursions at SCISS."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <Head>
        <title>Trips Directory | SCISS Day Trips & Excursions</title>
        <meta
          name="description"
          content="Explore our exciting day trips and educational excursions including university visits, cultural experiences, and recreational adventures."
        />
        <meta
          name="keywords"
          content="SCISS trips, day trips, university visits, educational tours, cultural excursions, student travel"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Trips Directory | SCISS Day Trips & Excursions"
        />
        <meta
          property="og:description"
          content="Explore our exciting day trips and educational excursions including university visits, cultural experiences, and recreational adventures."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sciss.edu/trips" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://sciss.edu/trips" />
      </Head>

      <main className="trips-directory">
        {/* Header Section */}
        <section className="trips-directory-header">
          <div className="container">
            <SectionHeader
              title="Day Trips & Excursions Directory"
              description="Discover our exciting day trips and educational excursions designed to expand your horizons. From prestigious university visits to cultural adventures, explore the best of New England with SCISS."
              showDivider
            />

            {/* Statistics using reusable StatsGrid component */}
            <StatsGrid
              stats={statsData}
              columns={3}
              hoverable
              onStatClick={(stat, index) => {
                console.log("Clicked stat:", stat, index);
              }}
            />
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="trips-directory-filters">
          <div className="container">
            <div className="filter-controls">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search trips by name, highlights, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="category-filter">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="category-select"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="results-count">
              Showing {filteredTrips.length} of {trips.length} trips
            </div>
          </div>
        </section>

        {/* Trips Grid */}
        <section className="trips-directory-grid">
          <div className="container">
            {filteredTrips.length > 0 ? (
              <div className="trips-grid">
                {filteredTrips.map((trip) => (
                  <Link
                    key={trip.id}
                    href={`/trips/${trip.slug}`}
                    className="trip-card"
                  >
                    <div className="trip-card-image">
                      {trip.image && (
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="trip-photo"
                        />
                      )}
                      <div className="trip-card-badges">
                        <Badge variant="primary" size="small">
                          {trip.category}
                        </Badge>
                        <Badge variant="secondary" size="small">
                          {trip.duration}
                        </Badge>
                      </div>
                    </div>

                    <div className="trip-card-content">
                      <h3 className="trip-card-title">{trip.title}</h3>
                      <p className="trip-card-description">
                        {trip.description.substring(0, 120)}
                        {trip.description.length > 120 && "..."}
                      </p>

                      <div className="trip-card-highlights">
                        <BadgeGroup>
                          {trip.highlights
                            .slice(0, 3)
                            .map((highlight, index) => (
                              <Badge key={index} variant="info" size="small">
                                {highlight}
                              </Badge>
                            ))}
                          {trip.highlights.length > 3 && (
                            <Badge variant="default" size="small">
                              +{trip.highlights.length - 3} more
                            </Badge>
                          )}
                        </BadgeGroup>
                      </div>

                      <div className="trip-card-info">
                        <div className="info-item">
                          <strong>Duration:</strong> {trip.duration}
                        </div>
                        {/* <div className="info-item">
                          <strong>Max Participants:</strong>{" "}
                          {trip.maxParticipants}
                        </div> */}
                        {/* <div className="info-item">
                          <strong>Difficulty:</strong> {trip.difficulty}
                        </div> */}
                      </div>
                    </div>

                    <div className="trip-card-footer">
                      <span className="view-details-text">
                        View Full Details →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No trips found</h3>
                <p>Try adjusting your search criteria or category filter.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("");
                  }}
                  className="reset-filters-btn"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Categories Overview */}
        <section className="categories-overview">
          <div className="container">
            <SectionHeader
              title="Trip Categories"
              description="Explore our diverse range of trip categories designed to provide educational, cultural, and recreational experiences."
              showDivider
            />
            <div className="categories-grid">
              {Object.entries(tripCategories).map(([category, trips]) => (
                <div
                  key={category}
                  className="category-overview-card card-base"
                >
                  <h3>{category}</h3>
                  <div className="category-count">
                    {trips.length} {trips.length === 1 ? "Trip" : "Trips"}
                  </div>
                  <div className="category-examples">
                    {trips.slice(0, 3).map((trip, idx) => (
                      <div key={idx} className="example-trip">
                        {trip.name}
                      </div>
                    ))}
                    {trips.length > 3 && (
                      <div className="example-trip">
                        +{trips.length - 3} more
                      </div>
                    )}
                  </div>
                  <button
                    className="category-filter-btn"
                    onClick={() => setSelectedCategory(category)}
                  >
                    View {category} Trips
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="trips-directory-cta">
          <div className="container">
            <SectionHeader
              title="Ready to Explore?"
              description="Join our exciting trips and excursions designed to expand your horizons, build cultural awareness, and create unforgettable memories at SCISS."
              showDivider
            />
            <div className="cta-actions">
              <Link href="/apply" className="btn btn-primary btn-large">
                Register for Trips
              </Link>
              <Link href="/day-trips" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA linkTitle="Academic Programs" link="/academics" />
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
