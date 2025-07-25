import Layout from "@/components/layouts/Layout";
import {
  getActivityBySlug,
  getAllActivities,
  getRelatedActivities,
} from "@/lib/content/activities";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// Individual Activity Page Component
const ActivityPage = ({ activity, breadcrumbs, relatedActivities }) => {
  const router = useRouter();

  // Handle loading state
  if (router.isFallback) {
    return (
      <Layout>
        <div className="activity-loading">
          <h1>Loading activity details...</h1>
        </div>
      </Layout>
    );
  }

  // Handle activity not found
  if (!activity) {
    return (
      <Layout>
        <div className="activity-not-found">
          <h1>Activity Not Found</h1>
          <p>The activity you're looking for could not be found.</p>
          <Link href="/activities" className="btn btn-primary">
            View All Activities
          </Link>
        </div>
      </Layout>
    );
  }

  const {
    title,
    description,
    category,
    level,
    duration,
    schedule,
    features,
    outcomes,
    equipment,
    instructors,
    maxParticipants,
    difficulty,
    image,
    seo,
  } = activity;

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
          content={`https://sciss.edu/activities/${activity.slug}`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={seo.metaTitle} />
        <meta property="twitter:description" content={seo.metaDescription} />
        <meta property="twitter:image" content={seo.ogImage} />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://sciss.edu/activities/${activity.slug}`}
        />

        {/* Structured Data - Course Schema */}
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
              courseMode: "in-person",
              timeRequired: duration,
              educationalLevel: level,
              about: category,
              image: seo.ogImage,
              url: `https://sciss.edu/activities/${activity.slug}`,
              offers: {
                "@type": "Offer",
                category: "educational",
                availability: "InStock",
              },
            }),
          }}
        />
      </Head>

      <main className="activity-page">
        {/* Activity Hero Section */}
        <section className="activity-hero">
          <div className="activity-hero-content">
            <div className="activity-hero-info">
              <div className="activity-meta">
                <span className="category-badge">{category}</span>
                <span className="level-badge">{level}</span>
                <span className="difficulty-badge">{difficulty}</span>
              </div>

              <h1 className="activity-title">{title}</h1>
              <p className="activity-description">{description}</p>

              <div className="activity-quick-info">
                <div className="quick-info-item">
                  <strong>Duration:</strong> {duration}
                </div>
                <div className="quick-info-item">
                  <strong>Schedule:</strong> {schedule.frequency}
                </div>
                <div className="quick-info-item">
                  <strong>Max Participants:</strong> {maxParticipants}
                </div>
                <div className="quick-info-item">
                  <strong>Location:</strong> {schedule.location}
                </div>
              </div>

              <div className="activity-actions">
                <Link href="/apply" className="btn btn-primary btn-large">
                  Register for This Activity
                </Link>
                <Link href="/activities" className="btn btn-secondary">
                  View All Activities
                </Link>
              </div>
            </div>

            <div className="activity-hero-image">
              {image && (
                <img src={image} alt={title} className="activity-image" />
              )}
            </div>
          </div>
        </section>

        {/* Activity Schedule */}
        <section className="activity-schedule">
          <div className="activity-content">
            <h2>Schedule & Times</h2>
            <div className="schedule-details">
              <div className="schedule-item">
                <h4>Frequency</h4>
                <p>{schedule.frequency}</p>
              </div>
              <div className="schedule-item">
                <h4>Time Slots</h4>
                <div className="time-slots">
                  {schedule.timeSlots.map((slot, index) => (
                    <span key={index} className="time-slot">
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
              <div className="schedule-item">
                <h4>Location</h4>
                <p>{schedule.location}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Activity Features */}
        <section className="activity-features">
          <div className="activity-content">
            <h2>Program Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">✓</div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="activity-outcomes">
          <div className="activity-content">
            <h2>Learning Outcomes</h2>
            <div className="outcomes-list">
              {outcomes.map((outcome, index) => (
                <div key={index} className="outcome-item">
                  <div className="outcome-number">{index + 1}</div>
                  <p>{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment & Requirements */}
        <section className="activity-equipment">
          <div className="activity-content">
            <h2>Equipment & Requirements</h2>
            <div className="equipment-grid">
              <div className="equipment-section">
                <h4>What's Provided</h4>
                <ul className="equipment-list provided">
                  {equipment
                    .filter(
                      (item) =>
                        item.includes("provided") ||
                        item.includes("available") ||
                        item.includes("included")
                    )
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
              <div className="equipment-section">
                <h4>What to Bring</h4>
                <ul className="equipment-list required">
                  {equipment
                    .filter(
                      (item) =>
                        item.includes("required") ||
                        item.includes("recommended") ||
                        item.includes("essential") ||
                        item.includes("shoes") ||
                        item.includes("clothing")
                    )
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Instructors */}
        <section className="activity-instructors">
          <div className="activity-content">
            <h2>Expert Instructors</h2>
            <div className="instructors-list">
              {instructors.map((instructor, index) => (
                <div key={index} className="instructor-item">
                  <div className="instructor-icon">👨‍🏫</div>
                  <p>{instructor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Activities */}
        {relatedActivities && relatedActivities.length > 0 && (
          <section className="related-activities">
            <div className="activity-content">
              <h2>Related Activities</h2>
              <div className="related-activities-grid">
                {relatedActivities.map((relatedActivity) => (
                  <Link
                    key={relatedActivity.id}
                    href={`/activities/${relatedActivity.slug}`}
                    className="related-activity-card"
                  >
                    {relatedActivity.image && (
                      <img
                        src={relatedActivity.image}
                        alt={relatedActivity.title}
                        className="related-activity-image"
                      />
                    )}
                    <div className="related-activity-info">
                      <div className="related-activity-meta">
                        <span className="category-tag">
                          {relatedActivity.category}
                        </span>
                        <span className="level-tag">
                          {relatedActivity.level}
                        </span>
                      </div>
                      <h4>{relatedActivity.title}</h4>
                      <p>{relatedActivity.description.substring(0, 100)}...</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="activity-cta">
          <div className="activity-content">
            <h2>Ready to Join {title}?</h2>
            <p>
              Experience the excitement and learning opportunities of our{" "}
              {category.toLowerCase()} program. Register now to secure your
              spot!
            </p>
            <div className="cta-actions">
              <Link href="/apply" className="btn btn-primary btn-large">
                Register Now
              </Link>
              <Link href="/life-activities" className="btn btn-secondary">
                Explore More Activities
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
  const activities = getAllActivities();

  const paths = activities.map((activity) => ({
    params: { slug: activity.slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 for non-existent activities
  };
}

export async function getStaticProps({ params }) {
  const activity = getActivityBySlug(params.slug);

  if (!activity) {
    return {
      notFound: true,
    };
  }

  // Get related activities
  const relatedActivities = getRelatedActivities(activity, 3);

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Life & Activities", href: "/life-activities" },
    { label: "Activities", href: "/activities" },
    {
      label: activity.title,
      href: `/activities/${activity.slug}`,
      active: true,
    },
  ]);

  return {
    props: {
      activity,
      breadcrumbs,
      relatedActivities,
    },
  };
}

export default ActivityPage;
