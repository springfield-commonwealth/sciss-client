import Layout from "@/components/layouts/Layout";
import CampSchedule from "@/components/sections/CampSchedule";
import CourseShowcase from "@/components/sections/CourseShowcase";
import HeroSection from "@/components/sections/HeroSection";
import {
  Badge,
  BadgeGroup,
  FeatureGrid,
  SectionHeader,
  SessionInfo,
} from "@/components/ui";
import { AcademicsHero } from "@/constants/images";
import {
  getAllCourses,
  getCourseCategories,
  getCourseStats,
} from "@/lib/content/courses";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";

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

      {/* Academic Support */}
      <section className="section bg-light">
        <div className="container-lg">
          <SectionHeader
            title="Comprehensive Academic Support"
            description="Beyond world-class instruction, we provide comprehensive support to ensure every student succeeds"
            showDivider
          />

          <FeatureGrid
            features={academicSupportData}
            columns={3}
            hoverable
            onFeatureClick={(feature, index) => {
              console.log("Clicked support feature:", feature, index);
            }}
          />
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
