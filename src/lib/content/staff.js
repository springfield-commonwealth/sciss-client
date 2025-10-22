// Staff Content Management - Epic 5: Staff and Lecturer Profile System
// Professional staff profile management with comprehensive utilities

import staffData from "@/data/content/staff-profiles.json";

/**
 * Get all published staff members
 * @returns {Array} Array of staff objects
 */
export function getAllStaff() {
  const staff = staffData.staff.filter((staff) => staff.published);

  // Sort staff to prioritize non-Asian faces at the top
  return staff.sort((a, b) => {
    // Define Asian names/identifiers that should appear later
    const asianNames = [
      'beth-moriarty', 'erik', 'raymond-mathis', 'frank', 'jonathan',
      'angelene-huang', 'satya-s-tripathi', 'sophia-shi', 'tony-zhou',
      'jianwei-zhang', 'lawrence-pan', 'alex-song', 'mary-cao', 'sunny-zhang',
      'stephanie-sun', 'tony-bergeron', 'jill-tang'
    ];

    // Non-Asian faces (should appear first)
    const nonAsianNames = [
      'leena-palav', 'deano-pape', 'robyn-lee-miller'
    ];

    // Si Qin should appear after non-Asian faces
    const aIsSiQin = a.slug?.includes('si-qin') || a.id?.includes('si-qin');
    const bIsSiQin = b.slug?.includes('si-qin') || b.id?.includes('si-qin');

    const aIsNonAsian = nonAsianNames.some(name => a.slug?.includes(name) || a.id?.includes(name));
    const bIsNonAsian = nonAsianNames.some(name => b.slug?.includes(name) || b.id?.includes(name));

    const aIsAsian = asianNames.some(name => a.slug?.includes(name) || a.id?.includes(name));
    const bIsAsian = asianNames.some(name => b.slug?.includes(name) || b.id?.includes(name));

    // Priority order: Non-Asian faces first, then Si Qin, then other Asian faces (including Angelene)
    if (aIsNonAsian && !bIsNonAsian) return -1; // a is non-Asian, b is not
    if (!aIsNonAsian && bIsNonAsian) return 1;  // b is non-Asian, a is not

    if (aIsSiQin && !bIsSiQin && !bIsNonAsian) return 1; // Si Qin after non-Asian
    if (!aIsSiQin && bIsSiQin && !bIsNonAsian) return -1; // Si Qin after non-Asian

    if (aIsAsian && !bIsAsian && !bIsNonAsian && !bIsSiQin) return 1; // Other Asian faces last (including Angelene)
    if (!aIsAsian && bIsAsian && !aIsNonAsian && !aIsSiQin) return -1;

    // If both are same type, maintain original order
    return 0;
  });
}

/**
 * Get staff member by slug
 * @param {string} slug - The staff slug
 * @returns {Object|null} Staff object or null if not found
 */
export function getStaffBySlug(slug) {
  return (
    staffData.staff.find((staff) => staff.slug === slug && staff.published) ||
    null
  );
}

/**
 * Get staff member by ID
 * @param {string} id - The staff ID
 * @returns {Object|null} Staff object or null if not found
 */
export function getStaffById(id) {
  return (
    staffData.staff.find((staff) => staff.id === id && staff.published) || null
  );
}

/**
 * Get staff by department
 * @param {string} department - Department name
 * @returns {Array} Array of staff objects
 */
export function getStaffByDepartment(department) {
  return staffData.staff.filter(
    (staff) => staff.department === department && staff.published
  );
}

/**
 * Get staff by role/position
 * @param {string} position - Position title
 * @returns {Array} Array of staff objects
 */
export function getStaffByPosition(position) {
  return staffData.staff.filter(
    (staff) =>
      staff.position.toLowerCase().includes(position.toLowerCase()) &&
      staff.published
  );
}

/**
 * Search staff by name, expertise, or bio
 * @param {string} query - Search query
 * @returns {Array} Array of matching staff objects
 */
export function searchStaff(query) {
  const searchTerm = query.toLowerCase();
  return staffData.staff.filter(
    (staff) =>
      staff.published &&
      (staff.firstName.toLowerCase().includes(searchTerm) ||
        staff.lastName.toLowerCase().includes(searchTerm) ||
        staff.bio.toLowerCase().includes(searchTerm) ||
        staff.expertise.some((skill) =>
          skill.toLowerCase().includes(searchTerm)
        ) ||
        staff.tags.some((tag) => tag.toLowerCase().includes(searchTerm)))
  );
}

/**
 * Get staff who teach specific courses
 * @param {string} courseId - Course ID
 * @returns {Array} Array of staff objects
 */
export function getStaffByCourse(courseId) {
  return staffData.staff.filter(
    (staff) =>
      staff.published && staff.courses && staff.courses.includes(courseId)
  );
}

/**
 * Get related staff based on department and expertise
 * @param {Object} staff - The reference staff member
 * @param {number} limit - Maximum number of related staff to return
 * @returns {Array} Array of related staff objects
 */
export function getRelatedStaff(staff, limit = 3) {
  const related = staffData.staff.filter(
    (s) =>
      s.published &&
      s.id !== staff.id &&
      (s.department === staff.department ||
        s.expertise.some((skill) => staff.expertise.includes(skill)))
  );

  // Sort by relevance (same department first, then shared expertise)
  related.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    if (a.department === staff.department) scoreA += 3;
    if (b.department === staff.department) scoreB += 3;

    const sharedExpertiseA = a.expertise.filter((skill) =>
      staff.expertise.includes(skill)
    ).length;
    const sharedExpertiseB = b.expertise.filter((skill) =>
      staff.expertise.includes(skill)
    ).length;
    scoreA += sharedExpertiseA;
    scoreB += sharedExpertiseB;

    return scoreB - scoreA;
  });

  return related.slice(0, limit);
}

/**
 * Get all unique departments
 * @returns {Array} Array of department strings
 */
export function getStaffDepartments() {
  return staffData.metadata.departments;
}

/**
 * Get all unique expertise areas
 * @returns {Array} Array of expertise strings
 */
export function getStaffExpertise() {
  const expertise = [
    ...new Set(
      staffData.staff
        .filter((staff) => staff.published)
        .flatMap((staff) => staff.expertise)
    ),
  ];
  return expertise.sort();
}

/**
 * Get all unique positions
 * @returns {Array} Array of position strings
 */
export function getStaffPositions() {
  const positions = [
    ...new Set(
      staffData.staff
        .filter((staff) => staff.published)
        .map((staff) => staff.position)
    ),
  ];
  return positions.sort();
}

/**
 * Get staff statistics
 * @returns {Object} Staff statistics
 */
export function getStaffStats() {
  const publishedStaff = staffData.staff.filter((staff) => staff.published);

  return {
    totalStaff: publishedStaff.length,
    departmentCounts: getStaffDepartments().reduce((acc, dept) => {
      acc[dept] = publishedStaff.filter((s) => s.department === dept).length;
      return acc;
    }, {}),
    activeStaff: publishedStaff.filter((s) => s.isActive).length,
    lastUpdated: staffData.metadata.lastUpdated,
    version: staffData.metadata.version,
  };
}

/**
 * Filter staff with multiple criteria
 * @param {Object} filters - Filter object with department, position, expertise, search
 * @returns {Array} Array of filtered staff objects
 */
export function filterStaff(filters = {}) {
  let filtered = staffData.staff.filter((staff) => staff.published);

  if (filters.department) {
    filtered = filtered.filter(
      (staff) => staff.department === filters.department
    );
  }

  if (filters.position) {
    filtered = filtered.filter((staff) =>
      staff.position.toLowerCase().includes(filters.position.toLowerCase())
    );
  }

  if (filters.expertise && filters.expertise.length > 0) {
    filtered = filtered.filter((staff) =>
      filters.expertise.some((skill) => staff.expertise.includes(skill))
    );
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filtered = filtered.filter(
      (staff) =>
        staff.firstName.toLowerCase().includes(searchTerm) ||
        staff.lastName.toLowerCase().includes(searchTerm) ||
        staff.bio.toLowerCase().includes(searchTerm) ||
        staff.expertise.some((skill) =>
          skill.toLowerCase().includes(searchTerm)
        )
    );
  }

  if (filters.isActive !== undefined) {
    filtered = filtered.filter((staff) => staff.isActive === filters.isActive);
  }

  return filtered;
}

/**
 * Get faculty preview cards for directory display
 * @returns {Array} Array of staff preview objects
 */
export function getStaffPreviews() {
  return staffData.staff
    .filter((staff) => staff.published)
    .map((staff) => ({
      id: staff.id,
      slug: staff.slug,
      name: `${staff.firstName} ${staff.lastName}`.trim(),
      position: staff.position,
      department: staff.department,
      image: staff.profileImage,
      expertise: staff.expertise.slice(0, 3), // Show top 3 expertise areas
      bio: staff.bio.substring(0, 150) + (staff.bio.length > 150 ? "..." : ""),
    }));
}
