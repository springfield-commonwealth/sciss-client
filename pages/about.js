import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SessionInfo from "@/components/sections/SessionInfo";
import { FeatureGrid, SectionHeader, StatsGrid } from "@/components/ui";
import { AboutUsStats, AboutUsValues } from "@/constants/aboutUsContent";
import { AboutUsHero } from "@/constants/images";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const About = ({ breadcrumbs = [] }) => {
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

      {/* Why SCISS Intro Section */}
      <section className="section intro-section" id="why-sciss">
        <div className="container">
          <SectionHeader
            title="Why SCISS"
            description="Give your child a global summer that counts. SCISS (SC International Summer School) is a residential program for Grades 4–12 that blends big ideas with practical doing. Across June–August 2026, students live and learn on campus with caring 24/7 supervision, structured days, and memorable weekend excursions. They'll build real projects, grow confidence, and make friends from around the world—then come home proud, skilled, and excited for what's next."
            align="center"
            showDivider={true}
            variant="primary"
          />
        </div>
      </section>

      {/* What Differentiates SCISS */}
      <section className="section" id="what-differentiates">
        <div className="container">
          <SectionHeader
            title="What Differentiates SCISS"
            align="center"
            showDivider={true}
          />
          <FeatureGrid
            features={[
              {
                icon: "🏠",
                title: "Residential Community",
                description:
                  "Age-appropriate cohorts (Junior G4–G7 and Senior G8–G12) and a friendly, safe campus atmosphere.",
              },
              {
                icon: "⚖️",
                title: "Balanced Days",
                description:
                  "Morning learning, afternoon project studio/electives, evening community events, and weekend excursions.",
              },
              {
                icon: "🎓",
                title: "Portfolio-Ready Outcomes",
                description:
                  "Capstone presentation or performance, plus a course-completion certificate.",
              },
            ]}
            columns={3}
            hoverable={true}
          />
        </div>
      </section>

      {/* What Our Programs Offer */}
      <section className="section intro-section" id="program-offerings">
        <div className="container">
          <SectionHeader
            title="What Our Programs Offer"
            align="center"
            showDivider={true}
          />
          <FeatureGrid
            features={[
              {
                icon: "🧠",
                title: "Learning that Sticks",
                description:
                  "Morning learning + afternoon project studio + evening events = skills, portfolios, and a capstone showcase with a certificate.",
              },
              {
                icon: "🛠️",
                title: "Hands-on & Applied",
                description:
                  "Finance students run a $1M virtual trading challenge and deliver a stock pitch; founders-in-training build MVPs and pitch to mentors; AI students code and test; performers rehearse and showcase; leaders speak daily.",
              },
              {
                icon: "👨‍🏫",
                title: "Real-world Mentors",
                description:
                  "Instructors include Wall Street professionals, entrepreneurs/VC mentors, CEOs/GMs, technologists, and specialist coaches who teach by doing.",
              },
              {
                icon: "👥",
                title: "Age-appropriate Cohorts",
                description:
                  "Junior (G4–G7) and Senior (G8–G12) groups ensure the right pace, tools, and challenge.",
              },
              {
                icon: "🛡️",
                title: "Safe & Supported",
                description:
                  "Residential staff, clear conduct policies, and open parent communication; dorm living (typically 2–4 per room), meals, and full-time supervision included.",
              },
              {
                icon: "🎯",
                title: "Beyond the Classroom",
                description:
                  "Signature trips (e.g., Harvard & MIT & Brown full day; Yale half day), museums and regional landmarks (e.g., Basketball Hall of Fame), themed socials, and cultural nights broaden horizons.",
              },
            ]}
            columns={3}
            hoverable={true}
          />
        </div>
      </section>

      {/* Team */}
      <section className="section" id="team">
        <div className="container">
          <SectionHeader
            title="Team"
            description="Your child learns from people who do the work every day:"
            align="center"
            showDivider={true}
          />
          <FeatureGrid
            features={[
              {
                icon: "💼",
                title: "Finance & Entrepreneurship",
                description:
                  "Wall Street professionals (10+ yrs exp.), founders, and venture mentors guide research, strategy, and pitching.",
              },
              {
                icon: "🤖",
                title: "AI/Robotics",
                description:
                  "Technologists and university-affiliated educators lead labs that connect code and sensors to real-world impact.",
              },
              {
                icon: "🎤",
                title: "Leadership/Public Speaking",
                description:
                  "Specialist communication coaches build presence, debate, and persuasive speaking with daily practice.",
              },
              {
                icon: "🎭",
                title: "Music/Stage & Sports",
                description:
                  "Practitioners and certified coaches develop craft, teamwork, and performance confidence.",
              },
            ]}
            columns={2}
            hoverable={true}
          />
          <div className="text--center mt--lg">
            <p className="text-lg text-secondary">
              We also host guest speakers and alumni panels to inspire pathways
              into college and careers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section intro-section" id="mission">
        <div className="container">
          <SectionHeader
            title="Our Mission"
            description="At Springfield Commonwealth International Summer School, our mission is to foster a dynamic learning environment where curiosity thrives, friendships flourish, and personal growth is nurtured. We believe in providing students with transformative experiences that prepare them for future academic and professional success while building global perspectives and lifelong connections."
            align="center"
            showDivider={true}
          />
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
            columns={3}
            hoverable
          />
        </div>
      </section>

      {/* Vision */}
      <section className="section" id="vision">
        <div className="container">
          <SectionHeader
            title="Our Vision"
            description="To be the world's leading international summer school, known for academic innovation, cultural exchange, and transformative student experiences that shape future global leaders and change-makers."
            align="center"
            showDivider={true}
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
      </section>

      {/* Past Sessions (2025 Snapshot) */}
      <section className="section" id="past-sessions">
        <div className="container">
          <SectionHeader
            title="Past Sessions (2025 Snapshot)"
            align="center"
            showDivider={true}
          />

          <FeatureGrid
            features={[
              {
                icon: "📍",
                title: "Location",
                description:
                  "1 Ames Hill Dr, Springfield, MA (residential campus)",
              },
              {
                icon: "📅",
                title: "Sessions",
                description:
                  "Session 1: June 29 – July 18 (3 weeks)\nSession 2: July 20 – August 8 (3 weeks)",
              },
              {
                icon: "⏰",
                title: "Program Rhythm",
                description:
                  "Weekdays: academic classes in the morning; project studio/electives in the afternoon; community events in the evening.\nMidweek/weekend: field trips and special events.",
              },
              {
                icon: "🎓",
                title: "Signature Excursions",
                description:
                  "Boston (Harvard & MIT) — full-day university immersion and city exploration.\nYale & Brown University — official tour guide visit with admission info session.\nBasketball Hall of Fame, plus museums, historical sites, and regional attractions.",
              },
              {
                icon: "🏃",
                title: "Activities & Sports",
                description:
                  "Basketball • Soccer • Golf • Fencing • Yoga • Rock climbing • Archery • Swimming • Ultimate Frisbee • Rowing • Badminton • Table Tennis • Softball • Volleyball • Hiking • Fitness & Dance • Arts & Crafts • Cookery • Drone Flying — and more.",
              },
              {
                icon: "💰",
                title: "Investment Track Highlights",
                description:
                  "Multi-level curriculum (Intro → Valuation), trading simulator with a virtual investment challenge, and guest speakers from top firms.",
              },
            ]}
            columns={2}
            hoverable={true}
          />

          <div className="text--center mt--lg">
            <div className="card bg-light p--lg">
              <p className="text-sm text-secondary">
                <strong>Note:</strong> Program details evolve each year; 2026
                will follow the same high-care, high-impact model with updated
                speakers, trips, and schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section intro-section" id="values">
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

      <SessionInfo linkTitle="Academic Programs" link="/academics" />
    </Layout>
  );
};

export default About;

export async function getStaticProps() {
  // Generate breadcrumbs for about us page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "About SCISS", href: "/about", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
