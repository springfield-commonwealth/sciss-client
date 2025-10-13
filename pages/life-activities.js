import Layout from "@/components/layouts/Layout";
import Highlights from "@/components/sections/Highlights";
import { SectionHeader } from "@/components/ui";
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
      {/* Page Header Section */}
      <section className="section page-header-section">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">Life & Activities</h1>
            <p className="page-subtitle">Beyond the Classroom</p>
            <p className="page-description">Discover a world of sports, fitness, arts, and recreational activities designed to enrich your summer experience and build lasting friendships.</p>
            <div className="page-header-cta">
              <Link href="/activities" className="btn btn--primary">Explore All Activities</Link>
              <Link href="/apply" className="btn btn--secondary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <Highlights
        highlights={HomeHighlights}
        title="Experience Highlights"
        desc="Discover what makes SCISS summer experience truly special"
      />

      {/* Student Experience Overview */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Student Experience"
            description="Residential life, daily schedule, activities, trips to Harvard/MIT/Yale, and what students gain"
            align="center"
            showDivider={true}
          />

          <div className="student-experience-grid">
            <div className="experience-card">
              <div className="experience-icon">🎯</div>
              <h3>What Your Child Gains</h3>
              <ul className="experience-list">
                <li>Confidence through daily presentations</li>
                <li>Real portfolio pieces for schools</li>
                <li>Global peer collaboration</li>
                <li>Mentorship and readiness skills</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-icon">⏰</div>
              <h3>Daily Rhythm</h3>
              <div className="daily-schedule">
                <div className="schedule-item">
                  <span className="time">8:00-12:00</span>
                  <span className="activity">Learning</span>
                </div>
                <div className="schedule-item">
                  <span className="time">1:15-3:00</span>
                  <span className="activity">Projects</span>
                </div>
                <div className="schedule-item">
                  <span className="time">3:15-5:30</span>
                  <span className="activity">Electives</span>
                </div>
                <div className="schedule-item">
                  <span className="time">6:00-7:00</span>
                  <span className="activity">Dinner</span>
                </div>
                <div className="schedule-item">
                  <span className="time">7:15-9:30</span>
                  <span className="activity">Evening programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports & Electives Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Sports & Electives"
            description="Choose what excites you. Train at your level."
            align="center"
            showDivider
          />

          <div className="grid grid--3">
            <div className="category-card">
              <div className="category-card__content">
                <div className="category-card__icon">⚽</div>
                <h3>Sports</h3>
                <div className="category-details">
                  <p><strong>Basketball</strong> (our core), soccer, volleyball, badminton, table tennis, hiking, golf, Zumba, yoga, rowing, gym.</p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-card__content">
                <div className="category-card__icon">🎨</div>
                <h3>Electives</h3>
                <div className="category-details">
                  <p>Fitness & dance, arts & crafts, digital design, creative workshops.</p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-card__content">
                <div className="category-card__icon">📝</div>
                <h3>Upon Request</h3>
                <div className="category-details">
                  <p>SAT/ACT prep, music/vocal tutoring, 3D printing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-note">
            <p>
              <strong>How It Works:</strong> Pick your sport/elective at orientation. Adjust in week one. Juniors (G4–G7) and Seniors (G8–G12) train separately for age-appropriate coaching and safety.
            </p>
            <p className="note">
              <em>Some options (e.g., golf) may carry a small fee.</em>
            </p>
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

      {/* Sports Programs */}
      <section id="sports" className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Sports Programs</h2>
            <p>
              Professional coaching and state-of-the-art facilities for athletic
              development
            </p>
          </div>

          <div className="programs-grid">
            {LifeActivitiesSportsPrograms.map((sport, index) => (
              <div key={index} className="sport-card card">
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
          <div className="text--center mb--lg">
            <h2>Fitness & Wellness</h2>
            <p>
              Stay active and healthy with our comprehensive fitness programs
            </p>
          </div>

          <div className="grid grid--3">
            {LifeActivitiesFitnessPrograms.map((program, index) => (
              <div key={index} className="fitness-card card">
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
          <div className="text--center mb--lg">
            <h2>Recreation & Leisure</h2>
            <p>Fun and engaging activities for relaxation and entertainment</p>
          </div>

          <div className="grid grid--2">
            {LifeActivitiesRecreationalActivities.map((activity, index) => (
              <div key={index} className="recreation-card card">
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

      {/* Evening Activities Section */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Evening Activities"
            description="Campus fun nightly - making every evening memorable"
            align="center"
            showDivider
          />

          <div className="activity-block activity-block--evening">
            <div className="activity-block__icon-badge">🎉</div>
            <h3 className="activity-block__title">Evening Activities</h3>
            <div className="activity-tags">
              <span className="activity-tag">Movie nights</span>
              <span className="activity-tag">Game tournaments</span>
              <span className="activity-tag">Themed parties</span>
              <span className="activity-tag">Cultural events</span>
              <span className="activity-tag">Campfires</span>
              <span className="activity-tag">Talent shows</span>
              <span className="activity-tag">Scavenger hunts</span>
              <span className="activity-tag">Trivia challenges</span>
            </div>
          </div>

          {/* Safety Footer Banner */}
          <div className="safety-banner">
            <div className="safety-banner__icon">🛡️</div>
            <div className="safety-banner__content">
              <strong>Safety First:</strong> All activities are fully supervised with clear conduct norms.
            </div>
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
