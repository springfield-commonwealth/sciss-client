import Layout from "@/components/layouts/Layout";
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
const TripsDirectory = ({ trips, categories, stats, breadcrumbs }) => {
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

  return (
    <Layout breadcrumbs={breadcrumbs}>
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
            <h1>Day Trips & Excursions Directory</h1>
            <p className="directory-subtitle">
              Discover our exciting day trips and educational excursions
              designed to expand your horizons. From prestigious university
              visits to cultural adventures, explore the best of New England
              with SCISS.
            </p>

            {/* Statistics */}
            <div className="trips-stats">
              <div className="stat-item">
                <span className="stat-number">{stats.totalTrips}</span>
                <span className="stat-label">Trips Available</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{categories.length}</span>
                <span className="stat-label">Trip Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.averageGroupSize}</span>
                <span className="stat-label">Avg. Group Size</span>
              </div>
            </div>
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
                  <Link key={trip.id} href={`/trips/${trip.slug}`} className="trip-card">
                      <div className="trip-card-image">
                        {trip.image && (
                          <img
                            src={trip.image}
                            alt={trip.title}
                            className="trip-photo"
                          />
                        )}
                        <div className="trip-card-badges">
                          <span className="category-badge">
                            {trip.category}
                          </span>
                          <span className="duration-badge">
                            {trip.duration}
                          </span>
                        </div>
                      </div>

                      <div className="trip-card-content">
                        <h3 className="trip-card-title">{trip.title}</h3>
                        <div className="trip-card-location">
                          📍 {trip.location}
                        </div>
                        <p className="trip-card-description">
                          {trip.description.substring(0, 120)}
                          {trip.description.length > 120 && "..."}
                        </p>

                        <div className="trip-card-highlights">
                          {trip.highlights
                            .slice(0, 3)
                            .map((highlight, index) => (
                              <span key={index} className="highlight-tag">
                                {highlight}
                              </span>
                            ))}
                          {trip.highlights.length > 3 && (
                            <span className="highlight-more">
                              +{trip.highlights.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="trip-card-info">
                          <div className="info-item">
                            <strong>Duration:</strong> {trip.duration}
                          </div>
                          <div className="info-item">
                            <strong>Group Size:</strong> {trip.groupSize}
                          </div>
                          <div className="info-item">
                            <strong>Transport:</strong> {trip.transportMode}
                          </div>
                        </div>
                      </div>

                      <div className="trip-card-footer">
                        <span className="view-details-text">
                          View Full Itinerary →
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
            <h2>Trip Categories</h2>
            <div className="categories-grid">
              {categories.map((category) => {
                const categoryTrips = trips.filter(
                  (t) => t.category === category
                );
                return (
                  <div key={category} className="category-overview-card">
                    <h3>{category}</h3>
                    <p className="category-count">
                      {categoryTrips.length} Trips
                    </p>
                    <div className="category-examples">
                      {categoryTrips.slice(0, 3).map((trip, index) => (
                        <span key={index} className="example-trip">
                          {trip.title}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="category-filter-btn"
                    >
                      View {category} Trips
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="trips-directory-cta">
          <div className="container">
            <h2>Ready for Adventure?</h2>
            <p>
              Join our carefully curated day trips and educational excursions.
              Create unforgettable memories while exploring the best of New
              England!
            </p>
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
    </Layout>
  );
};

// Static Site Generation
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

export default TripsDirectory;
