import Layout from "@/components/layouts/Layout";
import CampSchedule from "@/components/sections/CampSchedule";
import {
  FeatureGrid,
  FooterCTA,
  SectionHeader
} from "@/components/ui";
import {
  getAllCourses,
  getCourseCategories,
  getCourseStats,
} from "@/lib/content/courses";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";

const Academics = ({
  courses = [],
  _categories = [],
  _stats = {},
  breadcrumbs = [],
}) => {
  // Handle case where courses data might not be available
  const coursesList = Array.isArray(courses) ? courses : [];
  const hasValidCourses = coursesList.length > 0;

  // Prepare academic support features data for FeatureGrid component
  const academicSupportData = [
    {
      icon: "👨‍🏫",
      title: "Faculty Mentorship",
      description:
        "One-on-one guidance from experienced educators and industry professionals throughout your academic journey.",
    },
    {
      icon: "📚",
      title: "Academic Resources",
      description:
        "Access to cutting-edge learning materials, research databases, and technology platforms.",
    },
    {
      icon: "🎨",
      title: "Additional Opportunities",
      description:
        "Access to enrichment programs, advanced learning opportunities, and specialized workshops.",
    },
  ];

  return (
    <Layout
      title="Academic Programs - SCISS"
      description="Explore cutting-edge academic programs at SCISS including Path to Wall Street, AI, Entrepreneurship, and more."
      FooterCTALinkTitle="Activities"
      FooterCTALink="/life-activities"
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
      className="academics-page"
    >
      <div className="padding-top-100"></div>

      {/* Page Header Section */}
      <section className="section page-header-section">
        <div className="container">
          <div className="page-header-content">
            <p className="page-subtitle">Six Transformative Programs</p>
            <h1 className="page-title">Academic Excellence</h1>
            <p className="page-description">Choose from our carefully designed academic programs that combine theoretical knowledge with practical, real-world applications.</p>
          </div>
        </div>
      </section>

      {/* Overview Section - Simple & Bold */}
      <section className="section academics-overview bg-white topBorder">
        <div className="container">
          <SectionHeader
            title="Overview"
            description="Hands-on, structured, and inspiring. Learn in the morning, build in the afternoon, showcase in the evening."
            showDivider
            align="center"
          />

          <div className="academics-intro-grid">
            <div className="academics-intro-card">
              <div className="intro-icon">🎓</div>
              <h3>What This Means for Your Child</h3>
              <ul className="academics-benefits-list">
                <li><strong>Morning classes</strong> in your chosen track</li>
                <li><strong>Daily projects</strong> that build real skills</li>
                <li><strong>University excursions</strong> that inspire</li>
              </ul>
            </div>

            <div className="academics-intro-card">
              <div className="intro-icon">⚙️</div>
              <h3>How Learning Works</h3>
              <ul className="academics-benefits-list">
                <li><strong>Age-matched cohorts:</strong> Junior (G4–G7) & Senior (G8–G12)</li>
                <li><strong>Morning</strong> → classes • <strong>Afternoon</strong> → projects • <strong>Evening</strong> → showcases</li>
                <li><strong>Trips:</strong> Harvard, MIT, Yale & Brown</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs & Quick Facts Side by Side */}
      <section className="section academics-main-content academics-main-responsive custom-spacing">
        <div className="container">
          <div className="academics-main-grid">
            {/* Core Academic Program Tracks - Left Side */}
            <div className="core-programs-column">
              <SectionHeader
                title="Core Academic Program Tracks"
                description="Choose one or stack across sessions"
                showDivider
                align="center"
              />

              <div className="grid grid--1">
                <Link href="/courses/path-to-wall-street" className="simple-track-card">
                  <div className="track-icon-large">💼</div>
                  <h3>Wall Street Investment → G8–12</h3>
                  <p className="track-description-simple">Analyze companies, construct a mock portfolio, and present a stock pitch. Integrated AI tools support research screening, earnings call summarization, and basic backtesting to enhance decision-making.</p>
                </Link>

                <Link href="/courses/youth-innovation-entrepreneurship" className="simple-track-card">
                  <div className="track-icon-large">💡</div>
                  <h3>Youth Entrepreneurship → G6–12</h3>
                  <p className="track-description-simple">From idea to pitch: design thinking, prototyping, go-to-market, and demo day. Teams leverage AI for customer discovery, market analysis, branding assets, and pitch-deck drafting to accelerate MVP building.</p>
                </Link>

                <Link href="/program-overview" className="simple-track-card">
                  <div className="track-icon-large">🎯</div>
                  <h3>Elite Leadership · Art · English · Finance · Sports → G4–12</h3>
                  <p className="track-description-simple">A well-rounded pathway combining communication, creativity, academics, and athletics. AI-assisted practice (speech feedback, writing support, video review) helps students iterate faster and showcase measurable growth.</p>
                </Link>
              </div>
            </div>

            {/* Quick Facts - Right Side */}
            <div className="quick-facts-column">
              <div className="quick-facts-wrapper">
                <SectionHeader
                  title="Quick Facts"
                  description="Everything you need to know about SCISS academics at a glance"
                  showDivider
                  align="center"
                />

                <div className="quick-facts-container">
                  <div className="quick-fact-item" data-category="academics">
                    <div className="fact-icon-circle">
                      <span className="fact-emoji">🎓</span>
                    </div>
                    <div className="fact-details">
                      <span className="fact-label">Grades</span>
                      <span className="fact-value">4–12</span>
                      <span className="fact-meta">Junior & Senior cohorts</span>
                    </div>
                  </div>

                  <div className="quick-fact-item" data-category="format">
                    <div className="fact-icon-circle">
                      <span className="fact-emoji">🏠</span>
                    </div>
                    <div className="fact-details">
                      <span className="fact-label">Format</span>
                      <span className="fact-value">Residential</span>
                      <span className="fact-meta">Full boarding experience</span>
                    </div>
                  </div>

                  <div className="quick-fact-item" data-category="outcome">
                    <div className="fact-icon-circle">
                      <span className="fact-emoji">🏆</span>
                    </div>
                    <div className="fact-details">
                      <span className="fact-label">What You'll Earn</span>
                      <span className="fact-value">Real Portfolio</span>
                      <span className="fact-meta">Artifact + capstone + certificate</span>
                    </div>
                  </div>

                  <div className="quick-fact-item featured-fact" data-category="signature">
                    <div className="featured-badge">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Signature Feature
                    </div>
                    <div className="fact-icon-circle featured-icon">
                      <span className="fact-emoji">💰</span>
                    </div>
                    <div className="fact-details">
                      <span className="fact-label">Stock Trading Challenge</span>
                      <span className="fact-value">$1M Virtual Investment</span>
                      <span className="fact-meta">Competition in the Investment track</span>
                    </div>
                  </div>

                  <div className="quick-fact-item" data-category="bonus">
                    <div className="fact-icon-circle">
                      <span className="fact-emoji">🎖️</span>
                    </div>
                    <div className="fact-details">
                      <span className="fact-label">Bonus Opportunity</span>
                      <span className="fact-value">Competition Prep</span>
                      <span className="fact-meta">Elite business competitions</span>
                    </div>
                  </div>

                  <div className="quick-fact-item" data-category="rewards">
                    <div className="fact-icon-circle">
                      <span className="fact-emoji">💎</span>
                    </div>
                    <div className="fact-details">
                      <span className="fact-label">Rewards</span>
                      <span className="fact-value">Diamond Challenge</span>
                      <span className="fact-meta">Students receive from competition</span>
                    </div>
                  </div>
                </div>

                <div className="quick-facts-footer">
                  <p>📍 <strong>Location:</strong> Springfield, MA | ⏰ <strong>Duration:</strong> 2-week sessions | 🌍 <strong>Students from:</strong> 15+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Key Features - Bold & Visual */}
      <section className="section academics-features academics-features-responsive custom-spacing">
        <div className="container">
          <SectionHeader
            title="What Makes SCISS Different"
            description="From expert faculty to real-world competitions, discover the comprehensive support that turns summer learning into lasting success."
            showDivider
            align="center"
          />

          <div className="academics-features-grid">
            <div className="academics-feature-item">
              <div className="feature-badge">📈</div>
              <h4>Placement & Progression</h4>
              <p>Start at your level, progress across sessions. Advanced students dive deep; beginners build fundamentals with age-appropriate tools.</p>
            </div>

            <div className="academics-feature-item">
              <div className="feature-badge">🏆</div>
              <h4>Practice & Competitions</h4>
              <p>Real competitions: <strong>$1M trading challenge</strong>, startup pitches to mentors, robotics demos, stage performances, sports tournaments.</p>
            </div>

            <div className="academics-feature-item">
              <div className="feature-badge">📜</div>
              <h4>Assessment & Portfolio</h4>
              <p>Every student earns a certificate plus capstone projects for college applications. Awards celebrate achievement.</p>
            </div>

            <div className="academics-feature-item">
              <div className="feature-badge">🎯</div>
              <h4>Alumni Support</h4>
              <p>SCISS/YEFA Certificate, select honors, and <strong>5 hours of free coaching</strong> for business competitions and university applications.</p>
            </div>

            <div className="academics-feature-item">
              <div className="feature-badge">👨‍💼</div>
              <h4>Faculty & Mentors</h4>
              <p>Wall Street pros (10+ years), startup founders, VCs, CEOs, and university professors who teach by doing.</p>
            </div>

            <div className="academics-feature-item">
              <div className="feature-badge">🌟</div>
              <h4>Beyond the Classroom</h4>
              <p>Game nights, talent shows, cultural trips to <strong>Harvard, MIT, Yale & Brown</strong>. Community and confidence-building every day.</p>
            </div>
          </div>

        </div>
      </section>


      {/* Academic Support */}
      <section className="section academics-support-responsive custom-spacing">
        <div className="container">
          <SectionHeader
            title="Comprehensive Academic Support"
            description="Beyond world-class instruction, we provide comprehensive support to ensure every student succeeds"
            showDivider
          />

          <FeatureGrid
            features={academicSupportData}
            columns={3}
            hoverable
            onFeatureClick={(feature, index) => {
              console.log("Clicked support feature:", feature, index);
            }}
          />
        </div>
      </section>


      <CampSchedule />
      <FooterCTA
        link="/courses"
        linkTitle="All Courses"
        ctaTitle="Master Tomorrow's Skills Today"
        ctaDescription="Discover the academic tracks that will shape your future"
      />
    </Layout >
  );
};

export default Academics;

export async function getStaticProps() {
  try {
    const courses = await getAllCourses();
    const categories = await getCourseCategories();
    const stats = await getCourseStats();

    // Generate breadcrumbs for academics overview page
    const breadcrumbs = generateBreadcrumbs([
      { label: "Home", href: "/" },
      { label: "Academics", href: "/academics", active: true },
    ]);

    return {
      props: {
        courses,
        categories,
        stats,
        breadcrumbs,
      },
    };
  } catch (error) {
    console.error("Error loading academics data:", error);
    return {
      props: {
        courses: [],
        categories: [],
        stats: {},
        breadcrumbs: [],
      },
    };
  }
}
