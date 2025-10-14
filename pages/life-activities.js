import Layout from "@/components/layouts/Layout";
import Highlights from "@/components/sections/Highlights";
import FooterCTA from "@/components/ui/FooterCTA";
import { HomeHighlights } from "@/constants/homeContent";
import {
  LifeActivitiesFitnessPrograms,
  LifeActivitiesRecreationalActivities,
  LifeActivitiesSportsPrograms,
} from "@/constants/lifeActivitiesContent";
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

      {/* Key Highlights */}
      <Highlights
        highlights={HomeHighlights}
        title="Experience Highlights"
        desc="Discover what makes SCISS summer experience truly special"
      />

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

      {/* Sports Programs - Simplified */}
      <section id="sports" className="section bg-light">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Sports Programs</h2>
            <p>Professional coaching and state-of-the-art facilities for athletic development</p>
          </div>

          <div className="grid grid--3">
            {LifeActivitiesSportsPrograms.map((sport, index) => (
              <div key={index} className="cultural-trip-card-simple">
                <div className="trip-icon-large">🏆</div>
                <h3>{sport.title}</h3>
                <p className="trip-description-simple">{sport.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Programs - Simplified */}
      <section className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Fitness & Wellness</h2>
            <p>Stay active and healthy with our comprehensive fitness programs</p>
          </div>

          <div className="grid grid--3">
            {LifeActivitiesFitnessPrograms.map((program, index) => (
              <div key={index} className="cultural-trip-card-simple">
                <div className="trip-icon-large">💪</div>
                <h3>{program.title}</h3>
                <p className="trip-description-simple">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recreation Activities - Simplified */}
      <section className="section bg-light">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Recreation & Leisure</h2>
            <p>Fun and engaging activities for relaxation and entertainment</p>
          </div>

          <div className="grid grid--2">
            {LifeActivitiesRecreationalActivities.map((activity, index) => (
              <div key={index} className="cultural-trip-card-simple">
                <div className="trip-icon-large">🎮</div>
                <h3>{activity.category}</h3>
                <div className="simple-activity-list">
                  {activity.activities.map((item, idx) => (
                    <span key={idx} className="simple-activity-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evening Activities Section - Simplified */}
      <section className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Evening Activities</h2>
            <p>Campus fun nightly - making every evening memorable</p>
          </div>

          <div className="cultural-trip-card-simple">
            <div className="trip-icon-large">🎉</div>
            <h3>Evening Activities</h3>
            <div className="simple-activity-list">
              <span className="simple-activity-tag">Movie nights</span>
              <span className="simple-activity-tag">Game tournaments</span>
              <span className="simple-activity-tag">Themed parties</span>
              <span className="simple-activity-tag">Cultural events</span>
              <span className="simple-activity-tag">Campfires</span>
              <span className="simple-activity-tag">Talent shows</span>
              <span className="simple-activity-tag">Scavenger hunts</span>
              <span className="simple-activity-tag">Trivia challenges</span>
            </div>
          </div>

          <div className="info-note-box">
            <strong>Safety First:</strong> All activities are fully supervised with clear conduct norms.
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
