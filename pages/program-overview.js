import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { FeatureGrid, SectionHeader } from "@/components/ui";
import Carousel from "@/components/ui/Carousel";
import FooterCTA from "@/components/ui/FooterCTA";
import WeeklySchedule from "@/components/ui/WeeklySchedule";
import { ProgramOverviewHero } from "@/constants/images";
import { ProgramOverviewCoreCourses } from "@/constants/programOverviewContent";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const ProgramOverview = ({ breadcrumbs = [] }) => {
  // Prepare unique features data for FeatureGrid component
  const uniqueFeaturesData = [
    {
      icon: "👥",
      title: "Small Class Sizes",
      description: "Maximum 15 students per class for personalized attention",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Industry professionals and experienced educators",
    },
    {
      icon: "🔬",
      title: "Hands-on Learning",
      description: "Practical projects and real-world applications",
    },
  ];

  return (
    <Layout
      title="Program Overview - SCISS"
      description="Discover the comprehensive academic programs, daily structure, and unique opportunities at SCISS Summer School."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <HeroSection
        title="Program Overview"
        subtitle="Excellence in Education"
        description="A comprehensive overview of our academic programs, daily structure, and what makes SCISS a transformative summer experience."
        backgroundImage={ProgramOverviewHero}
        // ctaText="View Academic Programs"
        ctaLink="#program-carousel"
        // secondaryCtaText="Apply Today"
        // secondaryCtaLink="/tuitions-and-fees"
      />

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            <div className="mission-content">
              <SectionHeader
                title="Our Mission"
                description="At SCISS, our mission is to foster a dynamic learning environment where curiosity thrives, friendships flourish, and personal growth is nurtured. We believe in providing students with transformative experiences that prepare them for future academic and professional success."
                align="center"
                showDivider
              />

              <h3>Core Values</h3>
              <ul className="values-list">
                <li>
                  <strong>Excellence:</strong> Striving for the highest
                  standards in education and personal development
                </li>
                <li>
                  <strong>Innovation:</strong> Embracing cutting-edge approaches
                  to learning and problem-solving
                </li>
                <li>
                  <strong>Diversity:</strong> Celebrating different perspectives
                  and cultural backgrounds
                </li>
                <li>
                  <strong>Integrity:</strong> Building character through honest
                  and ethical practices
                </li>
                <li>
                  <strong>Community:</strong> Creating lasting connections and
                  collaborative relationships
                </li>
              </ul>
            </div>

            <div className="vision-content">
              <SectionHeader
                title="What Sets Us Apart"
                align="center"
                showDivider
              />

              <FeatureGrid
                features={uniqueFeaturesData}
                columns={1}
                hoverable
                onFeatureClick={(feature, index) => {
                  console.log("Clicked feature:", feature, index);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* program carousel */}
      <section className="section bg-light" id="program-carousel">
        <div className="container">
          <SectionHeader
            title="Activity Highlights"
            description="Experience the best in sports, fitness, and recreational activities"
            showDivider
          />

          {/* <Carousel items={activitiesCarouselItems} /> */}
          <Carousel items={ProgramOverviewCoreCourses} />
        </div>
      </section>

      {/* Programs Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Programs: Sports & Electives"
            description="Balanced, active, and student-choice."
            showDivider
          />
          <p>
            Every afternoon, students select sports and electives that match
            their interests and energy level. Juniors (G4–G7) and Seniors
            (G8–G12) train separately so coaching, pace, and safety are always
            age-appropriate. Offerings vary by session and skill level.
          </p>

          <h4>Sports Menu (Examples)</h4>
          <p>
            Basketball (our core), soccer, volleyball, badminton, table tennis,
            hiking, golf, Zumba, yoga, rowing, gym—and more.
          </p>

          <h4>Electives & Studios</h4>
          <p>
            Fitness & dance, arts & crafts, digital/brand design, and creative
            workshops that change by session.
          </p>

          <h4>Others (Upon Request)</h4>
          <p>
            SAT/ACT tutoring and mock tests, piano/vocal/stage performance 1:1
            tutoring, 3D printing guidance.
          </p>

          <h4>How It Works</h4>
          <p>
            Students choose their sport/elective during orientation and can
            adjust during the first week. Coaching emphasizes fundamentals,
            game IQ, and teamwork; elective studios emphasize creativity, craft,
            and confidence. All sessions are supervised by trained staff and
            scheduled to balance academics with rest and recovery.
          </p>

          <p>
            <em>
              Note: Some advanced options (e.g., golf course time) may be
              limited by availability and may carry a small additional fee.
            </em>
          </p>
        </div>
      </section>

      {/* Activities & Trips Section */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Activities & Trips"
            description="Community every night, horizons every week."
            showDivider
          />
          <p>
            Evenings feature relaxed campus events—movie nights, competitive
            game nights, themed parties, cultural nights, campfires under the
            stars, and our always-popular student-run talent show—plus
            team-building challenges like scavenger hunts, trivia, and friendly
            tournaments.
          </p>

          <h4>Signature Trips</h4>
          <ul>
            <li>
              <strong>Boston (Full Day):</strong> Harvard & MIT campus tours
              plus city exploration.
            </li>
            <li>
              <strong>Yale & Brown University:</strong> Official tour-guide
              campus visits with admissions info sessions.
            </li>
            <li>
              <strong>Springfield Highlights:</strong> The Naismith Basketball
              Hall of Fame and regional museums/historic sites.
            </li>
            <li>
              Other destinations by session: local attractions (e.g., museums,
              theme parks) subject to schedule.
            </li>
          </ul>

          <h4>Logistics & Safety</h4>
          <p>
            All trips and on-campus activities are fully supervised by SCISS
            staff. Transportation, tickets, and meals on official excursions are
            organized by the program so students can focus on learning and fun.
            The exact itinerary varies by session and weather; families receive
            the final schedule before arrival.
          </p>
        </div>
      </section>

      <WeeklySchedule />
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
