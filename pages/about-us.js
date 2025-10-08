import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { FeatureGrid, SectionHeader, StatsGrid } from "@/components/ui";
import FooterCTA from "@/components/ui/FooterCTA";
import { AboutUsFounders, AboutUsStats, AboutUsValues, AboutUsCTAs, AboutUsSessions, AboutUsAlsoIncluded, AboutUsPrograms, AboutUsTeam, AboutUsValueProps, AboutUsDifferentiators, AboutUsIntro } from "@/constants/aboutUsContent";
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

      {/* New Sections */}
      <FeatureSection 
        heading="Why SCISS" 
        paragraphs={AboutUsIntro} 
      />

      <FeatureSection 
        heading="What Makes SCISS Different" 
        paragraphs={AboutUsDifferentiators} 
      />

      <FeatureSection 
        heading="Our Value" 
        paragraphs={AboutUsValueProps} 
      />

      <FeatureSection 
        heading="Our Team" 
        desc="Your child learns from people who do the work every day:"
        paragraphs={AboutUsTeam} 
      />

      <FeatureSection 
        heading="Learn More About Programs (G4–G12 • Residential)" 
        desc="Choose one track per session (students may stack across sessions):"
        paragraphs={AboutUsPrograms} 
      />

      <FeatureSection 
        heading="Also Included" 
        paragraphs={AboutUsAlsoIncluded} 
      />

      <FeatureSection 
        heading="2026 Sessions" 
        paragraphs={AboutUsSessions} 
      />

      {/* Calls to Action */}
      <section className="section bg-light" id="ctas">
        <div className="container flex gap-4">
          {AboutUsCTAs.map((cta, i) => (
            <a key={i} href={cta.link} className="btn btn-primary">{cta.title}</a>
          ))}
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
