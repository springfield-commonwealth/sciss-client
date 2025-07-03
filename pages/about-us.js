import Layout from "@/components/layouts/Layout";
import FacultySection from "@/components/sections/FacultySection";
import HeroSection from "@/components/sections/HeroSection";
import { AboutUsStats, AboutUsValues } from "@/constants/aboutUsContent";
import { AboutUsHero } from "@/constants/images";

const LeadershipTeam = [
  {
    name: "Si Qin",
    role: "Camp President",
    photo: "/images/faculties/si.JPG",
    background: ["CEO of SCISS"],
  },
  {
    name: "Beth Moriarty",
    role: "Camp Director",
    photo: "/images/faculties/beth.JPG",
    background: ["President of SCA"],
    expertise: "President of SCA",
  },
  {
    name: "Erik",
    role: "Camp Director",
    photo: "/images/instructors/erik.jpg",
    background: [],
    expertise: "",
  },
];

const AboutUs = () => {
  return (
    <Layout
      title="About Us - SCISS"
      description="Learn about SCISS's mission, values, and the dedicated team that creates exceptional summer learning experiences for international students."
    >
      {/* Hero Section */}
      <HeroSection
        title="About SCISS"
        subtitle="Our Story & Mission"
        description="Discover the vision, values, and passionate educators who make SCISS a transformative experience for students from around the world."
        backgroundImage={AboutUsHero}
        ctaText="Meet Our Team"
        ctaLink="#team"
        secondaryCtaText="Our Programs"
        secondaryCtaLink="/program-overview"
      />

      {/* Mission & Vision */}
      <section className="section" id="mission">
        <div className="container">
          <div className="grid grid-2">
            <div className="mission-section">
              <h2>Our Mission</h2>
              <p className="mission-text">
                At Springfield Commonwealth International Summer School, our
                mission is to foster a dynamic learning environment where
                curiosity thrives, friendships flourish, and personal growth is
                nurtured. We believe in providing students with transformative
                experiences that prepare them for future academic and
                professional success while building global perspectives and
                lifelong connections.
              </p>

              <div className="mission-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon"></span>
                  <div>
                    <h4>Academic Excellence</h4>
                    <p>
                      Providing world-class education with cutting-edge
                      curriculum and expert instruction
                    </p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span className="highlight-icon"></span>
                  <div>
                    <h4>Personal Development</h4>
                    <p>
                      Nurturing individual growth, confidence, and leadership
                      skills in every student
                    </p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span className="highlight-icon"></span>
                  <div>
                    <h4>Global Community</h4>
                    <p>
                      Building bridges between cultures and creating lasting
                      international friendships
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="vision-section">
              <h2>Our Vision</h2>
              <p className="vision-text">
                To be the world's leading international summer school, known for
                academic innovation, cultural exchange, and transformative
                student experiences that shape future global leaders and
                change-makers.
              </p>

              <div className="stats-grid">
                {AboutUsStats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-icon">{stat.icon}</span>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-light" id="values">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do at SCISS</p>
          </div>

          <div className="grid grid-3">
            {AboutUsValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light" id="team">
        <FacultySection
          title="Leadership Team"
          desc="Meet the visionary educators who lead SCISS with passion and dedication"
          faculty={LeadershipTeam}
          gridsize="3"
        />
      </section>
    </Layout>
  );
};

export default AboutUs;
