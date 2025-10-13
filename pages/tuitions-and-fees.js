import Layout from "@/components/layouts/Layout";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  TuitionsAdditionalCosts,
  TuitionsApplicationProcess,
  TuitionsIncludedServices,
  TuitionsSessions,
} from "@/constants/tuitionsAndFeesContent";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";

const TuitionsAndFees = ({ breadcrumbs = [] }) => {
  return (
    <Layout
      title="Tuitions & Fees - SCISS"
      description="Comprehensive information about SCISS Summer School tuition, fees, and payment options."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Page Header Section */}
      <section className="section page-header-section">
        <div className="container">
          <div className="page-header-content">
            <h1 className="page-title">Tuitions & Fees</h1>
            <p className="page-subtitle">Invest in Your Future</p>
            <p className="page-description">Discover our competitive pricing, flexible payment options, and scholarship opportunities for an exceptional summer learning experience.</p>
            <div className="page-header-cta">
              <Link href="#apply" className="btn btn--primary">Application Process</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pricing */}
      <section className="section">
        <div className="container">
          <div className="text--center mb--lg">
            <h2>Choose Your Session</h2>
            <p>Four 2-week sessions across Summer 2026</p>
          </div>

          {/* Session Selection */}
          <div className="sessions-grid">
            {TuitionsSessions.map((session, index) => (
              <div key={index} className="session-card">
                <div className="session-badge">{session.name}</div>
                <div className="session-dates">{session.dates}</div>
                <div className="session-duration">
                  <span className="duration-icon">📅</span>
                  {session.duration}
                </div>
                <div className="session-highlights">
                  {session.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <span className="highlight-bullet">•</span>
                      {highlight}
                    </div>
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
          <div className="text--center mb--lg">
            <h2>What's Included</h2>
            <p>Comprehensive program with no hidden fees</p>
          </div>

          <div className="grid grid--2">
            {TuitionsIncludedServices.map((service, index) => (
              <div key={index} className="service-category card">
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
          <div className="text--center mb--lg">
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
                    className={`cost-required ${cost.required ? "required" : "optional"
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
          <div className="text--center mb--lg">
            <h2>Application Process</h2>
            <p>Simple steps to secure your spot at SCISS 2026</p>
          </div>

          <div className="application-timeline">
            {TuitionsApplicationProcess.map((step, index) => (
              <div key={index} className="application-step card">
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

      <FooterCTA linkTitle="Apply Now" link="/apply" />
    </Layout>
  );
};

export default TuitionsAndFees;

export async function getStaticProps() {
  // Generate breadcrumbs for tuitions and fees page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Program Overview", href: "/program-overview" },
    { label: "Tuitions & Fees", href: "/tuitions-and-fees", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
