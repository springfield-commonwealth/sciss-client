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
            <p className="page-subtitle">Explore & Discover</p>
            <h1 className="page-title">Unforgettable Day Trips</h1>
            <p className="page-description">Journey beyond the classroom with exciting trips to world-renowned universities, cultural landmarks, and fun destinations throughout New England.</p>
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

          <div className="grid grid--2">
            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🏛️</div>
              <h3>Boston</h3>
              <p className="trip-location-simple">📍 Harvard & MIT</p>
              <p className="trip-description-simple">Full-day university immersion and city exploration</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🎓</div>
              <h3>Yale & Brown</h3>
              <p className="trip-location-simple">📍 New Haven & Providence</p>
              <p className="trip-description-simple">Campus visits with admissions sessions</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">🏀</div>
              <h3>Springfield</h3>
              <p className="trip-location-simple">📍 Springfield, MA</p>
              <p className="trip-description-simple">Basketball Hall of Fame and regional museums</p>
            </div>

            <div className="cultural-trip-card-simple">
              <div className="trip-icon-large">✨</div>
              <h3>Local Attractions</h3>
              <p className="trip-location-simple">📍 New England Region</p>
              <p className="trip-description-simple">Varies by session - theme parks, museums, historic sites</p>
            </div>
          </div>

          <div className="info-note-box">
            <strong>Note:</strong> All trips are fully supervised. Transportation, tickets, and meals organized. Final schedule sent before arrival. Trips subject to weather and availability.
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
        <div className="text--center mt--md">
          <Link href="/trips" className="btn btn--secondary btn--lg">
            View All Trips
          </Link>
        </div>
      </section>

      {/* Cultural & Recreation Trips - Simplified */}
      <section id="all-trips" className="section">
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
              <div key={index} className="cultural-trip-card-simple">
                <div className="trip-icon-large">{trip.icon || '🎯'}</div>
                <h3>{trip.destination}</h3>
                <p className="trip-location-simple">📍 {trip.location}</p>
                <p className="trip-description-simple">{trip.description}</p>
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
