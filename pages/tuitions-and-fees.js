import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { TuitionHero } from "@/constants/images";
import {
  TuitionsAdditionalCosts,
  TuitionsApplicationProcess,
  TuitionsIncludedServices,
  TuitionsSessions,
} from "@/constants/tuitionsAndFeesContent";
import Link from "next/link";

const TuitionsAndFees = () => {
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
        ctaText="Application Process"
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
            {TuitionsSessions.map((session, index) => (
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

          <div className="grid grid-2">
            {TuitionsIncludedServices.map((service, index) => (
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
            {TuitionsAdditionalCosts.map((cost, index) => (
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
            {TuitionsApplicationProcess.map((step, index) => (
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
            <Link href="/apply" className="btn btn-primary">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TuitionsAndFees;
