"use client";

import { SectionHeader } from "@/components/ui";
import React from "react";

interface DirectoryItem {
  id: string;
  title?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  position?: string;
}

interface DirectoryCategoriesProps {
  groupedItems: Record<string, DirectoryItem[]>;
  type: "trips" | "staff" | "courses" | "activities";
  onCategorySelect?: (category: string) => void;
  className?: string;
}

/**
 * Universal Directory Categories Component
 * Handles category overview sections for trips, staff, courses, and activities
 * Applies DRY principles with type-specific customization
 */
const DirectoryCategories: React.FC<DirectoryCategoriesProps> = ({
  groupedItems,
  type,
  onCategorySelect,
  className = "",
}) => {
  // Get section title based on type
  const getSectionTitle = () => {
    const titles = {
      trips: "Trip Categories",
      staff: "Academic Departments",
      courses: "Course Categories",
      activities: "Activity Categories",
    };
    return titles[type] || "Categories";
  };

  // Get section description based on type
  const getSectionDescription = () => {
    const descriptions = {
      trips:
        "Explore our diverse range of trip categories designed to provide educational, cultural, and recreational experiences.",
      staff:
        "Explore our diverse academic departments and meet the experts who lead each area of study.",
      courses:
        "Explore our comprehensive course categories designed to provide cutting-edge knowledge and practical skills.",
      activities:
        "Explore our diverse range of activity categories designed to enhance your SCISS experience.",
    };
    return descriptions[type] || "Explore our categories.";
  };

  // Get category count label based on type
  const getCategoryCountLabel = (count) => {
    const labels = {
      trips: count === 1 ? "Trip" : "Trips",
      staff: count === 1 ? "Faculty Member" : "Faculty Members",
      courses: count === 1 ? "Course" : "Courses",
      activities: count === 1 ? "Activity" : "Activities",
    };
    return labels[type] || "Items";
  };

  // Get category button text based on type
  const getCategoryButtonText = (category) => {
    const buttonTexts = {
      trips: `View ${category} Trips`,
      staff: `View ${category} Faculty`,
      courses: `View ${category} Courses`,
      activities: `View ${category} Activities`,
    };
    return buttonTexts[type] || `View ${category}`;
  };

  // Get item display name based on type
  const getItemDisplayName = (item) => {
    if (type === "staff") {
      return (
        `${item.firstName || ""} ${item.lastName || ""}`.trim() ||
        item.position ||
        "Faculty Member"
      );
    }
    return item.title || item.name || "Untitled";
  };

  return (
    <section
      className={`${type}-categories-overview directory-categories ${className}`}
    >
      <div className="container">
        <SectionHeader
          title={getSectionTitle()}
          description={getSectionDescription()}
          showDivider
        />

        <div className="categories-grid">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="category-overview-card card">
              <h3>{category.toUpperCase()}</h3>
              <div className="category-count">
                {items.length} {getCategoryCountLabel(items.length)}
              </div>
              <div className="category-examples">
                {items.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="example-item">
                    {getItemDisplayName(item)}
                  </div>
                ))}
                {items.length > 3 && (
                  <div className="example-item">+{items.length - 3} more</div>
                )}
              </div>
              <button
                className="category-filter-btn"
                onClick={() => onCategorySelect(category)}
              >
                {getCategoryButtonText(category)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectoryCategories;
