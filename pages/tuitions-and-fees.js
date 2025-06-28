import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { TuitionHero } from "@/constants/images";

const TuitionsAndFees = () => {
  const sessions = [
    {
      name: "Session 1",
      dates: "June 29 - July 18, 2025",
      duration: "21 Days",
      status: "Open for Registration",
      highlights: [
        "Peak summer weather",
        "Maximum university visits",
        "Full program offerings",
      ],
    },
    {
      name: "Session 2",
      dates: "July 20 - August 8, 2025",
      duration: "21 Days",
      status: "Open for Registration",
      highlights: [
        "Extended summer experience",
        "Advanced project work",
        "Alumni networking events",
      ],
    },
  ];


  const includedServices = [
    {
      category: "Academic Program",
      items: [
        "3-week intensive academic program in chosen track",
        "Expert instruction from industry professionals",
        "All course materials and textbooks",
        "Laboratory and technology access",
        "Academic certification upon completion",
        "Portfolio development support",
      ],
    },
    {
      category: "Accommodation & Meals",
      items: [
        "Shared dormitory accommodation for 21 days",
        "Three nutritious meals per day",
        "Healthy snacks and beverages",
        "24/7 residential supervision",
        "Laundry services and facilities",
        "WiFi access throughout campus",
      ],
    },
    {
      category: "Activities & Excursions",
      items: [
        "Harvard University campus visit and tour",
        "MIT research facilities tour",
        "Yale University cultural experience",
        "Basketball Hall of Fame visit",
        "Museum visits and cultural excursions",
        "Sports and recreational activities",
      ],
    },
    {
      category: "Support Services",
      items: [
        "24/7 medical care and supervision",
        "Academic counseling and mentoring",
        "Cultural orientation programs",
        "Emergency contact and communication",
        "Student handbook and orientation materials",
      ],
    },
  ];

  const additionalCosts = [
    {
      item: "International Airfare",
      cost: "Varies by location",
      description:
        "Students arrange their own flights to/from Boston Logan Airport",
      required: true,
    },
    {
      item: "Personal Spending Money",
      cost: "$300 - $500",
      description: "For souvenirs, additional snacks, and personal items",
      required: false,
    },
    {
      item: "Travel Insurance",
      cost: "$50 - $150",
      description: "Highly recommended for international students",
      required: false,
    },
    {
      item: "Visa Processing (if required)",
      cost: "$100 - $200",
      description: "For students requiring tourist/study visa",
      required: false,
    },
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Complete Online Application",
      description:
        "Fill out our comprehensive application form with personal information, academic background, and program preferences.",
      duration: "30 minutes",
    },
    {
      step: 2,
      title: "Submit Required Documents",
      description:
        "Upload academic transcripts, recommendation letters, passport copy, and essay responses.",
      duration: "1-2 days",
    },
    {
      step: 3,
      title: "Application Review",
      description:
        "Our admissions team reviews your application and may contact you for additional information.",
      duration: "5-7 business days",
    },
    {
      step: 4,
      title: "Admission Decision",
      description:
        "Receive your admission decision via email with next steps and enrollment instructions.",
      duration: "1-2 business days",
    },
    {
      step: 5,
      title: "Secure Your Spot",
      description:
        "Submit enrollment deposit and choose your payment plan to confirm your participation.",
      duration: "Same day",
    },
  ];

  return (
    <Layout
      title="Tuitions & Fees - SCISS"
      description="Learn about SCISS program costs, payment plans, scholarships, and the application process for summer 2025."
    >
      {/* Hero Section */}
      <HeroSection
        title="Tuitions & Fees"
        subtitle="Invest in Your Future"
        description="Discover our competitive pricing, flexible payment options, and scholarship opportunities for an exceptional summer learning experience."
        backgroundImage={TuitionHero}
        ctaText="Apply Now"
        ctaLink="#apply"
        // secondaryCtaText="View Payment Plans"
        // secondaryCtaLink="#payment"
      />

      {/* Program Pricing */}
      <section className="section">
        <div className="container">
            {/* Session Selection */}
            <div className="sessions-selection grid grid-2">
              <h3>Choose Your Session</h3>
              {sessions.map((session, index) => (
                <div key={index} className="session-card">
                  <div className="session-header">
                    <h4>{session.name}</h4>
                  </div>
                  <div className="session-dates">{session.dates}</div>
                  <div className="session-duration">{session.duration}</div>
                  <div className="session-highlights">
                    {session.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              </div>
          </div>
      </section>

      {/* What's Included */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>What's Included</h2>
            <p>Comprehensive program with no hidden fees</p>
          </div>

          <div className="included-services">
            {includedServices.map((service, index) => (
              <div key={index} className="service-category">
                <h3>{service.category}</h3>
                <div className="service-items">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="service-item">
                      <span className="service-icon">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Additional Considerations</h2>
            <p>
              Plan for these additional expenses not included in program fee
            </p>
          </div>

          <div className="additional-costs">
            {additionalCosts.map((cost, index) => (
              <div key={index} className="cost-item">
                <div className="cost-header">
                  <h4>{cost.item}</h4>
                  <span
                    className={`cost-required ${
                      cost.required ? "required" : "optional"
                    }`}
                  >
                    {cost.required ? "Required" : "Optional"}
                  </span>
                </div>
                <div className="cost-amount">{cost.cost}</div>
                <p className="cost-description">{cost.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="apply" className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Application Process</h2>
            <p>Simple steps to secure your spot at SCISS 2025</p>
          </div>

          <div className="application-timeline">
            {applicationProcess.map((step, index) => (
              <div key={index} className="application-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  <span className="step-duration">
                    Estimated time: {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TuitionsAndFees;
