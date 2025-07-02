import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { LifeActivitiesHero } from "@/constants/images";
import {
  LifeActivitiesFitnessPrograms,
  LifeActivitiesRecreationalActivities,
  LifeActivitiesSportsPrograms,
} from "@/constants/lifeActivitiesContent";

const LifeActivities = () => {
  return (
    <Layout
      title="Life & Activities - SCISS"
      description="Explore the exciting sports, fitness, recreational activities, and wellness programs at SCISS Summer School."
    >
      {/* Hero Section */}
      <HeroSection
        title="Life & Activities"
        subtitle="Beyond the Classroom"
        description="Discover a world of sports, fitness, arts, and recreational activities designed to enrich your summer experience and build lasting friendships."
        backgroundImage={LifeActivitiesHero}
      />

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
              <div key={index} className="sport-card">
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
            <h2>Fitness & Dance Programs</h2>
            <p>
              Stay active and healthy with our comprehensive fitness offerings
            </p>
          </div>

          <div className="grid grid-3">
            {LifeActivitiesFitnessPrograms.map((program, index) => (
              <div key={index} className="fitness-card">
                <h3>{program.title}</h3>
                <p>{program.description}</p>

                <div className="fitness-highlights">
                  <h4>Highlights:</h4>
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

      {/* Recreational Activities */}
      <section id="activities" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Recreational Activities</h2>
            <p>Explore your interests and discover new passions</p>
          </div>

          <div className="grid grid-2">
            {LifeActivitiesRecreationalActivities.map((category, index) => (
              <div key={index} className="recreation-card">
                <h3>{category.category}</h3>
                <div className="activity-grid">
                  {category.activities.map((activity, idx) => (
                    <div key={idx} className="activity-item">
                      <span className="activity-icon">🎯</span>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LifeActivities;
