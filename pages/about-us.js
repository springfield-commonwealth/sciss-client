import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import {
  AboutUsFounders,
  AboutUsStats,
  AboutUsValues,
} from "@/constants/aboutUsContent";
import { AboutUsHero } from "@/constants/images";

const AboutUs = () => {
  return (
    <Layout
      title="About Us - SCISS"
      description="Learn about SCISS's mission, values, and the dedicated team that creates exceptional summer learning experiences for international students."
    >
      {/* Hero Section */}
      <HeroSection
        title="About SCISS"
        subtitle="Our Story & Mission"
        description="Discover the vision, values, and passionate educators who make SCISS a transformative experience for students from around the world."
        backgroundImage={AboutUsHero}
        ctaText="Meet Our Team"
        ctaLink="#team"
        secondaryCtaText="Our Programs"
        secondaryCtaLink="/program-overview"
      />

      {/* Mission & Vision */}
      <section className="section" id="mission">
        <div className="container">
          <div className="grid grid-2">
            <div className="mission-section">
              <h2>Our Mission</h2>
              <p className="mission-text">
                At Springfield Commonwealth International Summer School, our
                mission is to foster a dynamic learning environment where
                curiosity thrives, friendships flourish, and personal growth is
                nurtured. We believe in providing students with transformative
                experiences that prepare them for future academic and
                professional success while building global perspectives and
                lifelong connections.
              </p>

              <div className="mission-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon"></span>
                  <div>
                    <h4>Academic Excellence</h4>
                    <p>
                      Providing world-class education with cutting-edge
                      curriculum and expert instruction
                    </p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span className="highlight-icon"></span>
                  <div>
                    <h4>Personal Development</h4>
                    <p>
                      Nurturing individual growth, confidence, and leadership
                      skills in every student
                    </p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span className="highlight-icon"></span>
                  <div>
                    <h4>Global Community</h4>
                    <p>
                      Building bridges between cultures and creating lasting
                      international friendships
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="vision-section">
              <h2>Our Vision</h2>
              <p className="vision-text">
                To be the world's leading international summer school, known for
                academic innovation, cultural exchange, and transformative
                student experiences that shape future global leaders and
                change-makers.
              </p>

              <div className="stats-grid">
                {AboutUsStats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-icon">{stat.icon}</span>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-light" id="values">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do at SCISS</p>
          </div>

          <div className="grid grid-3">
            {AboutUsValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="section" id="team">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Leadership Team</h2>
            <p>
              Meet the visionary educators who lead SCISS with passion and
              dedication
            </p>
          </div>

          <div className="founders-grid">
            {AboutUsFounders.map((founder, index) => (
              <div key={index} className="founder-card">
                <div className="founder-header">
                  <h3>{founder.name}</h3>
                  <div className="founder-title">{founder.title}</div>
                  <div className="founder-background">{founder.background}</div>
                </div>

                <p className="founder-bio">{founder.bio}</p>

                <div className="founder-expertise">
                  <h4>Areas of Expertise:</h4>
                  <div className="expertise-tags">
                    {founder.expertise.map((area, idx) => (
                      <span key={idx} className="expertise-tag">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
