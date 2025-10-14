import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { FeatureGrid, SectionHeader, StatsGrid } from "@/components/ui";
import FooterCTA from "@/components/ui/FooterCTA";
import { AboutUsStats, AboutUsValues } from "@/constants/aboutUsContent";
import { AboutUsHero } from "@/constants/images";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const FeatureSection = ({ heading, paragraphs }) => (
  <section className="section" id={heading.toLowerCase().replace(/\s+/g, "-")}>
    <div className="container">
      <SectionHeader title={heading} showDivider />
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-4">{p}</p>
      ))}
    </div>
  </section>
);




const AboutUs = ({ breadcrumbs = [] }) => {
  // Prepare stats data for StatsGrid component
  const statsData = AboutUsStats.map((stat) => ({
    number: stat.number,
    label: stat.label,
    icon: stat.icon,
  }));

  // Prepare values data for FeatureGrid component
  const valuesData = AboutUsValues.map((value) => ({
    icon: value.icon,
    title: value.title,
    description: value.description,
  }));

  return (
    <Layout
      title="About Us - SCISS"
      description="Learn about SCISS Summer School's mission, values, and commitment to excellence in international education."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <HeroSection
        title="About SCISS"
        subtitle="Our Story & Mission"
        description="Discover the vision, values, and passionate educators who make SCISS a transformative experience for students from around the world."
        backgroundImage={AboutUsHero}
        ctaText="Meet Our Team"
        ctaLink="/staff"
        secondaryCtaText="Our Programs"
        secondaryCtaLink="/program-overview"
      />

      {/* Quick Facts */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Quick Facts"
            description="Our mission, team, campus, and what makes SCISS different"
            align="center"
            showDivider={true}
          />

          <div className="quick-facts-grid">
            <div className="fact-card">
              <div className="fact-icon">🎓</div>
              <h3>Grades 4–12</h3>
              <p>Junior (G4–G7) and Senior (G8–G12) groups</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">📅</div>
              <h3>June–August 2026</h3>
              <p>Residential sessions with flexible scheduling</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🎯</div>
              <h3>6 Tracks</h3>
              <p>Investment • Entrepreneurship • AI/Robotics • Leadership • Music/Stage • Sports</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🏆</div>
              <h3>Real Outcomes</h3>
              <p>Capstone presentations, portfolios, certificates</p>
            </div>
            <div className="fact-card">
              <div className="fact-icon">🏠</div>
              <h3>Campus Boarding</h3>
              <p>Full supervision with residential care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" id="mission">
        <div className="container">
          <div className="grid grid--2">
            <div className="mission-section">
              <SectionHeader
                title="Our Mission"
                description="At Springfield Commonwealth International Summer School, our mission is to foster a dynamic learning environment where curiosity thrives, friendships flourish, and personal growth is nurtured. We believe in providing students with transformative experiences that prepare them for future academic and professional success while building global perspectives and lifelong connections."
                align="left"
                showDivider
              />

              <div className="mission-highlights">
                <FeatureGrid
                  features={[
                    {
                      icon: "🎓",
                      title: "Academic Excellence",
                      description:
                        "Providing world-class education with cutting-edge curriculum and expert instruction",
                    },
                    {
                      icon: "🌟",
                      title: "Personal Development",
                      description:
                        "Nurturing individual growth, confidence, and leadership skills in every student",
                    },
                    {
                      icon: "🌍",
                      title: "Global Community",
                      description:
                        "Building bridges between cultures and creating lasting international friendships",
                    },
                  ]}
                  columns={1}
                  hoverable
                />
              </div>
            </div>

            <div className="vision-section">
              <SectionHeader
                title="Our Vision"
                description="To be the world's leading international summer school, known for academic innovation, cultural exchange, and transformative student experiences that shape future global leaders and change-makers."
                align="left"
                showDivider
              />

              <StatsGrid
                stats={statsData}
                columns={2}
                hoverable
                onStatClick={(stat, index) => {
                  console.log("Clicked stat:", stat, index);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About SCISS Section - Where Big Ideas Meet Practical Doing */}
      <section className="section about-sciss-section">
        <div className="container">
          <div className="about-sciss-header">
            <SectionHeader
              title="About SCISS"
              description="Where big ideas meet practical doing"
              align="center"
              showDivider={true}
            />
          </div>

          <div className="about-sciss-content">
            <div className="about-sciss-main">
              <div className="about-sciss-card about-sciss-card--primary">
                <div className="about-sciss-card__icon">🎓</div>
                <h3>Academic Excellence</h3>
                <p>At SCISS, we blend big ideas with practical doing. Across June–August 2026, students live and learn on our residential campus, rotating through expert-led sessions, team workshops, and guided projects.</p>
                <div className="about-sciss-highlight">
                  <span className="about-sciss-highlight__label">Age Groups:</span>
                  <span className="about-sciss-highlight__value">Junior (G4–G7) • Senior (G8–G12)</span>
                </div>
              </div>

              <div className="about-sciss-card about-sciss-card--secondary">
                <div className="about-sciss-card__icon">🌟</div>
                <h3>Proven Outcomes</h3>
                <p>Parents love SCISS because the outcomes are clear: stronger study habits, standout portfolio pieces, and a supportive global network that lasts long after summer ends.</p>
                <div className="about-sciss-stats">
                  <div className="about-sciss-stat">
                    <span className="about-sciss-stat__number">14+</span>
                    <span className="about-sciss-stat__label">Years of Excellence</span>
                  </div>
                  <div className="about-sciss-stat">
                    <span className="about-sciss-stat__number">6</span>
                    <span className="about-sciss-stat__label">Specialized Tracks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-light" id="values">
        <div className="container">
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide everything we do at SCISS"
            showDivider
          />

          <FeatureGrid
            features={valuesData}
            columns={3}
            hoverable
            onFeatureClick={(feature, index) => {
              console.log("Clicked value:", feature, index);
            }}
          />
        </div>
      </section>

      <FooterCTA linkTitle="Academic Programs" link="/academics" />
    </Layout>
  );
};

export default AboutUs;

export async function getStaticProps() {
  // Generate breadcrumbs for about us page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
