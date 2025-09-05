import Layout from "@/components/layouts/Layout";
import CampSchedule from "@/components/sections/CampSchedule";
import CourseShowcase from "@/components/sections/CourseShowcase";
import HeroSection from "@/components/sections/HeroSection";
import { FeatureGrid, SectionHeader, SessionInfo } from "@/components/ui";
import { AcademicsHero } from "@/constants/images";
import {
  getAllCourses,
  getCourseCategories,
  getCourseStats,
} from "@/lib/content/courses";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const Academics = ({
  courses = [],
  _categories = [],
  _stats = {},
  breadcrumbs = [],
}) => {
  // Handle case where courses data might not be available
  const coursesList = Array.isArray(courses) ? courses : [];
  const hasValidCourses = coursesList.length > 0;

  // Prepare academic support features data for FeatureGrid component
  const academicSupportData = [
    {
      icon: "👨‍🏫",
      title: "Faculty Mentorship",
      description:
        "One-on-one guidance from experienced educators and industry professionals throughout your academic journey.",
    },
    {
      icon: "📚",
      title: "Academic Resources",
      description:
        "Access to cutting-edge learning materials, research databases, and technology platforms.",
    },
    {
      icon: "🎨",
      title: "Additional Opportunities",
      description:
        "Access to enrichment programs, advanced learning opportunities, and specialized workshops.",
    },
  ];

  return (
    <Layout
      title="Academic Programs - SCISS"
      description="Explore cutting-edge academic programs at SCISS including Path to Wall Street, AI, Entrepreneurship, and more."
      SessionInfoLinkTitle="Life & Activities"
      SessionInfoLink="/life-activities"
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
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

      {/* Overview Section */}
      <section className="section intro-section" id="overview">
        <div className="container-lg">
          <SectionHeader
            title="Overview"
            description="At SCISS (SC International Summer School), academics are designed to be hands-on, structured, and inspiring. Students learn in the morning, build projects in the afternoon, and share their work in evening showcases—supported by caring residential staff and age-appropriate cohorts."
            align="center"
            showDivider={true}
            variant="primary"
          />
        </div>
      </section>

      {/* What this means for your child */}
      <section className="section" id="what-this-means">
        <div className="container-lg">
          <SectionHeader
            title="What this means for your child"
            align="center"
            showDivider={true}
          />
          <FeatureGrid
            features={[
              {
                icon: "📚",
                title: "Morning Academic Classes",
                description:
                  "Morning academic classes in their chosen track (Investment, Entrepreneurship, AI/Robotics, Leadership/Public Speaking, Music/Stage, Sports).",
              },
              {
                icon: "🛠️",
                title: "Applied Learning",
                description:
                  "Applied learning every day: projects, rehearsals, labs, and skill-building that culminate in a capstone showcase and certificate.",
              },
              {
                icon: "🌍",
                title: "Balanced Experience",
                description:
                  "Balanced weeks with structured classes and curated excursions that connect learning to the wider world.",
              },
            ]}
            columns={3}
            hoverable={true}
          />
        </div>
      </section>

      {/* How Learning Works */}
      <section className="section bg-light" id="how-learning-works">
        <div className="container-lg">
          <SectionHeader
            title="How Learning Works"
            align="center"
            showDivider={true}
          />
          <FeatureGrid
            features={[
              {
                icon: "👥",
                title: "Cohorts",
                description:
                  "Junior (G4–G7) and Senior (G8–G12) move at the right pace with the right tools and challenges.",
              },
              {
                icon: "⏰",
                title: "Daily Rhythm",
                description:
                  "Academics in the morning → project studio/electives in the afternoon → community events in the evening.",
              },
              {
                icon: "🎓",
                title: "Beyond the Classroom",
                description:
                  "University and cultural visits (e.g., Harvard & MIT & Brown full day; Yale half day) expand horizons.",
              },
            ]}
            columns={3}
            hoverable={true}
          />
        </div>
      </section>

      {/* Introduction to Core Courses */}
      <section className="section bg-light" id="core-courses-intro">
        <div className="container-lg">
          <SectionHeader
            title="Introduction to Core Courses"
            description="Students choose one primary academic track per session. Below are refined, prose overviews that blend the defining features of each course."
            align="center"
            showDivider={true}
          />
        </div>
      </section>

      {/* AI & Robotics */}
      <CourseShowcase
        title="AI & Robotics"
        leadText="From Python programming to machine learning and deep learning, then opening the door to Transformers and large language models."
        detailsText="We connect concepts to daily life—autonomous driving, conversational AI, recommendation systems—and explore how robotics powers industry, healthcare, and scientific exploration."
        highlightText={{
          title: "Capstone Project",
          description:
            "Team-built AI + robotics prototype and demo, with discussion of career pathways and future trends.",
        }}
        image={{
          src: "/images/carousel/ai.png",
          alt: "Students learning AI and robotics",
          icon: "🤖",
        }}
        badges={[
          { text: "Advanced", type: "primary" },
          { text: "3 Weeks", type: "secondary" },
          { text: "Pre-Calc+", type: "accent" },
        ]}
        features={[
          {
            icon: "🐍",
            title: "Python Programming",
            description: "Foundation in programming fundamentals",
          },
          {
            icon: "🧠",
            title: "Machine Learning",
            description: "Deep learning and neural networks",
          },
          {
            icon: "🚀",
            title: "Transformers & LLMs",
            description: "Large language models and AI applications",
          },
          {
            icon: "🤖",
            title: "Robotics Integration",
            description: "Real-world robotics applications",
          },
        ]}
        techStack={["Python", "TensorFlow", "PyTorch", "OpenCV"]}
        theme="ai"
        imagePosition="right"
      />

      {/* Path to Wall Street Impact Investment */}
      <CourseShowcase
        title="Path to Wall Street Impact Investment"
        leadText="Build financial fluency step by step: understanding markets and financial statements, practicing stock trading in a simulator."
        detailsText="Manage a diversified portfolio while tracking macroeconomic signals and industry research. The capstone experience is our $1M virtual investment competition and a polished stock pitch."
        highlightText={{
          title: "Realistic Practice",
          description:
            "Sharpens analysis, communication, and decision-making skills for real-world finance.",
        }}
        image={{
          src: "/images/carousel/investment.png",
          alt: "Students learning investment and finance",
          icon: "💰",
        }}
        badges={[
          { text: "Advanced", type: "primary" },
          { text: "3 Weeks", type: "secondary" },
          { text: "8th Grade+", type: "accent" },
        ]}
        features={[
          {
            icon: "📊",
            title: "Market Analysis",
            description: "Understanding financial markets and statements",
          },
          {
            icon: "💹",
            title: "Trading Simulator",
            description: "Practice stock trading in real-time",
          },
          {
            icon: "📈",
            title: "Portfolio Management",
            description: "Diversified portfolio tracking and management",
          },
          {
            icon: "🎤",
            title: "Stock Pitch",
            description: "Professional presentation and communication",
          },
        ]}
        metrics={[
          { value: "$1M", label: "Virtual Competition" },
          { value: "24/7", label: "Market Access" },
        ]}
        theme="wallstreet"
        imagePosition="left"
      />

      {/* Youth Innovation & Entrepreneurship */}
      <CourseShowcase
        title="Youth Innovation & Entrepreneurship (Teen Start-ups)"
        leadText="From mindset to model to market, this course blends business-model design with school–style design thinking."
        detailsText="Students test ideas through research and trend analysis, use modern AI tools (for example, ChatGPT/DeepSeek) to accelerate prototyping, and refine a story that investors can believe in."
        highlightText={{
          title: "Pitch Showcase",
          description:
            "Teams present to mentors and receive actionable feedback in a friendly competition environment.",
        }}
        image={{
          src: "/images/carousel/entrepreneur.png",
          alt: "Students working on innovative projects",
          icon: "🚀",
        }}
        badges={[
          { text: "Intermediate", type: "primary" },
          { text: "3 Weeks", type: "secondary" },
          { text: "8th Grade+", type: "accent" },
        ]}
        features={[
          {
            icon: "💡",
            title: "Design Thinking",
            description: "Business-model design and innovation",
          },
          {
            icon: "🔍",
            title: "Market Research",
            description: "Trend analysis and idea validation",
          },
          {
            icon: "🤖",
            title: "AI Tools",
            description: "ChatGPT/DeepSeek for prototyping",
          },
          {
            icon: "📊",
            title: "Investor Story",
            description: "Compelling narratives for funding",
          },
        ]}
        theme="entrepreneurship"
        imagePosition="right"
      />

      {/* Leadership · Arts · English · Stage */}
      <CourseShowcase
        title="Leadership · Arts · English · Stage"
        leadText="Confidence grows through daily public speaking and debate, targeted English writing support, and workshops on responsibility, communication, innovation, and teamwork."
        detailsText="Academic coaching can include math refreshers, SAT practice, or ESL. Creative work runs in parallel—visual arts and brand design in the studio, plus a music/theatre production."
        highlightText={{
          title: "Public Performance",
          description:
            "Music/theatre production that moves from rehearsal to a public performance by week's end.",
        }}
        image={{
          src: "/images/carousel/public-speaking.png",
          alt: "Students developing leadership and speaking skills",
          icon: "🎭",
        }}
        badges={[
          { text: "All Levels", type: "primary" },
          { text: "3 Weeks", type: "secondary" },
          { text: "6th Grade+", type: "accent" },
        ]}
        features={[
          {
            icon: "🎤",
            title: "Public Speaking",
            description: "Daily practice and debate training",
          },
          {
            icon: "✍️",
            title: "English Writing",
            description: "Targeted support and academic coaching",
          },
          {
            icon: "🎨",
            title: "Visual Arts",
            description: "Brand design and creative studio work",
          },
          {
            icon: "🎭",
            title: "Performance",
            description: "Music/theatre production and showcase",
          },
        ]}
        theme="leadership"
        imagePosition="left"
      />

      {/* Sports Intensive */}
      <CourseShowcase
        title="Sports Intensive (e.g. Basketball focus)"
        leadText="Basketball anchors this track, with fundamentals, tactics, and live play layered over structured conditioning and sports-psychology habits."
        detailsText="Students train with a professional coaching team (including U.S. high-school/college players) and round out their week with multi-sport options—soccer, golf, dance, and more."
        highlightText={{
          title: "Balanced Growth",
          description:
            "Athletic development balanced with variety and fun across multiple sports.",
        }}
        image={{
          src: "/images/carousel/language.png",
          alt: "Students participating in sports activities",
          icon: "🏀",
        }}
        badges={[
          { text: "All Levels", type: "primary" },
          { text: "3 Weeks", type: "secondary" },
          { text: "All Ages", type: "accent" },
        ]}
        features={[
          {
            icon: "🏀",
            title: "Basketball Focus",
            description: "Fundamentals, tactics, and live play",
          },
          {
            icon: "💪",
            title: "Conditioning",
            description: "Structured training and sports psychology",
          },
          {
            icon: "👨‍🏫",
            title: "Professional Coaching",
            description: "U.S. high-school/college players",
          },
          {
            icon: "⚽",
            title: "Multi-Sport",
            description: "Soccer, golf, dance, and more",
          },
        ]}
        theme="sports"
        imagePosition="right"
      />

      {/* Practice & Competitions */}
      <section className="section" id="practice-competitions">
        <div className="container-lg">
          <SectionHeader
            title="Practice & Competitions"
            description="Across SCISS, learning leads to the real thing: AI & Robotics teams build and demo working prototypes; Investment students compete in a simulator-based stock challenge with a notional $1M fund; Entrepreneurship cohorts pitch ventures to a mentor panel; Leadership/Arts students step onto real stages for debates, exhibitions, and a final show; and Sports culminates in basketball games and skills challenges that celebrate progress."
            align="center"
            showDivider={true}
          />
        </div>
      </section>

      {/* AI & Robotics Competition */}
      <CourseShowcase
        title="AI & Robotics Competition"
        leadText="Build and demo working prototypes with real-world applications that showcase the power of artificial intelligence and robotics."
        detailsText="Students work in teams to create functional AI-powered robots that solve real problems. From autonomous navigation to computer vision applications, these prototypes demonstrate the practical impact of cutting-edge technology."
        highlightText={{
          title: "Live Demo Showcase",
          description:
            "Present your working prototypes to industry professionals and receive expert feedback on your innovations.",
        }}
        image={{
          src: "/images/carousel/ai.png",
          alt: "Students presenting AI and robotics prototypes",
          icon: "🤖",
        }}
        badges={[
          { text: "Team Project", type: "primary" },
          { text: "Live Demo", type: "secondary" },
          { text: "Industry Feedback", type: "accent" },
        ]}
        features={[
          {
            icon: "🔧",
            title: "Prototype Development",
            description:
              "Build functional AI-powered robots from concept to completion",
          },
          {
            icon: "🎯",
            title: "Real-World Applications",
            description:
              "Solve actual problems using computer vision and machine learning",
          },
          {
            icon: "👥",
            title: "Team Collaboration",
            description:
              "Work with peers to combine diverse skills and perspectives",
          },
          {
            icon: "🏆",
            title: "Competition Recognition",
            description:
              "Compete for awards and recognition from industry experts",
          },
        ]}
        techStack={[
          "Python",
          "OpenCV",
          "TensorFlow",
          "Arduino",
          "Raspberry Pi",
        ]}
        theme="ai"
        imagePosition="right"
      />

      {/* Investment Challenge */}
      <CourseShowcase
        title="Investment Challenge"
        leadText="Compete in a simulator-based stock challenge with a notional $1M fund, making real-time investment decisions in a dynamic market environment."
        detailsText="Students manage a virtual portfolio, analyze market trends, and make strategic investment decisions. Track performance, adjust strategies, and compete against peers in this realistic trading simulation."
        highlightText={{
          title: "$1M Virtual Fund",
          description:
            "Manage a substantial virtual portfolio and compete for the highest returns in our investment challenge.",
        }}
        image={{
          src: "/images/carousel/investment.png",
          alt: "Students analyzing investment data and market trends",
          icon: "💰",
        }}
        badges={[
          { text: "$1M Fund", type: "primary" },
          { text: "Real-Time Trading", type: "secondary" },
          { text: "Portfolio Management", type: "accent" },
        ]}
        features={[
          {
            icon: "📊",
            title: "Market Analysis",
            description:
              "Analyze financial data and market trends for informed decisions",
          },
          {
            icon: "💹",
            title: "Trading Simulation",
            description: "Execute trades in real-time market conditions",
          },
          {
            icon: "📈",
            title: "Portfolio Tracking",
            description: "Monitor performance and adjust investment strategies",
          },
          {
            icon: "🎯",
            title: "Competition Rankings",
            description: "Compete for top performance and recognition",
          },
        ]}
        metrics={[
          { value: "$1M", label: "Virtual Fund" },
          { value: "24/7", label: "Market Access" },
          { value: "Real-Time", label: "Trading" },
        ]}
        theme="wallstreet"
        imagePosition="left"
      />

      {/* Venture Pitch Competition */}
      <CourseShowcase
        title="Venture Pitch Competition"
        leadText="Present startup ideas to mentor panels and investors, refining your pitch through multiple rounds of feedback and competition."
        detailsText="Students develop compelling business ideas, create pitch decks, and present to panels of successful entrepreneurs, VCs, and industry experts. Receive actionable feedback and compete for recognition and potential funding opportunities."
        highlightText={{
          title: "Investor Panel",
          description:
            "Present to real investors and entrepreneurs who provide valuable feedback and potential funding opportunities.",
        }}
        image={{
          src: "/images/carousel/entrepreneur.png",
          alt: "Students pitching their startup ideas to investors",
          icon: "🚀",
        }}
        badges={[
          { text: "Investor Panel", type: "primary" },
          { text: "Pitch Deck", type: "secondary" },
          { text: "Funding Opportunity", type: "accent" },
        ]}
        features={[
          {
            icon: "💡",
            title: "Business Development",
            description: "Create viable business models and market strategies",
          },
          {
            icon: "📋",
            title: "Pitch Deck Creation",
            description: "Design compelling presentations for investors",
          },
          {
            icon: "🎤",
            title: "Public Speaking",
            description:
              "Develop confidence in presenting to professional audiences",
          },
          {
            icon: "🤝",
            title: "Networking",
            description: "Connect with successful entrepreneurs and investors",
          },
        ]}
        theme="entrepreneurship"
        imagePosition="right"
      />

      {/* Stage Performance Showcase */}
      <CourseShowcase
        title="Stage Performance Showcase"
        leadText="Step onto real stages for debates, exhibitions, and final performances that showcase your leadership, artistic, and communication skills."
        detailsText="Students participate in public debates, art exhibitions, and theatrical performances. From persuasive speaking to creative expression, these showcases provide real-world experience in public presentation and artistic performance."
        highlightText={{
          title: "Public Performance",
          description:
            "Perform on professional stages and exhibition spaces, building confidence and real-world experience.",
        }}
        image={{
          src: "/images/carousel/public-speaking.png",
          alt: "Students performing on stage and in exhibitions",
          icon: "🎭",
        }}
        badges={[
          { text: "Public Stage", type: "primary" },
          { text: "Live Performance", type: "secondary" },
          { text: "Professional Venue", type: "accent" },
        ]}
        features={[
          {
            icon: "🎤",
            title: "Public Speaking",
            description: "Develop confidence in debates and presentations",
          },
          {
            icon: "🎨",
            title: "Art Exhibitions",
            description:
              "Showcase creative work in professional gallery spaces",
          },
          {
            icon: "🎭",
            title: "Theatrical Performance",
            description:
              "Perform in full productions with professional staging",
          },
          {
            icon: "👥",
            title: "Audience Engagement",
            description:
              "Connect with real audiences and receive live feedback",
          },
        ]}
        theme="leadership"
        imagePosition="left"
      />

      {/* Sports Competition */}
      <CourseShowcase
        title="Sports Competition"
        leadText="Basketball games and skills challenges that celebrate progress, teamwork, and athletic achievement in a competitive yet supportive environment."
        detailsText="Students participate in organized basketball games, skills competitions, and multi-sport challenges. These competitions emphasize teamwork, sportsmanship, and personal improvement while celebrating athletic achievement."
        highlightText={{
          title: "Championship Games",
          description:
            "Compete in organized tournaments and skills challenges with awards and recognition for outstanding performance.",
        }}
        image={{
          src: "/images/carousel/language.png",
          alt: "Students competing in basketball and sports activities",
          icon: "🏀",
        }}
        badges={[
          { text: "Tournament", type: "primary" },
          { text: "Skills Challenge", type: "secondary" },
          { text: "Team Competition", type: "accent" },
        ]}
        features={[
          {
            icon: "🏀",
            title: "Basketball Games",
            description:
              "Organized games and tournaments with professional coaching",
          },
          {
            icon: "🎯",
            title: "Skills Challenges",
            description: "Individual and team skills competitions",
          },
          {
            icon: "👥",
            title: "Team Building",
            description: "Develop teamwork and leadership through sports",
          },
          {
            icon: "🏆",
            title: "Recognition",
            description: "Awards and recognition for outstanding performance",
          },
        ]}
        theme="sports"
        imagePosition="right"
      />

      {/* Assessment & Portfolio */}
      <section className="section bg-light" id="assessment-portfolio">
        <div className="container-lg">
          <SectionHeader
            title="Assessment & Portfolio"
            description="Capstones: stock-pitch presentations, startup pitches, public talks, performances, or robotics challenges."
            align="center"
            showDivider={true}
          />
          <div className="grid grid--2-cols gap--lg">
            <div className="card bg-white p--lg rounded--lg shadow--md border border-gray-200">
              <div className="text--center mb--md">
                <div className="text-4xl mb--sm">🎓</div>
                <h3 className="text-xl font-bold text-primary mb--sm">
                  Certificate of Completion
                </h3>
                <p className="text-gray-700">
                  Every student receives a SCISS/YEFA Certificate of Completion
                </p>
              </div>
            </div>
            <div className="card bg-white p--lg rounded--lg shadow--md border border-gray-200">
              <div className="text--center mb--md">
                <div className="text-4xl mb--sm">🏆</div>
                <h3 className="text-xl font-bold text-primary mb--sm">
                  Awards & Showcases
                </h3>
                <p className="text-gray-700">
                  Celebrate growth and achievement with recognition awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completion & Alumni Support */}
      <section className="section" id="completion-alumni">
        <div className="container-lg">
          <SectionHeader
            title="Completion & Alumni Support"
            description="Every student finishes with a SCISS/YEFA Certificate of Completion, and select honors—such as Best Investment Team, Best Venture Pitch, or Best Stage Performance—recognize outstanding work. Certificates and awards strengthen future applications to selective universities and competitive internships."
            align="center"
            showDivider={true}
          />
          <FeatureGrid
            features={[
              {
                icon: "📜",
                title: "SCISS/YEFA Certificate",
                description:
                  "Official completion certificate for every student",
              },
              {
                icon: "⭐",
                title: "Select Honors",
                description:
                  "Best Investment Team, Best Venture Pitch, Best Stage Performance",
              },
              {
                icon: "🎓",
                title: "University Applications",
                description:
                  "Strengthen applications to selective universities and internships",
              },
              {
                icon: "🌍",
                title: "Alumni Community",
                description:
                  "Join SCISS Summer Camp Alumni network for ongoing support",
              },
              {
                icon: "👨‍🏫",
                title: "Post-Camp Guidance",
                description:
                  "5 hours of complimentary mentor guidance on competitions",
              },
              {
                icon: "🎯",
                title: "Competition Prep",
                description:
                  "Topic selection, solution design, and presentation coaching",
              },
            ]}
            columns={3}
            hoverable={true}
          />
        </div>
      </section>

      {/* Faculty & Mentors */}
      <section className="section bg-light" id="faculty-mentors">
        <div className="container-lg">
          <SectionHeader
            title="Faculty & Mentors"
            description="Courses are led by industry professionals and expert educators—from Wall Street professionals (10+ years) and startup mentors/VCs to CEOs/GMs to university professors in AI/ML—who teach by doing and bringing real-world insights to the classroom."
            align="center"
            showDivider={true}
          />
          <FeatureGrid
            features={[
              {
                icon: "💼",
                title: "Wall Street Professionals",
                description: "10+ years experience in finance and investment",
              },
              {
                icon: "🚀",
                title: "Startup Mentors & VCs",
                description: "Venture capitalists and successful entrepreneurs",
              },
              {
                icon: "👔",
                title: "CEOs & GMs",
                description:
                  "Executive leadership and business strategy experts",
              },
              {
                icon: "🎓",
                title: "University Professors",
                description: "AI/ML researchers and academic specialists",
              },
            ]}
            columns={2}
            hoverable={true}
          />
        </div>
      </section>

      {/* Beyond the Classroom */}
      <section className="section" id="beyond-classroom">
        <div className="container-lg">
          <SectionHeader
            title="Beyond the Classroom"
            description="Evenings and weekends feature social events (movies, game nights, talent shows), sports, and themed activities that build community and confidence. Signature trips include Harvard & MIT, Brown and Yale."
            align="center"
            showDivider={true}
          />
          <div className="grid grid--2-cols gap--lg">
            <div className="card bg-gradient-to-br from-blue-50 to-indigo-100 p--lg rounded--lg shadow--md border border-blue-200">
              <div className="text--center mb--md">
                <div className="text-4xl mb--sm">🎉</div>
                <h3 className="text-xl font-bold text-blue-800 mb--sm">
                  Social Events
                </h3>
                <p className="text-blue-700">
                  Movies, game nights, talent shows, and themed activities
                </p>
              </div>
            </div>
            <div className="card bg-gradient-to-br from-green-50 to-emerald-100 p--lg rounded--lg shadow--md border border-green-200">
              <div className="text--center mb--md">
                <div className="text-4xl mb--sm">🏛️</div>
                <h3 className="text-xl font-bold text-green-800 mb--sm">
                  Signature Trips
                </h3>
                <p className="text-green-700">
                  Harvard & MIT, Brown and Yale university visits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CampSchedule />
      <SessionInfo
        link="/courses"
        linkTitle="All Courses"
        ctaTitle="Master Tomorrow's Skills Today"
        ctaDescription="Discover the academic tracks that will shape your future"
      />
    </Layout>
  );
};

export default Academics;

export async function getStaticProps() {
  try {
    const courses = await getAllCourses();
    const categories = await getCourseCategories();
    const stats = await getCourseStats();

    // Generate breadcrumbs for academics overview page
    const breadcrumbs = generateBreadcrumbs([
      { label: "Home", href: "/" },
      { label: "Academics", href: "/academics", active: true },
    ]);

    return {
      props: {
        courses,
        categories,
        stats,
        breadcrumbs,
      },
    };
  } catch (error) {
    console.error("Error loading academics data:", error);
    return {
      props: {
        courses: [],
        categories: [],
        stats: {},
        breadcrumbs: [],
      },
    };
  }
}
