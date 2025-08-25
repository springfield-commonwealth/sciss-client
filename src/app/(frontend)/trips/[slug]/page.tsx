import Layout from "@/components/layouts/Layout";
import { getAllTrips, getTripBySlug } from "@/lib/content/trips";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";
import React from "react";

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const trip = getTripBySlug(params.slug);

  if (!trip) {
    return {
      title: "Trip Not Found - SCISS",
      description: "The trip you're looking for could not be found.",
    };
  }

  return {
    title: trip.seo.metaTitle,
    description: trip.seo.metaDescription,
    keywords: trip.seo.keywords.join(", "),
    openGraph: {
      title: trip.seo.metaTitle,
      description: trip.seo.metaDescription,
      images: [trip.seo.ogImage],
      url: `https://sciss.org/trips/${trip.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: trip.seo.metaTitle,
      description: trip.seo.metaDescription,
      images: [trip.seo.ogImage],
    },
    alternates: {
      canonical: `https://sciss.org/trips/${trip.slug}`,
    },
  };
}

// This duplicate function will be removed - keeping only the one at the bottom

// Individual Trip Page Component
export default function TripPage({
  params,
}: {
  params: { slug: string };
}): React.JSX.Element {
  // Handle loading state

  const trip = getTripBySlug(params.slug);

  // Handle trip not found
  if (!trip) {
    return (
      <Layout>
        <div className="trip-not-found">
          <h1>Trip Not Found</h1>
          <p>The trip you're looking for could not be found.</p>
          <Link href="/trips" className="btn btn--primary">
            View All Trips
          </Link>
        </div>
      </Layout>
    );
  }

  // Generate breadcrumbs for trip page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Trips and Excursions", href: "/trips" },
    { label: trip.title, href: `/trips/${trip.slug}`, active: true },
  ]);

  const {
    title,
    description,
    category,
    duration,
    location,
    transportMode,
    highlights,
    inclusions,
    itinerary,
    educationalValue,
    preparationTips,
    ageGroup,
    difficulty,
    groupSize,
    image,
    seo,
  } = trip;

  return (
    <Layout breadcrumbs={breadcrumbs} showBreadcrumb={true}>
      <main className="trip-page">
        {/* Trip Hero Section */}
        <section className="trip-hero">
          <div className="trip-hero-content">
            <div className="trip-hero-info">
              <div className="trip-meta">
                <span className="category-badge">{category}</span>
                <span className="duration-badge">{duration}</span>
                <span className="difficulty-badge">{difficulty}</span>
              </div>

              <h1 className="trip-title">{title}</h1>
              <p className="trip-description">{description}</p>

              <div className="trip-quick-info">
                <div className="quick-info-item">
                  <strong>Location:</strong> {location}
                </div>
                <div className="quick-info-item">
                  <strong>Duration:</strong> {duration}
                </div>
                <div className="quick-info-item">
                  <strong>Group Size:</strong> {groupSize}
                </div>
                <div className="quick-info-item">
                  <strong>Transport:</strong> {transportMode}
                </div>
              </div>

              <div className="trip-actions">
                <Link href="/apply" className="btn btn--primary btn--lg">
                  Register for This Trip
                </Link>
                <Link href="/trips" className="btn btn--header">
                  View All Trips
                </Link>
              </div>
            </div>

            <div className="trip-hero-image">
              {image && <img src={image} alt={title} className="trip-image" />}
            </div>
          </div>
        </section>

        {/* Trip Highlights */}
        <section className="trip-highlights">
          <div className="trip-content">
            <h2>Trip Highlights</h2>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Itinerary */}
        <section className="trip-itinerary">
          <div className="trip-content">
            <h2>Detailed Itinerary</h2>
            <div className="itinerary-timeline">
              {itinerary.map((item, index) => (
                <div key={index} className="itinerary-item">
                  <div className="itinerary-time">
                    <span className="time-badge">{item.time}</span>
                  </div>
                  <div className="itinerary-details">
                    <h4>{item.activity}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="trip-inclusions">
          <div className="trip-content">
            <h2>What's Included</h2>
            <div className="inclusions-list">
              {inclusions.map((inclusion, index) => (
                <div key={index} className="inclusion-item">
                  <div className="inclusion-icon">✓</div>
                  <p>{inclusion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Value */}
        <section className="trip-educational-value">
          <div className="trip-content">
            <h2>Educational Benefits</h2>
            <div className="educational-value-list">
              {educationalValue.map((value, index) => (
                <div key={index} className="educational-value-item">
                  <div className="value-number">{index + 1}</div>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation Tips */}
        <section className="trip-preparation">
          <div className="trip-content">
            <h2>Preparation Tips</h2>
            <div className="preparation-grid">
              <div className="preparation-section">
                <h4>Before You Go</h4>
                <ul className="preparation-list">
                  {preparationTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div className="preparation-section">
                <h4>Trip Details</h4>
                <div className="trip-details">
                  <div className="detail-item">
                    <strong>Age Group:</strong> {ageGroup}
                  </div>
                  <div className="detail-item">
                    <strong>Difficulty:</strong> {difficulty}
                  </div>
                  <div className="detail-item">
                    <strong>Group Size:</strong> {groupSize}
                  </div>
                  <div className="detail-item">
                    <strong>Transportation:</strong> {transportMode}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Trips */}
        {/* Note: Related trips functionality can be added here when needed */}

        {/* Call to Action */}
        <section className="trip-cta">
          <div className="trip-content">
            <h2>Ready to Explore {location}?</h2>
            <p>
              Join us for this unforgettable {category.toLowerCase()}{" "}
              experience. Create lasting memories while gaining valuable
              educational insights!
            </p>
            <div className="cta-actions">
              <Link href="/apply" className="btn btn--primary btn--lg">
                Reserve Your Spot
              </Link>
              <Link href="/day-trips" className="btn btn--secondary">
                View All Trips
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
  const trips = getAllTrips();

  return trips.map((trip) => ({
    slug: trip.slug,
  }));
}
