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
        <div className="card__features">
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
        <div className="card__info">
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
      title="Activities - SCISS"
      description="Explore our diverse range of activities designed to enhance your SCISS experience and develop essential life skills."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <DirectoryPage
        type="activities"
        title="Activities Directory"
        description="Explore our diverse range of activities designed to enhance your SCISS experience and develop essential life skills."
        items={activities}
        categories={categories}
        stats={stats}
        breadcrumbs={breadcrumbs}
        renderCardContent={renderActivityContent}
        renderBadges={renderActivityBadges}
        getItemCategories={getActivityCategories}
        showCategories={false}
        ctaConfig={{
          footerCTA: {
            title: "Academic Programs",
            link: "/courses",
          },
        }}
        seoConfig={{
          title: "Activities Directory | SCISS",
          description:
            "Explore our diverse range of activities designed to enhance your SCISS experience and develop essential life skills.",
          keywords:
            "SCISS activities, student activities, skill development, recreational activities",
          ogTitle: "Activities Directory | SCISS",
          ogDescription:
            "Explore our diverse range of activities designed to enhance your SCISS experience and develop essential life skills.",
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
    { label: "Activities", href: "/activities", active: true },
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
