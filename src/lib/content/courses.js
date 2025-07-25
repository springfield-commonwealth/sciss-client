// Course Content Management - Epic 5: Content Architecture Modernization
// Replaces monolithic academicsContent.js with structured JSON-based content management

import coursesData from "@/data/content/academic-programs.json";

/**
 * Get all published courses
 * @returns {Array} Array of course objects
 */
export function getAllCourses() {
  return coursesData.courses.filter((course) => course.published);
}

/**
 * Get course by slug
 * @param {string} slug - The course slug
 * @returns {Object|null} Course object or null if not found
 */
export function getCourseBySlug(slug) {
  return (
    coursesData.courses.find(
      (course) => course.slug === slug && course.published
    ) || null
  );
}

/**
 * Get course by ID
 * @param {string} id - The course ID
 * @returns {Object|null} Course object or null if not found
 */
export function getCourseById(id) {
  return (
    coursesData.courses.find(
      (course) => course.id === id && course.published
    ) || null
  );
}

/**
 * Get courses by category
 * @param {string} category - Course category ('core', 'language', 'arts')
 * @returns {Array} Array of course objects
 */
export function getCoursesByCategory(category) {
  return coursesData.courses.filter(
    (course) => course.category === category && course.published
  );
}

/**
 * Get courses by level
 * @param {string} level - Course level ('Advanced', 'Intermediate', 'All Levels', etc.)
 * @returns {Array} Array of course objects
 */
export function getCoursesByLevel(level) {
  return coursesData.courses.filter(
    (course) => course.level === level && course.published
  );
}

/**
 * Get courses by session
 * @param {string} session - Session ('Session 1', 'Session 2', 'Both Sessions')
 * @returns {Array} Array of course objects
 */
export function getCoursesBySession(session) {
  return coursesData.courses.filter(
    (course) => course.session === session && course.published
  );
}

/**
 * Search courses by title or description
 * @param {string} query - Search query
 * @returns {Array} Array of matching course objects
 */
export function searchCourses(query) {
  const searchTerm = query.toLowerCase();
  return coursesData.courses.filter(
    (course) =>
      course.published &&
      (course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchTerm)))
  );
}

/**
 * Get related courses based on tags and category
 * @param {Object} course - The reference course
 * @param {number} limit - Maximum number of related courses to return
 * @returns {Array} Array of related course objects
 */
export function getRelatedCourses(course, limit = 3) {
  const related = coursesData.courses.filter(
    (c) =>
      c.published &&
      c.id !== course.id &&
      (c.category === course.category ||
        c.level === course.level ||
        c.tags.some((tag) => course.tags.includes(tag)))
  );

  // Sort by relevance (same category first, then same level, then shared tags)
  related.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    if (a.category === course.category) scoreA += 3;
    if (b.category === course.category) scoreB += 3;

    if (a.level === course.level) scoreA += 2;
    if (b.level === course.level) scoreB += 2;

    const sharedTagsA = a.tags.filter((tag) =>
      course.tags.includes(tag)
    ).length;
    const sharedTagsB = b.tags.filter((tag) =>
      course.tags.includes(tag)
    ).length;
    scoreA += sharedTagsA;
    scoreB += sharedTagsB;

    return scoreB - scoreA;
  });

  return related.slice(0, limit);
}

/**
 * Get all unique course categories
 * @returns {Array} Array of category strings
 */
export function getCourseCategories() {
  return coursesData.metadata.categories;
}

/**
 * Get all unique course levels
 * @returns {Array} Array of level strings
 */
export function getCourseLevels() {
  const levels = [
    ...new Set(
      coursesData.courses
        .filter((course) => course.published)
        .map((course) => course.level)
    ),
  ];
  return levels.sort();
}

/**
 * Get all unique course tags
 * @returns {Array} Array of tag strings
 */
export function getCourseTags() {
  const tags = [
    ...new Set(
      coursesData.courses
        .filter((course) => course.published)
        .flatMap((course) => course.tags)
    ),
  ];
  return tags.sort();
}

/**
 * Get course statistics
 * @returns {Object} Course statistics
 */
export function getCourseStats() {
  const publishedCourses = coursesData.courses.filter(
    (course) => course.published
  );

  return {
    totalCourses: publishedCourses.length,
    totalCapacity: publishedCourses.reduce(
      (sum, course) => sum + course.capacity,
      0
    ),
    coreCoursesCount: publishedCourses.filter((c) => c.category === "core")
      .length,
    electivesCount: publishedCourses.filter(
      (c) => c.category === "language" || c.category === "arts"
    ).length,
    categoryCounts: {
      core: publishedCourses.filter((c) => c.category === "core").length,
      language: publishedCourses.filter((c) => c.category === "language")
        .length,
      arts: publishedCourses.filter((c) => c.category === "arts").length,
    },
    levelCounts: getCourseLevels().reduce((acc, level) => {
      acc[level] = publishedCourses.filter((c) => c.level === level).length;
      return acc;
    }, {}),
    lastUpdated: coursesData.metadata.lastUpdated,
    version: coursesData.metadata.version,
  };
}

/**
 * Filter courses with multiple criteria
 * @param {Object} filters - Filter object with category, level, session, tags, search
 * @returns {Array} Array of filtered course objects
 */
export function filterCourses(filters = {}) {
  let filtered = coursesData.courses.filter((course) => course.published);

  if (filters.category) {
    filtered = filtered.filter(
      (course) => course.category === filters.category
    );
  }

  if (filters.level) {
    filtered = filtered.filter((course) => course.level === filters.level);
  }

  if (filters.session) {
    filtered = filtered.filter(
      (course) =>
        course.session === filters.session || course.session === "Both Sessions"
    );
  }

  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter((course) =>
      filters.tags.some((tag) => course.tags.includes(tag))
    );
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filtered = filtered.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  }

  return filtered;
}

/**
 * Get course form options for application form
 * @returns {Array} Array of course options for form select
 */
export function getCourseFormOptions() {
  return coursesData.courses
    .filter((course) => course.published)
    .map((course) => ({
      value: course.title,
      label: `${course.title} (${course.level}, ${course.session})`,
    }));
}

/**
 * Get course preview data for directory listings
 * @returns {Array} Array of course preview objects
 */
export function getCoursePreview() {
  return coursesData.courses
    .filter((course) => course.published)
    .map((course) => ({
      id: course.id,
      slug: course.slug,
      title: course.title,
      category: course.category,
      level: course.level,
      image: course.image,
      highlights: course.highlights.slice(0, 3), // Show top 3 highlights
      description:
        course.description.substring(0, 150) +
        (course.description.length > 150 ? "..." : ""),
      capacity: course.capacity,
      duration: course.duration,
      session: course.session,
    }));
}

/**
 * Get popular courses (those with high capacity or specific categories)
 * @param {number} limit - Number of popular courses to return
 * @returns {Array} Array of popular course objects
 */
export function getPopularCourses(limit = 6) {
  const courses = coursesData.courses
    .filter((course) => course.published)
    .sort((a, b) => {
      // Score based on capacity and core category priority
      const scoreA = (a.capacity || 0) + (a.category === "core" ? 10 : 0);
      const scoreB = (b.capacity || 0) + (b.category === "core" ? 10 : 0);
      return scoreB - scoreA;
    });

  return courses.slice(0, limit);
}

/**
 * Get featured courses for homepage/marketing
 * @param {number} limit - Number of featured courses to return
 * @returns {Array} Array of featured course objects
 */
export function getFeaturedCourses(limit = 3) {
  // Prioritize courses marked as featured or core courses
  const featured = coursesData.courses
    .filter(
      (course) =>
        course.published && (course.featured || course.category === "core")
    )
    .sort((a, b) => {
      // Featured courses first, then by capacity
      const scoreA = (a.featured ? 20 : 0) + (a.capacity || 0);
      const scoreB = (b.featured ? 20 : 0) + (b.capacity || 0);
      return scoreB - scoreA;
    });

  return featured.slice(0, limit);
}
