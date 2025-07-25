import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  ParentInfoCampusServices,
  ParentInfoCommunicationSchedule,
  ParentInfoEmergencyProtocols,
  ParentInfoHealthRequirements,
  ParentInfoPackingList,
  ParentInfoParentTestimonials,
  ParentInfoSafetyMeasures,
  ParentInfoTravelTips,
} from "@/constants/parentInformationContent";

const ParentInformation = () => {
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
            {ParentInfoSafetyMeasures.map((category, index) => (
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
            {ParentInfoCommunicationSchedule.map((comm, index) => (
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
            {ParentInfoHealthRequirements.map((req, index) => (
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
            {Object.entries(ParentInfoPackingList).map(
              ([category, items], index) => (
                <div key={index} className="packing-category">
                  <h3>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <ul className="packing-list">
                    {items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
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
            {ParentInfoCampusServices.map((service, index) => (
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
            {ParentInfoEmergencyProtocols.map((protocol, index) => (
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
            {ParentInfoTravelTips.map((tip, index) => (
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
            {ParentInfoParentTestimonials.map((testimonial, index) => (
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

      <FooterCTA linkTitle="Academic Programs" link="/academics" />
    </Layout>
  );
};

export default ParentInformation;
