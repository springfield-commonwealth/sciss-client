"use client";

import Layout from "@/components/layouts/Layout";
import { DirectoryPage } from "@/components/ui";
import {
  getActivityCategories,
  getActivityStats,
  getAllActivities,
} from "@/lib/content/activities";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import React from "react";

export default function ActivitiesDirectory(): React.JSX.Element {
  // Generate breadcrumbs for activities page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Life Activities", href: "/activities", active: true },
  ]);

  // Get activities data
  const activities = getAllActivities();
  const activityCategories = getActivityCategories();
  const stats = getActivityStats();

  // Custom content renderer for activities
  const renderActivityContent = (activity) => {
    return (
      <>
        <div className="card__features">
          {activity.features?.slice(0, 3).map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
          {activity.features?.length > 3 && (
            <span className="feature-more">
              +{activity.features.length - 3} more
            </span>
          )}
        </div>
        <div className="card__info">
          <div className="info-item">
            <strong>Level:</strong> {activity.level}
          </div>
          <div className="info-item">
            <strong>Duration:</strong> {activity.duration}
          </div>
        </div>
      </>
    );
  };

  // Custom badge renderer for activities
  const renderActivityBadges = (activity) => {
    return (
      <>
        <span className="category-badge">{activity.category}</span>
        <span className="level-badge">{activity.level}</span>
      </>
    );
  };

  // Function to get activity categories for grouping
  const getActivityCategoryForGrouping = (activity) => activity.category;

  return (
    <Layout
      title="Life Activities - SCISS"
      description="Explore our diverse range of life activities designed to enhance your SCISS experience and develop essential life skills."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <DirectoryPage
        type="activities"
        title="Life Activities Directory"
        description="Explore our diverse range of life activities designed to enhance your SCISS experience and develop essential life skills."
        items={activities}
        categories={activityCategories}
        stats={stats}
        breadcrumbs={breadcrumbs}
        renderCardContent={renderActivityContent}
        renderBadges={renderActivityBadges}
        getItemCategories={getActivityCategoryForGrouping}
        ctaConfig={{
          footerCTA: {
            title: "Academic Programs",
            link: "/courses",
          },
        }}
        seoConfig={{
          title: "Life Activities Directory | SCISS",
          description:
            "Explore our diverse range of life activities designed to enhance your SCISS experience and develop essential life skills.",
          keywords:
            "SCISS activities, life activities, student activities, skill development, recreational activities",
          ogTitle: "Life Activities Directory | SCISS",
          ogDescription:
            "Explore our diverse range of life activities designed to enhance your SCISS experience and develop essential life skills.",
          canonicalUrl: "https://sciss.org/activities",
        }}
      />
    </Layout>
  );
}
