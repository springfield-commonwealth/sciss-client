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

      {/* 1. DAILY AND WEEKLY SCHEDULE - Grid Layout */}
      <section className="section">
        <div className="container">
          <div className="program-overview-container">
            <div className="simple-section schedule-section">
              <h2>Daily and Weekly Schedule</h2>
              <p>Each weekday morning, students participate in academic classes of their choice. Here's your week at a glance:</p>

              <div className="schedule-grid">
                <div className="day-card">
                  <h3>Sunday</h3>
                  <p>Arrivals & Welcome - Check-in, campus tour, safety briefing, welcome night</p>
                </div>
                <div className="day-card">
                  <h3>Monday</h3>
                  <p>Core academics + project studio + electives + community events</p>
                </div>
                <div className="day-card">
                  <h3>Tuesday</h3>
                  <p>Core academics + project studio + electives + dorm meetings</p>
                </div>
                <div className="day-card">
                  <h3>Wednesday</h3>
                  <p>Learning Beyond Campus - University visits (Harvard & MIT, Yale & Brown)</p>
                </div>
                <div className="day-card">
                  <h3>Thursday</h3>
                  <p>Build, Refine, Rehearse - Capstone work + mentor office hours</p>
                </div>
                <div className="day-card">
                  <h3>Friday</h3>
                  <p>Showcase & Celebrate - Stock pitches, demos, performances, tournaments</p>
                </div>
                <div className="day-card">
                  <h3>Saturday</h3>
                  <p>Big Excursion & Community Day - Full-day trips + evening social</p>
                </div>
              </div>

              <div className="note-box">
                <strong>Note:</strong> Offerings rotate by session; students can adjust electives before Day three. All activities are fully supervised with a safety-first approach and clear conduct norms. Field trips and activities are subject to weather conditions and availability. Schedule may vary based on field trip days and special events. Weekend activities include cultural excursions and recreational events.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACTIVITY HIGHLIGHTS - Tabbed Interface */}
      <section className="section bg-light">
        <div className="container">
          <div className="program-overview-container">
            <div className="simple-section">
              <h2>Activity Highlights</h2>
              <p>Experience the best in sports, fitness, and recreational activities</p>

              <div className="tabs">
                <button className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => showTab('courses')}>Courses</button>
                <button className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => showTab('activities')}>Activities</button>
                <button className={`tab-btn ${activeTab === 'trips' ? 'active' : ''}`} onClick={() => showTab('trips')}>Trips</button>
              </div>

              <div className={`tab-content ${activeTab === 'courses' ? 'active' : ''}`}>
                <h3>Six Transformative Program Tracks</h3>
                <p>Choose one track per session (students may stack across sessions):</p>
                <div className="course-list">
                  <div className="course-card">
                    <h4>Path to Wall Street (Investment)</h4>
                    <div className="course-badge">Financial fluency • $1M virtual competition</div>
                  </div>
                  <div className="course-card">
                    <h4>Youth Innovation & Entrepreneurship</h4>
                    <div className="course-badge">Idea to pitch • MVP development</div>
                  </div>
                  <div className="course-card">
                    <h4>AI & Robotics</h4>
                    <div className="course-badge">Python programming • Machine learning</div>
                  </div>
                  <div className="course-card">
                    <h4>Leadership & Public Speaking/Debate</h4>
                    <div className="course-badge">Communication • Stage presence</div>
                  </div>
                  <div className="course-card">
                    <h4>Music & Stage Performing Arts</h4>
                    <div className="course-badge">Vocal/instrumental • Live showcase</div>
                  </div>
                  <div className="course-card">
                    <h4>Sports (Basketball, Soccer)</h4>
                    <div className="course-badge">Skill development • Tournament play</div>
                  </div>
                </div>
              </div>

              <div className={`tab-content ${activeTab === 'activities' ? 'active' : ''}`}>
                <h3>Sports & Electives</h3>
                <p>Every afternoon, students select sports and electives that match their interests. Juniors (G4–G7) and Seniors (G8–G12) train separately:</p>
                <div className="course-list">
                  <div className="course-card"><h4>🏀 Basketball (our core)</h4></div>
                  <div className="course-card"><h4>⚽ Soccer</h4></div>
                  <div className="course-card"><h4>🏐 Volleyball</h4></div>
                  <div className="course-card"><h4>🏓 Badminton</h4></div>
                  <div className="course-card"><h4>🏓 Table Tennis</h4></div>
                  <div className="course-card"><h4>🥾 Hiking</h4></div>
                  <div className="course-card"><h4>⛳ Golf</h4></div>
                  <div className="course-card"><h4>💃 Zumba</h4></div>
                  <div className="course-card"><h4>🧘 Yoga</h4></div>
                  <div className="course-card"><h4>⛵ Rowing</h4></div>
                  <div className="course-card"><h4>💪 Gym & Fitness</h4></div>
                  <div className="course-card"><h4>🎨 Arts & Crafts</h4></div>
                </div>
              </div>

              <div className={`tab-content ${activeTab === 'trips' ? 'active' : ''}`}>
                <h3>Signature Excursions</h3>
                <p>Midweek and weekend trips that tie learning to the real world:</p>
                <div className="trip-grid">
                  <div className="trip-item">
                    <div className="trip-icon">🎓</div>
                    <div>Boston (Harvard & MIT) - Full-day university immersion</div>
                  </div>
                  <div className="trip-item">
                    <div className="trip-icon">🎓</div>
                    <div>Yale & Brown University - Official tours + admissions info</div>
                  </div>
                  <div className="trip-item">
                    <div className="trip-icon">🏀</div>
                    <div>Basketball Hall of Fame - Springfield highlights</div>
                  </div>
                  <div className="trip-item">
                    <div className="trip-icon">🏛️</div>
                    <div>Regional Museums & Historic Sites</div>
                  </div>
                  <div className="trip-item">
                    <div className="trip-icon">🎨</div>
                    <div>Cultural Attractions & Landmarks</div>
                  </div>
                  <div className="trip-item">
                    <div className="trip-icon">🎪</div>
                    <div>Theme Parks & Entertainment (by session)</div>
                  </div>
                </div>
              </div>
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
