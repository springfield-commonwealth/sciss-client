import Layout from "@/components/layouts/Layout";
import CTASection from "@/components/sections/CTASection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import SessionInfo from "@/components/sections/SessionInfo";
import Testimonials from "@/components/sections/Testimonials";
import { WeeklySchedule } from "@/components/ui";
import { FeatureGrid } from "@/components/ui/FeatureCard";
import {
  HomeTestimonials,
  HomeWelcomeParagraphs,
  ParentPeaceOfMind,
  ProgramBenefits,
  ProgramTracks,
} from "@/constants/homeContent";
import {
  HomeHero,
  HomeWelcomeImages,
  ParentPeaceOfMindImage,
  ProgramBenefitsImage,
} from "@/constants/images";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const HomePage = ({ breadcrumbs = [] }) => {
  return (
    <Layout
      title="SCISS - Springfield Commonwealth International Summer School"
      description="Join SCISS for an unforgettable summer experience with cutting-edge academics, exciting activities, and trips to Harvard, MIT, and Yale."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
      className="home-page"
    >
      {/* Hero Section */}
      <HeroSection
        title="A Summer that Counts"
        subtitle="Summer 2026"
        description="Learn big. Build real. Shine bright."
        backgroundImage={HomeHero}
      />

      {/* Welcome Section */}
      <FeatureSection
        heading="SCISS — SC International Summer School"
        paragraphs={HomeWelcomeParagraphs}
        images={HomeWelcomeImages}
      />

      {/* Program Tracks */}
      <section className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Program Tracks</h2>
            <p>Choose one or stack across sessions</p>
          </div>
          <FeatureGrid
            features={ProgramTracks}
            columns={2}
            variant="image-overlay"
            hoverable={true}
            className="grid--mobile-1"
          />
        </div>
      </section>

      {/* What Your Child Gains CTA */}
      <CTASection
        title="What Your Child Gains"
        benefits={ProgramBenefits}
        ctaText="Achivements by Our Students"
        ctaLink="/program-outcomes"
        image={ProgramBenefitsImage}
      />

      {/* Parent Peace of Mind CTA */}
      <CTASection
        title="Parent Peace-of-Mind"
        benefits={ParentPeaceOfMind}
        ctaText="Get Parent Information"
        ctaLink="/parent-information"
        image={ParentPeaceOfMindImage}
      />

      {/* Weekly Schedule */}
      <WeeklySchedule />

      {/* Testimonials Section */}
      <Testimonials
        title="Student voices"
        desc="Don't just head from us. Hear from our amazing SCISS alumni"
        testimonials={HomeTestimonials}
      />
      <SessionInfo linkTitle="Life & Activities" link="/activities" />
    </Layout>
  );
};

export default HomePage;

export async function getStaticProps() {
  // Generate breadcrumbs for home page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
