import Layout from "@/components/layouts/Layout";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";
import CountdownModal from "@/components/ui/CountdownModal";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  HomePresidentLetter,
  HomeTestimonials,
  HomeWelcomeParagraphs
} from "@/constants/homeContent";
import {
  HomeFeature,
  HomeFeaturePresidents,
  HomeHero,
} from "@/constants/images";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import { useEffect, useState } from "react";

const HomePage = ({ breadcrumbs = [] }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal every time the page loads/refreshes
    const timer = setTimeout(() => {
      setShowModal(true);
      // Lock body scroll when modal opens
      document.body.classList.add("modal-open");
    }, 500); // 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    // Unlock body scroll
    document.body.classList.remove("modal-open");
  };
  return (
    <Layout
      title="SCISS - Springfield Commonwealth International Summer School"
      description="Join SCISS for an unforgettable summer experience with cutting-edge academics, exciting activities, and trips to Harvard, MIT, and Yale."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
      className="home-page"
    >
      {/* Countdown Modal - First Session 2026 */}
      <CountdownModal
        isOpen={showModal}
        onClose={handleCloseModal}
        targetDate="2026-06-14T00:00:00"
      />

      {/* Hero Section */}
      <HeroSection
        title="Give your child a global summer that counts."
        subtitle="Learn big. Build real. Shine bright."
        description="An enriching summer experience combining cutting-edge academics, sports, field trips, and inclusive cultural activities."
        backgroundImage={HomeHero}
      />

      {/* Short Intro / Welcome Section */}
      <FeatureSection
        heading="Welcome to Springfield Commonwealth International Summer School"
        paragraphs={HomeWelcomeParagraphs}
        image={HomeFeature}
        imagePosition="left"
        showDivider={true}
      />

      <FeatureSection
        heading="Letter From the President"
        image={HomeFeaturePresidents}
        paragraphs={HomePresidentLetter}
        imagePosition="right"
      />

      {/* Testimonials Section */}
      <Testimonials
        title="Student voices"
        desc="Don't just head from us. Hear from our amazing SCISS alumni"
        testimonials={HomeTestimonials}
      />
      <FooterCTA linkTitle="Life & Activities" link="/activities" />
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
