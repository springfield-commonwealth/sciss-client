import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FooterCTA from "@/components/ui/FooterCTA";
import { LifeActivitiesHero } from "@/constants/images";
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
      {/* Hero Section */}
      <HeroSection
        title="Life & Activities"
        subtitle="Beyond the Classroom"
        description="Discover a world of sports, fitness, arts, and recreational activities designed to enrich your summer experience and build lasting friendships."
        backgroundImage={LifeActivitiesHero}
        ctaText="Explore All Activities"
        ctaLink="/activities"
        secondaryCtaText="Apply Now"
        secondaryCtaLink="/apply"
      />

      {/* Popular Activities Preview */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Popular Activities</h2>
            <p>Discover our most engaging and sought-after activities</p>
          </div>

          <div className="activities-preview-grid">
            {popularActivities.map((activity) => (
              <div
                key={activity.id}
                className="activity-preview-card card-base"
              >
                <div className="activity-preview-image">
                  <img src={activity.image} alt={activity.name} />
                  <div className="activity-badges">
                    <span className="category-badge">{activity.category}</span>
                    <span className="level-badge">{activity.level}</span>
                  </div>
                </div>
                <div className="activity-preview-content">
                  <h3>{activity.name}</h3>
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

          <div className="text-center mt-4">
            <Link href="/activities" className="btn btn-secondary btn-large">
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Sports Programs */}
      <section id="sports" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Sports Programs</h2>
            <p>
              Professional coaching and state-of-the-art facilities for athletic
              development
            </p>
          </div>

          <div className="programs-grid">
            {LifeActivitiesSportsPrograms.map((sport, index) => (
              <div key={index} className="sport-card card-base">
                <div className="sport-header">
                  <h3>{sport.title}</h3>
                  <span className="level-badge">{sport.level}</span>
                </div>

                <p className="sport-description">{sport.description}</p>

                <div className="sport-features">
                  <h4>Program Features:</h4>
                  <ul>
                    {sport.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="sport-schedule">
                  <strong>Schedule:</strong> {sport.schedule}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Programs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Fitness & Wellness</h2>
            <p>
              Stay active and healthy with our comprehensive fitness programs
            </p>
          </div>

          <div className="grid-base grid-programs">
            {LifeActivitiesFitnessPrograms.map((program, index) => (
              <div key={index} className="fitness-card card-base">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="fitness-highlights">
                  <h4>Program Highlights</h4>
                  <ul>
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recreation Activities */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Recreation & Leisure</h2>
            <p>Fun and engaging activities for relaxation and entertainment</p>
          </div>

          <div className="grid-base grid-programs">
            {LifeActivitiesRecreationalActivities.map((activity, index) => (
              <div key={index} className="recreation-card card-base">
                <h3>{activity.category}</h3>
                <div className="activity-grid">
                  {activity.activities.map((item, idx) => (
                    <div key={idx} className="activity-item">
                      <div className="activity-icon">🎯</div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
