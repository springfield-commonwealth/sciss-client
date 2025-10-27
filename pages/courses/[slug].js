import Layout from "@/components/layouts/Layout";
import { getAllCourses, getCourseBySlug } from "@/lib/content/courses";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// Individual Course Page Component
const CoursePage = ({ course, breadcrumbs }) => {
  const router = useRouter();

  // Handle loading state
  if (router.isFallback) {
    return (
      <Layout>
        <div className="course-page-loading">
          <h1>Loading course information...</h1>
        </div>
      </Layout>
    );
  }

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
    whatWeProvide,
  } = course;

  return (
    <Layout breadcrumbs={breadcrumbs} showBreadcrumb={true}>
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
          content={`https://sciss.org/courses/${course.slug}`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={seo.metaTitle} />
        <meta property="twitter:description" content={seo.metaDescription} />
        <meta property="twitter:image" content={seo.ogImage} />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://sciss.org/courses/${course.slug}`}
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
                url: "https://sciss.org",
              },
              educationalLevel: level,
              timeRequired: duration,
              image: seo.ogImage,
              url: `https://sciss.org/courses/${course.slug}`,
              coursePrerequisites: prerequisites,
              learningResourceType: "Course",
              inLanguage: "en-US",
            }),
          }}
        />
      </Head>

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
                <button
                  className="btn btn--primary"
                  onClick={() => router.push("/apply")}
                >
                  Apply Now
                </button>
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

        {/* Prerequisites */}
        <section className="section topBorder">
          <div className="container">
            <div className="text--center mb--lg">
              <h2>Prerequisites</h2>
              <p>What you need to know before joining</p>
            </div>
            <div className="cultural-trip-card-simple" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
              <div className="trip-icon-large">📋</div>
              <h3>Requirements</h3>
              <p className="trip-description-simple">{prerequisites}</p>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="section bg-light custom-spacing">
          <div className="container">
            <div className="text--center mb--lg">
              <h2>Program Highlights</h2>
              <p>Key features and benefits of this course</p>
            </div>
            <div className="grid grid--2">
              {highlights.map((highlight, index) => {
                const highlightIcons = ['⭐', '🚀', '💡', '🎯', '🔥', '🌟', '⚡', '🏆'];
                const highlightTypes = ['Key Feature', 'Core Benefit', 'Unique Advantage', 'Special Focus', 'Main Strength', 'Primary Goal', 'Essential Element', 'Standout Point'];

                // Special icon for music overseas performance
                let icon = highlightIcons[index % highlightIcons.length];
                if (highlight.includes('Music overseas performance or competition')) {
                  icon = '🌍';
                }

                return (
                  <div key={index} className="cultural-trip-card-simple">
                    <div className="trip-icon-large">{icon}</div>
                    <h3>{highlightTypes[index % highlightTypes.length]}</h3>
                    <p className="trip-description-simple">{highlight}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Will Provide - Only show if data exists */}
        {whatWeProvide && whatWeProvide.items && (
          <section className="section custom-spacing">
            <div className="container">
              <div className="text--center mb--lg">
                <h2>{whatWeProvide.title}</h2>
                {whatWeProvide.description && (
                  <p>{whatWeProvide.description}</p>
                )}
              </div>
              <div className="grid grid--2">
                {whatWeProvide.items.map((item, index) => {
                  const provideIcons = ['📚', '🎓', '💼', '👥', '💬', '🏆', '🗽', '🎉'];
                  return (
                    <div key={index} className="cultural-trip-card-simple">
                      <div className="trip-icon-large">{provideIcons[index % provideIcons.length]}</div>
                      <h3>{item.category}</h3>
                      <p className="trip-description-simple">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Curriculum */}
        <section className="section custom-spacing">
          <div className="container">
            <div className="text--center mb--lg">
              <h2>Curriculum</h2>
              <p>What you'll learn in this program</p>
            </div>
            <div className="grid grid--2">
              {curriculum.map((item, index) => {
                const curriculumIcons = ['📚', '🎓', '💻', '🔬', '🎯', '📊', '🎨', '🏆', '⚡', '🚀'];
                const curriculumTypes = ['Foundation', 'Core Concepts', 'Advanced Topics', 'Practical Skills', 'Real Projects', 'Case Studies', 'Hands-on Labs', 'Final Project', 'Assessment', 'Integration'];
                return (
                  <div key={index} className="cultural-trip-card-simple">
                    <div className="trip-icon-large">{curriculumIcons[index % curriculumIcons.length]}</div>
                    <h3>{curriculumTypes[index % curriculumTypes.length]}</h3>
                    <p className="trip-description-simple">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="section bg-light custom-spacing">
          <div className="container">
            <div className="text--center mb--lg">
              <h2>Learning Outcomes</h2>
              <p>Skills and knowledge you'll gain</p>
            </div>
            <div className="grid grid--3">
              {outcomes.map((outcome, index) => {
                const outcomeIcons = ['🎯', '✅', '🏆', '💡', '🚀', '⭐', '🔥', '🌟', '⚡'];
                const outcomeTypes = ['Core Skill', 'Key Competency', 'Learning Goal', 'Practical Ability', 'Knowledge Area', 'Professional Skill', 'Achievement', 'Capability', 'Expertise'];
                return (
                  <div key={index} className="info-card">
                    <h3>{outcomeIcons[index % outcomeIcons.length]} {outcomeTypes[index % outcomeTypes.length]}</h3>
                    <p>{outcome}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="container text--center">
            <h2>Ready to Join This Program?</h2>
            <p>
              Secure your spot in this exclusive program and start your
              journey toward academic excellence.
            </p>
            <div className="cta-actions">
              <button
                className="btn btn--primary"
                onClick={() => router.push("/apply")}
              >
                Apply Now
              </button>
              <Link href="/courses" className="btn btn--secondary">
                View All Courses
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
