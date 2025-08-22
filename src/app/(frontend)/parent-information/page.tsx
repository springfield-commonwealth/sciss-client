"use client";

import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { FeatureGrid, SectionHeader } from "@/components/ui";
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
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import React from "react";

export default function ParentInformation(): React.JSX.Element {
  // Generate breadcrumbs for parent-information page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Parent Information", href: "/parent-information", active: true },
  ]);
  // Prepare parent features data for FeatureGrid component
  const parentFeaturesData = [
    {
      icon: "📞",
      title: "Regular Updates",
      description: "Weekly progress reports and communication from our staff",
    },
    {
      icon: "📱",
      title: "24/7 Access",
      description: "Emergency contact information and real-time updates",
    },
    {
      icon: "📧",
      title: "Digital Portal",
      description: "Online platform for photos, updates, and communication",
    },
  ];

  // Prepare packing tips data for FeatureGrid component
  const packingTipsData = [
    {
      icon: "📦",
      title: "Label Everything",
      description:
        "Include name and contact information on all luggage and valuable items.",
    },
    {
      icon: "✈️",
      title: "Check Airline Restrictions",
      description:
        "Verify weight limits and prohibited items with your airline.",
    },
    {
      icon: "🧳",
      title: "Pack Smart",
      description:
        "Bring versatile clothing and leave space for souvenirs on return trip.",
    },
  ];

  return (
    <Layout
      title="Parent Information - SCISS"
      description="Essential information for parents about SCISS Summer School programs, safety, and student support."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <HeroSection
        title="Parent Information"
        subtitle="Your Peace of Mind Matters"
        description="Comprehensive information to help you prepare for your teen's SCISS experience and feel confident about their safety and wellbeing."
        backgroundImage={{
          src: "/images/academics-hero.jpg",
          alt: "Parent Information Hero",
        }}
        ctaText="Safety & Security"
        ctaLink="#safety"
        secondaryCtaText="Health Requirements"
        secondaryCtaLink="#health"
      />

      {/* Overview for Parents */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Your Teen's Safety is Our Priority"
            description="We understand that sending your teenager abroad is a big decision. Here's everything you need to know about our comprehensive safety and support systems."
            showDivider
          />

          <FeatureGrid
            features={parentFeaturesData}
            columns={3}
            hoverable
            onFeatureClick={(feature, index) => {
              console.log("Clicked feature:", feature, index);
            }}
          />
        </div>
      </section>

      {/* Safety & Security */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Safety & Security"
            description="Your child's safety is our top priority"
            showDivider
          />

          <div className="grid grid--2">
            {ParentInfoSafetyMeasures.map((category, index) => (
              <div key={index} className="safety-category card">
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

      {/* Communication Timeline */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Communication Timeline"
            description="Stay informed throughout your child's journey"
            showDivider
          />

          <div className="communication-timeline">
            {ParentInfoCommunicationSchedule.map((comm, index) => (
              <div key={index} className="comm-item card">
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
                <strong>Email:</strong> emergency@sciss.org
              </div>
              <div className="contact-item">
                <strong>WhatsApp:</strong> +1 (555) 123-4567
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Requirements */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Health Requirements"
            description="Important health information and deadlines"
            showDivider
          />

          <div className="health-requirements">
            {ParentInfoHealthRequirements.map((req, index) => (
              <div key={index} className="health-req-item card">
                <div className="req-header">
                  <h4>{req.requirement}</h4>
                  <span className="req-deadline">Due: {req.deadline}</span>
                </div>
                <p>{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Guidelines */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Packing Guidelines"
            description="What to bring and what to leave at home"
            showDivider
          />

          <div className="packing-categories">
            {Object.entries(ParentInfoPackingList).map(
              ([category, items], index) => (
                <div key={index} className="packing-category card">
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
            <FeatureGrid
              features={packingTipsData}
              columns={3}
              hoverable
              onFeatureClick={(tip, index) => {
                console.log("Clicked tip:", tip, index);
              }}
            />
          </div>
        </div>
      </section>

      {/* Campus Services */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Campus Services"
            description="Comprehensive support services available to your teen"
            showDivider
          />

          <div className="services-grid">
            {ParentInfoCampusServices.map((service, index) => (
              <div key={index} className="service-card card">
                <h3>{service.service}</h3>
                <p>{service.description}</p>
                <div className="service-cost">{service.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Travel Tips"
            description="Helpful advice for smooth travel to and from SCISS"
            showDivider
          />

          <div className="travel-tips">
            {ParentInfoTravelTips.map((tip, index) => (
              <div key={index} className="travel-tip-card card">
                <div className="tip-header">
                  <h4>{tip.tip}</h4>
                </div>
                <ul className="tip-list">
                  {tip.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Protocols */}
      <section className="section bg-light">
        <div className="container">
          <SectionHeader
            title="Emergency Protocols"
            description="Our comprehensive emergency response procedures"
            showDivider
          />

          <div className="protocols-grid">
            {ParentInfoEmergencyProtocols.map((protocol, index) => (
              <div key={index} className="protocol-card card">
                <h3>{protocol.scenario}</h3>
                <p>{protocol.response.join(" ")}</p>
                <div className="protocol-steps">
                  <h4>Response Steps:</h4>
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

      {/* Parent Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="What Parents Say"
            description="Hear from parents who have experienced SCISS with their teens"
            showDivider
          />

          <div className="testimonials-grid">
            {ParentInfoParentTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
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

      <FooterCTA linkTitle="Academic Programs" link="/academics" />
    </Layout>
  );
}
