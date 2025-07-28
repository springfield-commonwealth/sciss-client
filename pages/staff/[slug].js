import Layout from "@/components/layouts/Layout";
import {
  getAllStaff,
  getRelatedStaff,
  getStaffBySlug,
} from "@/lib/content/staff";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// Individual Staff Profile Page Component
const StaffPage = ({ staff, breadcrumbs, relatedStaff }) => {
  const router = useRouter();

  // Handle loading state
  if (router.isFallback) {
    return (
      <Layout>
        <div className="staff-loading">
          <h1>Loading staff profile...</h1>
        </div>
      </Layout>
    );
  }

  // Handle staff not found
  if (!staff) {
    return (
      <Layout>
        <div className="staff-not-found">
          <h1>Staff Profile Not Found</h1>
          <p>The staff member you're looking for could not be found.</p>
          <Link href="/staff" className="btn btn-primary">
            View All Staff
          </Link>
        </div>
      </Layout>
    );
  }

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
    contactEmail,
    courses,
    seo,
  } = staff;

  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <Layout breadcrumbs={breadcrumbs} showBreadcrumb={true}>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="keywords" content={seo.keywords.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={seo.metaTitle} />
        <meta property="og:description" content={seo.metaDescription} />
        <meta property="og:image" content={seo.ogImage} />
        <meta
          property="og:url"
          content={`https://sciss.edu/staff/${staff.slug}`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={seo.metaTitle} />
        <meta property="twitter:description" content={seo.metaDescription} />
        <meta property="twitter:image" content={seo.ogImage} />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://sciss.edu/staff/${staff.slug}`} />

        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: fullName,
              jobTitle: position,
              worksFor: {
                "@type": "EducationalOrganization",
                name: "Springfield Commonwealth International Summer School",
                url: "https://sciss.edu",
              },
              description: bio,
              image: seo.ogImage,
              url: `https://sciss.edu/staff/${staff.slug}`,
              knowsAbout: expertise,
              alumniOf: education.map((edu) => ({
                "@type": "EducationalOrganization",
                name: edu.institution,
              })),
              ...(contactEmail && { email: contactEmail }),
            }),
          }}
        />
      </Head>

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
                {contactEmail && (
                  <a href={`mailto:${contactEmail}`} className="contact-email">
                    Contact {firstName}
                  </a>
                )}
                <Link href="/apply" className="btn btn-primary">
                  Apply to Learn from {firstName}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Biography */}
        <section className="staff-bio">
          <div className="staff-content">
            <h2>Professional Background</h2>
            <p className="bio-text">{bio}</p>
          </div>
        </section>

        {/* Expertise */}
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
                    {edu.field && <p className="field">{edu.field}</p>}
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
        {relatedStaff && relatedStaff.length > 0 && (
          <section className="related-staff">
            <div className="staff-content">
              <h2>Related Faculty</h2>
              <div className="related-staff-grid">
                {relatedStaff.map((relatedMember) => (
                  <Link
                    key={relatedMember.id}
                    href={`/staff/${relatedMember.slug}`}
                    className="related-staff-card"
                  >
                    {relatedMember.profileImage && (
                      <img
                        src={relatedMember.profileImage}
                        alt={`${relatedMember.firstName} ${relatedMember.lastName}`}
                        className="related-staff-image"
                      />
                    )}
                    <div className="related-staff-info">
                      <h4>
                        {`${relatedMember.firstName} ${relatedMember.lastName}`.trim()}
                      </h4>
                      <p>{relatedMember.position}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="staff-cta">
          <div className="staff-content">
            <h2>Learn from {firstName}</h2>
            <p>
              Gain insights and expertise from {firstName}'s extensive
              experience by joining our programs at SCISS.
            </p>
            <div className="cta-actions">
              <Link href="/apply" className="btn btn-primary btn-large">
                Apply Now
              </Link>
              <Link href="/staff" className="btn btn-secondary">
                View All Faculty
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

// Static Site Generation Functions
export async function getStaticPaths() {
  const staff = getAllStaff();

  const paths = staff.map((member) => ({
    params: { slug: member.slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 for non-existent staff
  };
}

export async function getStaticProps({ params }) {
  const staff = getStaffBySlug(params.slug);

  if (!staff) {
    return {
      notFound: true,
    };
  }

  // Get related staff members
  const relatedStaff = getRelatedStaff(staff, 3);

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Faculty", href: "/staff" },
    {
      label: `${staff.firstName} ${staff.lastName}`.trim(),
      href: `/staff/${staff.slug}`,
      active: true,
    },
  ]);

  return {
    props: {
      staff,
      breadcrumbs,
      relatedStaff,
    },
  };
}

export default StaffPage;
