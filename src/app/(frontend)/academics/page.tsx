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
import React from "react";

export const metadata = {
  title: "Academic Programs - SCISS",
  description:
    "Explore cutting-edge academic programs at SCISS including Path to Wall Street, AI, Entrepreneurship, and more.",
};

export default function Academics(): React.JSX.Element {
  // Generate breadcrumbs for academics page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Academic Programs", href: "/academics", active: true },
  ]);

  // Get courses data
  const courses = getAllCourses();
  const categories = getCourseCategories();
  const stats = getCourseStats();

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
}
