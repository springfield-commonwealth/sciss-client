import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { FeatureGrid, SectionHeader, StatsGrid } from "@/components/ui";
import FooterCTA from "@/components/ui/FooterCTA";
import WeeklySchedule from "@/components/ui/WeeklySchedule";
import { AboutUsAlsoIncluded, AboutUsDifferentiators, AboutUsIntro, AboutUsPrograms, AboutUsStats, AboutUsTeam, AboutUsValueProps, AboutUsValues } from "@/constants/aboutUsContent";
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

const AlsoIncludedSection = ({ data }) => (
  <section className="section" id="also-included">
    <div className="container">
      <SectionHeader title="Also Included" showDivider />
      <div className="also-included-content">
        <div className="included-items">
          <div className="included-item">
            <div className="included-icon">🏠</div>
            <div className="included-text">
              <h4>Dorm Housing</h4>
              <p>Typically 4-5 per room</p>
            </div>
          </div>
          <div className="included-item">
            <div className="included-icon">🛡️</div>
            <div className="included-text">
              <h4>24-Hour Supervision</h4>
              <p>Round-the-clock care and support</p>
            </div>
          </div>
          <div className="included-item">
            <div className="included-icon">🍽️</div>
            <div className="included-text">
              <h4>All Meals</h4>
              <p>Nutritious breakfast, lunch, and dinner</p>
            </div>
          </div>
          <div className="included-item">
            <div className="included-icon">🎉</div>
            <div className="included-text">
              <h4>Evening & Weekend Activities</h4>
              <p>Engaging social and recreational programs</p>
            </div>
          </div>
          <div className="included-item">
            <div className="included-icon">🗺️</div>
            <div className="included-text">
              <h4>Excursions</h4>
              <p>Educational trips and cultural experiences</p>
            </div>
          </div>
          <div className="included-item">
            <div className="included-icon">📜</div>
            <div className="included-text">
              <h4>Course Completion Certificate</h4>
              <p>Official recognition of achievement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyScissSection = ({ data }) => (
  <section className="section bg-light" id="why-sciss">
    <div className="container">
      <SectionHeader
        title={data.title}
        description={data.subtitle}
        showDivider
      />
      <p className="text-lg mb-6">{data.description}</p>
      <div className="grid grid--3">
        {data.highlights.map((highlight, i) => (
          <div key={i} className="highlight-card">
            <div className="highlight-icon">✓</div>
            <p>{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DifferentiatorsSection = ({ data }) => (
  <section className="section" id="differentiators">
    <div className="container">
      <SectionHeader title={data.title} showDivider />
      <div className="grid grid--3">
        {data.items.map((item, i) => (
          <div key={i} className="differentiator-card">
            <div className="differentiator-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ValuePropsSection = ({ data }) => (
  <section className="section bg-light" id="value-props">
    <div className="container">
      <SectionHeader title={data.title} showDivider />
      <div className="value-props-layout">
        {data.items.map((item, i) => (
          <div key={i} className={`value-item ${i % 2 === 0 ? 'value-item--left' : 'value-item--right'}`}>
            <div className="value-item-content">
              <div className="value-icon-wrapper">
                <div className="value-icon">{item.icon}</div>
              </div>
              <div className="value-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection = ({ data }) => (
  <section className="section" id="team">
    <div className="container">
      <SectionHeader
        title={data.title}
        description={data.subtitle}
        showDivider
      />
      <div className="team-layout">
        {data.items.map((item, i) => (
          <div key={i} className="team-item">
            <div className="team-item-content">
              <div className="team-icon-section">
                <div className="team-icon">{item.icon}</div>
                <div className="team-icon-bg"></div>
              </div>
              <div className="team-text-section">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="team-note">
        <p>{data.note}</p>
      </div>
    </div>
  </section>
);

const ProgramsSection = ({ data }) => (
  <section className="section bg-light" id="programs">
    <div className="container">
      <SectionHeader
        title={data.title}
        description={data.subtitle}
        showDivider
      />
      <div className="programs-grid">
        {data.tracks.map((track, i) => (
          <div key={i} className="program-card">
            <div className="program-icon">{track.icon}</div>
            <h3>{track.title}</h3>
            <p>{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ActivitiesTripsSection = () => (
  <section className="section" id="activities-trips">
    <div className="container">
      <SectionHeader
        title="Activities & Trips"
        description="Community every night, horizons every week."
        showDivider
      />

      <div className="activities-content">
        <p className="activities-intro mb-6">
          Evenings feature relaxed campus events—movie nights, competitive game nights, themed parties, cultural nights, campfires under the stars, and our always-popular student-run talent show—plus team-building challenges like scavenger hunts, trivia, and friendly tournaments.
        </p>

        <div className="trips-grid">
          <div className="trip-section">
            <h3>🎓 Signature Trips</h3>
            <div className="trip-items">
              <div className="trip-item">
                <h4>Boston (Full Day)</h4>
                <p>Harvard & MIT campus tours plus city exploration.</p>
              </div>
              <div className="trip-item">
                <h4>Yale & Brown University</h4>
                <p>Official tour-guide campus visits with admissions info sessions.</p>
              </div>
              <div className="trip-item">
                <h4>Springfield Highlights</h4>
                <p>The Naismith Basketball Hall of Fame and regional museums/historic sites.</p>
              </div>
              <div className="trip-item">
                <h4>Other destinations by session</h4>
                <p>Local attractions (e.g., museums, theme parks) subject to schedule.</p>
              </div>
            </div>
          </div>

          <div className="logistics-section">
            <h3>🛡️ Logistics & Safety</h3>
            <p>All trips and on-campus activities are fully supervised by SCISS staff. Transportation, tickets, and meals on official excursions are organized by the program so students can focus on learning and fun. The exact itinerary varies by session and weather; families receive the final schedule before arrival.</p>
          </div>
        </div>
      </div>
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
        <div className="week-overview mb-6">
          <p className="week-subtitle">
            <strong>Residential • Grades 4–12 • Junior (G4–G7) & Senior (G8–G12) cohorts</strong>
          </p>
        </div>

        <div className="week-schedule">
          <div className="day-schedule">
            <h3>📅 Sunday — Arrivals & Welcome</h3>
            <p>Students check in to the residence halls, meet their dorm leaders & roommates, and join a campus tour and safety briefing. After dinner, we run icebreakers and a relaxed welcome night so everyone starts Monday confident and connected.</p>
          </div>

          <div className="day-schedule">
            <h3>📚 Monday & Tuesday — Settle In, Start Strong</h3>
            <p>Mornings focus on core academics in each student's chosen track (Investment, Entrepreneurship, AI/Robotics, Leadership/English/Stage, or Sports). After lunch, project studios and electives kick in: stock-pitch research, prototyping and testing, coding and robotics lab time, rehearsal and stagecraft, or skills training on the courts and fields. Evenings bring community events—game/movie night, team challenges, and dorm meetings—before quiet hours (earlier for Juniors).</p>
          </div>

          <div className="day-schedule">
            <h3>🌍 Wednesday — Learning Beyond Campus</h3>
            <p>Midweek we step off campus for a curated trip that ties learning to the real world—think university visits (Harvard & MIT), an official campus tour and admissions info session at Yale & Brown, or a landmark like the Basketball Hall of Fame. Students are decompressed with a movie night or open studio when we return.</p>
          </div>

          <div className="day-schedule">
            <h3>🔨 Thursday — Build, Refine, Rehearse</h3>
            <p>With new inspiration and feedback, students double down on capstone work: investment theses and slide decks, MVP demos, robotics challenges, debate speeches, music and theatre scenes, or sports scrimmages. Mentors hold extended office hours; cohorts practice presentations and get peer critique.</p>
          </div>

          <div className="day-schedule">
            <h3>🎉 Friday — Showcase & Celebrate</h3>
            <p>The week culminates in a capstone milestone or mini-showcase: a stock pitch, a venture demo, a robotics trial, a debate round, scenes and songs on stage, or a friendly tournament. Parents receive highlights in the weekly update, and students enjoy a celebration night.</p>
          </div>

          <div className="day-schedule">
            <h3>🚌 Saturday — Big Excursion & Community Day</h3>
            <p>A full-day trip (weather permitting) broadens horizons and bonds the cohort—often a university and/or city day or a regional highlight. Back on campus we host a light evening social and prep for the next academic block.</p>
          </div>
        </div>

        <div className="daily-rhythm mb-6">
          <h3>⏰ Daily Rhythm (Mon–Fri)</h3>
          <div className="rhythm-grid">
            <div className="rhythm-item">
              <strong>8:00–8:55</strong> Breakfast & morning meetup
            </div>
            <div className="rhythm-item">
              <strong>9:00–12:00</strong> Learning block: core classes + hands-on workshop
            </div>
            <div className="rhythm-item">
              <strong>12:00–1:00</strong> Lunch & community time
            </div>
            <div className="rhythm-item">
              <strong>1:15–3:00</strong> Project studio (capstone work with coaching)
            </div>
            <div className="rhythm-item">
              <strong>3:15–5:30</strong> Choice time: skills lab, electives & fitness, mentor office hours
            </div>
            <div className="rhythm-item">
              <strong>6:00–7:00</strong> Dinner
            </div>
            <div className="rhythm-item">
              <strong>7:15–9:30</strong> Evening program (speaker, games/movies, showcase prep)
            </div>
            <div className="rhythm-item">
              <strong>10:00</strong> Collect phones & Lights out (Junior / Senior)
            </div>
          </div>
        </div>

        <div className="weekly-schedule-section">
          <h3>📊 SCISS Weekly Overview</h3>
          <p className="schedule-note">Sample overview only — daily times may vary by session.</p>
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

      {/* Redesigned Sections */}
      <WhyScissSection data={AboutUsIntro} />
      <DifferentiatorsSection data={AboutUsDifferentiators} />
      <ValuePropsSection data={AboutUsValueProps} />
      <TeamSection data={AboutUsTeam} />
      <ProgramsSection data={AboutUsPrograms} />

      <AlsoIncludedSection data={AboutUsAlsoIncluded} />

      <ActivitiesTripsSection />
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
