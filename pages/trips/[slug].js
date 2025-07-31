import Layout from "@/components/layouts/Layout";
import {
  getAllTrips,
  getRelatedTrips,
  getTripBySlug,
} from "@/lib/content/trips";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// Individual Trip Page Component
const TripPage = ({ trip, breadcrumbs, relatedTrips }) => {
  const router = useRouter();

  // Handle loading state
  if (router.isFallback) {
    return (
      <Layout>
        <div className="trip-loading">
          <h1>Loading trip details...</h1>
        </div>
      </Layout>
    );
  }

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
          content={`https://sciss.org/trips/${trip.slug}`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={seo.metaTitle} />
        <meta property="twitter:description" content={seo.metaDescription} />
        <meta property="twitter:image" content={seo.ogImage} />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://sciss.org/trips/${trip.slug}`} />

        {/* Structured Data - Event Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: title,
              description: description,
              organizer: {
                "@type": "EducationalOrganization",
                name: "Springfield Commonwealth International Summer School",
                url: "https://sciss.org",
              },
              location: {
                "@type": "Place",
                name: location,
              },
              offers: {
                "@type": "Offer",
                category: "educational",
                availability: "InStock",
              },
              image: seo.ogImage,
              url: `https://sciss.org/trips/${trip.slug}`,
            }),
          }}
        />
      </Head>

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
        {relatedTrips && relatedTrips.length > 0 && (
          <section className="related-trips">
            <div className="trip-content">
              <h2>Related Trips</h2>
              <div className="related-trips-grid">
                {relatedTrips.map((relatedTrip) => (
                  <Link
                    key={relatedTrip.id}
                    href={`/trips/${relatedTrip.slug}`}
                    className="related-trip-card"
                  >
                    {relatedTrip.image && (
                      <img
                        src={relatedTrip.image}
                        alt={relatedTrip.title}
                        className="related-trip-image"
                      />
                    )}
                    <div className="related-trip-info">
                      <div className="related-trip-meta">
                        <span className="category-tag">
                          {relatedTrip.category}
                        </span>
                        <span className="duration-tag">
                          {relatedTrip.duration}
                        </span>
                      </div>
                      <h4>{relatedTrip.title}</h4>
                      <p>{relatedTrip.description.substring(0, 100)}...</p>
                      <div className="related-trip-location">
                        📍 {relatedTrip.location}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

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
};

// Static Site Generation Functions
export async function getStaticPaths() {
  const trips = getAllTrips();

  const paths = trips.map((trip) => ({
    params: { slug: trip.slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 for non-existent trips
  };
}

export async function getStaticProps({ params }) {
  const trip = getTripBySlug(params.slug);

  if (!trip) {
    return {
      notFound: true,
    };
  }

  // Get related trips
  const relatedTrips = getRelatedTrips(trip, 3);

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Day Trips", href: "/day-trips" },
    { label: "Trips", href: "/trips" },
    {
      label: trip.title,
      href: `/trips/${trip.slug}`,
      active: true,
    },
  ]);

  return {
    props: {
      trip,
      breadcrumbs,
      relatedTrips,
    },
  };
}

export default TripPage;
