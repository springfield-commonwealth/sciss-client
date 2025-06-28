import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import Carousel from "@/components/ui/Carousel";
import GalleryCard from "@/components/ui/GalleryCard";
import { AcademicsHero } from "@/constants/images";

const Academics = () => {
  const coreCourses = [
    {
      title: "Path to Wall Street",
      duration: "3 weeks",
      level: "Advanced",
      description:
        "Dive deep into finance, economics, and investment strategies. Learn from Wall Street professionals and develop real-world financial analysis skills.",
      highlights: [
        "Stock market simulation trading",
        "Investment portfolio management",
        "Economic trend analysis",
        "Guest speakers from major financial firms",
      ],
      image: "/images/carousel/investment.png",
    },
    {
      title: "Youth Innovation & Entrepreneurship",
      duration: "3 weeks",
      level: "Intermediate",
      description:
        "Transform your ideas into viable business concepts. Develop entrepreneurial mindset and learn startup fundamentals.",
      highlights: [
        "Business plan development",
        "Pitch presentation skills",
        "Market research techniques",
        "Startup funding strategies",
      ],
      image: "/images/carousel/entrepreneur.png",
    },
    {
      title: "Artificial Intelligence",
      duration: "3 weeks",
      level: "Advanced",
      description:
        "Explore the frontier of AI and machine learning. Build practical projects and understand AI's impact on society.",
      highlights: [
        "Python programming for AI",
        "Machine learning algorithms",
        "Neural network design",
        "AI ethics and applications",
      ],
      image: "/images/carousel/ai.png",
    },
    {
      title: "Public Speaking & Debate",
      duration: "3 weeks",
      level: "All Levels",
      description:
        "Master the art of communication and persuasion. Build confidence through structured debate and presentation practice.",
      highlights: [
        "Speech writing and delivery",
        "Debate tournament participation",
        "Body language and presence",
        "Media interview techniques",
      ],
      image: "/images/carousel/public-speaking.png",
    },
    {
      title: "Language Programs",
      duration: "3 weeks",
      level: "All Levels",
      description:
        "Enhance language skills through immersive experiences with native speakers and cultural activities.",
      highlights: [
        "Conversational practice sessions",
        "Cultural immersion activities",
        "Language exchange partnerships",
        "Professional communication skills",
      ],
      image: "/images/carousel/language.png",
    },
    {
      title: "Visual Arts",
      duration: "3 weeks",
      level: "All Levels",
      description:
        "Express creativity through various artistic mediums while developing technical skills and artistic vision.",
      highlights: [
        "Digital art and design",
        "Traditional drawing and painting",
        "Photography techniques",
        "Art history and critique",
      ],
      image: "/images/carousel/art.png",
    },
  ];

  const academicCarouselItems = [
    {
      title: "Path to Wall Street & Impact Investment",
      description:
        "Intensive program covering investment strategies, stock markets, finance, economics, and sustainable investment",
      image: "/images/carousel/investment.png",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Comprehensive AI program with machine learning fundamentals and practical applications",
      image: "/images/carousel/ai.png",
    },
    {
      title: "Youth Innovation & Entrepreneurship",
      description:
        "CEO-led program fostering design thinking, innovation, and startup business plan development",
      image: "/images/carousel/entrepreneur.png",
    },
    {
      title: "Public Speaking & Debate",
      description:
        "Build communication skills and confidence through structured debate and presentation training",
      image: "/images/carousel/public-speaking.png",
    },
    {
      title: "Language Programs",
      description:
        "English and Creative Writing programs from beginner to intensive levels",
      image: "/images/carousel/language.png",
    },
    {
      title: "Visual Arts",
      description:
        "Creative arts program designed for students of all ages to explore artistic expression",
      image: "/images/carousel/art.png",
    },
  ];

  const programs = [
    {
      title: "Path to Wall Street & Impact Investment",
      level: "Advanced (8th grade, Session 1 only)",
      duration: "3 Weeks",
      description:
        "This intensive program equips students with foundational knowledge in investment strategies, stock markets, finance, economics, accounting, and sustainable investment. The program culminates in a team-based final competition.",
      curriculum: [
        "Investment Strategies & Stock Markets",
        "Finance, Economics & Accounting Fundamentals",
        "Sustainable Investment Principles",
        "Lectures by Wall Street Investment Experts",
        "Team-based Final Competition",
        "Global High School Investment Competition Preparation",
      ],
      outcomes: [
        "Win top 10 and top 15 from most prestigious global high school investment competition",
        "Opportunities to win various prizes based on performance",
        "Many alumni received offers from Ivy League schools",
        "College summer internships and job offers from banks and investment companies",
      ],
      prerequisites: "8th grade level, strong analytical skills",
    },
    {
      title: "Youth Innovation & Entrepreneurship",
      level: "Intermediate (8th grade, Session 2 only)",
      duration: "3 Weeks",
      description:
        "Focused on innovation and entrepreneurship, this course is taught by multiple industry experts and CEOs, guiding students through the design thinking process to identify problems, define solutions, and create a startup business plan from scratch.",
      curriculum: [
        "Design Thinking Process",
        "Problem Identification & Solution Definition",
        "Startup Business Plan Development",
        "CEO-led Industry Expert Instruction",
        "Teamwork & Innovation Skills",
        "Communication & Sustainability Principles",
      ],
      outcomes: [
        "Create startup business plan from scratch",
        "Develop teamwork and innovation skills",
        "Foster creativity and communication abilities",
        "Learn sustainability principles",
      ],
      prerequisites:
        "8th grade level, interest in entrepreneurship and innovation",
    },
    {
      title: "Artificial Intelligence",
      level: "Advanced (Pre-Calc, Session 1 only)",
      duration: "3 Weeks",
      description:
        "Comprehensive AI program designed for students with pre-calculus background, covering machine learning fundamentals, programming applications, and practical AI implementation.",
      curriculum: [
        "Machine Learning Fundamentals",
        "AI Programming Applications",
        "Computer Science Principles",
        "Mathematical Foundations for AI",
        "Practical AI Project Development",
        "Technology Innovation & Implementation",
      ],
      outcomes: [
        "Understand core AI and machine learning concepts",
        "Develop practical programming skills",
        "Create AI-based projects and applications",
        "Apply mathematical concepts to technology solutions",
      ],
      prerequisites:
        "Pre-calculus level mathematics, strong analytical thinking",
    },
    {
      title: "Public Speaking & Debate",
      level: "All Levels (6th grade, Session 2 only)",
      duration: "3 Weeks",
      description:
        "Comprehensive communication program designed to build confidence, presentation skills, and debate abilities through structured training and practice sessions.",
      curriculum: [
        "Public Speaking Fundamentals",
        "Debate Techniques & Strategy",
        "Presentation Skills Development",
        "Communication Confidence Building",
        "Structured Argument Formation",
        "Performance & Delivery Training",
      ],
      outcomes: [
        "Develop strong public speaking abilities",
        "Master debate and argumentation skills",
        "Build confidence in communication",
        "Improve presentation and performance skills",
      ],
      prerequisites:
        "6th grade level, willingness to participate in speaking activities",
    },
    {
      title: "Language Programs",
      level: "All Levels (6th grade)",
      duration: "3 Weeks",
      description:
        "English and Creative Writing programs designed for students from beginner to intensive levels, focusing on language development and communication skills.",
      curriculum: [
        "English Language Fundamentals",
        "Creative Writing Techniques",
        "Communication Skills Development",
        "Reading Comprehension & Analysis",
        "Grammar & Composition",
        "Beginner to Intensive Level Progression",
      ],
      outcomes: [
        "Improve English language proficiency",
        "Develop creative writing abilities",
        "Enhance communication and presentation skills",
        "Build confidence in language use",
      ],
      prerequisites: "6th grade level, interest in language learning",
    },
    {
      title: "Visual Arts",
      level: "All Ages",
      duration: "3 Weeks",
      description:
        "Creative arts program designed for students of all ages to explore visual expression, artistic techniques, and creative problem-solving through various mediums.",
      curriculum: [
        "Visual Art Fundamentals",
        "Creative Expression Techniques",
        "Artistic Skill Development",
        "Visual Design Principles",
        "Creative Problem-Solving",
        "Art Portfolio Creation",
      ],
      outcomes: [
        "Develop artistic skills and techniques",
        "Create personal art portfolio",
        "Explore creative expression methods",
        "Build artistic confidence and vision",
      ],
      prerequisites: "All ages welcome, creative interest",
    },
  ];

  const facultyHighlights = [
    {
      name: "Frank",
      role: "Path to Wall Street Instructor",
      background:
        "Wharton Alumnus, Founder of Ancilla Capital Advisors, CEO of Atrata Inc",
      expertise: "Alternative Investment, Wall Street Experience",
    },
    {
      name: "Raymond",
      role: "Investment Program Instructor",
      background:
        "Private Equity Manager with Tati NY Inc, Former Portfolio Manager at Spirit of America Investment Funds",
      expertise: "Private Equity, Portfolio Management",
    },
    {
      name: "Jonathan",
      role: "AI Program Instructor",
      background:
        "NYU and Johns Hopkins Alumnus, Founder of YEFA AI Innovation, Former Wall Street Expert",
      expertise: "AI Innovation, Technology Development",
    },
    {
      name: "Angelene Huang",
      role: "School President",
      background: "SCISS President, Educational Leadership Expert",
      expertise: "Academic Program Development, International Education",
    },
  ];

  const electiveCarouselItems = [
    {
      title: "Basketball",
      description:
        "Competitive basketball training and games as part of our elective sports program",
      image: "/images/carousel/basketball.png",
    },
    {
      title: "Rowing",
      description:
        "Learn rowing techniques and water sports in our comprehensive athletics program",
      image: "/images/carousel/rowing.png",
    },
    {
      title: "Fitness Training",
      description:
        "Professional fitness and conditioning programs for all skill levels",
      image: "/images/carousel/fitness.png",
    },
    {
      title: "Golf",
      description:
        "Golf instruction and practice sessions for students interested in the sport",
      image: "/images/carousel/golf.png",
    },
    {
      title: "Fencing",
      description:
        "Learn the art of fencing with professional instruction and equipment",
      image: "/images/carousel/fencing.png",
    },
    {
      title: "Soccer & Archery",
      description:
        "Soccer training and archery instruction as part of diverse elective sports options",
      image: "/images/carousel/archery.png",
    },
  ];

  const sportsPrograms = [
    {
      title: "Basketball",
      level: "All Levels",
      description:
        "Basketball training and competitive games as part of our afternoon elective sports program.",
      features: [
        "Professional instruction and coaching",
        "Skill development for all levels",
        "Team coordination and strategy",
        "Competitive game experience",
        "Basketball fundamentals training",
      ],
      schedule: "Afternoon elective sports sessions",
    },
    {
      title: "Rowing",
      level: "All Levels",
      description:
        "Rowing instruction and water sports training in our comprehensive elective sports program.",
      features: [
        "Professional rowing instruction",
        "Water safety and technique training",
        "Teamwork and coordination development",
        "Physical fitness and endurance building",
        "Scenic waterway experience",
      ],
      schedule: "Afternoon elective sports sessions",
    },
    {
      title: "Golf",
      level: "All Levels",
      description:
        "Golf instruction and practice as part of our diverse elective sports offerings.",
      features: [
        "Golf fundamentals and technique",
        "Professional instruction",
        "Course strategy and rules",
        "Equipment and safety training",
        "Individual skill development",
      ],
      schedule: "Afternoon elective sports sessions",
    },
    {
      title: "Fencing",
      level: "All Levels",
      description:
        "Learn the art and discipline of fencing with professional instruction and equipment.",
      features: [
        "Traditional fencing techniques",
        "Safety protocols and equipment use",
        "Strategic thinking and reflexes",
        "Individual skill development",
        "Historical and cultural context",
      ],
      schedule: "Afternoon elective sports sessions",
    },
  ];

  return (
    <Layout
      title="Academic Programs - SCISS"
      description="Explore cutting-edge academic programs at SCISS including Path to Wall Street, AI, Entrepreneurship, and more."
      FooterCTALinkTitle="Life & Activities"
      FooterCTALink="/life-activities"
    >
      {/* Hero Section */}
      <HeroSection
        title="Academic Excellence"
        subtitle="Six Transformative Programs"
        description="Choose from our carefully designed academic programs that combine theoretical knowledge with practical, real-world applications."
        backgroundImage={AcademicsHero}
        ctaText="View All Programs"
        ctaLink="#programs"
        secondaryCtaText="Apply Now"
        secondaryCtaLink="/tuitions-and-fees"
      />

      {/* Academic Support */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Academic Support & Resources</h2>
            <p>Comprehensive support to ensure your academic success</p>
          </div>

          <div className="grid grid-3">
            <div className="support-card">
              <div className="support-icon icon-tech"></div>
              <h4>Academic Resources</h4>
              <p>
                All course materials, academic tuition up to 30 hours, and
                specialized learning resources for your chosen program.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-innovation"></div>
              <h4>Collaborative Learning</h4>
              <p>
                Team-based projects, group activities, and peer collaboration in
                a dynamic learning environment.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-business"></div>
              <h4>Expert Instruction</h4>
              <p>
                Passionate instructors who are experts in their fields providing
                hands-on guidance and mentoring.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-tech"></div>
              <h4>Competition Resources</h4>
              <p>
                Access to competition preparation and opportunities to
                participate in prestigious academic competitions.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-language"></div>
              <h4>Progress Assessment</h4>
              <p>
                Course completion certificates and recognition for academic
                achievements and participation.
              </p>
            </div>

            <div className="support-card">
              <div className="support-icon icon-arts"></div>
              <h4>Additional Opportunities</h4>
              <p>
                Access to enrichment programs, advanced learning opportunities,
                and specialized workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Carousel */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Master Tomorrow's Skills Today</h2>
            <p>Discover the academic tracks that will shape your future</p>
          </div>

          <div className="grid grid-2">
            <GalleryCard
              key="1"
              image="/images/featured/core.png"
              title="Core Courses"
              link="#core-courses-carousel"
            />
            <GalleryCard
              key="2"
              image="/images/featured/elective.png"
              title="Electives"
              link="#electives-carousel"
            />
          </div>
        </div>
      </section>

      {/* Core Courses Overview */}
      <section className="section bg-light" id="core-courses-carousel">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Core Academic Courses</h2>
            <h4>- Choose Your Path to Excellence</h4>
            <p>
              Six specialized tracks designed to match your interests and career
              aspirations
            </p>
          </div>

          <Carousel items={academicCarouselItems} />
        </div>
      </section>

      {/* Electives Overview */}
      <section className="section bg-light" id="electives-carousel">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Electives</h2>
            <p>
              Combine academic excellence with physical well-being for holistic
              student growth.
            </p>
          </div>

          <Carousel items={electiveCarouselItems} />
        </div>
      </section>

      {/* Program Details */}
      <section id="programs" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Program Details</h2>
            <p>
              Comprehensive curriculum designed by industry experts and academic
              leaders
            </p>
          </div>

          <div className="programs-list">
            {programs.map((program, index) => (
              <div key={index} className="program-detail-card">
                <div className="program-header">
                  <div className="program-title-section">
                    <h3>{program.title}</h3>
                    <div className="program-badges">
                      <span className="level-badge">{program.level}</span>
                      <span className="duration-badge">{program.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="program-content">
                  <div className="program-description">
                    <p>{program.description}</p>
                    {program.prerequisites && (
                      <div className="prerequisites">
                        <strong>Prerequisites:</strong> {program.prerequisites}
                      </div>
                    )}
                  </div>

                  <div className="program-details-grid">
                    <div className="curriculum-section">
                      <h4>Curriculum</h4>
                      <ul className="curriculum-list">
                        {program.curriculum.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="outcomes-section">
                      <h4>Learning Outcomes</h4>
                      <ul className="outcomes-list">
                        {program.outcomes.map((outcome, idx) => (
                          <li key={idx}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Meet Our Faculty</h2>
            <p>Learn from industry professionals and academic experts</p>
          </div>

          <div className="grid grid-2">
            {facultyHighlights.map((faculty, index) => (
              <div key={index} className="faculty-card">
                <div className="faculty-info">
                  <h4>{faculty.name}</h4>
                  <div className="faculty-role">{faculty.role}</div>
                  <div className="faculty-background">{faculty.background}</div>
                  <div className="faculty-expertise">
                    <strong>Expertise:</strong> {faculty.expertise}
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

export default Academics;
