import Layout from "@/components/layouts/Layout";
import CampSchedule from "@/components/sections/CampSchedule";
import HeroSection from "@/components/sections/HeroSection";
import {
  Badge,
  BadgeGroup,
  FeatureGrid,
  FooterCTA,
  SectionHeader,
} from "@/components/ui";
import Carousel from "@/components/ui/Carousel";
import { AcademicsCarouselItems } from "@/constants/academicsContent";
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
      FooterCTALinkTitle="Life & Activities"
      FooterCTALink="/life-activities"
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

      {/* Narrative Intro Sections */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Overview"
            description="At SCISS (SC International Summer School), academics are designed to be hands-on, structured, and inspiring. Students learn in the morning, build projects in the afternoon, and share their work in evening showcases—supported by caring residential staff and age-appropriate cohorts."
            showDivider
          />
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="What This Means for Your Child"
          />
          <ul>
            <li>Morning academic classes in their chosen track (Investment, Entrepreneurship, AI/Robotics, Leadership/Public Speaking, Music/Stage, Sports).</li>
            <li>Applied learning every day: projects, rehearsals, labs, and skill-building that culminate in a capstone showcase and certificate.</li>
            <li>Balanced weeks with structured classes and curated excursions that connect learning to the wider world.</li>
          </ul>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="How Learning Works"
          />
          <ul>
            <li>Cohorts: Junior (G4–G7) and Senior (G8–G12) move at the right pace with the right tools and challenges.</li>
            <li>Daily rhythm: Academics in the morning → project studio/electives in the afternoon → community events in the evening.</li>
            <li>Beyond the classroom: University and cultural visits (e.g., Harvard & MIT & Brown full day; Yale half day) expand horizons.</li>
          </ul>
        </div>
      </section>

      {/* Introduction to Core Courses */}
      <section className="section bg-light" id="core-courses-intro">
        <div className="container">
          <h2 className="text-2xl font-bold mb-4">Introduction to Core Courses</h2>
          <p>
            Students choose one primary academic track per session. Below are refined, prose overviews that blend the defining features of each course.
          </p>

          <h3 className="text-xl font-semibold mt-6">Path to Wall Street Impact Investment</h3>
          <p>
            Students build financial fluency step by step: understanding markets and financial statements, practicing stock trading in a simulator, and managing a diversified portfolio while tracking macroeconomic signals and industry research. The capstone experience is our $1M virtual investment competition and a polished stock pitch—realistic practice that sharpens analysis, communication, and decision-making.
          </p>

          <h3 className="text-xl font-semibold mt-6">Youth Innovation & Entrepreneurship (Teen Start-ups)</h3>
          <p>
            From mindset to model to market, this course blends business-model design with school–style design thinking. Students test ideas through research and trend analysis, use modern AI tools (for example, ChatGPT/DeepSeek) to accelerate prototyping, and refine a story that investors can believe in. It all builds toward a friendly pitch showcase, where teams present to mentors and receive actionable feedback.
          </p>

          <h3 className="text-xl font-semibold mt-6">AI & Robotics</h3>
          <p>
            This track takes students from Python programming into machine learning and deep learning, then opens the door to Transformers and large language models. Along the way, we connect concepts to daily life—autonomous driving, conversational AI, recommendation systems—and explore how robotics powers industry, healthcare, and scientific exploration. The session culminates in a team-built AI + robotics prototype and demo, with discussion of career pathways and future trends to help students see where their interests can lead.
          </p>

          <h3 className="text-xl font-semibold mt-6">Leadership · Arts · English · Stage</h3>
          <p>
            Confidence grows through daily public speaking and debate, targeted English writing support, and workshops on responsibility, communication, innovation, and teamwork. Academic coaching can include math refreshers, SAT practice, or ESL. Creative work runs in parallel—visual arts and brand design in the studio, plus a music/theatre production that moves from rehearsal to a public performance by week’s end.
          </p>

          <h3 className="text-xl font-semibold mt-6">Sports Intensive (e.g. Basketball focus)</h3>
          <p>
            Basketball anchors this track, with fundamentals, tactics, and live play layered over structured conditioning and sports-psychology habits. Students train with a professional coaching team (including U.S. high-school/college players) and round out their week with multi-sport options—soccer, golf, dance, and more—so athletic growth is balanced with variety and fun.
          </p>

          <h3 className="text-xl font-semibold mt-6">Placement & Progression</h3>
          <p>
            Leveling within tracks (especially Investment) lets students start at the right depth and progress across sessions (e.g., from Intro to Valuation). Older students in AI/ML dive into Python projects and model building; younger learners work with visual coding and hardware kits.
          </p>

          <h3 className="text-xl font-semibold mt-6">Practice & Competitions</h3>
          <p>
            Across SCISS, learning leads to the real thing: AI & Robotics teams build and demo working prototypes; Investment students compete in a simulator-based stock challenge with a notional $1M fund; Entrepreneurship cohorts pitch ventures to a mentor panel; Leadership/Arts students step onto real stages for debates, exhibitions, and a final show; and Sports culminates in basketball games and skills challenges that celebrate progress.
          </p>

          <h3 className="text-xl font-semibold mt-6">Assessment & Portfolio</h3>
          <p>
            Capstones: stock-pitch presentations, startup pitches, public talks, performances, or robotics challenges. Certificate of Completion for every student; awards and showcases celebrate growth and achievement.
          </p>

          <h3 className="text-xl font-semibold mt-6">Completion & Alumni Support</h3>
          <p>
            Every student finishes with a SCISS/YEFA Certificate of Completion, and select honors—such as Best Investment Team, Best Venture Pitch, or Best Stage Performance—recognize outstanding work. Certificates and awards strengthen future applications to selective universities and competitive internships. Students planning to enter international business competitions become part of our SCISS Summer Camp Alumni community, and our mentor team provides up to five hours of complimentary post-camp guidance on topic selection, solution design, and presentation coaching to turn ambition into results.
          </p>

          <h3 className="text-xl font-semibold mt-6">Faculty & Mentors</h3>
          <p>
            Courses are led by industry professionals and expert educators—from Wall Street professionals (10+ years) and startup mentors/VCs to CEOs/GMs to university professors in AI/ML—who teach by doing and bring real-world insights to the classroom.
          </p>

          <h3 className="text-xl font-semibold mt-6">Beyond the Classroom</h3>
          <p>
            Evenings and weekends feature social events (movies, game nights, talent shows), sports, and themed activities that build community and confidence. Signature trips include Harvard & MIT, Brown and Yale.
          </p>

          <div className="mt-8">
            <h4 className="text-lg font-semibold">Quick Facts</h4>
            <ul className="list-disc ml-6">
              <li>Grades: 4–12 (Junior & Senior cohorts)</li>
              <li>Format: Residential (boarding)</li>
              <li>Outcome: Portfolio artifact + capstone + certificate</li>
              <li>Signature Feature: $1M Virtual Investment Competition in the Investment track.</li>
              <li>Bonus for elevating college admission: Renowned Business Competition guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Courses Overview */}
      <section className="section bg-light" id="core-courses-carousel">
        <div className="container">
          <SectionHeader
            title="Core Academic Courses"
            subtitle="Choose Your Path to Excellence"
            description="Six specialized tracks designed to match your interests and career aspirations"
            showDivider
            align="center"
          />

          <Carousel items={AcademicsCarouselItems} />
        </div>
      </section>

      {/* Academic Support */}
      <section className="section bg-light">
        <div className="container">
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

      {/* Individual Course Directory */}
      <section className="section bg-light" id="programs">
        <div className="container">
          <SectionHeader
            title="Explore Our Academic Programs"
            description="Click on any program to view detailed curriculum, learning outcomes, and application information"
            showDivider
          />

          {hasValidCourses ? (
            <div className="course-directory grid grid--2">
              {coursesList.map((course) => (
                <div
                  key={course.id || course.slug}
                  className="course-preview-card"
                >
                  <div className="course-preview-header">
                    <div className="course-preview-image">
                      {course.image && (
                        <img src={course.image} alt={course.title} />
                      )}
                    </div>
                    <div className="course-preview-info">
                      <h3>{course.title}</h3>
                      <div className="course-preview-meta">
                        <BadgeGroup>
                          <Badge variant="primary" size="small">
                            {course.level || "Intermediate"}
                          </Badge>
                          <Badge variant="secondary" size="small">
                            {course.duration || "3 weeks"}
                          </Badge>
                          <Badge variant="info" size="small">
                            {course.session || "Summer"}
                          </Badge>
                        </BadgeGroup>
                      </div>
                    </div>
                  </div>

                  <div className="course-preview-content">
                    <p className="course-preview-description">
                      {course.description}
                    </p>

                    <div className="course-preview-highlights">
                      <h4>Program Highlights</h4>
                      <ul>
                        {course.highlights &&
                          course.highlights.length > 0 &&
                          course.highlights
                            .slice(0, 3)
                            .map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                        {(!course.highlights ||
                          course.highlights.length === 0) && (
                          <li>
                            Comprehensive curriculum designed for academic
                            excellence
                          </li>
                        )}
                        {course.highlights && course.highlights.length > 3 && (
                          <li>...and {course.highlights.length - 3} more</li>
                        )}
                      </ul>
                    </div>

                    <div className="course-preview-actions">
                      <Link
                        href={`/courses/${course.slug}`}
                        className=" btn btn--primary"
                      >
                        View Full Details
                      </Link>
                      <Link href="/apply" className=" btn btn--outline">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="course-directory-loading">
              <p>Loading course information...</p>
              <p>
                If this persists, please visit our{" "}
                <Link href="/apply">
                  <a>application page</a>
                </Link>{" "}
                to learn more.
              </p>
            </div>
          )}

          <div className="text--center mt--lg">
            <p className="course-directory-note">
              Each program includes comprehensive curriculum, expert
              instruction, hands-on projects, and career preparation.
            </p>
            <Link href="/courses" className="btn btn--primary btn--lg">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      <CampSchedule />
      <FooterCTA
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
