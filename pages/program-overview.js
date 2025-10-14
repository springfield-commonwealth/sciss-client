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

      {/* Section Navigation */}
      <section className="section section-nav">
        <div className="container">
          <div className="section-nav-content">
            <h3>Jump to Section:</h3>
            <div className="section-nav-links">
              <button
                className="section-nav-link"
                onClick={() => document.getElementById('schedule-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Daily and Weekly Schedule
              </button>
              <button
                className="section-nav-link"
                onClick={() => document.getElementById('activity-highlights')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Activity Highlights
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 1. DAILY AND WEEKLY SCHEDULE - Simplified */}
      <section className="section" id="schedule-section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Daily and Weekly Schedule</h2>
            <p>Each weekday morning, students participate in academic classes of their choice. Here's your week at a glance:</p>
          </div>

          <div className="grid grid--2">
            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🎉</div>
              <h3>Sunday</h3>
              <p className="trip-description-simple">Arrivals & Welcome - Check-in, campus tour, safety briefing, welcome night</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">📚</div>
              <h3>Monday</h3>
              <p className="trip-description-simple">Core academics + project studio + electives + community events</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">💻</div>
              <h3>Tuesday</h3>
              <p className="trip-description-simple">Core academics + project studio + electives + dorm meetings</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🎓</div>
              <h3>Wednesday</h3>
              <p className="trip-description-simple">Learning Beyond Campus - University visits (Harvard & MIT, Yale & Brown)</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🛠️</div>
              <h3>Thursday</h3>
              <p className="trip-description-simple">Build, Refine, Rehearse - Capstone work + mentor office hours</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🎊</div>
              <h3>Friday</h3>
              <p className="trip-description-simple">Showcase & Celebrate - Stock pitches, demos, performances, tournaments</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🚌</div>
              <h3>Saturday</h3>
              <p className="trip-description-simple">Big Excursion & Community Day - Full-day trips + evening social</p>
            </div>
          </div>

          <div className="info-note-box">
            <strong>Note:</strong> Offerings rotate by session; students can adjust electives before Day three. All activities are fully supervised with a safety-first approach and clear conduct norms. Field trips and activities are subject to weather conditions and availability. Schedule may vary based on field trip days and special events. Weekend activities include cultural excursions and recreational events.
          </div>
        </div>
      </section>

      {/* 2. ACTIVITY HIGHLIGHTS - Simplified */}
      <section className="section bg-light" id="activity-highlights">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Activity Highlights</h2>
            <p>Experience the best in sports, fitness, and recreational activities</p>
          </div>

          <div className="tabs">
            <button className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => showTab('courses')}>Courses</button>
            <button className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => showTab('activities')}>Activities</button>
            <button className={`tab-btn ${activeTab === 'trips' ? 'active' : ''}`} onClick={() => showTab('trips')}>Trips</button>
          </div>

          <div className={`tab-content ${activeTab === 'courses' ? 'active' : ''}`}>
            <div className="text--center mb--md">
              <h3>Six Transformative Program Tracks</h3>
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
