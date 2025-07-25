import Layout from "@/components/layouts/Layout";
import {
  getActivityCategories,
  getActivityStats,
  getAllActivities,
} from "@/lib/content/activities";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

// Activities Directory Page Component
const ActivitiesDirectory = ({
  activities,
  categories,
  stats,
  breadcrumbs,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter activities based on search and category
  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const matchesSearch =
        searchTerm === "" ||
        activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.features.some((feature) =>
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "" || activity.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [activities, searchTerm, selectedCategory]);

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Head>
        <title>Activities Directory | SCISS Life & Activities</title>
        <meta
          name="description"
          content="Explore our comprehensive range of activities at SCISS including sports, fitness, arts, and wellness programs for all skill levels."
        />
        <meta
          name="keywords"
          content="SCISS activities, sports programs, fitness classes, arts activities, wellness programs, youth activities"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Activities Directory | SCISS Life & Activities"
        />
        <meta
          property="og:description"
          content="Explore our comprehensive range of activities at SCISS including sports, fitness, arts, and wellness programs for all skill levels."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sciss.edu/activities" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://sciss.edu/activities" />
      </Head>

      <main className="activities-directory">
        {/* Header Section */}
        <section className="activities-directory-header">
          <div className="container">
            <h1>Life & Activities Directory</h1>
            <p className="directory-subtitle">
              Discover our comprehensive range of activities designed to enhance
              your SCISS experience. From competitive sports to creative arts,
              find the perfect activities to match your interests and goals.
            </p>

            {/* Statistics */}
            <div className="activities-stats">
              <div className="stat-item">
                <span className="stat-number">{stats.totalActivities}</span>
                <span className="stat-label">Activities Available</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{categories.length}</span>
                <span className="stat-label">Activity Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.averageParticipants}</span>
                <span className="stat-label">Avg. Group Size</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="activities-directory-filters">
          <div className="container">
            <div className="filter-controls">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search activities by name, features, or description..."
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
              Showing {filteredActivities.length} of {activities.length}{" "}
              activities
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="activities-directory-grid">
          <div className="container">
            {filteredActivities.length > 0 ? (
              <div className="activities-grid">
                {filteredActivities.map((activity) => (
                  <Link key={activity.id} href={`/activities/${activity.slug}`} className="activity-card">
                      <div className="activity-card-image">
                        {activity.image && (
                          <img
                            src={activity.image}
                            alt={activity.title}
                            className="activity-photo"
                          />
                        )}
                        <div className="activity-card-badges">
                          <span className="category-badge">
                            {activity.category}
                          </span>
                          <span className="level-badge">{activity.level}</span>
                        </div>
                      </div>

                      <div className="activity-card-content">
                        <h3 className="activity-card-title">
                          {activity.title}
                        </h3>
                        <p className="activity-card-description">
                          {activity.description.substring(0, 120)}
                          {activity.description.length > 120 && "..."}
                        </p>

                        <div className="activity-card-features">
                          {activity.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <span key={index} className="feature-tag">
                                {feature}
                              </span>
                            ))}
                          {activity.features.length > 3 && (
                            <span className="feature-more">
                              +{activity.features.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="activity-card-info">
                          <div className="info-item">
                            <strong>Duration:</strong> {activity.duration}
                          </div>
                          <div className="info-item">
                            <strong>Max Participants:</strong>{" "}
                            {activity.maxParticipants}
                          </div>
                          <div className="info-item">
                            <strong>Difficulty:</strong> {activity.difficulty}
                          </div>
                        </div>
                      </div>

                      <div className="activity-card-footer">
                        <span className="view-details-text">
                          View Full Details →
                        </span>
                      </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No activities found</h3>
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
            <h2>Activity Categories</h2>
            <div className="categories-grid">
              {categories.map((category) => {
                const categoryActivities = activities.filter(
                  (a) => a.category === category
                );
                return (
                  <div key={category} className="category-overview-card">
                    <h3>{category}</h3>
                    <p className="category-count">
                      {categoryActivities.length} Activities
                    </p>
                    <div className="category-examples">
                      {categoryActivities.slice(0, 3).map((activity, index) => (
                        <span key={index} className="example-activity">
                          {activity.title}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="category-filter-btn"
                    >
                      View {category} Activities
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="activities-directory-cta">
          <div className="container">
            <h2>Ready to Get Active?</h2>
            <p>
              Join our diverse range of activities designed to enhance your
              skills, build friendships, and create unforgettable experiences at
              SCISS.
            </p>
            <div className="cta-actions">
              <Link href="/apply" className="btn btn-primary btn-large">
                Register for Activities
              </Link>
              <Link href="/life-activities" className="btn btn-secondary">
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
  const activities = getAllActivities();
  const categories = getActivityCategories();
  const stats = getActivityStats();

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Life & Activities", href: "/life-activities" },
    { label: "Activities Directory", href: "/activities", active: true },
  ]);

  return {
    props: {
      activities,
      categories,
      stats,
      breadcrumbs,
    },
  };
}

export default ActivitiesDirectory;
