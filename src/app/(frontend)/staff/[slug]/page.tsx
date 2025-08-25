import Layout from "@/components/layouts/Layout";
import { getAllStaff, getStaffBySlug } from "@/lib/content/staff";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";
import React from "react";

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const staffMember = getStaffBySlug(params.slug);

  if (!staffMember) {
    return {
      title: "Staff Member Not Found - SCISS",
      description: "The staff member you're looking for could not be found.",
    };
  }

  return {
    title: staffMember.seo.metaTitle,
    description: staffMember.seo.metaDescription,
    keywords: staffMember.seo.keywords.join(", "),
    openGraph: {
      title: staffMember.seo.metaTitle,
      description: staffMember.seo.metaDescription,
      images: [staffMember.seo.ogImage],
      url: `https://sciss.org/staff/${staffMember.slug}`,
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: staffMember.seo.metaTitle,
      description: staffMember.seo.metaDescription,
      images: [staffMember.seo.ogImage],
    },
    alternates: {
      canonical: `https://sciss.org/staff/${staffMember.slug}`,
    },
  };
}

// This duplicate function will be removed - keeping only the one at the bottom

// Individual Staff Profile Page Component
export default function StaffPage({
  params,
}: {
  params: { slug: string };
}): React.JSX.Element {
  // Handle loading state

  const staffMember = getStaffBySlug(params.slug);

  // Handle staff not found
  if (!staffMember) {
    return (
      <Layout>
        <div className="staff-not-found">
          <h1>Staff Profile Not Found</h1>
          <p>The staff member you're looking for could not be found.</p>
          <Link href="/staff" className="btn btn--primary">
            View All Staff
          </Link>
        </div>
      </Layout>
    );
  }

  // Generate breadcrumbs for staff page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Our Staff", href: "/staff" },
    {
      label: `${staffMember.firstName} ${staffMember.lastName}`,
      href: `/staff/${staffMember.slug}`,
      active: true,
    },
  ]);

  const {
    firstName,
    lastName,
    position,
    department,
    bio,
    expertise,
    education,
    experience,
    achievements,
    profileImage,
    courses,
    seo,
  } = staffMember;

  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <Layout breadcrumbs={breadcrumbs} showBreadcrumb={true}>
      <main className="staff-page">
        {/* Staff Profile Header */}
        <section className="staff-hero">
          <div className="staff-hero-content">
            <div className="staff-hero-image">
              {profileImage && (
                <img
                  src={profileImage}
                  alt={fullName}
                  className="staff-portrait"
                />
              )}
            </div>

            <div className="staff-hero-info">
              <h1 className="staff-name">{fullName}</h1>
              <h2 className="staff-position">{position}</h2>
              <p className="staff-department">{department}</p>

              <div className="staff-contact">
                <Link href="/apply" className="btn btn--header">
                  Apply to Learn from {firstName}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Biography */}
        {bio && (
          <section className="staff-bio">
            <div className="staff-content">
              <h2>Professional Background</h2>
              <p className="bio-text">{bio}</p>
            </div>
          </section>
        )}

        {/* Expertise */}
        {expertise && expertise.length > 0 && (
          <section className="staff-expertise">
            <div className="staff-content">
              <h2>Areas of Expertise</h2>
              <div className="expertise-list">
                {expertise.map((skill, index) => (
                  <span key={index} className="expertise-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <section className="staff-education">
            <div className="staff-content">
              <h2>Education</h2>
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <p className="year">{edu.year}</p>
                    <p className="degree">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Professional Experience */}
        {experience && experience.length > 0 && (
          <section className="staff-experience">
            <div className="staff-content">
              <h2>Professional Experience</h2>
              <div className="experience-list">
                {experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <h4>{exp.position}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="duration">
                      {exp.startDate} - {exp.endDate || "Present"}
                    </p>
                    <p className="description">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <section className="staff-achievements">
            <div className="staff-content">
              <h2>Key Achievements</h2>
              <ul className="achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Courses Taught */}
        {courses && courses.length > 0 && (
          <section className="staff-courses">
            <div className="staff-content">
              <h2>Courses at SCISS</h2>
              <div className="courses-list">
                {courses.map((courseSlug, index) => (
                  <Link
                    key={index}
                    href={`/courses/${courseSlug}`}
                    className="course-link"
                  >
                    View {courseSlug.replace(/-/g, " ")} Course
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Staff */}
        {/* Note: Related staff functionality can be added here when needed */}

        {/* Call to Action */}
        <section className="staff-cta">
          <div className="staff-content">
            <h2>Learn from {firstName}</h2>
            <p>
              Gain insights and expertise from {firstName}'s extensive
              experience by joining our programs at SCISS.
            </p>
            <div className="cta-actions">
              <Link href="/apply" className="btn btn--primary btn--lg">
                Apply Now
              </Link>
              <Link href="/staff" className="btn btn--secondary">
                View All Faculty
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
  const staff = getAllStaff();

  return staff.map((member) => ({
    slug: member.slug,
  }));
}
