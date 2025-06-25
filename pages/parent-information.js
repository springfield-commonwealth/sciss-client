import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";

const ParentInformation = () => {
  const safetyMeasures = [
    {
      category: "24/7 Supervision",
      measures: [
        "Certified residential advisors on every floor",
        "Professional security staff on campus",
        "Check-in/check-out procedures for all activities",
        "Emergency response protocols in place",
        "Night supervision and room checks",
      ],
    },
    {
      category: "Medical Care",
      measures: [
        "Licensed medical staff on campus 24/7",
        "Fully equipped medical facility",
        "Direct partnership with local hospital",
        "Prescription medication management",
        "Emergency medical response team",
      ],
    },
    {
      category: "Campus Security",
      measures: [
        "Secure campus with controlled access",
        "ID card access system for all buildings",
        "CCTV monitoring in common areas",
        "Emergency alert system",
        "Regular safety drills and training",
      ],
    },
    {
      category: "Activity Safety",
      measures: [
        "Certified instructors for all sports activities",
        "Safety equipment provided for all activities",
        "Pre-activity safety briefings",
        "Risk assessment for all field trips",
        "Emergency action plans for all excursions",
      ],
    },
  ];

  const communicationSchedule = [
    {
      type: "Welcome Call",
      timing: "First day of program",
      description:
        "Personal call to confirm safe arrival and initial impressions",
    },
    {
      type: "Weekly Updates",
      timing: "Every Sunday",
      description:
        "Comprehensive update on academic progress and social activities",
    },
    {
      type: "Mid-Program Report",
      timing: "Day 10-12",
      description: "Detailed academic assessment and behavioral observations",
    },
    {
      type: "Photo Gallery",
      timing: "Daily uploads",
      description: "Secure online gallery with photos from daily activities",
    },
    {
      type: "Final Report",
      timing: "Last day of program",
      description:
        "Complete evaluation with recommendations for future development",
    },
    {
      type: "Emergency Contact",
      timing: "24/7 availability",
      description: "Immediate contact for any urgent matters or concerns",
    },
  ];

  const packingList = {
    clothing: [
      "Casual clothes for 3 weeks (consider laundry schedule)",
      "Formal attire for special events and university visits",
      "Comfortable walking shoes and sneakers",
      "Swimwear and beach/pool accessories",
      "Light jacket or sweater for air conditioning",
      "Rain jacket or umbrella",
      "Sleepwear and undergarments",
    ],
    academic: [
      "Laptop or tablet with charger",
      "Notebooks and writing materials",
      "Calculator (if needed for program)",
      "Any specialized materials for chosen program",
      "Backup storage device (USB drive)",
      "Portable phone charger",
    ],
    personal: [
      "Personal medications with prescription labels",
      "Toiletries and personal hygiene items",
      "Towels and bedding (or arrange rental)",
      "Laundry supplies or plan for laundry service",
      "Personal entertainment (books, games)",
      "Camera for personal photos",
    ],
    documents: [
      "Passport (valid for at least 6 months)",
      "Visa documentation (if required)",
      "Medical insurance cards and documentation",
      "Emergency contact information",
      "Copy of birth certificate",
      "Program acceptance letter and materials",
    ],
  };

  const healthRequirements = [
    {
      requirement: "Medical Forms",
      description: "Complete medical history and physical examination form",
      deadline: "30 days before program start",
    },
    {
      requirement: "Immunizations",
      description: "Up-to-date vaccinations including COVID-19 if required",
      deadline: "14 days before program start",
    },
    {
      requirement: "Insurance Coverage",
      description: "Valid medical insurance covering international treatment",
      deadline: "Registration confirmation",
    },
    {
      requirement: "Prescription Medications",
      description: "All medications in original containers with English labels",
      deadline: "Arrival day",
    },
    {
      requirement: "Dietary Restrictions",
      description: "Detailed information about food allergies and preferences",
      deadline: "14 days before program start",
    },
    {
      requirement: "Emergency Contacts",
      description:
        "Multiple emergency contacts with international phone numbers",
      deadline: "Registration confirmation",
    },
  ];

  const campusServices = [
    {
      service: "Laundry Services",
      description:
        "On-campus laundry facilities available daily. Students can do their own laundry or arrange for laundry service.",
      cost: "Included (self-service) / $15/week (full service)",
    },
    {
      service: "Mail & Package Delivery",
      description:
        "Students can receive mail and packages during their stay. All items are screened for security.",
      cost: "Included",
    },
    {
      service: "Banking Services",
      description:
        "Assistance with local banking, currency exchange, and managing spending money.",
      cost: "Guidance included / Transaction fees may apply",
    },
    {
      service: "Technology Support",
      description:
        "IT help desk for device setup, WiFi connection, and technical troubleshooting.",
      cost: "Included",
    },
    {
      service: "Transportation",
      description:
        "Airport pickup/drop-off and transportation for all scheduled activities and field trips.",
      cost: "Included",
    },
    {
      service: "Storage Services",
      description:
        "Secure storage for valuable items and documents during the program.",
      cost: "Included",
    },
  ];

  const emergencyProtocols = [
    {
      scenario: "Medical Emergency",
      response: [
        "Immediate medical assessment by on-site staff",
        "Transport to partner hospital if needed",
        "Parent notification within 1 hour",
        "Continuous updates until resolution",
        "Insurance coordination and documentation",
      ],
    },
    {
      scenario: "Natural Disaster/Weather",
      response: [
        "Activation of emergency alert system",
        "Implementation of shelter-in-place protocols",
        "Regular parent updates via emergency hotline",
        "Coordination with local emergency services",
        "Alternative accommodation if necessary",
      ],
    },
    {
      scenario: "Behavioral Issues",
      response: [
        "Immediate intervention by residential staff",
        "Parent contact within 24 hours",
        "Counseling and support services",
        "Development of behavior modification plan",
        "Regular progress monitoring",
      ],
    },
  ];

  const parentTestimonials = [
    {
      parent: "Maria Rodriguez",
      student: "Carlos, Age 16",
      year: "2024",
      quote:
        "The communication from SCISS was exceptional. I felt connected to Carlos's experience every day through photos and weekly calls. The safety measures gave me complete peace of mind.",
    },
    {
      parent: "James Chen",
      student: "Lily, Age 15",
      year: "2024",
      quote:
        "Lily came home more confident and focused than ever. The academic program challenged her, and the international friendships she made are still strong today.",
    },
    {
      parent: "Sophie Williams",
      student: "Alex, Age 17",
      year: "2023",
      quote:
        "SCISS exceeded our expectations. The program was well-organized, safe, and truly transformative for Alex. We're already planning for him to return as a counselor!",
    },
  ];

  const travelTips = [
    {
      tip: "Arrival Planning",
      details: [
        "Book flights to arrive on designated arrival day",
        "Use Boston Logan Airport (BOS) for easiest transportation",
        "Allow extra time for customs and immigration",
        "Have all documents easily accessible",
        "Pack essentials in carry-on luggage",
      ],
    },
    {
      tip: "Money Management",
      details: [
        "Notify banks of international travel dates",
        "Bring mix of cash and cards",
        "Consider travel money cards for better exchange rates",
        "Set daily spending limits with your teen",
        "Keep copies of all financial documents",
      ],
    },
    {
      tip: "Communication Setup",
      details: [
        "Check international roaming charges",
        "Consider local SIM card or international plan",
        "Download messaging apps like WhatsApp",
        "Establish regular check-in times",
        "Share emergency contact information",
      ],
    },
  ];

  return (
    <Layout
      title="Parent Information - SCISS"
      description="Essential information for parents about safety, communication, health requirements, and preparing your teen for SCISS."
    >
      {/* Hero Section */}
      <HeroSection
        title="Parent Information"
        subtitle="Your Peace of Mind Matters"
        description="Comprehensive information to help you prepare for your teen's SCISS experience and feel confident about their safety and wellbeing."
        backgroundImage="/images/academics-hero.jpg"
        ctaText="Safety & Security"
        ctaLink="#safety"
        secondaryCtaText="Health Requirements"
        secondaryCtaLink="#health"
      />

      {/* Overview for Parents */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Your Teen's Safety is Our Priority</h2>
            <p>
              We understand that sending your teenager abroad is a big decision.
              Here's everything you need to know about our comprehensive safety
              and support systems.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="parent-feature">
              <div className="feature-icon">🛡️</div>
              <h3>24/7 Supervision</h3>
              <p>
                Professional staff provide round-the-clock supervision and
                support for all students.
              </p>
            </div>

            <div className="parent-feature">
              <div className="feature-icon">📞</div>
              <h3>Regular Communication</h3>
              <p>
                Stay connected with weekly updates, daily photos, and 24/7
                emergency contact access.
              </p>
            </div>

            <div className="parent-feature">
              <div className="feature-icon">🏥</div>
              <h3>Medical Care</h3>
              <p>
                On-site medical staff and partnerships with local healthcare
                facilities ensure prompt care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section id="safety" className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Comprehensive Safety Measures</h2>
            <p>
              Multiple layers of security and supervision keep students safe
              24/7
            </p>
          </div>

          <div className="grid grid-2">
            {safetyMeasures.map((category, index) => (
              <div key={index} className="safety-category">
                <h3>{category.category}</h3>
                <ul className="safety-list">
                  {category.measures.map((measure, idx) => (
                    <li key={idx}>{measure}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Schedule */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Staying Connected</h2>
            <p>
              Regular communication keeps you informed about your teen's
              progress and experiences
            </p>
          </div>

          <div className="communication-timeline">
            {communicationSchedule.map((comm, index) => (
              <div key={index} className="comm-item">
                <div className="comm-type">
                  <h4>{comm.type}</h4>
                  <span className="comm-timing">{comm.timing}</span>
                </div>
                <p className="comm-description">{comm.description}</p>
              </div>
            ))}
          </div>

          <div className="emergency-contact">
            <h3>24/7 Emergency Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Emergency Hotline:</strong> +1 (555) 123-HELP (4357)
              </div>
              <div className="contact-item">
                <strong>Email:</strong> emergency@sciss.edu
              </div>
              <div className="contact-item">
                <strong>WhatsApp:</strong> +1 (555) 123-4567
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Requirements */}
      <section id="health" className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Health & Medical Requirements</h2>
            <p>
              Ensure your teen meets all health requirements for a safe and
              healthy experience
            </p>
          </div>

          <div className="health-requirements">
            {healthRequirements.map((req, index) => (
              <div key={index} className="health-req-item">
                <div className="req-header">
                  <h4>{req.requirement}</h4>
                  <span className="req-deadline">{req.deadline}</span>
                </div>
                <p>{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Guide */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Packing Guide</h2>
            <p>
              Help your teen pack everything they need for a successful summer
              experience
            </p>
          </div>

          <div className="packing-categories">
            {Object.entries(packingList).map(([category, items], index) => (
              <div key={index} className="packing-category">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <ul className="packing-list">
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="packing-tips">
            <h3>Packing Tips</h3>
            <div className="tips-grid">
              <div className="tip-item">
                <span className="tip-icon">📦</span>
                <p>
                  <strong>Label Everything:</strong> Include name and contact
                  information on all luggage and valuable items.
                </p>
              </div>
              <div className="tip-item">
                <span className="tip-icon">✈️</span>
                <p>
                  <strong>Check Airline Restrictions:</strong> Verify weight
                  limits and prohibited items with your airline.
                </p>
              </div>
              <div className="tip-item">
                <span className="tip-icon">🧳</span>
                <p>
                  <strong>Pack Smart:</strong> Bring versatile clothing and
                  leave space for souvenirs on return trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Campus Services</h2>
            <p>Convenient services to support your teen's daily needs</p>
          </div>

          <div className="services-grid">
            {campusServices.map((service, index) => (
              <div key={index} className="service-card">
                <h4>{service.service}</h4>
                <p>{service.description}</p>
                <div className="service-cost">{service.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Protocols */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Emergency Protocols</h2>
            <p>Comprehensive response plans for various emergency scenarios</p>
          </div>

          <div className="emergency-protocols">
            {emergencyProtocols.map((protocol, index) => (
              <div key={index} className="protocol-card">
                <h3>{protocol.scenario}</h3>
                <div className="protocol-steps">
                  <h4>Response Protocol:</h4>
                  <ol>
                    {protocol.response.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Travel Tips</h2>
            <p>Practical advice for international travel preparation</p>
          </div>

          <div className="grid grid-3">
            {travelTips.map((tip, index) => (
              <div key={index} className="travel-tip-card">
                <h3>{tip.tip}</h3>
                <ul>
                  {tip.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>What Parents Say</h2>
            <p>Hear from other parents about their SCISS experience</p>
          </div>

          <div className="grid grid-3">
            {parentTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">💬</div>
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <strong>{testimonial.parent}</strong>
                  <span>Parent of {testimonial.student}</span>
                  <div className="testimonial-year">{testimonial.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common parent concerns</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>How often will I hear from my teen?</h4>
              <p>
                Students have daily free time to contact home, plus you'll
                receive weekly updates from our staff and daily photo uploads to
                our secure parent portal.
              </p>
            </div>

            <div className="faq-item">
              <h4>What happens if my teen gets homesick?</h4>
              <p>
                Our experienced residential staff are trained to help students
                through homesickness. We provide counseling support and maintain
                close communication with parents.
              </p>
            </div>

            <div className="faq-item">
              <h4>Can I visit during the program?</h4>
              <p>
                While we encourage independence, family visits can be arranged
                for special circumstances. Please coordinate with our staff in
                advance.
              </p>
            </div>

            <div className="faq-item">
              <h4>What if there's a family emergency at home?</h4>
              <p>
                We have 24/7 emergency contact protocols and can facilitate
                immediate communication or arrange for early departure if
                necessary.
              </p>
            </div>

            <div className="faq-item">
              <h4>How do you handle dietary restrictions?</h4>
              <p>
                Our dining services accommodate all dietary needs including
                allergies, religious restrictions, and personal preferences.
                Detailed information is collected during registration.
              </p>
            </div>

            <div className="faq-item">
              <h4>What's included in the medical care?</h4>
              <p>
                Basic medical care is included. For serious conditions requiring
                specialist care, we coordinate with local hospitals and work
                with your insurance provider.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParentInformation;
