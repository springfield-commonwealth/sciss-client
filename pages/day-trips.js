import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import Carousel from "@/components/ui/Carousel";
import { DayTripsHero } from "@/constants/images";

const DayTrips = () => {
  const tripsCarouselItems = [
    {
      title: "Harvard University",
      description:
        "Explore the prestigious campus and learn about admissions and academic programs",
      image: "/images/slider/home/harvard-trip.JPG",
    },
    {
      title: "MIT Campus Tour",
      description:
        "Discover cutting-edge research facilities and innovation labs",
      image: "/images/highlights/mit-visit.png",
    },
    {
      title: "Yale University",
      description: "Tour the historic campus and attend guest lectures",
      image: "/images/carousel/yale.png",
    },
    {
      title: "Basketball Hall of Fame",
      description: "Experience the history and legacy of basketball",
      image: "/images/carousel/hall-of-fame.jpg",
    },
    {
      title: "Museum Visits",
      description:
        "Educational visits to world-class museums and cultural centers",
      image: "/images/carousel/museum.jpg",
    },
    {
      title: "Six Flags Adventure",
      description: "Thrilling amusement park experience with friends",
      image: "/images/carousel/six-flags.webp",
    },
  ];

  const universityTrips = [
    {
      university: "Harvard University",
      location: "Cambridge, Massachusetts",
      duration: "Full Day",
      highlights: [
        "Campus tour led by current students",
        "Visit to Harvard Yard and historic buildings",
        "Admissions information session",
        "Library and museum visits",
        "Q&A with Harvard faculty",
        "Harvard Square exploration",
      ],
      description:
        "Experience the academic excellence and rich history of Harvard University, one of the world's most prestigious institutions. Walk through Harvard Yard, visit iconic buildings, and learn about opportunities for future study.",
      inclusions: [
        "Transportation via luxury coach",
        "Professional tour guide",
        "Campus map and materials",
        "Light refreshments",
        "Photo opportunities",
      ],
    },
    {
      university: "MIT (Massachusetts Institute of Technology)",
      location: "Cambridge, Massachusetts",
      duration: "Full Day",
      highlights: [
        "Innovation labs and research facilities tour",
        "Computer Science and Engineering departments",
        "MIT Museum visit",
        "Student life presentation",
        "Technology demonstrations",
        "Kendall Square tech hub exploration",
      ],
      description:
        "Discover the cutting-edge world of technology and innovation at MIT. Explore state-of-the-art laboratories, meet with researchers, and learn about groundbreaking projects in science and engineering.",
      inclusions: [
        "Transportation via luxury coach",
        "Research facility access",
        "MIT merchandise",
        "Lunch on campus",
        "Interactive demonstrations",
      ],
    },
    {
      university: "Yale University",
      location: "New Haven, Connecticut",
      duration: "Full Day",
      highlights: [
        "Historic campus architecture tour",
        "Yale Art Gallery visit",
        "Residential college system overview",
        "Beinecke Library tour",
        "Guest lecture attendance",
        "New Haven city exploration",
      ],
      description:
        "Explore the beautiful Gothic Revival architecture and rich traditions of Yale University. Learn about the residential college system and experience the vibrant academic community.",
      inclusions: [
        "Transportation via luxury coach",
        "Campus tour guide",
        "Yale memorabilia",
        "Library access",
        "Guest lecture materials",
      ],
    },
  ];

  const culturalTrips = [
    {
      destination: "Basketball Hall of Fame",
      location: "Springfield, Massachusetts",
      type: "Sports & Culture",
      description:
        "Immerse yourself in basketball history at the world's premier basketball museum, located right in Springfield where the sport was invented.",
      activities: [
        "Interactive basketball exhibits",
        "Skills challenge games",
        "Basketball history presentations",
        "Meet & greet with former players",
        "Basketball memorabilia shopping",
        "Photo opportunities with trophies",
      ],
      duration: "Half Day",
    },
    {
      destination: "Museum of Science",
      location: "Boston, Massachusetts",
      type: "Science & Technology",
      description:
        "Explore hands-on science exhibits, planetarium shows, and interactive demonstrations that bring science to life.",
      activities: [
        "Interactive science exhibits",
        "Planetarium show",
        "IMAX theater experience",
        "Engineering design challenges",
        "Live science demonstrations",
        "Technology workshops",
      ],
      duration: "Full Day",
    },
    {
      destination: "Freedom Trail",
      location: "Boston, Massachusetts",
      type: "History & Culture",
      description:
        "Walk through American history on Boston's famous Freedom Trail, visiting 16 historically significant sites.",
      activities: [
        "Guided historical walking tour",
        "Boston Tea Party Ships visit",
        "Faneuil Hall exploration",
        "Paul Revere House tour",
        "Historical reenactments",
        "Traditional New England lunch",
      ],
      duration: "Full Day",
    },
    {
      destination: "Six Flags New England",
      location: "Agawam, Massachusetts",
      type: "Recreation & Fun",
      description:
        "Experience thrilling roller coasters and exciting rides at one of New England's premier amusement parks.",
      activities: [
        "Roller coaster adventures",
        "Water park access",
        "Group games and challenges",
        "Theme park dining",
        "Souvenir shopping",
        "Group photo sessions",
      ],
      duration: "Full Day",
    },
  ];

  const tripSchedule = [
    {
      week: "Week 1",
      trips: [
        {
          day: "Wednesday",
          destination: "Harvard University",
          type: "University",
        },
        {
          day: "Saturday",
          destination: "Basketball Hall of Fame",
          type: "Cultural",
        },
      ],
    },
    {
      week: "Week 2",
      trips: [
        { day: "Tuesday", destination: "MIT Campus", type: "University" },
        { day: "Friday", destination: "Museum of Science", type: "Cultural" },
        { day: "Saturday", destination: "Six Flags", type: "Recreation" },
      ],
    },
    {
      week: "Week 3",
      trips: [
        {
          day: "Wednesday",
          destination: "Yale University",
          type: "University",
        },
        { day: "Saturday", destination: "Freedom Trail", type: "Cultural" },
      ],
    },
  ];

  const travelInfo = {
    transportation: [
      "Luxury air-conditioned coaches",
      "Professional drivers",
      "Safety equipment and first aid",
      "WiFi and entertainment systems",
      "Comfortable seating",
    ],
    safety: [
      "Experienced trip supervisors",
      "Medical staff accompaniment",
      "Emergency contact protocols",
      "Safety briefings before departure",
      "Group management systems",
    ],
    preparation: [
      "Pre-trip orientation sessions",
      "Packing guidelines",
      "Weather-appropriate clothing advice",
      "Cultural etiquette briefings",
      "Photography guidelines",
    ],
  };

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

          <Carousel items={tripsCarouselItems} />
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
            {universityTrips.map((trip, index) => (
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
            {culturalTrips.map((trip, index) => (
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
                {travelInfo.transportation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h3>🛡️ Safety & Supervision</h3>
              <ul>
                {travelInfo.safety.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h3>📋 Preparation</h3>
              <ul>
                {travelInfo.preparation.map((item, index) => (
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
