import Layout from "@/components/layouts/Layout";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  getActivityCategories,
  getPopularActivities,
} from "@/lib/content/activities";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";

const LifeActivities = ({
  popularActivities,
  activityCategories,
  breadcrumbs = [],
}) => {
  return (
    <Layout
      title="Life & Activities - SCISS"
      description="Discover exciting activities, sports, and recreational programs at SCISS Summer School."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      <div className="padding-top-100"></div>

      {/* Page Header Section */}
      <section className="section page-header-section">
        <div className="container">
          <div className="page-header-content">
            <p className="page-subtitle">Beyond the Classroom</p>
            <h1 className="page-title">Life & Activities</h1>
            <p className="page-description">Discover a world of sports, fitness, arts, and recreational activities designed to enrich your summer experience and build lasting friendships.</p>
          </div>
        </div>
      </section>

      {/* Sports & Electives Section - Simplified */}
      <section className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Sports & Electives</h2>
            <p>Choose what excites you. Train at your level.</p>
          </div>

          <div className="grid grid--3">
            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">⚽</div>
              <h3>Sports</h3>
              <p className="trip-description-simple"><strong>Basketball</strong> (our core), soccer, volleyball, badminton, table tennis, hiking, golf, Zumba, yoga, rowing, gym.</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🎨</div>
              <h3>Electives</h3>
              <p className="trip-description-simple">Fitness & dance, arts & crafts, digital design, creative workshops.</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">📝</div>
              <h3>Upon Request</h3>
              <p className="trip-description-simple">SAT/ACT prep, music/vocal tutoring, 3D printing.</p>
            </div>
          </div>

          <div className="info-note-box">
            <strong>How It Works:</strong> Pick your sport/elective at orientation. Adjust in week one. Juniors (G4–G7) and Seniors (G8–G12) train separately for age-appropriate coaching and safety. Some options (e.g., golf) may carry a small fee.
          </div>
        </div>
      </section>

      {/* Popular Activities Preview */}
      <section className="section bg-light">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Popular Activities</h2>
            <p>Discover our most engaging and sought-after activities</p>
          </div>

          <div className="grid grid--3">
            {popularActivities.map((activity) => (
              <div
                key={activity.id}
                className="activity-preview-card card"
              >
                <div className="activity-preview-image">
                  <img src={activity.image} alt={activity.title} />
                  <div className="activity-badges">
                    <span className="category-badge">{activity.category}</span>
                  </div>
                </div>
                <div className="activity-preview-content">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  <div className="activity-features-preview">
                    {activity.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                    {activity.features.length > 3 && (
                      <span className="feature-tag">
                        +{activity.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text--center mt--md">
            <Link href="/activities" className="btn btn--secondary btn--lg">
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* All Activities Overview - Condensed */}
      <section className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Daily Activities & Recreation</h2>
            <p>A full schedule of sports, fitness, arts, and evening events</p>
          </div>

          <div className="grid grid--2">
            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🏀</div>
              <h3>Competitive Sports</h3>
              <p className="trip-description-simple">Basketball (our flagship), soccer, volleyball, badminton, table tennis with professional coaching and tournament play.</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">💪</div>
              <h3>Fitness & Wellness</h3>
              <p className="trip-description-simple">Zumba, yoga, gym & strength training, hiking, golf, rowing—build healthy habits with expert guidance.</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🎨</div>
              <h3>Arts & Creative Activities</h3>
              <p className="trip-description-simple">Arts & crafts, digital design, creative workshops, and hands-on projects that spark imagination.</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🎉</div>
              <h3>Evening & Social Events</h3>
              <p className="trip-description-simple">Movie nights, game tournaments, themed parties, talent shows, campfires, scavenger hunts, and trivia challenges.</p>
            </div>
          </div>

          <div className="info-note-box">
            <strong>Supervision & Flexibility:</strong> All activities are fully supervised with clear conduct norms. Pick your favorites at orientation and adjust during week one. Juniors (G4–G7) and Seniors (G8–G12) participate in age-appropriate groups.
          </div>
        </div>
      </section>

      <FooterCTA linkTitle="Academic Programs" link="/academics" />
    </Layout>
  );
};

// Static Site Generation
export async function getStaticProps() {
  const popularActivities = getPopularActivities(6);
  const activityCategories = getActivityCategories();

  // Generate breadcrumbs for life activities page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Life & Activities", href: "/life-activities", active: true },
  ]);

  return {
    props: {
      popularActivities,
      activityCategories,
      breadcrumbs,
    },
  };
}

export default LifeActivities;
