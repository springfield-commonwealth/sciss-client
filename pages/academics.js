import Layout from "@/components/layouts/Layout";
import CampSchedule from "@/components/sections/CampSchedule";
import FacultySection from "@/components/sections/FacultySection";
import HeroSection from "@/components/sections/HeroSection";
import Carousel from "@/components/ui/Carousel";
import GalleryCard from "@/components/ui/GalleryCard";
import {
  AcademicsCarouselItems,
  AcademicsElectiveCarouselItems,
  AcademicsInstructorsHighlights,
  AcademicsPrograms,
} from "@/constants/academicsContent";
import { AcademicsHero } from "@/constants/images";

const Academics = () => {
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
            <h2>Academic Support & Resources</h2>
            <p>Comprehensive support to ensure your academic success</p>
          </div>

          <div className="grid grid-3">
            <div className="support-card">
              <div className="support-icon icon-tech"></div>
              <h4>Academic Resources</h4>
              <p>
                All course materials, academic tuition up to 30 hours, and
                specialized learning resources for your chosen program.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-innovation"></div>
              <h4>Collaborative Learning</h4>
              <p>
                Team-based projects, group activities, and peer collaboration in
                a dynamic learning environment.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-business"></div>
              <h4>Expert Instruction</h4>
              <p>
                Passionate instructors who are experts in their fields providing
                hands-on guidance and mentoring.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-tech"></div>
              <h4>Competition Resources</h4>
              <p>
                Access to competition preparation and opportunities to
                participate in prestigious academic competitions.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-language"></div>
              <h4>Progress Assessment</h4>
              <p>
                Course completion certificates and recognition for academic
                achievements and participation.
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

          <div className="grid grid-2">
            <GalleryCard
              key="1"
              image="/images/featured/core.png"
              title="Core Courses"
              link="#core-courses-carousel"
            />
            <GalleryCard
              key="2"
              image="/images/featured/elective.png"
              title="Electives"
              link="#electives-carousel"
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

      {/* Electives Overview */}
      <section className="section" id="electives-carousel">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Electives</h2>
            <p>
              Combine academic excellence with physical well-being for holistic
              student growth.
            </p>
          </div>

          <Carousel items={AcademicsElectiveCarouselItems} />
        </div>
      </section>

      {/* Program Details */}
      <section id="programs" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Program Details</h2>
            <p>
              Comprehensive curriculum designed by industry experts and academic
              leaders
            </p>
          </div>

          <div className="programs-list">
            {AcademicsPrograms.map((program, index) => (
              <div key={index} className="program-detail-card">
                <div className="program-header">
                  <div className="program-title-section">
                    <h3>{program.title}</h3>
                    <div className="program-badges">
                      <span className="level-badge">{program.level}</span>
                      <span className="duration-badge">{program.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="program-content">
                  <div className="program-description">
                    <p>{program.description}</p>
                    {program.prerequisites && (
                      <div className="prerequisites">
                        <strong>Prerequisites:</strong> {program.prerequisites}
                      </div>
                    )}
                  </div>

                  <div className="program-details-grid">
                    <div className="curriculum-section">
                      <h4>Curriculum</h4>
                      <ul className="curriculum-list">
                        {program.curriculum.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="outcomes-section">
                      <h4>Learning Outcomes</h4>
                      <ul className="outcomes-list">
                        {program.outcomes.map((outcome, idx) => (
                          <li key={idx}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Schedule Section */}
      <section className="section bg-light" id="schedule">
        <div className="container">
          <CampSchedule />
        </div>
      </section>

      {/* instructors Section */}
      <section id="faculty">
        <FacultySection
          title="Meet Our Instructors"
          desc="Learn from industry professionals and academic experts"
          faculty={AcademicsInstructorsHighlights}
          gridsize="3"
        />
      </section>
    </Layout>
  );
};

export default Academics;
