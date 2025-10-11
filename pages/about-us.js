import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { FeatureGrid, SectionHeader, StatsGrid } from "@/components/ui";
import FooterCTA from "@/components/ui/FooterCTA";
import WeeklySchedule from "@/components/ui/WeeklySchedule";
import { AboutUsStats, AboutUsValues } from "@/constants/aboutUsContent";
import { AboutUsHero } from "@/constants/images";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const FeatureSection = ({ heading, paragraphs }) => (
  <section className="section" id={heading.toLowerCase().replace(/\s+/g, "-")}>
    <div className="container">
      <SectionHeader title={heading} showDivider />
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-4">{p}</p>
      ))}
    </div>
  </section>
);








const TypicalWeekSection = () => (
  <section className="section bg-light" id="typical-week">
    <div className="container">
      <SectionHeader
        title="A Typical Week at SCISS"
        description="While each student enjoys an individually tailored summer school experience at SCISS, our structured schedule ensures they maximize their time with us. The timetable below provides an outline of what to expect during a typical week."
        showDivider
      />

      <div className="typical-week-content">
        <div className="week-overview">
          <div className="overview-badge">
            <span className="badge-text">Residential • Grades 4–12 • Junior (G4–G7) & Senior (G8–G12) cohorts</span>
          </div>
        </div>

        <div className="week-timeline">
          <div className="timeline-item">
            <div className="timeline-icon">📅</div>
            <div className="timeline-content">
              <h3>Sunday — Arrivals & Welcome</h3>
              <p>Students check in to the residence halls, meet their dorm leaders & roommates, and join a campus tour and safety briefing. After dinner, we run icebreakers and a relaxed welcome night so everyone starts Monday confident and connected.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">📚</div>
            <div className="timeline-content">
              <h3>Monday & Tuesday — Settle In, Start Strong</h3>
              <p>Mornings focus on core academics in each student's chosen track (Investment, Entrepreneurship, AI/Robotics, Leadership/English/Stage, or Sports). After lunch, project studios and electives kick in: stock-pitch research, prototyping and testing, coding and robotics lab time, rehearsal and stagecraft, or skills training on the courts and fields. Evenings bring community events—game/movie night, team challenges, and dorm meetings—before quiet hours (earlier for Juniors).</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🌍</div>
            <div className="timeline-content">
              <h3>Wednesday — Learning Beyond Campus</h3>
              <p>Midweek we step off campus for a curated trip that ties learning to the real world—think university visits (Harvard & MIT), an official campus tour and admissions info session at Yale & Brown, or a landmark like the Basketball Hall of Fame. Students are decompressed with a movie night or open studio when we return.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🔨</div>
            <div className="timeline-content">
              <h3>Thursday — Build, Refine, Rehearse</h3>
              <p>With new inspiration and feedback, students double down on capstone work: investment theses and slide decks, MVP demos, robotics challenges, debate speeches, music and theatre scenes, or sports scrimmages. Mentors hold extended office hours; cohorts practice presentations and get peer critique.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🎉</div>
            <div className="timeline-content">
              <h3>Friday — Showcase & Celebrate</h3>
              <p>The week culminates in a capstone milestone or mini-showcase: a stock pitch, a venture demo, a robotics trial, a debate round, scenes and songs on stage, or a friendly tournament. Parents receive highlights in the weekly update, and students enjoy a celebration night.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">🚌</div>
            <div className="timeline-content">
              <h3>Saturday — Big Excursion & Community Day</h3>
              <p>A full-day trip (weather permitting) broadens horizons and bonds the cohort—often a university and/or city day or a regional highlight. Back on campus we host a light evening social and prep for the next academic block.</p>
            </div>
          </div>
        </div>

        <div className="daily-schedule-section">
          <div className="schedule-header">
            <h3>⏰ Daily Rhythm (Mon–Fri)</h3>
            <p>Structured learning with flexibility for individual growth</p>
          </div>
          <div className="schedule-grid">
            <div className="schedule-item">
              <div className="time-badge">8:00–8:55</div>
              <div className="activity">Breakfast & morning meetup</div>
            </div>
            <div className="schedule-item">
              <div className="time-badge">9:00–12:00</div>
              <div className="activity">Learning block: core classes + hands-on workshop</div>
            </div>
            <div className="schedule-item">
              <div className="time-badge">12:00–1:00</div>
              <div className="activity">Lunch & community time</div>
            </div>
            <div className="schedule-item">
              <div className="time-badge">1:15–3:00</div>
              <div className="activity">Project studio (capstone work with coaching)</div>
            </div>
            <div className="schedule-item">
              <div className="time-badge">3:15–5:30</div>
              <div className="activity">Choice time: skills lab, electives & fitness, mentor office hours</div>
            </div>
            <div className="schedule-item">
              <div className="time-badge">6:00–7:00</div>
              <div className="activity">Dinner</div>
            </div>
            <div className="schedule-item">
              <div className="time-badge">7:15–9:30</div>
              <div className="activity">Evening program (speaker, games/movies, showcase prep)</div>
            </div>
            <div className="schedule-item">
              <div className="time-badge">10:00</div>
              <div className="activity">Collect phones & Lights out (Junior / Senior)</div>
            </div>
          </div>
        </div>

        <div className="weekly-schedule-section">
          <div className="schedule-header">
            <h3>📊 SCISS Weekly Overview</h3>
            <p className="schedule-note">Sample overview only — daily times may vary by session.</p>
          </div>
          <WeeklySchedule />
        </div>

      </div>
    </div>
  </section>
);


const AboutUs = ({ breadcrumbs = [] }) => {
  // Prepare stats data for StatsGrid component
  const statsData = AboutUsStats.map((stat) => ({
    number: stat.number,
    label: stat.label,
    icon: stat.icon,
  }));

  // Prepare values data for FeatureGrid component
  const valuesData = AboutUsValues.map((value) => ({
    icon: value.icon,
    title: value.title,
    description: value.description,
  }));

  return (
    <Layout
      title="About Us - SCISS"
      description="Learn about SCISS Summer School's mission, values, and commitment to excellence in international education."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <HeroSection
        title="About SCISS"
        subtitle="Our Story & Mission"
        description="Discover the vision, values, and passionate educators who make SCISS a transformative experience for students from around the world."
        backgroundImage={AboutUsHero}
        ctaText="Meet Our Team"
        ctaLink="/staff"
        secondaryCtaText="Our Programs"
        secondaryCtaLink="/program-overview"
      />

      {/* Mission & Vision */}
      <section className="section" id="mission">
        <div className="container">
          <div className="grid grid--2">
            <div className="mission-section">
              <SectionHeader
                title="Our Mission"
                description="At Springfield Commonwealth International Summer School, our mission is to foster a dynamic learning environment where curiosity thrives, friendships flourish, and personal growth is nurtured. We believe in providing students with transformative experiences that prepare them for future academic and professional success while building global perspectives and lifelong connections."
                align="left"
                showDivider
              />

              <div className="mission-highlights">
                <FeatureGrid
                  features={[
                    {
                      icon: "🎓",
                      title: "Academic Excellence",
                      description:
                        "Providing world-class education with cutting-edge curriculum and expert instruction",
                    },
                    {
                      icon: "🌟",
                      title: "Personal Development",
                      description:
                        "Nurturing individual growth, confidence, and leadership skills in every student",
                    },
                    {
                      icon: "🌍",
                      title: "Global Community",
                      description:
                        "Building bridges between cultures and creating lasting international friendships",
                    },
                  ]}
                  columns={1}
                  hoverable
                />
              </div>
            </div>

            <div className="vision-section">
              <SectionHeader
                title="Our Vision"
                description="To be the world's leading international summer school, known for academic innovation, cultural exchange, and transformative student experiences that shape future global leaders and change-makers."
                align="left"
                showDivider
              />

              <StatsGrid
                stats={statsData}
                columns={2}
                hoverable
                onStatClick={(stat, index) => {
                  console.log("Clicked stat:", stat, index);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About SCISS Section - Where Big Ideas Meet Practical Doing */}
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

      {/* Values */}
      <section className="section bg-light" id="values">
        <div className="container">
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide everything we do at SCISS"
            showDivider
          />

          <FeatureGrid
            features={valuesData}
            columns={3}
            hoverable
            onFeatureClick={(feature, index) => {
              console.log("Clicked value:", feature, index);
            }}
          />
        </div>
      </section>

      <TypicalWeekSection />

      <FooterCTA linkTitle="Academic Programs" link="/academics" />
    </Layout>
  );
};

export default AboutUs;

export async function getStaticProps() {
  // Generate breadcrumbs for about us page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
