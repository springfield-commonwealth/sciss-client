import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import Link from "next/link";

const ADayAtSCISS = () => {
  const dailySchedule = [
    {
      time: "7:00 AM",
      activity: "Wake Up & Personal Time",
      description:
        "Start your day with personal preparation and getting ready for an exciting day ahead.",
      icon: "🌅",
      type: "personal",
    },
    {
      time: "8:00 AM",
      activity: "Breakfast & Morning Assembly",
      description:
        "Enjoy a nutritious breakfast with fellow students and attend our daily morning assembly with announcements and motivation.",
      icon: "🍳",
      type: "meal",
    },
    {
      time: "9:00 AM",
      activity: "Core Academic Program (Session 1)",
      description:
        "Dive deep into your chosen academic program with expert instructors and hands-on learning experiences.",
      icon: "📚",
      type: "academic",
    },
    {
      time: "10:30 AM",
      activity: "Break & Networking",
      description:
        "Take a refreshing break, network with international students, and enjoy healthy snacks.",
      icon: "☕",
      type: "break",
    },
    {
      time: "11:00 AM",
      activity: "Core Academic Program (Session 2)",
      description:
        "Continue your academic journey with advanced topics, group projects, and practical applications.",
      icon: "💻",
      type: "academic",
    },
    {
      time: "12:30 PM",
      activity: "Lunch & Cultural Exchange",
      description:
        "Savor international cuisine and participate in cultural exchange conversations with students from around the world.",
      icon: "🥘",
      type: "meal",
    },
    {
      time: "2:00 PM",
      activity: "Elective Activities",
      description:
        "Choose from sports, arts, music, or other recreational activities based on your interests.",
      icon: "🎯",
      type: "activity",
    },
    {
      time: "3:30 PM",
      activity: "Guest Lectures & Seminars",
      description:
        "Attend inspiring guest lectures from industry professionals, university representatives, and accomplished speakers.",
      icon: "🎤",
      type: "enrichment",
    },
    {
      time: "5:00 PM",
      activity: "Recreation & Social Time",
      description:
        "Unwind with friends, enjoy recreational activities, or explore the beautiful campus facilities.",
      icon: "⚽",
      type: "social",
    },
    {
      time: "6:30 PM",
      activity: "Dinner & Evening Programs",
      description:
        "Enjoy dinner followed by special evening programs including cultural shows, talent nights, or movie screenings.",
      icon: "🍽️",
      type: "meal",
    },
    {
      time: "8:00 PM",
      activity: "Study Hall & Project Work",
      description:
        "Dedicated time for homework, project development, and collaborative study sessions with peers.",
      icon: "📖",
      type: "study",
    },
    {
      time: "9:30 PM",
      activity: "Free Time & Reflection",
      description:
        "Personal time for relaxation, journaling, video calls home, or quiet reflection on the day's experiences.",
      icon: "💭",
      type: "personal",
    },
    {
      time: "10:30 PM",
      activity: "Lights Out",
      description:
        "Rest and recharge for another exciting day of learning and adventure.",
      icon: "🌙",
      type: "rest",
    },
  ];

  const weeklyVariations = [
    {
      day: "Monday",
      highlight: "Fresh Start",
      special: "Program orientation and goal setting for the week",
    },
    {
      day: "Tuesday",
      highlight: "Skills Development",
      special: "Advanced workshops and hands-on project work",
    },
    {
      day: "Wednesday",
      highlight: "Field Trip Day",
      special: "University visits or cultural excursions (alternating weeks)",
    },
    {
      day: "Thursday",
      highlight: "Innovation Lab",
      special: "Creative projects and collaborative presentations",
    },
    {
      day: "Friday",
      highlight: "Celebration",
      special: "Weekly showcase, talent show, or cultural celebration",
    },
    {
      day: "Saturday",
      highlight: "Adventure Day",
      special: "Major field trips, recreational outings, or campus events",
    },
    {
      day: "Sunday",
      highlight: "Reflection & Rest",
      special:
        "Relaxed schedule with optional activities and prep for next week",
    },
  ];

  const accommodationInfo = {
    housing: [
      "Modern, comfortable dormitory-style accommodations",
      "Shared rooms with international roommates",
      "Common areas for studying and socializing",
      "24/7 residential advisors and supervision",
      "WiFi access throughout living areas",
    ],
    facilities: [
      "Air-conditioned rooms and common areas",
      "Shared bathrooms and shower facilities",
      "Laundry services and facilities",
      "Study lounges and recreation rooms",
      "Secure storage for personal belongings",
    ],
    support: [
      "Residential advisors on every floor",
      "Medical staff on-call 24/7",
      "Counseling and support services",
      "Emergency contact protocols",
      "Regular check-ins and wellness programs",
    ],
  };

  const diningInfo = {
    meals: [
      "Three nutritious meals per day",
      "International cuisine and local specialties",
      "Vegetarian, vegan, and dietary restriction options",
      "Healthy snacks and beverages available",
      "Special cultural dining experiences",
    ],
    facilities: [
      "Modern dining hall with seating for all students",
      "Outdoor dining areas for pleasant weather",
      "Grab-and-go options for busy schedules",
      "Water stations throughout campus",
      "Cooking workshops and demonstrations",
    ],
  };

  const getTypeColor = (type) => {
    const colors = {
      personal: "#6F42C1",
      meal: "#28A745",
      academic: "#CC1D2F",
      break: "#FF7F00",
      activity: "#0066CC",
      enrichment: "#20C997",
      social: "#FFC107",
      study: "#6610F2",
      rest: "#495057",
    };
    return colors[type] || "#6C757D";
  };

  return (
    <Layout
      title="A Day at SCISS - Daily Schedule"
      description="Discover what a typical day looks like at SCISS with our comprehensive daily schedule and campus life information."
    >
      {/* Hero Section */}
      <HeroSection
        title="A Day at SCISS"
        subtitle="Your Daily Journey"
        description="From sunrise to sunset, every moment at SCISS is designed to inspire learning, build friendships, and create unforgettable memories."
        backgroundImage="/images/academics-hero.jpg"
        ctaText="View Full Schedule"
        ctaLink="#schedule"
        secondaryCtaText="Apply Now"
        secondaryCtaLink="/tuitions-and-fees"
      />

      {/* Overview Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Life at SCISS</h2>
            <p>
              Experience a perfect balance of rigorous academics, exciting
              activities, and meaningful connections
            </p>
          </div>

          <div className="grid grid-3">
            <div className="overview-card">
              <div className="overview-icon">📚</div>
              <h3>Academic Excellence</h3>
              <p>
                6 hours of focused learning daily with world-class instructors
                and innovative teaching methods.
              </p>
            </div>

            <div className="overview-card">
              <div className="overview-icon">🌍</div>
              <h3>Cultural Immersion</h3>
              <p>
                Live and learn alongside students from around the world in a
                truly international environment.
              </p>
            </div>

            <div className="overview-card">
              <div className="overview-icon">⚡</div>
              <h3>Active Lifestyle</h3>
              <p>
                Sports, fitness, arts, and recreational activities keep you
                engaged and energized every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section id="schedule" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Daily Schedule</h2>
            <p>
              A carefully crafted schedule that maximizes learning while
              ensuring fun and relaxation
            </p>
          </div>

          <div className="schedule-timeline">
            {dailySchedule.map((item, index) => (
              <div key={index} className="schedule-item">
                <div className="schedule-time">
                  <span className="time-text">{item.time}</span>
                  <div
                    className="time-indicator"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                  ></div>
                </div>

                <div className="schedule-content">
                  <div className="activity-header">
                    <span className="activity-icon">{item.icon}</span>
                    <h4>{item.activity}</h4>
                  </div>
                  <p className="activity-description">{item.description}</p>
                  <span
                    className="activity-type"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                  >
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Variations */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Weekly Highlights</h2>
            <p>Each day brings unique opportunities and special programming</p>
          </div>

          <div className="weekly-grid">
            {weeklyVariations.map((day, index) => (
              <div key={index} className="day-card">
                <div className="day-header">
                  <h4>{day.day}</h4>
                  <span className="day-highlight">{day.highlight}</span>
                </div>
                <p className="day-special">{day.special}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Living at SCISS</h2>
            <p>
              Comfortable, safe, and supportive accommodation for an optimal
              living experience
            </p>
          </div>

          <div className="grid grid-3">
            <div className="accommodation-card">
              <h3>🏠 Housing</h3>
              <ul>
                {accommodationInfo.housing.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>🏢 Facilities</h3>
              <ul>
                {accommodationInfo.facilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>🛡️ Support</h3>
              <ul>
                {accommodationInfo.support.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Dining at SCISS</h2>
            <p>
              Delicious, nutritious meals that fuel your body and introduce you
              to global cuisines
            </p>
          </div>

          <div className="grid grid-2">
            <div className="dining-card">
              <h3>🍽️ Meals & Nutrition</h3>
              <ul>
                {diningInfo.meals.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="dining-card">
              <h3>🏪 Dining Facilities</h3>
              <ul>
                {diningInfo.facilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Health & Safety</h2>
            <p>
              Your wellbeing is our top priority with comprehensive health and
              safety measures
            </p>
          </div>

          <div className="grid grid-4">
            <div className="safety-feature">
              <div className="safety-icon">🏥</div>
              <h4>Medical Care</h4>
              <p>On-site medical staff and 24/7 emergency care protocols</p>
            </div>

            <div className="safety-feature">
              <div className="safety-icon">👥</div>
              <h4>Supervision</h4>
              <p>
                Experienced staff providing round-the-clock supervision and
                support
              </p>
            </div>

            <div className="safety-feature">
              <div className="safety-icon">📞</div>
              <h4>Communication</h4>
              <p>Regular updates to parents and emergency contact systems</p>
            </div>

            <div className="safety-feature">
              <div className="safety-icon">🔒</div>
              <h4>Security</h4>
              <p>Secure campus with controlled access and safety protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Experience Life at SCISS</h2>
          <p>
            Join us for an unforgettable summer where every day brings new
            discoveries
          </p>
          <div className="cta-actions">
            <Link
              href="/tuitions-and-fees"
              className="btn btn-primary btn-large"
            >
              Apply Now
            </Link>
            <Link
              href="/parent-information"
              className="btn btn-secondary btn-large"
            >
              Parent Information
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ADayAtSCISS;
