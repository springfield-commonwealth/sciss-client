import Layout from "@/components/layouts/Layout";
import CampSchedule from "@/components/sections/CampSchedule";
import {
  Badge,
  BadgeGroup,
  FeatureGrid,
  FooterCTA,
  SectionHeader,
} from "@/components/ui";
import Carousel from "@/components/ui/Carousel";
import { AcademicsCarouselItems } from "@/constants/academicsContent";
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
      FooterCTALinkTitle="Life & Activities"
      FooterCTALink="/life-activities"
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      <div className="padding-top-100"></div>

      {/* Page Header Section */}
      <section className="section page-header-section">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">Academic Excellence</h1>
            <p className="page-subtitle">Six Transformative Programs</p>
            <p className="page-description">Choose from our carefully designed academic programs that combine theoretical knowledge with practical, real-world applications.</p>
            <div className="page-header-cta">
              <Link href="#programs" className="btn btn--primary">View All Programs</Link>
              <Link href="/apply" className="btn btn--secondary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section - Enhanced Modern Design */}
      <section className="section quick-facts-section">
        <div className="container">
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
      </section>

      {/* Overview Section - Simple & Bold */}
      <section className="section academics-overview">
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

      {/* Core Courses Section - Enhanced Modern Design */}
      <section className="section academic-tracks-section">
        <div className="container">
          <div className="tracks-header">
            <h2 className="tracks-title">Core Academic Program Tracks</h2>
            <p className="tracks-subtitle">Choose one or stack across sessions</p>
          </div>

          <div className="academic-tracks-grid">
            <div className="track-card featured-track">
              <div className="track-number-badge">01</div>
              <div className="track-icon-wrapper">
                <span className="track-emoji">💼</span>
              </div>
              <h3 className="track-title">Path to Wall Street (Investment)</h3>
              <span className="track-category">Investment Track</span>
              <p className="track-description">Learn how markets work, analyze companies, and build a mock portfolio. Students craft a stock pitch, explore risk/reward, and practice ethical decision-making—finishing with a capstone presentation.</p>
              <div className="track-highlights">
                <span className="highlight-tag">💰 Stock Pitch</span>
                <span className="highlight-tag">📊 Portfolio Building</span>
              </div>
            </div>

            <div className="track-card">
              <div className="track-number-badge">02</div>
              <div className="track-icon-wrapper">
                <span className="track-emoji">💡</span>
              </div>
              <h3 className="track-title">Youth Innovation & Entrepreneurship (Teen Start-ups)</h3>
              <span className="track-category">Startup Track</span>
              <p className="track-description">From idea to pitch: design thinking, problem discovery, prototyping, and go-to-market. Teams build an MVP and pitch to a friendly panel of mentors for feedback and awards.</p>
              <div className="track-highlights">
                <span className="highlight-tag">🚀 MVP Development</span>
                <span className="highlight-tag">🎯 Pitch to Mentors</span>
              </div>
            </div>

            <div className="track-card">
              <div className="track-number-badge">03</div>
              <div className="track-icon-wrapper">
                <span className="track-emoji">🤖</span>
              </div>
              <h3 className="track-title">AI & Robotics</h3>
              <span className="track-category">Technology Track</span>
              <p className="track-description">Code smart systems, wire sensors, and train basic models. Younger students start with visual coding and kits; older students dive into Python, automation, and an end-of-session robotics challenge.</p>
              <div className="track-highlights">
                <span className="highlight-tag">🐍 Python Coding</span>
                <span className="highlight-tag">🏆 Robotics Challenge</span>
              </div>
            </div>

            <div className="track-card">
              <div className="track-number-badge">04</div>
              <div className="track-icon-wrapper">
                <span className="track-emoji">🎤</span>
              </div>
              <h3 className="track-title">Leadership & Public Speaking/Debate</h3>
              <span className="track-category">Communication Track</span>
              <p className="track-description">Communication, debate, and stage presence—plus conflict resolution and teamwork. Students practice persuasive speaking daily and deliver a polished final talk.</p>
              <div className="track-highlights">
                <span className="highlight-tag">🗣️ Daily Practice</span>
                <span className="highlight-tag">🎯 Final Presentation</span>
              </div>
            </div>

            <div className="track-card">
              <div className="track-number-badge">05</div>
              <div className="track-icon-wrapper">
                <span className="track-emoji">🎭</span>
              </div>
              <h3 className="track-title">Music & Stage Performing Arts</h3>
              <span className="track-category">Performing Arts Track</span>
              <p className="track-description">Vocal/instrumental ensembles, movement, and stagecraft. Rehearse with mentors, collaborate across roles (sound, lighting, direction), and close with a live showcase.</p>
              <div className="track-highlights">
                <span className="highlight-tag">🎵 Ensembles</span>
                <span className="highlight-tag">🎬 Live Showcase</span>
              </div>
            </div>

            <div className="track-card">
              <div className="track-number-badge">06</div>
              <div className="track-icon-wrapper">
                <span className="track-emoji">🏀</span>
              </div>
              <h3 className="track-title">Sports (e.g., Basketball, Soccer)</h3>
              <span className="track-category">Athletics Track</span>
              <p className="track-description">Skill development, conditioning, and game IQ wrapped in teamwork and sportsmanship. Daily drills, scrimmages, and a fun tournament to finish strong.</p>
              <div className="track-highlights">
                <span className="highlight-tag">⚽ Daily Drills</span>
                <span className="highlight-tag">🏆 Tournament</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Bold & Visual */}
      <section className="section academics-features">
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

      {/* Core Courses Overview */}
      <section className="section bg-light" id="core-courses-carousel">
        <div className="container">
          <SectionHeader
            title="Core Academic Courses"
            subtitle="Choose Your Path to Excellence"
            description="Six specialized tracks designed to match your interests and career aspirations"
            showDivider
            align="center"
          />

          <Carousel items={AcademicsCarouselItems} />
        </div>
      </section>

      {/* Academic Support */}
      <section className="section bg-light">
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

      {/* Individual Course Directory */}
      <section className="section bg-light" id="programs">
        <div className="container">
          <SectionHeader
            title="Explore Our Academic Programs"
            description="Click on any program to view detailed curriculum, learning outcomes, and application information"
            showDivider
          />

          {hasValidCourses ? (
            <div className="course-directory grid grid--2">
              {coursesList.map((course) => (
                <div
                  key={course.id || course.slug}
                  className="course-preview-card"
                >
                  <div className="course-preview-header">
                    <div className="course-preview-image">
                      {course.image && (
                        <img src={course.image} alt={course.title} />
                      )}
                    </div>
                    <div className="course-preview-info">
                      <h3>{course.title}</h3>
                      <div className="course-preview-meta">
                        <BadgeGroup>
                          <Badge variant="primary" size="small">
                            {course.level || "Intermediate"}
                          </Badge>
                          <Badge variant="secondary" size="small">
                            {course.duration || "3 weeks"}
                          </Badge>
                          <Badge variant="info" size="small">
                            {course.session || "Summer"}
                          </Badge>
                        </BadgeGroup>
                      </div>
                    </div>
                  </div>

                  <div className="course-preview-content">
                    <p className="course-preview-description">
                      {course.description}
                    </p>

                    <div className="course-preview-highlights">
                      <h4>Program Highlights</h4>
                      <ul>
                        {course.highlights &&
                          course.highlights.length > 0 &&
                          course.highlights
                            .slice(0, 3)
                            .map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                        {(!course.highlights ||
                          course.highlights.length === 0) && (
                            <li>
                              Comprehensive curriculum designed for academic
                              excellence
                            </li>
                          )}
                        {course.highlights && course.highlights.length > 3 && (
                          <li>...and {course.highlights.length - 3} more</li>
                        )}
                      </ul>
                    </div>

                    <div className="course-preview-actions">
                      <Link
                        href={`/courses/${course.slug}`}
                        className=" btn btn--primary"
                      >
                        View Full Details
                      </Link>
                      <Link href="/apply" className=" btn btn--outline">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="course-directory-loading">
              <p>Loading course information...</p>
              <p>
                If this persists, please visit our{" "}
                <Link href="/apply">
                  <a>application page</a>
                </Link>{" "}
                to learn more.
              </p>
            </div>
          )}

          <div className="text--center mt--lg">
            <p className="course-directory-note">
              Each program includes comprehensive curriculum, expert
              instruction, hands-on projects, and career preparation.
            </p>
            <Link href="/courses" className="btn btn--primary btn--lg">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      <CampSchedule />
      <FooterCTA
        link="/courses"
        linkTitle="All Courses"
        ctaTitle="Master Tomorrow's Skills Today"
        ctaDescription="Discover the academic tracks that will shape your future"
      />
    </Layout>
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
