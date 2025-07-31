import Layout from "@/components/layouts/Layout";
import ContentSlider from "@/components/sections/ContentSlider";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import Highlights from "@/components/sections/Highlights";
import Testimonials from "@/components/sections/Testimonials";
import FeatureVideo from "@/components/ui/FeatureVideo";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  HomeHighlights,
  HomePresidentLetter,
  HomeTestimonials,
  HomeWelcomeParagraphs,
} from "@/constants/homeContent";
import {
  HomeFeature,
  HomeFeaturePresidents,
  HomeHero,
  HomeSliderImages,
} from "@/constants/images";
import { WelcomeVideo } from "@/constants/videos";
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
        title="Inspire Global Leaders for Tomorrow"
        subtitle="Summer 2025"
        description="An enriching summer experience combining cutting-edge academics, sports, field trips, and inclusive cultural activities."
        backgroundImage={HomeHero}
      />

      {/* Welcome Section */}
      <FeatureSection
        heading="Welcome to Springfield Commonwealth International Summer School"
        paragraphs={HomeWelcomeParagraphs}
        image={HomeFeature}
      />

      <FeatureVideo
        VideoObject={WelcomeVideo}
        autoPlay={false}
        muted={true}
        loop={true}
        playsInline={true}
        playBackSpeed={0.7}
      />

      <Highlights highlights={HomeHighlights} />

      <ContentSlider
        heading="Unique Summer Experience with unforgettable memories"
        text="Our program combines daily academic coursework with organized, supervised activities to create a comprehensive experience. Each student who joins our community develops essential life skills, builds enduring friendships, and becomes a valued member of our international community"
        images={HomeSliderImages}
      />

      <FeatureSection
        heading="Letter From the President"
        image={HomeFeaturePresidents}
        paragraphs={HomePresidentLetter}
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
