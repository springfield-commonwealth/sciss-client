import Layout from "@/components/layouts/Layout";
import Carousel from "@/components/ui/Carousel";
import FooterCTA from "@/components/ui/FooterCTA";
import WeeklySchedule from "@/components/ui/WeeklySchedule";
import { ProgramOverviewCoreCourses } from "@/constants/programOverviewContent";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const ProgramOverview = ({ breadcrumbs = [] }) => {

  return (
    <Layout
      title="Program Overview - SCISS"
      description="Discover the comprehensive academic programs, daily structure, and unique opportunities at SCISS Summer School."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Page Header Section */}
      <section className="section page-header-section">
        <div className="container">
          <div className="page-header-content">
            <p className="page-subtitle">Excellence in Education</p>
            <h1 className="page-title">Program Overview</h1>
            <p className="page-description">A comprehensive overview of our academic programs, daily structure, and what makes SCISS a transformative summer experience.</p>
          </div>
        </div>
      </section>

      {/* 1. DAILY AND WEEKLY SCHEDULE - Combined Header */}
      <section className="section">
        <div className="container">
          <div className="program-overview-container">
            <div className="simple-section schedule-section">
              <h2>Daily and Weekly Schedule</h2>
              <p>Each weekday morning, students participate in academic classes of their choice. Here's your week at a glance:</p>
            </div>
          </div>
          <WeeklySchedule />
        </div>
      </section>

      {/* Activity Highlights - Right After Weekly Schedule */}
      <section className="section bg-light">
        <div className="container">
          <div className="program-overview-container">
            <div className="simple-section">
              <h2>Activity Highlights</h2>
              <p>Experience the best in sports, fitness, and recreational activities</p>
            </div>
          </div>
          <Carousel items={ProgramOverviewCoreCourses} />
        </div>
      </section>

      {/* 2. MORNING ACADEMIC COURSES OFFERED - Matching Brochure Structure */}
      <section className="section">
        <div className="container">
          <div className="program-overview-container">
            <div className="simple-section courses-section">
              <h2>Morning Academic Courses Offered:</h2>
              <ul className="simple-list">
                <li>Path to Wall St. & Impact Investment (8th+ grade, Session 1 ONLY)</li>
                <li>Artificial Intelligence (Pre-Calc+, Session 1 ONLY)</li>
                <li>Youth Innovation and Entrepreneurship (6th+ grade, Session 2 ONLY)</li>
                <li>Public Speaking and Debate (4th+ grade, Session 2 ONLY)</li>
                <li>English and Creative Writing (Beginner to Intensive, 4th+ grade)</li>
                <li>SAT/ACT/TOEFL Test Preparation (9-12th grade)</li>
                <li>Visual/Creative Art (All Ages)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ELECTIVE SPORTS - Matching Brochure Structure */}
      <section className="section bg-light">
        <div className="container">
          <div className="program-overview-container">
            <div className="simple-section sports-section">
              <h2>Elective Sports</h2>
              <p>In the afternoon, students choose elective sports to focus on:</p>
              <ul className="simple-list">
                <li>Rowing</li>
                <li>Basketball</li>
                <li>Golf</li>
                <li>Fencing</li>
                <li>Soccer</li>
                <li>Fitness Training</li>
                <li className="highlighted">Archery</li>
                <li className="highlighted">Hip-hop Dancing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FIELD TRIPS - Matching Brochure Structure */}
      <section className="section">
        <div className="container">
          <div className="program-overview-container">
            <div className="simple-section trips-section">
              <h2>Field Trips</h2>
              <p>Each Wednesday and weekend, students participate in engaging field trips to various destinations, combining learning with fun outside the classroom, including:</p>
              <ul className="simple-list">
                <li>Boston trip (Harvard and MIT Visit)</li>
                <li>Yale University Visit</li>
                <li>Wood Museum of Springfield History</li>
                <li>Dr. Seuss National Memorial Sculpture Garden</li>
                <li>Michele and Donald D'Amour Museum of Fine Arts</li>
                <li>George Walter Vincent Smith Art Museum</li>
                <li>Smith College Museum of Art</li>
                <li>Springfield Armory National Historic Site</li>
                <li>Basketball Hall of Fame</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA linkTitle="Apply Now" link="/apply" />
    </Layout>
  );
};

export default ProgramOverview;

export async function getStaticProps() {
  // Generate breadcrumbs for program overview page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Program Overview", href: "/program-overview", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
