import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { FeatureGrid, SectionHeader } from "@/components/ui";
import Carousel from "@/components/ui/Carousel";
import FooterCTA from "@/components/ui/FooterCTA";
import WeeklySchedule from "@/components/ui/WeeklySchedule";
import { ProgramOverviewHero } from "@/constants/images";
import { ProgramOverviewCoreCourses } from "@/constants/programOverviewContent";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const ProgramOverview = ({ breadcrumbs = [] }) => {
  // Prepare unique features data for FeatureGrid component
  const uniqueFeaturesData = [
    {
      icon: "👥",
      title: "Small Class Sizes",
      description: "Maximum 15 students per class for personalized attention",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Industry professionals and experienced educators",
    },
    {
      icon: "🔬",
      title: "Hands-on Learning",
      description: "Practical projects and real-world applications",
    },
  ];

  // Prepare core values data for FeatureGrid component
  const coreValuesData = [
    {
      icon: "⭐",
      title: "Excellence",
      description:
        "Striving for the highest standards in education and personal development",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Embracing cutting-edge approaches to learning and problem-solving",
    },
    {
      icon: "🌍",
      title: "Diversity",
      description:
        "Celebrating different perspectives and cultural backgrounds",
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Building character through honest and ethical practices",
    },
    {
      icon: "👥",
      title: "Community",
      description:
        "Creating lasting connections and collaborative relationships",
    },
  ];

  return (
    <Layout
      title="Program Overview - SCISS"
      description="Discover the comprehensive academic programs, daily structure, and unique opportunities at SCISS Summer School."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <HeroSection
        title="Program Overview"
        subtitle="Excellence in Education"
        description="A comprehensive overview of our academic programs, daily structure, and what makes SCISS a transformative summer experience."
        backgroundImage={ProgramOverviewHero}
        // ctaText="View Academic Programs"
        ctaLink="#program-carousel"
        // secondaryCtaText="Apply Today"
        // secondaryCtaLink="/tuitions-and-fees"
      />

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid--1">
            <div className="mission-content text-center">
              <SectionHeader
                title="Our Mission"
                description="At SCISS, our mission is to foster a dynamic learning environment where curiosity thrives, friendships flourish, and personal growth is nurtured. We believe in providing students with transformative experiences that prepare them for future academic and professional success."
                align="center"
                showDivider
              />

              <h3>Core Values</h3>
              <FeatureGrid
                features={coreValuesData}
                columns={2}
                variant="default"
                hoverable={true}
              />
            </div>

            <div className="vision-content">
              <SectionHeader
                title="What Sets Us Apart"
                align="center"
                showDivider
              />

              <FeatureGrid
                features={uniqueFeaturesData}
                columns={3}
                hoverable
                onFeatureClick={(feature, index) => {
                  console.log("Clicked feature:", feature, index);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* program carousel */}
      <section className="section bg-light" id="program-carousel">
        <div className="container">
          <SectionHeader
            title="Activity Highlights"
            description="Experience the best in sports, fitness, and recreational activities"
            showDivider
          />

          {/* <Carousel items={activitiesCarouselItems} /> */}
          <Carousel items={ProgramOverviewCoreCourses} />
        </div>
      </section>

      <WeeklySchedule />
      <FooterCTA linkTitle="Apply Now" link="/apply" />
    </Layout>
  );
};

export default ProgramOverview;

export async function getStaticProps() {
  // Generate breadcrumbs for program overview page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Program Overview", href: "/program-overview", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
