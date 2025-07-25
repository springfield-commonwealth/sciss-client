// Navigation Utilities - Epic 5: Content Architecture Modernization
// Provides breadcrumb generation and content navigation support

/**
 * Generate breadcrumb navigation items
 * @param {Array} items - Array of breadcrumb items {label, href, active}
 * @returns {Array} Formatted breadcrumb items
 */
export function generateBreadcrumbs(items) {
  return items.map((item, index) => ({
    ...item,
    active: item.active || index === items.length - 1,
  }));
}

/**
 * Create navigation structure for content pages
 * @param {Object} content - Content object
 * @param {Array} allContent - Array of all content for finding related items
 * @param {Object} options - Navigation options
 * @returns {Object} Navigation structure with breadcrumbs, previous, next, related
 */
export function createContentNavigation(
  content,
  allContent = [],
  options = {}
) {
  const {
    contentType = "course",
    baseUrl = "/",
    categoryUrl = "/academics",
    showRelated = true,
    maxRelated = 3,
  } = options;

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: getBreadcrumbLabel(contentType), href: categoryUrl },
    { label: content.title, href: `${baseUrl}${content.slug}`, active: true },
  ]);

  // Find previous and next content
  const currentIndex = allContent.findIndex((item) => item.id === content.id);
  const previous =
    currentIndex > 0
      ? {
          title: allContent[currentIndex - 1].title,
          href: `${baseUrl}${allContent[currentIndex - 1].slug}`,
        }
      : null;

  const next =
    currentIndex < allContent.length - 1
      ? {
          title: allContent[currentIndex + 1].title,
          href: `${baseUrl}${allContent[currentIndex + 1].slug}`,
        }
      : null;

  // Find related content
  let related = [];
  if (showRelated && content.tags) {
    related = findRelatedContent(content, allContent, maxRelated, baseUrl);
  }

  return {
    breadcrumbs,
    previous,
    next,
    related,
  };
}

/**
 * Find related content based on tags and category
 * @param {Object} content - Reference content
 * @param {Array} allContent - All available content
 * @param {number} maxItems - Maximum related items to return
 * @param {string} baseUrl - Base URL for links
 * @returns {Array} Related content items
 */
function findRelatedContent(content, allContent, maxItems = 3, baseUrl = "/") {
  const related = allContent.filter(
    (item) =>
      item.id !== content.id &&
      ((item.category && item.category === content.category) ||
        (item.level && item.level === content.level) ||
        (item.tags && item.tags.some((tag) => content.tags.includes(tag))))
  );

  // Sort by relevance
  related.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    // Same category gets highest score
    if (a.category === content.category) scoreA += 3;
    if (b.category === content.category) scoreB += 3;

    // Same level gets medium score
    if (a.level === content.level) scoreA += 2;
    if (b.level === content.level) scoreB += 2;

    // Shared tags get points
    if (a.tags && content.tags) {
      const sharedTagsA = a.tags.filter((tag) =>
        content.tags.includes(tag)
      ).length;
      scoreA += sharedTagsA;
    }
    if (b.tags && content.tags) {
      const sharedTagsB = b.tags.filter((tag) =>
        content.tags.includes(tag)
      ).length;
      scoreB += sharedTagsB;
    }

    return scoreB - scoreA;
  });

  return related.slice(0, maxItems).map((item) => ({
    type: getRelatedType(content, item),
    targetId: item.id,
    targetType: getContentType(item),
    title: item.title,
    href: `${baseUrl}${item.slug}`,
    description: item.description,
  }));
}

/**
 * Determine relationship type between content items
 * @param {Object} source - Source content
 * @param {Object} target - Target content
 * @returns {string} Relationship type
 */
function getRelatedType(source, target) {
  if (source.category === target.category && source.level === target.level) {
    return "alternative";
  }
  if (source.category === target.category) {
    return "related";
  }
  if (source.level === target.level) {
    return "continuation";
  }
  return "related";
}

/**
 * Get content type from content object
 * @param {Object} content - Content object
 * @returns {string} Content type
 */
function getContentType(content) {
  if (content.curriculum) return "course";
  if (content.equipment) return "activity";
  if (content.itinerary) return "trip";
  if (content.position) return "staff";
  return "content";
}

/**
 * Get breadcrumb label for content type
 * @param {string} contentType - Type of content
 * @returns {string} Breadcrumb label
 */
function getBreadcrumbLabel(contentType) {
  const labels = {
    course: "Academics",
    activity: "Life Activities",
    trip: "Day Trips",
    staff: "Faculty & Staff",
  };
  return labels[contentType] || "Content";
}

/**
 * Generate sitemap entries for content
 * @param {Array} content - Array of content items
 * @param {string} baseUrl - Base URL for the site
 * @param {string} contentPath - Path prefix for content type
 * @returns {Array} Sitemap entries
 */
export function generateSitemapEntries(content, baseUrl, contentPath) {
  return content
    .filter((item) => item.published)
    .map((item) => ({
      url: `${baseUrl}${contentPath}/${item.slug}`,
      lastmod: item.updatedAt,
      changefreq: "monthly",
      priority: 0.8,
    }));
}

/**
 * Create content filters for navigation
 * @param {Array} content - Array of content items
 * @returns {Object} Available filters
 */
export function createContentFilters(content) {
  const categories = [
    ...new Set(content.map((item) => item.category).filter(Boolean)),
  ];
  const levels = [
    ...new Set(content.map((item) => item.level).filter(Boolean)),
  ];
  const tags = [...new Set(content.flatMap((item) => item.tags || []))];

  return {
    categories: categories.sort(),
    levels: levels.sort(),
    tags: tags.sort(),
  };
}

/**
 * Generate content summary for navigation
 * @param {Array} content - Array of content items
 * @returns {Object} Content summary
 */
export function generateContentSummary(content) {
  const published = content.filter((item) => item.published);

  return {
    total: published.length,
    categories: createContentFilters(published).categories.reduce(
      (acc, category) => {
        acc[category] = published.filter(
          (item) => item.category === category
        ).length;
        return acc;
      },
      {}
    ),
    lastUpdated: Math.max(
      ...published.map((item) => new Date(item.updatedAt).getTime())
    ),
  };
}
