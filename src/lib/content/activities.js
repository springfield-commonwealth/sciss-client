// Activities Content Management - Epic 5: Story 5.2 Task 1
// Life activities and sports program management with comprehensive utilities

import activitiesData from "@/data/content/activities.json";

/**
 * Get all published activities
 * @returns {Array} Array of activity objects
 */
export function getAllActivities() {
  return activitiesData.activities.filter((activity) => activity.published);
}

/**
 * Get activity by slug
 * @param {string} slug - The activity slug
 * @returns {Object|null} Activity object or null if not found
 */
export function getActivityBySlug(slug) {
  return (
    activitiesData.activities.find(
      (activity) => activity.slug === slug && activity.published
    ) || null
  );
}

/**
 * Get activity by ID
 * @param {string} id - The activity ID
 * @returns {Object|null} Activity object or null if not found
 */
export function getActivityById(id) {
  return (
    activitiesData.activities.find(
      (activity) => activity.id === id && activity.published
    ) || null
  );
}

/**
 * Get activities by category
 * @param {string} category - Category name (Sports, Fitness, Arts & Recreation, Wellness)
 * @returns {Array} Array of activity objects
 */
export function getActivitiesByCategory(category) {
  return activitiesData.activities.filter(
    (activity) => activity.category === category && activity.published
  );
}

/**
 * Get activities by difficulty level
 * @param {string} level - Difficulty level
 * @returns {Array} Array of activity objects
 */
export function getActivitiesByLevel(level) {
  return activitiesData.activities.filter(
    (activity) => activity.level === level && activity.published
  );
}

/**
 * Search activities by name, features, or tags
 * @param {string} query - Search query
 * @returns {Array} Array of matching activity objects
 */
export function searchActivities(query) {
  const searchTerm = query.toLowerCase();
  return activitiesData.activities.filter(
    (activity) =>
      activity.published &&
      (activity.title.toLowerCase().includes(searchTerm) ||
        activity.description.toLowerCase().includes(searchTerm) ||
        activity.features.some((feature) =>
          feature.toLowerCase().includes(searchTerm)
        ) ||
        activity.tags.some((tag) => tag.toLowerCase().includes(searchTerm)))
  );
}

/**
 * Get activities with specific features
 * @param {string} feature - Feature to search for
 * @returns {Array} Array of activity objects
 */
export function getActivitiesByFeature(feature) {
  return activitiesData.activities.filter(
    (activity) =>
      activity.published &&
      activity.features.some((f) =>
        f.toLowerCase().includes(feature.toLowerCase())
      )
  );
}

/**
 * Get related activities based on category and tags
 * @param {Object} activity - The reference activity
 * @param {number} limit - Maximum number of related activities to return
 * @returns {Array} Array of related activity objects
 */
export function getRelatedActivities(activity, limit = 3) {
  const related = activitiesData.activities.filter(
    (a) =>
      a.published &&
      a.id !== activity.id &&
      (a.category === activity.category ||
        a.tags.some((tag) => activity.tags.includes(tag)))
  );

  // Sort by relevance (same category first, then shared tags)
  related.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    if (a.category === activity.category) scoreA += 3;
    if (b.category === activity.category) scoreB += 3;

    const sharedTagsA = a.tags.filter((tag) =>
      activity.tags.includes(tag)
    ).length;
    const sharedTagsB = b.tags.filter((tag) =>
      activity.tags.includes(tag)
    ).length;
    scoreA += sharedTagsA;
    scoreB += sharedTagsB;

    return scoreB - scoreA;
  });

  return related.slice(0, limit);
}

/**
 * Get all unique categories
 * @returns {Array} Array of category strings
 */
export function getActivityCategories() {
  return activitiesData.metadata.categories;
}

/**
 * Get all unique difficulty levels
 * @returns {Array} Array of level strings
 */
export function getActivityLevels() {
  const levels = [
    ...new Set(
      activitiesData.activities
        .filter((activity) => activity.published)
        .map((activity) => activity.level)
    ),
  ];
  return levels.sort();
}

/**
 * Get all unique time slots
 * @returns {Array} Array of time slot strings
 */
export function getActivityTimeSlots() {
  const timeSlots = [
    ...new Set(
      activitiesData.activities
        .filter((activity) => activity.published)
        .flatMap((activity) => activity.schedule.timeSlots || [])
    ),
  ];
  return timeSlots.sort();
}

/**
 * Get activity statistics
 * @returns {Object} Activity statistics
 */
export function getActivityStats() {
  const publishedActivities = activitiesData.activities.filter(
    (activity) => activity.published
  );

  return {
    totalActivities: publishedActivities.length,
    categoryCounts: getActivityCategories().reduce((acc, category) => {
      acc[category] = publishedActivities.filter(
        (a) => a.category === category
      ).length;
      return acc;
    }, {}),
    averageParticipants: Math.round(
      publishedActivities.reduce(
        (sum, a) => sum + (a.maxParticipants || 0),
        0
      ) / publishedActivities.length
    ),
    lastUpdated: activitiesData.metadata.lastUpdated,
    version: activitiesData.metadata.version,
  };
}

/**
 * Filter activities with multiple criteria
 * @param {Object} filters - Filter object with category, level, timeSlot, search
 * @returns {Array} Array of filtered activity objects
 */
export function filterActivities(filters = {}) {
  let filtered = activitiesData.activities.filter(
    (activity) => activity.published
  );

  if (filters.category) {
    filtered = filtered.filter(
      (activity) => activity.category === filters.category
    );
  }

  if (filters.level) {
    filtered = filtered.filter((activity) => activity.level === filters.level);
  }

  if (filters.timeSlot) {
    filtered = filtered.filter((activity) =>
      activity.schedule.timeSlots.includes(filters.timeSlot)
    );
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filtered = filtered.filter(
      (activity) =>
        activity.title.toLowerCase().includes(searchTerm) ||
        activity.description.toLowerCase().includes(searchTerm) ||
        activity.features.some((feature) =>
          feature.toLowerCase().includes(searchTerm)
        )
    );
  }

  return filtered;
}

/**
 * Get activity preview cards for directory display
 * @returns {Array} Array of activity preview objects
 */
export function getActivityPreviews() {
  return activitiesData.activities
    .filter((activity) => activity.published)
    .map((activity) => ({
      id: activity.id,
      slug: activity.slug,
      title: activity.title,
      category: activity.category,
      level: activity.level,
      image: activity.image,
      features: activity.features.slice(0, 3), // Show top 3 features
      description:
        activity.description.substring(0, 150) +
        (activity.description.length > 150 ? "..." : ""),
      maxParticipants: activity.maxParticipants,
      difficulty: activity.difficulty,
    }));
}

/**
 * Get activities by instructor type
 * @param {string} instructorType - Type of instructor
 * @returns {Array} Array of activity objects
 */
export function getActivitiesByInstructor(instructorType) {
  return activitiesData.activities.filter(
    (activity) =>
      activity.published &&
      activity.instructors.some((instructor) =>
        instructor.toLowerCase().includes(instructorType.toLowerCase())
      )
  );
}

/**
 * Get popular activities (those with high participant limits or multiple time slots)
 * @param {number} limit - Number of popular activities to return
 * @returns {Array} Array of popular activity objects
 */
export function getPopularActivities(limit = 6) {
  const activities = activitiesData.activities
    .filter((activity) => activity.published)
    .sort((a, b) => {
      // Score based on max participants and time slot availability
      const scoreA = (a.maxParticipants || 0) + a.schedule.timeSlots.length * 5;
      const scoreB = (b.maxParticipants || 0) + b.schedule.timeSlots.length * 5;
      return scoreB - scoreA;
    });

  return activities.slice(0, limit);
}
