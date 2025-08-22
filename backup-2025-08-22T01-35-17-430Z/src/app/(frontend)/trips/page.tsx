"use client";

import Layout from "@/app/src/components/layouts/Layout";
import React from "react";

import { DirectoryPage } from "@/app/src/components/ui";
import {
  getAllTrips,
  getTripCategories,
  getTripStats,
} from "@/app/src/lib/content/trips";
import { generateBreadcrumbs } from "@/app/src/lib/utils/navigation";

// Trips Directory Page Component - Using Universal Directory System
export default function TripsDirectory(): React.JSX.Element {
  // Generate breadcrumbs for trips page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Trips & Excursions", href: "/trips", active: true },
  ]);

  // Get trips data
  const trips = getAllTrips();
  const categories = getTripCategories();
  const stats = getTripStats();

  // Custom content renderer for trips
  const renderTripContent = (trip) => {
    return (
      <>
        <div className="card__highlights">
          {trip.highlights?.slice(0, 3).map((highlight, index) => (
            <span key={index} className="highlight-tag">
              {highlight}
            </span>
          ))}
          {trip.highlights?.length > 3 && (
            <span className="highlight-more">
              +{trip.highlights.length - 3} more
            </span>
          )}
        </div>
        <div className="card__info">
          <div className="info-item">
            <strong>Duration:</strong> {trip.duration}
          </div>
        </div>
      </>
    );
  };

  // Custom badge renderer for trips
  const renderTripBadges = (trip) => {
    return (
      <>
        <span className="category-badge">{trip.category}</span>
        <span className="duration-badge">{trip.duration}</span>
      </>
    );
  };

  // Function to get trip categories for grouping
  const getTripCategoryForGrouping = (trip) => trip.category;

  return (
    <Layout
      title="Day Trips - SCISS"
      description="Explore exciting day trips and educational excursions at SCISS."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <DirectoryPage
        type="trips"
        title="Day Trips & Excursions Directory"
        description="Discover our exciting day trips and educational excursions designed to expand your horizons. From prestigious university visits to cultural adventures, explore the best of New England with SCISS."
        items={trips}
        categories={categories}
        gridColumns={3}
        stats={stats}
        breadcrumbs={breadcrumbs}
        renderCardContent={renderTripContent}
        renderBadges={renderTripBadges}
        getItemCategories={getTripCategoryForGrouping}
        ctaConfig={{
          footerCTA: {
            title: "Life Activities",
            link: "/activities",
          },
        }}
        seoConfig={{
          title: "Trips Directory | SCISS Day Trips & Excursions",
          description:
            "Explore our exciting day trips and educational excursions including university visits, cultural experiences, and recreational adventures.",
          keywords:
            "SCISS trips, day trips, university visits, educational tours, cultural excursions, student travel",
          ogTitle: "Trips Directory | SCISS Day Trips & Excursions",
          ogDescription:
            "Explore our exciting day trips and educational excursions including university visits, cultural experiences, and recreational adventures.",
          canonicalUrl: "https://sciss.org/trips",
        }}
      />
    </Layout>
  );
}
