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
            title="Sports & Electives"
            description="Choose what excites you. Train at your level."
            align="center"
            showDivider
          />

          <div className="grid grid--3">
            <div className="category-card">
              <div className="category-card__content">
                <div className="category-card__icon">⚽</div>
                <h3>Sports</h3>
                <div className="category-details">
                  <p><strong>Basketball</strong> (our core), soccer, volleyball, badminton, table tennis, hiking, golf, Zumba, yoga, rowing, gym.</p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-card__content">
                <div className="category-card__icon">🎨</div>
                <h3>Electives</h3>
                <div className="category-details">
                  <p>Fitness & dance, arts & crafts, digital design, creative workshops.</p>
                </div>
              </div>
            </div>

            <div className="category-card">
              <div className="category-card__content">
                <div className="category-card__icon">📝</div>
                <h3>Upon Request</h3>
                <div className="category-details">
                  <p>SAT/ACT prep, music/vocal tutoring, 3D printing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-note">
            <p>
              <strong>How It Works:</strong> Pick your sport/elective at orientation. Adjust in week one. Juniors (G4–G7) and Seniors (G8–G12) train separately for age-appropriate coaching and safety.
            </p>
            <p className="note">
              <em>Some options (e.g., golf) may carry a small fee.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Activities & Trips Section - Unique Layout */}
      <section className="section activities-trips-section">
        <div className="container">
          <SectionHeader
            title="Activities & Trips"
            description="Campus fun nightly. World-class destinations weekly."
            align="center"
            showDivider
          />

          <div className="activities-trips-container">
            {/* Left Side - Evening Activities */}
            <div className="activity-block activity-block--evening">
              <div className="activity-block__icon-badge">🎉</div>
              <h3 className="activity-block__title">Evening Activities</h3>
              <div className="activity-tags">
                <span className="activity-tag">Movie nights</span>
                <span className="activity-tag">Game tournaments</span>
                <span className="activity-tag">Themed parties</span>
                <span className="activity-tag">Cultural events</span>
                <span className="activity-tag">Campfires</span>
                <span className="activity-tag">Talent shows</span>
                <span className="activity-tag">Scavenger hunts</span>
                <span className="activity-tag">Trivia challenges</span>
              </div>
            </div>

            {/* Right Side - Signature Trips */}
            <div className="activity-block activity-block--trips">
              <div className="activity-block__icon-badge">🎓</div>
              <h3 className="activity-block__title">Signature Trips</h3>
              <div className="trips-list">
                <div className="trip-item">
                  <span className="trip-icon">🏛️</span>
                  <div className="trip-content">
                    <strong>Boston</strong>
                    <p>Harvard & MIT tours + city exploration</p>
                  </div>
                </div>
                <div className="trip-item">
                  <span className="trip-icon">🎓</span>
                  <div className="trip-content">
                    <strong>Yale & Brown</strong>
                    <p>Campus visits + admissions sessions</p>
                  </div>
                </div>
                <div className="trip-item">
                  <span className="trip-icon">🏀</span>
                  <div className="trip-content">
                    <strong>Springfield</strong>
                    <p>Basketball Hall of Fame, museums</p>
                  </div>
                </div>
                <div className="trip-item">
                  <span className="trip-icon">✨</span>
                  <div className="trip-content">
                    <strong>Local Attractions</strong>
                    <p>Varies by session</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Footer Banner */}
          <div className="safety-banner">
            <div className="safety-banner__icon">🛡️</div>
            <div className="safety-banner__content">
              <strong>Safety First:</strong> All activities and trips are fully supervised. Transportation, tickets, and meals organized. Final schedule sent before arrival.
              <span className="safety-banner__note">Trips subject to weather and availability.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Section - Different Style */}
      <section className="section weekly-overview-section">
        <div className="container">
          <SectionHeader
            title="Weekly Schedule"
            description="Your week at a glance"
            align="center"
            showDivider
          />
          <WeeklySchedule />
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
