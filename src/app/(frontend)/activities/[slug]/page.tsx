import Layout from "@/components/layouts/Layout";
import {
  getActivityBySlug,
  getAllActivities,
  getRelatedActivities,
} from "@/lib/content/activities";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";
import React from "react";

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const activity = getActivityBySlug(params.slug);

  if (!activity) {
    return {
      title: "Activity Not Found - SCISS",
      description: "The activity you're looking for could not be found.",
    };
  }

  return {
    title: activity.seo.metaTitle,
    description: activity.seo.metaDescription,
    keywords: activity.seo.keywords.join(", "),
    openGraph: {
      title: activity.seo.metaTitle,
      description: activity.seo.metaDescription,
      images: [activity.seo.ogImage],
      url: `https://sciss.org/activities/${activity.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: activity.seo.metaTitle,
      description: activity.seo.metaDescription,
      images: [activity.seo.ogImage],
    },
    alternates: {
      canonical: `https://sciss.org/activities/${activity.slug}`,
    },
  };
}

// Generate static params for all activities
export async function generateStaticParams() {
  const activities = getAllActivities();
  return activities.map((activity) => ({
    slug: activity.slug,
  }));
}

export default function ActivityPage({
  params,
}: {
  params: { slug: string };
}): React.JSX.Element {
  const activity = getActivityBySlug(params.slug);

  // Handle activity not found
  if (!activity) {
    return (
      <Layout>
        <div className="activity-not-found">
          <h1>Activity Not Found</h1>
          <p>The activity you're looking for could not be found.</p>
          <Link href="/activities" className="btn btn--primary">
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

  // Generate breadcrumbs for activity page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Life Activities", href: "/activities" },
    { label: title, href: `/activities/${activity.slug}`, active: true },
  ]);

  // Get related activities
  const relatedActivities = getRelatedActivities(activity, 3);

  return (
    <Layout breadcrumbs={breadcrumbs} showBreadcrumb={true}>
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
              url: "https://sciss.org",
            },
            courseMode: "offline",
            educationalLevel: level,
            timeRequired: duration,
            coursePrerequisites: difficulty,
            numberOfStudents: maxParticipants,
            instructor: instructors?.map((instructor) => ({
              "@type": "Person",
              name: instructor,
            })),
            courseCode: activity.slug,
            url: `https://sciss.org/activities/${activity.slug}`,
            image: image,
            category: category,
          }),
        }}
      />

      {/* Hero Section */}
      <section className="hero-section activity-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="breadcrumb-container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                  <ol>
                    {breadcrumbs.map((crumb, index) => (
                      <li key={index}>
                        {crumb.active ? (
                          <span className="breadcrumb-current">
                            {crumb.label}
                          </span>
                        ) : (
                          <Link href={crumb.href} className="breadcrumb-link">
                            {crumb.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

              <div className="activity-header">
                <div className="activity-badges">
                  <span className="category-badge">{category}</span>
                  <span className="level-badge">{level}</span>
                  <span className="duration-badge">{duration}</span>
                </div>
                <h1 className="activity-title">{title}</h1>
                <p className="activity-description">{description}</p>
              </div>
            </div>

            <div className="hero-image">
              <img src={image} alt={title} className="activity-hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Activity Details */}
      <section className="section activity-details">
        <div className="container">
          <div className="grid grid--2">
            <div className="activity-main">
              {/* Features */}
              {features && features.length > 0 && (
                <div className="activity-section">
                  <h2>Key Features</h2>
                  <ul className="features-list">
                    {features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcomes */}
              {outcomes && outcomes.length > 0 && (
                <div className="activity-section">
                  <h2>Learning Outcomes</h2>
                  <ul className="outcomes-list">
                    {outcomes.map((outcome, index) => (
                      <li key={index} className="outcome-item">
                        <span className="outcome-icon">🎯</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Schedule */}
              {schedule && (
                <div className="activity-section">
                  <h2>Schedule</h2>
                  <div className="schedule-info">
                    <p>
                      {typeof schedule === "string"
                        ? schedule
                        : `${schedule.frequency} - ${schedule.timeSlots?.join(
                            ", "
                          )} at ${schedule.location}`}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="activity-sidebar">
              {/* Quick Info */}
              <div className="activity-info-card">
                <h3>Activity Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <strong>Category:</strong> {category}
                  </div>
                  <div className="info-item">
                    <strong>Level:</strong> {level}
                  </div>
                  <div className="info-item">
                    <strong>Duration:</strong> {duration}
                  </div>
                  {difficulty && (
                    <div className="info-item">
                      <strong>Difficulty:</strong> {difficulty}
                    </div>
                  )}
                  {maxParticipants && (
                    <div className="info-item">
                      <strong>Max Participants:</strong> {maxParticipants}
                    </div>
                  )}
                </div>
              </div>

              {/* Equipment */}
              {equipment && equipment.length > 0 && (
                <div className="activity-info-card">
                  <h3>Required Equipment</h3>
                  <ul className="equipment-list">
                    {equipment.map((item, index) => (
                      <li key={index} className="equipment-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Instructors */}
              {instructors && instructors.length > 0 && (
                <div className="activity-info-card">
                  <h3>Instructors</h3>
                  <ul className="instructors-list">
                    {instructors.map((instructor, index) => (
                      <li key={index} className="instructor-item">
                        {instructor}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Activities */}
      {relatedActivities && relatedActivities.length > 0 && (
        <section className="section related-activities">
          <div className="container">
            <h2>Related Activities</h2>
            <div className="related-grid">
              {relatedActivities.slice(0, 3).map((relatedActivity) => (
                <div key={relatedActivity.slug} className="related-card">
                  <img
                    src={relatedActivity.image}
                    alt={relatedActivity.title}
                    className="related-image"
                  />
                  <div className="related-content">
                    <h3>{relatedActivity.title}</h3>
                    <p>{relatedActivity.description}</p>
                    <Link
                      href={`/activities/${relatedActivity.slug}`}
                      className="btn btn--secondary"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join This Activity?</h2>
            <p>Apply now to secure your spot in this exciting activity!</p>
            <div className="cta-buttons">
              <Link href="/apply" className="btn btn--primary">
                Apply Now
              </Link>
              <Link href="/activities" className="btn btn--secondary">
                View All Activities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
