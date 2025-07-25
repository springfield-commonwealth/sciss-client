import Layout from "@/components/layouts/Layout";
import { getAllCourses, getCourseBySlug } from "@/lib/content/courses";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";
import { useRouter } from "next/router";

// Individual Course Page Component
const CoursePage = ({ course, breadcrumbs }) => {
  const router = useRouter();

  // Handle loading state
  if (router.isFallback) {
    return (
      <Layout>
        <div className="course-loading">
          <h1>Loading course information...</h1>
        </div>
      </Layout>
    );
  }

  // Handle course not found
  if (!course) {
    return (
      <Layout>
        <div className="course-not-found">
          <h1>Course Not Found</h1>
          <p>The course you're looking for could not be found.</p>
        </div>
      </Layout>
    );
  }

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
    <Layout breadcrumbs={breadcrumbs}>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="keywords" content={seo.keywords.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.metaTitle} />
        <meta property="og:description" content={seo.metaDescription} />
        <meta property="og:image" content={seo.ogImage} />
        <meta
          property="og:url"
          content={`https://sciss.edu/courses/${course.slug}`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={seo.metaTitle} />
        <meta property="twitter:description" content={seo.metaDescription} />
        <meta property="twitter:image" content={seo.ogImage} />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://sciss.edu/courses/${course.slug}`}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: title,
              description: description,
              provider: {
                "@type": "EducationalOrganization",
                name: "Springfield Commonwealth International Summer School",
                url: "https://sciss.edu",
              },
              educationalLevel: level,
              timeRequired: duration,
              image: seo.ogImage,
              url: `https://sciss.edu/courses/${course.slug}`,
              coursePrerequisites: prerequisites,
              learningResourceType: "Course",
              inLanguage: "en-US",
            }),
          }}
        />
      </Head>

      <main className="course-page">
        {/* Hero Section */}
        <section className="course-hero">
          <div className="course-hero-content">
            <div className="course-hero-text">
              <h1 className="course-title">{title}</h1>
              <p className="course-description">{description}</p>

              <div className="course-meta">
                <div className="course-meta-item">
                  <span className="meta-label">Level:</span>
                  <span className="meta-value">{level}</span>
                </div>
                <div className="course-meta-item">
                  <span className="meta-label">Duration:</span>
                  <span className="meta-value">{duration}</span>
                </div>
                <div className="course-meta-item">
                  <span className="meta-label">Session:</span>
                  <span className="meta-value">{session}</span>
                </div>
                <div className="course-meta-item">
                  <span className="meta-label">Capacity:</span>
                  <span className="meta-value">{capacity} students</span>
                </div>
                <div className="course-meta-item">
                  <span className="meta-label">Age Range:</span>
                  <span className="meta-value">{ageRange}</span>
                </div>
              </div>

              <div className="course-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => router.push("/apply")}
                >
                  Apply Now
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => router.push("/academics")}
                >
                  View All Courses
                </button>
              </div>
            </div>

            {image && (
              <div className="course-hero-image">
                <img src={image} alt={title} />
              </div>
            )}
          </div>
        </section>

        {/* Course Details */}
        <section className="course-details">
          <div className="course-content">
            {/* Prerequisites */}
            <div className="course-section">
              <h2>Prerequisites</h2>
              <p>{prerequisites}</p>
            </div>

            {/* Highlights */}
            <div className="course-section">
              <h2>Program Highlights</h2>
              <ul className="highlights-list">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="course-section">
              <h2>Curriculum</h2>
              <ul className="curriculum-list">
                {curriculum.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div className="course-section">
              <h2>Learning Outcomes</h2>
              <ul className="outcomes-list">
                {outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="course-cta">
              <h2>Ready to Join This Program?</h2>
              <p>
                Secure your spot in this exclusive program and start your
                journey toward academic excellence.
              </p>
              <button
                className="btn btn-primary btn-large"
                onClick={() => router.push("/apply")}
              >
                Apply Now
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

// Static Site Generation Functions
export async function getStaticPaths() {
  const courses = getAllCourses();

  const paths = courses.map((course) => ({
    params: { slug: course.slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 for non-existent courses
  };
}

export async function getStaticProps({ params }) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    return {
      notFound: true,
    };
  }

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Academics", href: "/academics" },
    { label: course.title, href: `/courses/${course.slug}`, active: true },
  ]);

  return {
    props: {
      course,
      breadcrumbs,
    },
  };
}

export default CoursePage;
