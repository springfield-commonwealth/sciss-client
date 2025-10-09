import Layout from "@/components/layouts/Layout";
import ContentSlider from "@/components/sections/ContentSlider";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import Highlights from "@/components/sections/Highlights";
import Testimonials from "@/components/sections/Testimonials";
import {
  SectionHeader,
} from "@/components/ui";
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

      {/* Enhanced About Section */}
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
                    <li><strong>Path to Wall Street (Investment)</strong> — Learn markets, analyze companies, build mock portfolio</li>
                    <li><strong>Youth Innovation & Entrepreneurship</strong> — From idea to pitch: design thinking, prototyping, MVP</li>
                    <li><strong>AI & Robotics</strong> — Code smart systems, wire sensors, train models</li>
                    <li><strong>Leadership & Public Speaking/Debate</strong> — Communication, debate, stage presence</li>
                    <li><strong>Music & Stage Performing Arts</strong> — Vocal/instrumental ensembles, movement, stagecraft</li>
                    <li><strong>Sports</strong> — Basketball, Soccer: skill development, conditioning, game IQ</li>
                  </ul>
                  <p><em>Students choose one track per session, or stack tracks across sessions to explore multiple areas.</em></p>
                </div>
                <div className="category-links">
                  <a href="/programs" className="btn btn--primary">View Programs</a>
                  <a href="/academics" className="btn btn--secondary">Academic Details</a>
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
                    <li>Confidence & communication through daily presenting and leadership moments</li>
                    <li>Real projects: portfolio pieces for schools and future mentors</li>
                    <li>Global perspective collaborating with international peers</li>
                    <li>Mentorship and next-step readiness skills</li>
                  </ul>
                  <h4>Sample Daily Rhythm:</h4>
                  <p>8:00-12:00 Learning blocks • 1:15-3:00 Project studio • 3:15-5:30 Choice time & electives • 6:00-7:00 Dinner • 7:15-9:30 Evening programs</p>
                </div>
                <div className="category-links">
                  <a href="/activities" className="btn btn--primary">Activities & Trips</a>
                  <a href="/life-activities" className="btn btn--secondary">Student Life</a>
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
                    <li>Dedicated dorm staff with clear conduct guidelines and structured routines</li>
                    <li>Age-appropriate cohorts: Junior (G4–G7) and Senior (G8–G12)</li>
                    <li>Balanced days: academic blocks + project studio + sports/arts + downtime</li>
                    <li>Health & safety: on-site first-aid and established protocols</li>
                    <li>Open communication: regular updates and dedicated parent contact</li>
                  </ul>
                </div>
                <div className="category-links">
                  <a href="/parent-information" className="btn btn--primary">Parent Info</a>
                  <a href="/apply" className="btn btn--secondary">Apply Now</a>
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
                    <li>Who: Grades 4–12 (Junior G4–G7, Senior G8–G12)</li>
                    <li>When: June–August 2026 (multiple residential sessions)</li>
                    <li>Format: Residential boarding on campus</li>
                    <li>6 Tracks: Investment • Entrepreneurship • AI/Robotics • Leadership • Music/Stage • Sports</li>
                    <li>Outcomes: Capstone presentations, portfolio artifacts, certificates, medals & trophies</li>
                  </ul>
                </div>
                <div className="category-links">
                  <a href="/about-us" className="btn btn--primary">About Us</a>
                  <a href="/staff" className="btn btn--secondary">Meet Our Team</a>
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
