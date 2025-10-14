import Layout from "@/components/layouts/Layout";
import FooterCTA from "@/components/ui/FooterCTA";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import { useState } from "react";

const ProgramOverview = ({ breadcrumbs = [] }) => {
  const [activeTab, setActiveTab] = useState('courses');

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Layout
      title="Program Overview - SCISS"
      description="Discover the comprehensive academic programs, daily structure, and unique opportunities at SCISS Summer School."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      <div className="padding-top-100"></div>
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

      {/* Program Highlights - Simplified */}
      <section className="section bg-light" id="activity-highlights">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Our Programs Highlights</h2>
            <p>Experience the best in sports, fitness, and recreational activities</p>
          </div>

          <div className="tabs">
            <button className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => showTab('courses')}>Courses</button>
            <button className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => showTab('activities')}>Activities</button>
            <button className={`tab-btn ${activeTab === 'trips' ? 'active' : ''}`} onClick={() => showTab('trips')}>Trips</button>
          </div>

          <div className={`tab-content ${activeTab === 'courses' ? 'active' : ''}`}>
            <div className="text--center mb--md">
              <h3>Six Transformative Course Tracks</h3>
              <p>Choose one track per session (students may stack across sessions)</p>
            </div>
            <div className="grid grid--2">
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">💼</div>
                <h3>Path to Wall Street (Investment)</h3>
                <p className="trip-description-simple">Financial fluency • $1M virtual competition</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">💡</div>
                <h3>Youth Innovation & Entrepreneurship</h3>
                <p className="trip-description-simple">Idea to pitch • MVP development</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🤖</div>
                <h3>AI & Robotics</h3>
                <p className="trip-description-simple">Python programming • Machine learning</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🎤</div>
                <h3>Leadership & Public Speaking/Debate</h3>
                <p className="trip-description-simple">Communication • Stage presence</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🎭</div>
                <h3>Music & Stage Performing Arts</h3>
                <p className="trip-description-simple">Vocal/instrumental • Live showcase</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🏀</div>
                <h3>Sports (Basketball, Soccer)</h3>
                <p className="trip-description-simple">Skill development • Tournament play</p>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'activities' ? 'active' : ''}`}>
            <div className="text--center mb--md">
              <h3>Sports & Electives</h3>
              <p>Every afternoon, students select sports and electives that match their interests. Juniors (G4–G7) and Seniors (G8–G12) train separately</p>
            </div>
            <div className="grid grid--3">
              <div className="simple-activity-tag">🏀 Basketball (our core)</div>
              <div className="simple-activity-tag">⚽ Soccer</div>
              <div className="simple-activity-tag">🏐 Volleyball</div>
              <div className="simple-activity-tag">🏓 Badminton</div>
              <div className="simple-activity-tag">🏓 Table Tennis</div>
              <div className="simple-activity-tag">🥾 Hiking</div>
              <div className="simple-activity-tag">⛳ Golf</div>
              <div className="simple-activity-tag">💃 Zumba</div>
              <div className="simple-activity-tag">🧘 Yoga</div>
              <div className="simple-activity-tag">⛵ Rowing</div>
              <div className="simple-activity-tag">💪 Gym & Fitness</div>
              <div className="simple-activity-tag">🎨 Arts & Crafts</div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'trips' ? 'active' : ''}`}>
            <div className="text--center mb--md">
              <h3>Signature Excursions</h3>
              <p>Midweek and weekend trips that tie learning to the real world</p>
            </div>
            <div className="grid grid--2">
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🎓</div>
                <h3>Boston (Harvard & MIT)</h3>
                <p className="trip-description-simple">Full-day university immersion</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🎓</div>
                <h3>Yale & Brown University</h3>
                <p className="trip-description-simple">Official tours + admissions info</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🏀</div>
                <h3>Basketball Hall of Fame</h3>
                <p className="trip-description-simple">Springfield highlights</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🏛️</div>
                <h3>Regional Museums</h3>
                <p className="trip-description-simple">Historic Sites</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🎨</div>
                <h3>Cultural Attractions</h3>
                <p className="trip-description-simple">Landmarks</p>
              </div>
              <div className="cultural-trip-card-simple">
                <div className="trip-icon-large">🎪</div>
                <h3>Theme Parks</h3>
                <p className="trip-description-simple">Entertainment (by session)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterCTA linkTitle="Typical Weekly Schedule" link="/typical-week" />
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
