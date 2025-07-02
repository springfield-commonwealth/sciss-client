import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import Carousel from "@/components/ui/Carousel";
import {
  DayTripsCarouselItems,
  DayTripsCulturalTrips,
  DayTripsTravelInfo,
  DayTripsUniversityTrips,
} from "@/constants/dayTripsContent";
import { DayTripsHero } from "@/constants/images";

const DayTrips = () => {
  return (
    <Layout
      title="Day Trips - SCISS"
      description="Explore Harvard, MIT, Yale, and exciting cultural destinations with SCISS day trips and field excursions."
    >
      {/* Hero Section */}
      <HeroSection
        title="Unforgettable Day Trips"
        subtitle="Explore & Discover"
        description="Journey beyond the classroom with exciting trips to world-renowned universities, cultural landmarks, and fun destinations throughout New England."
        backgroundImage={DayTripsHero}
        ctaText="View University Trips"
        ctaLink="#universities"
        secondaryCtaText="See All Trips"
        secondaryCtaLink="#all-trips"
      />

      {/* Day Trips Carousel */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Trip Highlights</h2>
            <p>Discover amazing destinations and create lasting memories</p>
          </div>

          <Carousel items={DayTripsCarouselItems} />
        </div>
      </section>

      {/* University Trips */}
      <section id="universities" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>University Visits</h2>
            <p>
              Experience prestigious universities and explore your academic
              future
            </p>
          </div>

          <div className="university-trips">
            {DayTripsUniversityTrips.map((trip, index) => (
              <div key={index} className="university-card">
                <div className="university-header">
                  <div className="university-info">
                    <h3>{trip.university}</h3>
                    <div className="university-meta">
                      <span className="location">📍 {trip.location}</span>
                      <span className="duration">🕐 {trip.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="university-content">
                  <p className="university-description">{trip.description}</p>

                  <div className="university-details">
                    <div className="highlights-section">
                      <h4>Trip Highlights</h4>
                      <ul className="highlights-list">
                        {trip.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="inclusions-section">
                      <h4>What's Included</h4>
                      <ul className="inclusions-list">
                        {trip.inclusions.map((inclusion, idx) => (
                          <li key={idx}>{inclusion}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Recreation Trips */}
      <section id="all-trips" className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Cultural & Recreation Trips</h2>
            <p>
              Explore local culture, history, and enjoy exciting recreational
              activities
            </p>
          </div>

          <div className="grid grid-2">
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
          <div className="text-center mb-5">
            <h2>Travel Information</h2>
            <p>Everything you need to know about our trips</p>
          </div>

          <div className="grid grid-3">
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
    </Layout>
  );
};

export default DayTrips;
