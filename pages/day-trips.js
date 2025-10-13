import Layout from "@/components/layouts/Layout";
import Carousel from "@/components/ui/Carousel";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  DayTripsCarouselItems,
  DayTripsCulturalTrips,
  DayTripsTravelInfo
} from "@/constants/dayTripsContent";
import { getPopularTrips, getUniversityTrips } from "@/lib/content/trips";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";

const DayTrips = ({ popularTrips, universityTrips, breadcrumbs = [] }) => {
  return (
    <Layout
      title="Day Trips - SCISS"
      description="Explore exciting day trips and educational excursions at SCISS Summer School."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      <div className="padding-top-100"></div>

      {/* Page Header Section */}
      <section className="section page-header-section">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">Unforgettable Day Trips</h1>
            <p className="page-subtitle">Explore & Discover</p>
            <p className="page-description">Journey beyond the classroom with exciting trips to world-renowned universities, cultural landmarks, and fun destinations throughout New England.</p>
            <div className="page-header-cta">
              <Link href="/trips" className="btn btn--primary">Explore All Trips</Link>
              <Link href="/apply" className="btn btn--secondary">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured University Trips */}
      <section className="section bg-light">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>University Visits</h2>
            <p>
              Experience prestigious institutions and explore your academic
              future
            </p>
          </div>

          <div className="trips-preview-grid">
            {universityTrips.slice(0, 3).map((trip) => (
              <div key={trip.id} className="trip-preview-card">
                <div className="trip-preview-image">
                  {trip.image && <img src={trip.image} alt={trip.title} />}
                  <div className="trip-badges">
                    <span className="category-badge">{trip.category}</span>
                    <span className="duration-badge">{trip.duration}</span>
                  </div>
                </div>

                <div className="trip-preview-content">
                  <h3>{trip.title}</h3>
                  <div className="trip-location">📍 {trip.location}</div>
                  <p>{trip.description.substring(0, 120)}...</p>

                  <div className="trip-highlights-preview">
                    {trip.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/trips/${trip.slug}`}
                    className="btn btn--primary btn--sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text--center mt--md">
            <Link href="/trips" className="btn btn--secondary btn--lg">
              View All Trips
            </Link>
          </div>
        </div>
      </section>

      {/* Day Trips Carousel */}
      <section className="section bg-light">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Trip Highlights</h2>
            <p>Discover amazing destinations and create lasting memories</p>
          </div>

          <Carousel items={DayTripsCarouselItems} />
        </div>
      </section>


      {/* Cultural & Recreation Trips */}
      <section id="all-trips" className="section bg-light">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Cultural & Recreation Trips</h2>
            <p>
              Explore local culture, history, and enjoy exciting recreational
              activities
            </p>
          </div>

          <div className="grid grid--2">
            {DayTripsCulturalTrips.map((trip, index) => (
              <div key={index} className="cultural-trip-card">
                <div className="trip-header">
                  <h3>{trip.destination}</h3>
                  <div className="trip-meta">
                    <span className="trip-type">{trip.type}</span>
                    <span className="trip-duration">{trip.duration}</span>
                  </div>
                  <p className="trip-location">📍 {trip.location}</p>
                </div>

                <p className="trip-description">{trip.description}</p>

                <div className="trip-activities">
                  <h4>Activities Include:</h4>
                  <div className="activities-grid">
                    {trip.activities.map((activity, idx) => (
                      <div key={idx} className="activity-item">
                        <span className="activity-icon">🎯</span>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="section bg-light">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Travel Information</h2>
            <p>Everything you need to know about our trips</p>
          </div>

          <div className="grid grid--3">
            <div className="info-card">
              <h3>🚌 Transportation</h3>
              <ul>
                {DayTripsTravelInfo.transportation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h3>🛡️ Safety & Supervision</h3>
              <ul>
                {DayTripsTravelInfo.safety.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h3>📋 Preparation</h3>
              <ul>
                {DayTripsTravelInfo.preparation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Trips Section */}
      <section className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Signature Trips</h2>
            <p>World-class destinations weekly</p>
          </div>

          <div className="activity-block activity-block--trips">
            <div className="activity-block__icon-badge">🎓</div>
            <h3 className="activity-block__title">Signature Trips</h3>
            <div className="trips-list">
              <div className="trip-item">
                <span className="trip-icon">🏛️</span>
                <div className="trip-content">
                  <strong>Boston</strong>
                  <p>Harvard & MIT tours + city exploration</p>
                </div>
              </div>
              <div className="trip-item">
                <span className="trip-icon">🎓</span>
                <div className="trip-content">
                  <strong>Yale & Brown</strong>
                  <p>Campus visits + admissions sessions</p>
                </div>
              </div>
              <div className="trip-item">
                <span className="trip-icon">🏀</span>
                <div className="trip-content">
                  <strong>Springfield</strong>
                  <p>Basketball Hall of Fame, museums</p>
                </div>
              </div>
              <div className="trip-item">
                <span className="trip-icon">✨</span>
                <div className="trip-content">
                  <strong>Local Attractions</strong>
                  <p>Varies by session</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Footer Banner */}
          <div className="safety-banner">
            <div className="safety-banner__icon">🛡️</div>
            <div className="safety-banner__content">
              <strong>Safety First:</strong> All trips are fully supervised. Transportation, tickets, and meals organized. Final schedule sent before arrival.
              <span className="safety-banner__note">Trips subject to weather and availability.</span>
            </div>
          </div>
        </div>
      </section>

      <FooterCTA linkTitle="Academic Programs" link="/academics" />
    </Layout>
  );
};

// Static Site Generation
export async function getStaticProps() {
  const popularTrips = getPopularTrips(6);
  const universityTrips = getUniversityTrips();

  // Generate breadcrumbs for day trips page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Day Trips", href: "/day-trips", active: true },
  ]);

  return {
    props: {
      popularTrips,
      universityTrips,
      breadcrumbs,
    },
  };
}

export default DayTrips;
