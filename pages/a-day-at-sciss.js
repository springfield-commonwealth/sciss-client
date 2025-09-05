import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SessionInfo from "@/components/sections/SessionInfo";
import WeeklySchedule from "@/components/ui/WeeklySchedule";
import {
  ADayAtScissAccommodationInfo,
  ADayAtScissDailySchedule,
  ADayAtScissDiningInfo,
  ADayAtScissWeeklyVariations,
} from "@/constants/aDayAtScissContent";
import { ADayAtScissHero } from "@/constants/images";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const ADayAtSciss = ({ breadcrumbs = [] }) => {
  return (
    <Layout
      title="A Day at SCISS - SCISS"
      description="Experience a typical day at SCISS Summer School with our comprehensive schedule and activities."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <HeroSection
        title="A Day at SCISS"
        subtitle="Experience the Magic"
        description="Discover what makes every day at SCISS special - from morning assembly to evening activities, and everything in between."
        backgroundImage={ADayAtScissHero}
        ctaText="View Daily Schedule"
        ctaLink="#schedule"
        secondaryCtaText="Weekly Overview"
        secondaryCtaLink="#weekly"
      />

      {/* Daily Schedule */}
      <section id="schedule" className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Daily Schedule</h2>
            <p>
              A structured yet flexible day designed to maximize learning,
              growth, and fun
            </p>
          </div>

          <div className="daily-timeline">
            {ADayAtScissDailySchedule.map((activity, index) => (
              <div key={index} className="timeline-item">
                <div className="time-slot">
                  <span className="time">{activity.time}</span>
                  <span className="activity-icon">{activity.icon}</span>
                </div>
                <div className="activity-content">
                  <h4>{activity.activity}</h4>
                  <p>{activity.description}</p>
                  <span className={`activity-type ${activity.type}`}>
                    {activity.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Variations */}
      <section id="weekly" className="section bg-light">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Weekly Variations</h2>
            <p>
              Each day brings something special - here's how the week unfolds
            </p>
          </div>

          <div className="weekly-grid">
            {ADayAtScissWeeklyVariations.map((day, index) => (
              <div key={index} className="day-card card">
                <div className="day-header">
                  <h3>{day.day}</h3>
                  <span className="day-highlight">{day.highlight}</span>
                </div>
                <p className="day-special">{day.special}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Accommodation & Facilities</h2>
            <p>Comfortable living spaces designed for student success</p>
          </div>

          <div className="grid grid--3">
            <div className="accommodation-category">
              <h3>Housing</h3>
              <ul>
                {ADayAtScissAccommodationInfo.housing.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="accommodation-category">
              <h3>Facilities</h3>
              <ul>
                {ADayAtScissAccommodationInfo.facilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="accommodation-category">
              <h3>Support Services</h3>
              <ul>
                {ADayAtScissAccommodationInfo.support.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="section bg-light">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Dining Experience</h2>
            <p>Nutritious meals and cultural dining experiences</p>
          </div>

          <div className="grid grid--2">
            <div className="dining-category">
              <h3>Meal Services</h3>
              <ul>
                {ADayAtScissDiningInfo.meals.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            </div>

            <div className="dining-category">
              <h3>Dining Facilities</h3>
              <ul>
                {ADayAtScissDiningInfo.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WeeklySchedule />
      <SessionInfo linkTitle="Academic Programs" link="/academics" />
    </Layout>
  );
};

export default ADayAtSciss;

export async function getStaticProps() {
  // Generate breadcrumbs for a day at sciss page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "A Day at SCISS", href: "/a-day-at-sciss", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
