import Layout from "@/components/layouts/Layout";
import { DirectoryPage } from "@/components/ui";
import {
  getActivityCategories,
  getActivityStats,
  getAllActivities,
} from "@/lib/content/activities";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

// Activities Directory Page Component - Using Universal Directory System
const ActivitiesDirectory = ({
  activities,
  categories,
  stats,
  breadcrumbs = [],
}) => {
  // Custom content renderer for activities
  const renderActivityContent = (activity) => {
    return (
      <>
        <div className="card-features">
          {activity.features?.slice(0, 3).map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
          {activity.features?.length > 3 && (
            <span className="feature-more">
              +{activity.features.length - 3} more
            </span>
          )}
        </div>
        <div className="card-info">
          <div className="info-item">
            <strong>Level:</strong> {activity.level}
          </div>
          <div className="info-item">
            <strong>Duration:</strong> {activity.duration}
          </div>
        </div>
      </>
    );
  };

  // Custom badge renderer for activities
  const renderActivityBadges = (activity) => {
    return (
      <>
        <span className="category-badge">{activity.category}</span>
        <span className="level-badge">{activity.level}</span>
      </>
    );
  };

  // Function to get activity categories for grouping
  const getActivityCategories = (activity) => activity.category;

  return (
    <Layout
      title="Life Activities - SCISS"
      description="Explore our diverse range of life activities designed to enhance your SCISS experience and develop essential life skills."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <DirectoryPage
        type="activities"
        title="Life Activities Directory"
        description="Explore our diverse range of life activities designed to enhance your SCISS experience and develop essential life skills."
        items={activities}
        categories={categories}
        stats={stats}
        breadcrumbs={breadcrumbs}
        renderCardContent={renderActivityContent}
        renderBadges={renderActivityBadges}
        getItemCategories={getActivityCategories}
        ctaConfig={{
          showCTA: true,
          title: "Ready to Get Active?",
          description:
            "Join our exciting life activities and develop essential skills while having fun and building lasting friendships.",
          primaryAction: {
            text: "Join Activities",
            href: "/apply",
          },
          secondaryAction: {
            text: "Learn About SCISS",
            href: "/about-us",
          },
        }}
        seoConfig={{
          title: "Life Activities Directory | SCISS",
          description:
            "Explore our diverse range of life activities designed to enhance your SCISS experience and develop essential life skills.",
          keywords:
            "SCISS activities, life activities, student activities, skill development, recreational activities",
          ogTitle: "Life Activities Directory | SCISS",
          ogDescription:
            "Explore our diverse range of life activities designed to enhance your SCISS experience and develop essential life skills.",
          canonicalUrl: "https://sciss.org/activities",
        }}
      />
    </Layout>
  );
};

export default ActivitiesDirectory;

export async function getStaticProps() {
  const activities = getAllActivities();
  const categories = getActivityCategories();
  const stats = getActivityStats();

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Life Activities", href: "/activities", active: true },
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
