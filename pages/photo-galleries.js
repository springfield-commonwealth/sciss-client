import Layout from "@/components/layouts/Layout";
import ContentSlider from "@/components/sections/ContentSlider";
import { SectionHeader } from "@/components/ui";
import FeatureVideo from "@/components/ui/FeatureVideo";
import FooterCTA from "@/components/ui/FooterCTA";
import { HomeSliderImages } from "@/constants/images";
import { WelcomeVideo } from "@/constants/videos";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const PhotoGalleries = ({ breadcrumbs = [] }) => {
  return (
    <Layout
      title="Photo Galleries - SCISS"
      description="Explore photos and videos from SCISS summer sessions. See students learning, creating, and making unforgettable memories."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Page Header */}
      <section className="section" style={{ paddingTop: 'var(--nav-height)', background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-primary-100) 100%)' }}>
        <div className="container">
          <SectionHeader
            title="Photo & Video Galleries"
            description="Capture the SCISS experience through our collection of photos and videos"
            align="center"
            showDivider={true}
          />
        </div>
      </section>

      {/* Feature Video Section */}
      <FeatureVideo
        VideoObject={WelcomeVideo}
        autoPlay={false}
        muted={true}
        loop={true}
        playsInline={true}
        playBackSpeed={0.7}
      />

      {/* Content Slider - Unique Summer Experience */}
      <ContentSlider
        heading="Unique Summer Experience with unforgettable memories"
        text="Our program combines daily academic coursework with organized, supervised activities to create a comprehensive experience. Each student who joins our community develops essential life skills, builds enduring friendships, and becomes a valued member of our international community"
        images={HomeSliderImages}
      />

      <FooterCTA linkTitle="Apply Now" link="/apply" />
    </Layout>
  );
};

export default PhotoGalleries;

export async function getStaticProps() {
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Photo Galleries", href: "/photo-galleries", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}

