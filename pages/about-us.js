import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { AboutUsHero } from "@/constants/images";

const AboutUs = () => {
  const founders = [
    {
      name: "Angelene Huang",
      title: "President & Founder",
      background: "Former Wall Street Expert",
      bio: "Angelene Huang brings over 10 years of experience in education and finance. Her vision of combining academic excellence with real-world experience has shaped SCISS into a premier summer program.",
      expertise: [
        "Educational Leadership",
        "Financial Markets",
        "International Programs",
      ],
    },
  ];

  const values = [
    {
      title: "Excellence in Education",
      description:
        "We maintain the highest academic standards and provide cutting-edge curriculum that prepares students for future success.",
      icon: "",
    },
    {
      title: "Global Perspective",
      description:
        "We celebrate diversity and foster international understanding through our multicultural community.",
      icon: "",
    },
    {
      title: "Innovation & Creativity",
      description:
        "We encourage creative thinking and innovative approaches to learning and problem-solving.",
      icon: "",
    },
    {
      title: "Personal Growth",
      description:
        "We nurture individual development, building confidence and life skills that last a lifetime.",
      icon: "",
    },
    {
      title: "Integrity & Character",
      description:
        "We instill strong moral values and ethical principles in all our programs and interactions.",
      icon: "",
    },
    {
      title: "Community & Collaboration",
      description:
        "We build lasting friendships and teach the value of teamwork and mutual support.",
      icon: "",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "SCISS was established with the vision of creating a unique international summer experience in Springfield, Massachusetts.",
    },
    {
      year: "2016",
      title: "First Programs Launch",
      description:
        "Launched our inaugural academic programs with 50 students from 8 countries, focusing on business and technology.",
    },
    {
      year: "2017",
      title: "University Partnerships",
      description:
        "Established formal partnerships with Harvard, MIT, and Yale for exclusive campus visits and guest lectures.",
    },
    {
      year: "2018",
      title: "Program Expansion",
      description:
        "Added Visual Arts and Language Programs, expanding our offerings to serve diverse student interests.",
    },
    {
      year: "2019",
      title: "AI Program Introduction",
      description:
        "Pioneered our Artificial Intelligence program, becoming one of the first summer schools to offer comprehensive AI education.",
    },
    {
      year: "2020",
      title: "Innovation During Challenges",
      description:
        "Successfully adapted to global changes with innovative hybrid learning models while maintaining program quality.",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description:
        "Enhanced our technology infrastructure and introduced virtual reality experiences in education.",
    },
    {
      year: "2022",
      title: "Sustainability Initiative",
      description:
        "Launched comprehensive sustainability programs and achieved carbon-neutral campus operations.",
    },
    {
      year: "2023",
      title: "Excellence Recognition",
      description:
        "Received international recognition as a leading summer education program, welcoming students from 25+ countries.",
    },
    {
      year: "2024",
      title: "Innovation Labs",
      description:
        "Opened state-of-the-art innovation labs for entrepreneurship and technology programs.",
    },
  ];

  const partnerships = [
    {
      name: "Harvard University",
      type: "Academic Partner",
      description:
        "Exclusive campus access and guest lectures from Harvard faculty",
    },
    {
      name: "MIT",
      type: "Research Collaboration",
      description: "Technology programs and innovation lab access",
    },
    {
      name: "Yale University",
      type: "Cultural Exchange",
      description: "Liberal arts programs and cultural immersion experiences",
    },
    {
      name: "Springfield Museums",
      type: "Cultural Partner",
      description: "Educational programs and special exhibitions access",
    },
    {
      name: "Basketball Hall of Fame",
      type: "Sports Partner",
      description: "Sports programs and leadership development",
    },
    {
      name: "Local Businesses",
      type: "Industry Partners",
      description:
        "Internship opportunities and real-world project collaboration",
    },
  ];

  const stats = [
    { number: "2000+", label: "Alumni Worldwide", icon: "" },
    { number: "35+", label: "Countries Represented", icon: "" },
    { number: "98%", label: "Student Satisfaction", icon: "" },
    { number: "10", label: "Years of Excellence", icon: "" },
  ];

  const alumniSuccess = [
    {
      name: "Jennifer Liu",
      class: "Class of 2019",
      achievement: "Harvard University Student, Startup Founder",
      quote:
        "SCISS gave me the confidence and skills to pursue my dreams. The entrepreneurship program changed my life.",
    },
    {
      name: "Carlos Rodriguez",
      class: "Class of 2020",
      achievement: "MIT Computer Science Student",
      quote:
        "The AI program at SCISS sparked my passion for computer science and led me to MIT.",
    },
    {
      name: "Aisha Patel",
      class: "Class of 2021",
      achievement: "Wall Street Intern, Finance Major",
      quote:
        "The Path to Wall Street program opened doors I never imagined possible.",
    },
  ];

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
      <section className="section">
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
                {stats.map((stat, index) => (
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do at SCISS</p>
          </div>

          <div className="grid grid-3">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Leadership Team</h2>
            <p>
              Meet the visionary educators who lead SCISS with passion and
              dedication
            </p>
          </div>

          <div className="founders-grid">
            {founders.map((founder, index) => (
              <div key={index} className="founder-card">
                <div className="founder-header">
                  <h3>{founder.name}</h3>
                  <div className="founder-title">{founder.title}</div>
                  <div className="founder-background">{founder.background}</div>
                </div>

                <p className="founder-bio">{founder.bio}</p>

                <div className="founder-expertise">
                  <h4>Areas of Expertise:</h4>
                  <div className="expertise-tags">
                    {founder.expertise.map((area, idx) => (
                      <span key={idx} className="expertise-tag">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
