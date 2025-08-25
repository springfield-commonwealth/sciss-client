import Layout from "@/components/layouts/Layout";
import { getAllCourses, getCourseBySlug } from "@/lib/content/courses";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";
import React from "react";

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    return {
      title: "Course Not Found - SCISS",
      description: "The course you're looking for could not be found.",
    };
  }

  return {
    title: course.seo.metaTitle,
    description: course.seo.metaDescription,
    keywords: course.seo.keywords.join(", "),
    openGraph: {
      title: course.seo.metaTitle,
      description: course.seo.metaDescription,
      images: [course.seo.ogImage],
      url: `https://sciss.org/courses/${course.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: course.seo.metaTitle,
      description: course.seo.metaDescription,
      images: [course.seo.ogImage],
    },
    alternates: {
      canonical: `https://sciss.org/courses/${course.slug}`,
    },
  };
}

// Individual Course Page Component
export default function CoursePage({
  params,
}: {
  params: { slug: string };
}): React.JSX.Element {
  // Handle loading state

  const course = getCourseBySlug(params.slug);

  // Handle course not found
  if (!course) {
    return (
      <Layout>
        <div className="course-page-not-found">
          <h1>Course Not Found</h1>
          <p>The course you're looking for could not be found.</p>
        </div>
      </Layout>
    );
  }

  // Generate breadcrumbs for course page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Academic Programs", href: "/courses" },
    { label: course.title, href: `/courses/${course.slug}`, active: true },
  ]);

  const {
    title,
    description,
    image,
    level,
    duration,
    session,
    curriculum,
    outcomes,
    prerequisites,
    highlights,
    capacity,
    ageRange,
    seo,
  } = course;

  return (
    <Layout breadcrumbs={breadcrumbs} showBreadcrumb={true}>
      <main className="course-page-page">
        {/* Hero Section */}
        <section className="course-page-hero">
          <div className="course-page-hero-content">
            <div className="course-page-hero-text">
              <h1 className="course-page-title">{title}</h1>
              <p className="course-page-description">{description}</p>

              <div className="course-page-meta">
                <div className="course-page-meta-item">
                  <span className="meta-label">Level:</span>
                  <span className="meta-value">{level}</span>
                </div>
                <div className="course-page-meta-item">
                  <span className="meta-label">Duration:</span>
                  <span className="meta-value">{duration}</span>
                </div>
                <div className="course-page-meta-item">
                  <span className="meta-label">Session:</span>
                  <span className="meta-value">{session}</span>
                </div>
              </div>

              <div className="course-page-actions">
                <Link href="/apply" className="btn btn--primary">
                  Apply Now
                </Link>
                <Link href="/courses" className="btn btn--header">
                  View All Courses
                </Link>
              </div>
            </div>

            {image && (
              <div className="course-page-hero-image">
                <img src={image} alt={title} />
              </div>
            )}
          </div>
        </section>

        {/* Course Details */}
        <section className="course-page-details">
          <div className="course-page-content">
            {/* Prerequisites */}
            <div className="course-page-section">
              <h2>Prerequisites</h2>
              <p>{prerequisites}</p>
            </div>

            {/* Highlights */}
            <div className="course-page-section">
              <h2>Program Highlights</h2>
              <ul className="highlights-list">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="course-page-section">
              <h2>Curriculum</h2>
              <ul className="curriculum-list">
                {curriculum.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div className="course-page-section">
              <h2>Learning Outcomes</h2>
              <ul className="outcomes-list">
                {outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="course-page-cta">
              <h2>Ready to Join This Program?</h2>
              <p>
                Secure your spot in this exclusive program and start your
                journey toward academic excellence.
              </p>
              <Link href="/apply" className="btn btn--header btn--lg">
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

// Static Site Generation Functions - App Router
export async function generateStaticParams() {
  const courses = getAllCourses();

  return courses.map((course) => ({
    slug: course.slug,
  }));
}
