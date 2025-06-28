import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import WeeklySchedule from "@/components/ui/WeeklySchedule";
import Carousel from "@/components/ui/Carousel";
import { ProgramOverviewHero } from "@/constants/images";

const ProgramOverview = () => {
  const coreCourses = [
    {
      image: "/images/featured/core.png",
      title: "Courses",
      link: "/academics",
    },
    {
      image: "/images/carousel/dance.png",
      title: "Activities",
      link: "/life-activities",
    },
    {
      image: "/images/slider/home/harvard-trip.JPG",
      title: "Trips",
      link: "/day-trips",
    },
  ];

  return (
    <Layout
      title="Program Overview - SCISS"
      description="Discover the comprehensive academic programs, daily structure, and unique opportunities at SCISS Summer School."
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
          <div className="grid grid-2">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                At SCISS, our mission is to foster a dynamic learning
                environment where curiosity thrives, friendships flourish, and
                personal growth is nurtured. We believe in providing students
                with transformative experiences that prepare them for future
                academic and professional success.
              </p>

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
              <h2>What Sets Us Apart</h2>
              <div className="unique-features">
                <div className="feature">
                  <h4>Expert Faculty</h4>
                  <p>
                    Learn from industry professionals, university professors,
                    and accomplished practitioners
                  </p>
                </div>

                <div className="feature">
                  <h4>Global Community</h4>
                  <p>
                    Connect with like-minded students from around the world in a
                    supportive environment
                  </p>
                </div>

                <div className="feature">
                  <h4>Real-World Application</h4>
                  <p>
                    Hands-on projects and practical experiences that translate
                    to real career benefits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* program carousel */}
      <section className="section bg-light" id="program-carousel">
        <div className="container">
          <Carousel items={coreCourses} />
        </div>
      </section>

      {/* electives carousel */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Activity Highlights</h2>
            <p>
              Experience the best in sports, fitness, and recreational
              activities
            </p>
          </div>

          {/* <Carousel items={activitiesCarouselItems} /> */}
        </div>
      </section>

      <WeeklySchedule />
    </Layout>
  );
};

export default ProgramOverview;
