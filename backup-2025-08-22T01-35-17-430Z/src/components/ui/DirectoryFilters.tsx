"use client";

import React from "react";
/**
 * Universal Directory Filters Component
 * Handles search and filtering for trips, staff, courses, and activities
 * Applies DRY principles with type-specific customization
 */
const DirectoryFilters = ({
  searchTerm,
  selectedCategory,
  categories = [],
  onSearchChange,
  onCategoryChange,
  onClearFilters,
  type,
  totalItems,
  filteredItems,
  className = "",
}) => {
  const hasActiveFilters = searchTerm || selectedCategory;

  // Get search placeholder based on type
  const getSearchPlaceholder = () => {
    const placeholders = {
      trips: "Search trips by name, highlights, or description...",
      staff: "Search faculty by name, position, or expertise...",
      courses: "Search courses by name, description, or category...",
      activities: "Search activities by name, features, or description...",
    };
    return placeholders[type] || "Search...";
  };

  // Get category label based on type
  const getCategoryLabel = () => {
    const labels = {
      trips: "Trip Categories",
      staff: "Departments",
      courses: "Course Categories",
      activities: "Activity Categories",
    };
    return labels[type] || "Categories";
  };

  return (
    <section
      className={`directory-filters ${className}`}
    >
      <div className="container">
        <div className="filter-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder={getSearchPlaceholder()}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
              aria-label={`Search ${type}`}
            />
          </div>

          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="category-select"
              aria-label={`Filter by ${getCategoryLabel().toLowerCase()}`}
            >
              <option value="">All {getCategoryLabel()}</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="clear-filters-btn"
              aria-label="Clear all filters"
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className="results-count">
          Showing {filteredItems} of {totalItems} {type}
          {selectedCategory && ` in ${selectedCategory}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </div>
      </div>
    </section>
  );
};

export default DirectoryFilters;
