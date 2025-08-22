"use client";

import { SectionHeader, StatsGrid } from "@/components/ui";
import Head from "next/head";
import React, { useMemo, useState } from "react";
import DirectoryCard from "./DirectoryCard";
import DirectoryCategories from "./DirectoryCategories";
import DirectoryFilters from "./DirectoryFilters";
import FooterCTA from "./FooterCTA";

interface DirectoryItem {
  id: string;
  slug?: string;
  title?: string;
  description?: string;
  name?: string;
  category?: string;
  department?: string;
}

interface DirectoryStats {
  totalTrips?: number;
  averageGroupSize?: number;
  totalStaff?: number;
  activeStaff?: number;
  totalCourses?: number;
  totalActivities?: number;
  [key: string]: any;
}

interface DirectoryPageProps {
  type: "trips" | "staff" | "courses" | "activities";
  title: string;
  description: string;
  gridColumns?: number;
  items: DirectoryItem[];
  categories: string[];
  stats?: DirectoryStats;
  breadcrumbs?: Array<{ label: string; href: string; active?: boolean }>;
  renderCardContent?: (item: DirectoryItem) => React.ReactNode;
  renderBadges?: (item: DirectoryItem) => React.ReactNode;
  getItemCategories?: (item: DirectoryItem) => string;
  ctaConfig?: Record<string, any>;
  seoConfig?: Record<string, any>;
}

/**
 * Universal Directory Page Component
 * Handles trips, staff, courses, and activities directories
 * Applies DRY principles with type-specific customization
 */
const DirectoryPage: React.FC<DirectoryPageProps> = ({
  type,
  title,
  description,
  gridColumns = 2,
  items = [],
  categories = [],
  stats = {},
  breadcrumbs = [],
  renderCardContent,
  renderBadges,
  getItemCategories,
  ctaConfig = {},
  seoConfig = {},
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "" ||
        item.category === selectedCategory ||
        item.department === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, selectedCategory]);

  // Group items by category for overview section
  const groupedItems = useMemo(() => {
    if (!getItemCategories) return {};

    const grouped = {};
    items.forEach((item) => {
      const category = getItemCategories(item);
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(item);
    });
    return grouped;
  }, [items, getItemCategories]);

  // Prepare stats data for StatsGrid component
  const statsData = useMemo(() => {
    const defaultStats = [
      {
        number: items.length,
        label: `${type.charAt(0).toUpperCase() + type.slice(1)} Available`,
        icon: getTypeIcon(type),
      },
      {
        number: categories.length,
        label: `${type.charAt(0).toUpperCase() + type.slice(1)} Categories`,
        icon: "📚",
      },
    ];

    // Add type-specific stats
    if (stats.totalTrips) {
      defaultStats.push({
        number: stats.averageGroupSize,
        label: "Avg. Group Size",
        icon: "👥",
      });
    }

    if (stats.totalStaff) {
      defaultStats.push({
        number: stats.activeStaff,
        label: "Active This Year",
        icon: "✅",
      });
    }

    if (stats.totalCourses) {
      defaultStats.push({
        number: stats.coreCoursesCount,
        label: "Core Courses",
        icon: "🎯",
      });
    }

    if (stats.totalActivities) {
      defaultStats.push({
        number: stats.averageParticipants,
        label: "Avg. Group Size",
        icon: "👥",
      });
    }

    return defaultStats;
  }, [items, categories, stats, type]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  return (
    <>
      <Head>
        <title>{seoConfig.title || `${title} | SCISS`}</title>
        <meta
          name="description"
          content={seoConfig.description || description}
        />
        <meta
          name="keywords"
          content={seoConfig.keywords || `${type}, directory, SCISS`}
        />
        {seoConfig.ogTitle && (
          <meta property="og:title" content={seoConfig.ogTitle} />
        )}
        {seoConfig.ogDescription && (
          <meta property="og:description" content={seoConfig.ogDescription} />
        )}
        {seoConfig.canonicalUrl && (
          <link rel="canonical" href={seoConfig.canonicalUrl} />
        )}
      </Head>

      <main className={`${type}-directory directory-page`}>
        {/* Header Section */}
        <section className={`${type}-directory-header directory-header`}>
          <div className="container">
            <SectionHeader
              title={title}
              description={description}
              showDivider={true}
              variant="directory"
            />

            {/* Statistics using reusable StatsGrid component */}
            <StatsGrid
              stats={statsData}
              columns={3}
              hoverable
              onStatClick={(stat, index) => {
                console.log("Clicked stat:", stat, index);
              }}
            />
          </div>
        </section>

        {/* Search and Filter Section */}
        <DirectoryFilters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          categories={categories}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onClearFilters={clearFilters}
          type={type}
          totalItems={items.length}
          filteredItems={filteredItems.length}
        />

        {/* Items Grid */}
        <section className={`${type}-directory-grid directory-grid`}>
          <div className="container">
            {filteredItems.length > 0 ? (
              <div className={`grid grid--${gridColumns}`}>
                {filteredItems.map((item, index) => (
                  <DirectoryCard
                    key={item.id || item.slug || index}
                    data={item}
                    type={type}
                    className={`${type}-card`}
                    renderCardContent={renderCardContent}
                    renderBadges={renderBadges}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No {type} found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Categories Overview */}
        {Object.keys(groupedItems).length > 0 && (
          <DirectoryCategories
            groupedItems={groupedItems}
            type={type}
            onCategorySelect={setSelectedCategory}
          />
        )}

        {/* Call to Action */}
        {ctaConfig.showCTA && (
          <section className={`${type}-directory-cta directory-cta`}>
            <div className="container">
              <SectionHeader
                title={ctaConfig.title || `Ready to Explore?`}
                description={
                  ctaConfig.description ||
                  `Join our exciting ${type} and discover amazing opportunities.`
                }
                showDivider
              />
              <div className="cta-actions">
                {ctaConfig.primaryAction && (
                  <a
                    href={ctaConfig.primaryAction.href}
                    className="btn btn--primary btn--lg"
                  >
                    {ctaConfig.primaryAction.text}
                  </a>
                )}
                {ctaConfig.secondaryAction && (
                  <a
                    href={ctaConfig.secondaryAction.href}
                    className="btn btn--secondary"
                  >
                    {ctaConfig.secondaryAction.text}
                  </a>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer CTA */}
      {ctaConfig.footerCTA && (
        <FooterCTA
          linkTitle={ctaConfig.footerCTA.title}
          link={ctaConfig.footerCTA.link}
        />
      )}
    </>
  );
};

// Helper function to get type-specific icons
const getTypeIcon = (type) => {
  const icons = {
    trips: "🗺️",
    staff: "👨‍🏫",
    courses: "📚",
    activities: "🎯",
  };
  return icons[type] || "📋";
};

export default DirectoryPage;
