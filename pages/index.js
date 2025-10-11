import Layout from "@/components/layouts/Layout";
import ContentSlider from "@/components/sections/ContentSlider";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import Highlights from "@/components/sections/Highlights";
import Testimonials from "@/components/sections/Testimonials";
import {
  SectionHeader,
} from "@/components/ui";
import CountdownModal from "@/components/ui/CountdownModal";
import FeatureVideo from "@/components/ui/FeatureVideo";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  HomeHighlights,
  HomePresidentLetter,
  HomeTestimonials,
  HomeWelcomeParagraphs
} from "@/constants/homeContent";
import {
  HomeFeature,
  HomeFeaturePresidents,
  HomeHero,
  HomeSliderImages,
} from "@/constants/images";
import { WelcomeVideo } from "@/constants/videos";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = ({ breadcrumbs = [] }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasSeenModal = sessionStorage.getItem("sciss-countdown-modal-seen");
    
    if (!hasSeenModal) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setShowModal(true);
        // Lock body scroll when modal opens
        document.body.classList.add("modal-open");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    // Mark as seen for this session
    sessionStorage.setItem("sciss-countdown-modal-seen", "true");
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
        targetDate="2026-06-29T00:00:00"
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

      {/* Main Categories - Simple & Bold */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Explore SCISS"
            description="Everything you need to know about our summer program"
            align="center"
            showDivider={true}
          />

          <div className="grid grid--2">
            <div className="category-card">
              <div className="category-card__content">
                <h3>📚 Programs & Academics</h3>
                <p>6 specialized tracks: Investment, Entrepreneurship, AI & Robotics, Leadership, Music & Stage Arts, and Sports</p>
                <div className="category-details">
                  <h4>Program Tracks:</h4>
                  <ul>
                    <li><strong>Investment</strong> — Markets, analysis, portfolio building</li>
                    <li><strong>Entrepreneurship</strong> — Idea to pitch, prototyping, MVP</li>
                    <li><strong>AI & Robotics</strong> — Code systems, sensors, models</li>
                    <li><strong>Leadership & Debate</strong> — Communication, stage presence</li>
                    <li><strong>Music & Stage Arts</strong> — Ensembles, movement, stagecraft</li>
                    <li><strong>Sports</strong> — Basketball & Soccer development</li>
                  </ul>
                  <p><em>Students choose one track per session, or combine tracks across sessions.</em></p>
                </div>
                <div className="category-links">
                  <Link href="/program-overview/" className="btn btn--primary">View Programs</Link>
                  <Link href="/academics" className="btn btn--secondary">Academic Details</Link>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-card__content">
                <h3>🏠 Student Experience</h3>
                <p>Residential life, daily schedule, activities, trips to Harvard/MIT/Yale, and what students gain</p>
                <div className="category-details">
                  <h4>What Your Child Gains:</h4>
                  <ul>
                    <li>Confidence through daily presentations</li>
                    <li>Real portfolio pieces for schools</li>
                    <li>Global peer collaboration</li>
                    <li>Mentorship and readiness skills</li>
                  </ul>
                  <h4>Daily Rhythm:</h4>
                  <p>8:00-12:00 Learning • 1:15-3:00 Projects • 3:15-5:30 Electives • 6:00-7:00 Dinner • 7:15-9:30 Evening programs</p>
                </div>
                <div className="category-links">
                  <Link href="/activities" className="btn btn--primary">Activities & Trips</Link>
                  <Link href="/life-activities" className="btn btn--secondary">Student Life</Link>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-card__content">
                <h3>👨‍👩‍👧‍👦 For Parents</h3>
                <p>Safety, communication, residential care, and everything parents need to know</p>
                <div className="category-details">
                  <h4>Parent Peace-of-Mind:</h4>
                  <ul>
                    <li>Dedicated dorm staff with clear guidelines</li>
                    <li>Age-appropriate cohorts: Junior (G4–G7), Senior (G8–G12)</li>
                    <li>Balanced days: academics, projects, sports, downtime</li>
                    <li>On-site first-aid and safety protocols</li>
                    <li>Regular updates and parent contact</li>
                  </ul>
                </div>
                <div className="category-links">
                  <Link href="/parent-information" className="btn btn--primary">Parent Info</Link>
                  <Link href="/apply" className="btn btn--secondary">Apply Now</Link>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-card__content">
                <h3>🏫 About SCISS</h3>
                <p>Our mission, team, campus, and what makes SCISS different</p>
                <div className="category-details">
                  <h4>Quick Facts:</h4>
                  <ul>
                    <li>Grades 4–12 (Junior G4–G7, Senior G8–G12)</li>
                    <li>June–August 2026 residential sessions</li>
                    <li>6 Tracks: Investment • Entrepreneurship • AI/Robotics • Leadership • Music/Stage • Sports</li>
                    <li>Outcomes: Capstone presentations, portfolios, certificates</li>
                    <li>Campus boarding with full supervision</li>
                  </ul>
                </div>
                <div className="category-links">
                  <Link href="/about-us" className="btn btn--primary">About Us</Link>
                  <Link href="/staff" className="btn btn--secondary">Meet Our Team</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
