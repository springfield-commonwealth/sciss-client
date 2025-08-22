// Trips Content Management - Epic 5: Story 5.2 Task 2
// Day trips and educational excursions management with comprehensive utilities

import tripsData from "@/data/content/trips.json";

/**
 * Get all published trips
 * @returns {Array} Array of trip objects
 */
export function getAllTrips() {
  return tripsData.trips.filter((trip) => trip.published);
}

/**
 * Get trip by slug
 * @param {string} slug - The trip slug
 * @returns {Object|null} Trip object or null if not found
 */
export function getTripBySlug(slug) {
  return (
    tripsData.trips.find((trip) => trip.slug === slug && trip.published) || null
  );
}

/**
 * Get trip by ID
 * @param {string} id - The trip ID
 * @returns {Object|null} Trip object or null if not found
 */
export function getTripById(id) {
  return (
    tripsData.trips.find((trip) => trip.id === id && trip.published) || null
  );
}

/**
 * Get trips by category
 * @param {string} category - Category name (University Visits, Cultural Experiences, etc.)
 * @returns {Array} Array of trip objects
 */
export function getTripsByCategory(category) {
  return tripsData.trips.filter(
    (trip) => trip.category === category && trip.published
  );
}

/**
 * Get trips by duration
 * @param {string} duration - Trip duration (Full Day, Half Day, etc.)
 * @returns {Array} Array of trip objects
 */
export function getTripsByDuration(duration) {
  return tripsData.trips.filter(
    (trip) => trip.duration === duration && trip.published
  );
}

/**
 * Search trips by name, highlights, or tags
 * @param {string} query - Search query
 * @returns {Array} Array of matching trip objects
 */
export function searchTrips(query) {
  const searchTerm = query.toLowerCase();
  return tripsData.trips.filter(
    (trip) =>
      trip.published &&
      (trip.title.toLowerCase().includes(searchTerm) ||
        trip.description.toLowerCase().includes(searchTerm) ||
        trip.highlights.some((highlight) =>
          highlight.toLowerCase().includes(searchTerm)
        ) ||
        trip.tags.some((tag) => tag.toLowerCase().includes(searchTerm)))
  );
}

/**
 * Get trips with specific highlights
 * @param {string} highlight - Highlight to search for
 * @returns {Array} Array of trip objects
 */
export function getTripsByHighlight(highlight) {
  return tripsData.trips.filter(
    (trip) =>
      trip.published &&
      trip.highlights.some((h) =>
        h.toLowerCase().includes(highlight.toLowerCase())
      )
  );
}

/**
 * Get related trips based on category and tags
 * @param {Object} trip - The reference trip
 * @param {number} limit - Maximum number of related trips to return
 * @returns {Array} Array of related trip objects
 */
export function getRelatedTrips(trip, limit = 3) {
  const related = tripsData.trips.filter(
    (t) =>
      t.published &&
      t.id !== trip.id &&
      (t.category === trip.category ||
        t.tags.some((tag) => trip.tags.includes(tag)))
  );

  // Sort by relevance (same category first, then shared tags)
  related.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    if (a.category === trip.category) scoreA += 3;
    if (b.category === trip.category) scoreB += 3;

    const sharedTagsA = a.tags.filter((tag) => trip.tags.includes(tag)).length;
    const sharedTagsB = b.tags.filter((tag) => trip.tags.includes(tag)).length;
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
export function getTripCategories() {
  return tripsData.metadata.categories;
}

/**
 * Get all unique locations
 * @returns {Array} Array of location strings
 */
export function getTripLocations() {
  const locations = [
    ...new Set(
      tripsData.trips
        .filter((trip) => trip.published)
        .map((trip) => trip.location)
    ),
  ];
  return locations.sort();
}

/**
 * Get all unique transport modes
 * @returns {Array} Array of transport mode strings
 */
export function getTripTransportModes() {
  const transportModes = [
    ...new Set(
      tripsData.trips
        .filter((trip) => trip.published)
        .map((trip) => trip.transportMode)
    ),
  ];
  return transportModes.sort();
}

/**
 * Get trip statistics
 * @returns {Object} Trip statistics
 */
export function getTripStats() {
  const publishedTrips = tripsData.trips.filter((trip) => trip.published);

  return {
    totalTrips: publishedTrips.length,
    categoryCounts: getTripCategories().reduce((acc, category) => {
      acc[category] = publishedTrips.filter(
        (t) => t.category === category
      ).length;
      return acc;
    }, {}),
    averageGroupSize: Math.round(
      publishedTrips.reduce((sum, t) => {
        const groupSize = parseInt(t.groupSize?.split("-")[0] || "25");
        return sum + groupSize;
      }, 0) / publishedTrips.length
    ),
    lastUpdated: tripsData.metadata.lastUpdated,
    version: tripsData.metadata.version,
  };
}

interface TripFilters {
  category?: string;
  duration?: string;
  location?: string;
  search?: string;
}

/**
 * Filter trips with multiple criteria
 * @param {TripFilters} filters - Filter object with category, duration, location, search
 * @returns {Array} Array of filtered trip objects
 */
export function filterTrips(filters: TripFilters = {}) {
  let filtered = tripsData.trips.filter((trip) => trip.published);

  if (filters.category) {
    filtered = filtered.filter((trip) => trip.category === filters.category);
  }

  if (filters.duration) {
    filtered = filtered.filter((trip) => trip.duration === filters.duration);
  }

  if (filters.location) {
    filtered = filtered.filter((trip) =>
      trip.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filtered = filtered.filter(
      (trip) =>
        trip.title.toLowerCase().includes(searchTerm) ||
        trip.description.toLowerCase().includes(searchTerm) ||
        trip.highlights.some((highlight) =>
          highlight.toLowerCase().includes(searchTerm)
        )
    );
  }

  return filtered;
}

/**
 * Get trip preview cards for directory display
 * @returns {Array} Array of trip preview objects
 */
export function getTripPreviews() {
  return tripsData.trips
    .filter((trip) => trip.published)
    .map((trip) => ({
      id: trip.id,
      slug: trip.slug,
      title: trip.title,
      category: trip.category,
      duration: trip.duration,
      location: trip.location,
      image: trip.image,
      highlights: trip.highlights.slice(0, 3), // Show top 3 highlights
      description:
        trip.description.substring(0, 150) +
        (trip.description.length > 150 ? "..." : ""),
      groupSize: trip.groupSize,
      difficulty: trip.difficulty,
    }));
}

/**
 * Get trips by educational focus
 * @param {string} focus - Educational focus area
 * @returns {Array} Array of trip objects
 */
export function getTripsByEducationalFocus(focus) {
  return tripsData.trips.filter(
    (trip) =>
      trip.published &&
      trip.educationalValue.some((value) =>
        value.toLowerCase().includes(focus.toLowerCase())
      )
  );
}

/**
 * Get university visit trips
 * @returns {Array} Array of university trip objects
 */
export function getUniversityTrips() {
  return getTripsByCategory("University Visits");
}

/**
 * Get cultural experience trips
 * @returns {Array} Array of cultural trip objects
 */
export function getCulturalTrips() {
  return getTripsByCategory("Cultural Experiences");
}

/**
 * Get educational tour trips
 * @returns {Array} Array of educational tour objects
 */
export function getEducationalTours() {
  return getTripsByCategory("Educational Tours");
}

/**
 * Get recreational trips
 * @returns {Array} Array of recreational trip objects
 */
export function getRecreationalTrips() {
  return getTripsByCategory("Recreation");
}

/**
 * Get popular trips (those with larger group sizes or high educational value)
 * @param {number} limit - Number of popular trips to return
 * @returns {Array} Array of popular trip objects
 */
export function getPopularTrips(limit = 6) {
  const trips = tripsData.trips
    .filter((trip) => trip.published)
    .sort((a, b) => {
      // Score based on group size and educational value count
      const groupSizeA = parseInt(a.groupSize?.split("-")[1] || "25");
      const groupSizeB = parseInt(b.groupSize?.split("-")[1] || "25");
      const eduValueA = a.educationalValue?.length || 0;
      const eduValueB = b.educationalValue?.length || 0;

      const scoreA = groupSizeA + eduValueA * 5;
      const scoreB = groupSizeB + eduValueB * 5;
      return scoreB - scoreA;
    });

  return trips.slice(0, limit);
}
