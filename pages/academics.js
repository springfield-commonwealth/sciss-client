import Layout from "@/components/layouts/Layout";
import CampSchedule from "@/components/sections/CampSchedule";
import HeroSection from "@/components/sections/HeroSection";
import Carousel from "@/components/ui/Carousel";
import FooterCTA from "@/components/ui/FooterCTA";
import GalleryCard from "@/components/ui/GalleryCard";
import { AcademicsCarouselItems } from "@/constants/academicsContent";
import { AcademicsHero } from "@/constants/images";
import {
  getAllCourses,
  getCourseCategories,
  getCourseStats,
} from "@/lib/content/courses";
import Link from "next/link";

const Academics = ({ courses = [], _categories = [], _stats = {} }) => {
  // Handle case where courses data might not be available
  const coursesList = Array.isArray(courses) ? courses : [];
  const hasValidCourses = coursesList.length > 0;

  return (
    <Layout
      title="Academic Programs - SCISS"
      description="Explore cutting-edge academic programs at SCISS including Path to Wall Street, AI, Entrepreneurship, and more."
      FooterCTALinkTitle="Life & Activities"
      FooterCTALink="/life-activities"
    >
      {/* Hero Section */}
      <HeroSection
        title="Academic Excellence"
        subtitle="Six Transformative Programs"
        description="Choose from our carefully designed academic programs that combine theoretical knowledge with practical, real-world applications."
        backgroundImage={AcademicsHero}
        ctaText="View All Programs"
        ctaLink="#programs"
        secondaryCtaText="Apply Now"
        secondaryCtaLink="/tuitions-and-fees"
      />

      {/* Academic Support */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Comprehensive Academic Support</h2>
            <p>
              Beyond world-class instruction, we provide comprehensive support
              to ensure every student succeeds
            </p>
          </div>

          <div className="grid grid-3 support-grid">
            <div className="support-card">
              <div className="support-icon icon-mentorship"></div>
              <h4>Faculty Mentorship</h4>
              <p>
                One-on-one guidance from experienced educators and industry
                professionals throughout your academic journey.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-resources"></div>
              <h4>Academic Resources</h4>
              <p>
                Access to cutting-edge learning materials, research databases,
                and technology platforms.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-arts"></div>
              <h4>Additional Opportunities</h4>
              <p>
                Access to enrichment programs, advanced learning opportunities,
                and specialized workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Carousel */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Master Tomorrow's Skills Today</h2>
            <p>Discover the academic tracks that will shape your future</p>
          </div>

          <div className="grid grid-1">
            <GalleryCard
              key="1"
              image="/images/featured/core.png"
              title="Core Courses"
              link="#core-courses-carousel"
            />
          </div>
        </div>
      </section>

      {/* Core Courses Overview */}
      <section className="section bg-light" id="core-courses-carousel">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Core Academic Courses</h2>
            <h4>- Choose Your Path to Excellence</h4>
            <p>
              Six specialized tracks designed to match your interests and career
              aspirations
            </p>
          </div>

          <Carousel items={AcademicsCarouselItems} />
        </div>
      </section>

      {/* Individual Course Directory */}
      <section className="section bg-light" id="programs">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Explore Our Academic Programs</h2>
            <p>
              Click on any program to view detailed curriculum, learning
              outcomes, and application information
            </p>
          </div>

          {hasValidCourses ? (
            <div className="course-directory grid">
              {coursesList.map((course) => (
                <div key={course.id} className="course-preview-card">
                  <div className="course-preview-header">
                    <div className="course-preview-image">
                      {course.image && (
                        <img src={course.image} alt={course.title} />
                      )}
                    </div>
                    <div className="course-preview-info">
                      <h3>{course.title}</h3>
                      <div className="course-preview-meta">
                        <span className="level-badge">{course.level}</span>
                        <span className="duration-badge">
                          {course.duration}
                        </span>
                        <span className="session-badge">{course.session}</span>
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
                          course.highlights
                            .slice(0, 3)
                            .map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                        {course.highlights && course.highlights.length > 3 && (
                          <li>...and {course.highlights.length - 3} more</li>
                        )}
                      </ul>
                    </div>

                    <div className="course-preview-actions">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="btn btn-primary"
                      >
                        View Full Details
                      </Link>
                      <Link href="/apply" className="btn btn-outline">
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

          <div className="text-center mt-5">
            <p className="course-directory-note">
              Each program includes comprehensive curriculum, expert
              instruction, and hands-on learning experiences. Click "View Full
              Details" to explore prerequisites, learning outcomes, and
              application requirements.
            </p>
            <div className="courses-directory-cta">
              <Link href="/courses" className="btn btn-primary btn-large">
                View Complete Course Directory
              </Link>
              <p className="cta-note">
                Browse all courses with advanced search, filtering, and detailed
                information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Schedule Section */}
      <CampSchedule />

      {/* Faculty Section */}
      <section id="faculty">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Meet Our Instructors</h2>
            <p>
              Learn from industry professionals and academic experts who bring
              real-world experience to SCISS
            </p>
          </div>

          <div className="faculty-preview-grid">
            <div className="faculty-preview-card">
              <div className="faculty-preview-image">
                <img src="/images/instructors/raymond.png" alt="Raymond" />
              </div>
              <div className="faculty-preview-info">
                <h4>Raymond</h4>
                <p className="faculty-preview-title">Private Equity Expert</p>
                <p className="faculty-preview-description">
                  Private Equity Manager with Tati NY, Inc and former Portfolio
                  Manager bringing Wall Street expertise.
                </p>
                <Link
                  href="/staff/raymond-portfolio-manager"
                  className="faculty-preview-link"
                >
                  View Full Profile →
                </Link>
              </div>
            </div>

            <div className="faculty-preview-card">
              <div className="faculty-preview-image">
                <img src="/images/instructors/frank.jpg" alt="Frank" />
              </div>
              <div className="faculty-preview-info">
                <h4>Frank</h4>
                <p className="faculty-preview-title">Wharton Alumnus & CEO</p>
                <p className="faculty-preview-description">
                  Wharton-educated CEO with extensive alternative investment and
                  Wall Street experience.
                </p>
                <Link
                  href="/staff/frank-wharton-founder"
                  className="faculty-preview-link"
                >
                  View Full Profile →
                </Link>
              </div>
            </div>

            <div className="faculty-preview-card">
              <div className="faculty-preview-image">
                <img src="/images/instructors/jonathan.png" alt="Jonathan" />
              </div>
              <div className="faculty-preview-info">
                <h4>Jonathan</h4>
                <p className="faculty-preview-title">AI Innovation Expert</p>
                <p className="faculty-preview-description">
                  NYU and Johns Hopkins alumnus, founder of YEFA AI Innovation
                  bringing cutting-edge AI knowledge.
                </p>
                <Link
                  href="/staff/jonathan-ai-innovator"
                  className="faculty-preview-link"
                >
                  View Full Profile →
                </Link>
              </div>
            </div>
          </div>

          <div className="faculty-section-cta">
            <Link href="/staff" className="btn btn-primary">
              View All Faculty & Staff
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA linkTitle="Life & Activities" link="/activities" />
    </Layout>
  );
};

// Static Site Generation - Using Epic 5 Content Architecture
export async function getStaticProps() {
  try {
    // Use Epic 5 content system like activities, trips, and staff
    const courses = getAllCourses();
    const categories = getCourseCategories();
    const stats = getCourseStats();

    return {
      props: {
        courses,
        categories,
        stats,
      },
    };
  } catch (error) {
    console.error("Error loading courses data:", error);
    return {
      props: {
        courses: [],
        categories: [],
        stats: { totalCourses: 0, coreCoursesCount: 0, electivesCount: 0 },
      },
    };
  }
}

export default Academics;
