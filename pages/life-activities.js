import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import Carousel from "@/components/ui/Carousel";
import { LifeActivitiesHero } from "@/constants/images";

const LifeActivities = () => {
  

  const sportsPrograms = [
    {
      title: "Basketball",
      level: "All Levels",
      description:
        "Basketball training and competitive games as part of our afternoon elective sports program.",
      features: [
        "Professional instruction and coaching",
        "Skill development for all levels",
        "Team coordination and strategy",
        "Competitive game experience",
        "Basketball fundamentals training",
      ],
      schedule: "Afternoon elective sports sessions",
    },
    {
      title: "Rowing",
      level: "All Levels",
      description:
        "Rowing instruction and water sports training in our comprehensive elective sports program.",
      features: [
        "Professional rowing instruction",
        "Water safety and technique training",
        "Teamwork and coordination development",
        "Physical fitness and endurance building",
        "Scenic waterway experience",
      ],
      schedule: "Afternoon elective sports sessions",
    },
    {
      title: "Golf",
      level: "All Levels",
      description:
        "Golf instruction and practice as part of our diverse elective sports offerings.",
      features: [
        "Golf fundamentals and technique",
        "Professional instruction",
        "Course strategy and rules",
        "Equipment and safety training",
        "Individual skill development",
      ],
      schedule: "Afternoon elective sports sessions",
    },
    {
      title: "Fencing",
      level: "All Levels",
      description:
        "Learn the art and discipline of fencing with professional instruction and equipment.",
      features: [
        "Traditional fencing techniques",
        "Safety protocols and equipment use",
        "Strategic thinking and reflexes",
        "Individual skill development",
        "Historical and cultural context",
      ],
      schedule: "Afternoon elective sports sessions",
    },
  ];

  const fitnessPrograms = [
    {
      title: "Personal Fitness Training",
      description:
        "Customized fitness programs designed to meet individual goals and fitness levels.",
      highlights: [
        "One-on-one fitness assessments",
        "Personalized workout plans",
        "Nutrition guidance",
        "Progress tracking",
        "Modern gym equipment",
      ],
    },
    {
      title: "Group Fitness Classes",
      description:
        "Fun and energizing group classes that promote teamwork and healthy competition.",
      highlights: [
        "HIIT workouts",
        "Yoga and stretching",
        "Zumba and cardio dance",
        "Strength training circuits",
        "Outdoor fitness activities",
      ],
    },
    {
      title: "Dance Programs",
      description:
        "Express creativity and stay active through various dance styles and choreography.",
      highlights: [
        "Hip-hop and contemporary dance",
        "Cultural dance styles",
        "Choreography workshops",
        "Performance opportunities",
        "Dance competitions",
      ],
    },
  ];

  const recreationalActivities = [
    {
      category: "Arts & Crafts",
      activities: [
        "Pottery and ceramics",
        "Painting and sketching",
        "Jewelry making",
        "Textile arts",
        "Photography workshops",
      ],
    },
    {
      category: "Music & Performance",
      activities: [
        "Instrument lessons",
        "Choir and singing",
        "Drama and theater",
        "Music production",
        "Talent shows",
      ],
    },
    {
      category: "Games & Recreation",
      activities: [
        "Board game tournaments",
        "Video game competitions",
        "Outdoor scavenger hunts",
        "Team building challenges",
        "Movie nights",
      ],
    },
    {
      category: "Cultural Exchange",
      activities: [
        "International food festivals",
        "Cultural presentation nights",
        "Language exchange sessions",
        "Traditional games from around the world",
        "Cultural celebration events",
      ],
    },
  ];

  const wellnessPrograms = [
    {
      title: "Mental Health & Wellness",
      description:
        "Programs designed to support student wellbeing and stress management.",
      components: [
        "Mindfulness and meditation sessions",
        "Stress management workshops",
        "Peer support groups",
        "Counseling services",
        "Wellness check-ins",
      ],
    },
    {
      title: "Nutrition Education",
      description:
        "Learn about healthy eating habits and nutrition for optimal performance.",
      components: [
        "Nutrition workshops",
        "Healthy cooking classes",
        "Meal planning sessions",
        "Sports nutrition guidance",
        "Dietary accommodation support",
      ],
    },
  ];

  return (
    <Layout
      title="Life & Activities - SCISS"
      description="Explore the exciting sports, fitness, recreational activities, and wellness programs at SCISS Summer School."
    >
      {/* Hero Section */}
      <HeroSection
        title="Life & Activities"
        subtitle="Beyond the Classroom"
        description="Discover a world of sports, fitness, arts, and recreational activities designed to enrich your summer experience and build lasting friendships."
        backgroundImage={LifeActivitiesHero}
      />


      {/* Sports Programs */}
      <section id="sports" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Sports Programs</h2>
            <p>
              Professional coaching and state-of-the-art facilities for athletic
              development
            </p>
          </div>

          <div className="programs-grid">
            {sportsPrograms.map((sport, index) => (
              <div key={index} className="sport-card">
                <div className="sport-header">
                  <h3>{sport.title}</h3>
                  <span className="level-badge">{sport.level}</span>
                </div>

                <p className="sport-description">{sport.description}</p>

                <div className="sport-features">
                  <h4>Program Features:</h4>
                  <ul>
                    {sport.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="sport-schedule">
                  <strong>Schedule:</strong> {sport.schedule}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness Programs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Fitness & Dance Programs</h2>
            <p>
              Stay active and healthy with our comprehensive fitness offerings
            </p>
          </div>

          <div className="grid grid-3">
            {fitnessPrograms.map((program, index) => (
              <div key={index} className="fitness-card">
                <h3>{program.title}</h3>
                <p>{program.description}</p>

                <div className="fitness-highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recreational Activities */}
      <section id="activities" className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Recreational Activities</h2>
            <p>Explore your interests and discover new passions</p>
          </div>

          <div className="grid grid-2">
            {recreationalActivities.map((category, index) => (
              <div key={index} className="recreation-card">
                <h3>{category.category}</h3>
                <div className="activity-grid">
                  {category.activities.map((activity, idx) => (
                    <div key={idx} className="activity-item">
                      <span className="activity-icon">🎯</span>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LifeActivities;
