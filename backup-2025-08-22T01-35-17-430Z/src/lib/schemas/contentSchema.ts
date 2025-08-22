// Content Schema Validation - Epic 5: Content Architecture Modernization
// Zod schemas for type-safe content validation following existing project patterns

import { z } from "zod";

// ========================================
// BASE CONTENT SCHEMAS
// ========================================

const seoMetadataSchema = z.object({
  metaTitle: z
    .string()
    .min(1, "Meta title is required")
    .max(80, "Meta title too long"),
  metaDescription: z
    .string()
    .min(1, "Meta description is required")
    .max(200, "Meta description too long"),
  keywords: z.array(z.string()).min(1, "At least one keyword required"),
  ogImage: z.string().optional(), // Allow relative URLs for static sites
  canonicalUrl: z.string().url().optional(),
});

const baseContentSchema = z.object({
  id: z.string().min(1, "ID is required"),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be kebab-case"),
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  description: z.string().min(1, "Description is required"),
  image: z.string().optional(),
  createdAt: z.string().datetime("Invalid date format"),
  updatedAt: z.string().datetime("Invalid date format"),
  published: z.boolean(),
  tags: z.array(z.string()).min(1, "At least one tag required"),
  seo: seoMetadataSchema,
});

// ========================================
// ACADEMIC PROGRAM SCHEMAS
// ========================================

export const academicProgramSchema = baseContentSchema.extend({
  level: z.enum([
    "Beginner",
    "Intermediate",
    "Advanced",
    "All Levels",
    "All Ages",
  ]),
  duration: z.string().min(1, "Duration is required"),
  session: z.enum(["Session 1", "Session 2", "Both Sessions"]),
  curriculum: z.array(z.string()).min(1, "Curriculum items required"),
  outcomes: z.array(z.string()).min(1, "Learning outcomes required"),
  prerequisites: z.string().min(1, "Prerequisites information required"),
  highlights: z.array(z.string()).min(1, "Course highlights required"),
  category: z.enum(["core", "language", "arts"]),
  instructors: z.array(z.string()).min(1, "At least one instructor required"),
  capacity: z.number().int().min(1, "Capacity must be positive"),
  ageRange: z.string().min(1, "Age range is required"),
});

export const academicProgramsCollectionSchema = z.object({
  metadata: z.object({
    totalCourses: z.number().int().min(0),
    lastUpdated: z.string().datetime(),
    version: z.string().min(1),
    categories: z.array(z.string()).min(1),
  }),
  courses: z
    .array(academicProgramSchema)
    .min(1, "At least one course required"),
});

// ========================================
// LIFE ACTIVITIES SCHEMAS
// ========================================

const activityScheduleSchema = z.object({
  day: z.string().min(1, "Day is required"),
  time: z.string().min(1, "Time is required"),
  location: z.string().min(1, "Location is required"),
  duration: z.string().min(1, "Duration is required"),
});

export const lifeActivitySchema = baseContentSchema.extend({
  category: z.enum(["sports", "fitness", "recreational", "wellness"]),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced", "All Levels", "All Ages"]),
  duration: z.string().min(1, "Duration is required"),
  equipment: z.array(z.string()),
  schedule: z.array(activityScheduleSchema).min(1, "Schedule required"),
  capacity: z.number().int().min(1, "Capacity must be positive"),
  ageRange: z.string().min(1, "Age range is required"),
  location: z.string().min(1, "Location is required"),
  instructor: z.string().optional(),
  safety: z.array(z.string()),
});

export const lifeActivitiesCollectionSchema = z.object({
  metadata: z.object({
    totalActivities: z.number().int().min(0),
    lastUpdated: z.string().datetime(),
    version: z.string().min(1),
    categories: z.array(z.string()).min(1),
  }),
  activities: z
    .array(lifeActivitySchema)
    .min(1, "At least one activity required"),
});

// ========================================
// DAY TRIPS SCHEMAS
// ========================================

const tripItinerarySchema = z.object({
  time: z.string().min(1, "Time is required"),
  activity: z.string().min(1, "Activity is required"),
  location: z.string().min(1, "Location is required"),
  duration: z.string().min(1, "Duration is required"),
  notes: z.string().optional(),
});

export const dayTripSchema = baseContentSchema.extend({
  type: z.enum(["university", "cultural", "entertainment"]),
  location: z.string().min(1, "Location is required"),
  duration: z.string().min(1, "Duration is required"),
  highlights: z.array(z.string()).min(1, "Highlights required"),
  inclusions: z.array(z.string()).min(1, "Inclusions required"),
  transportation: z.string().min(1, "Transportation info required"),
  capacity: z.number().int().min(1, "Capacity must be positive"),
  ageRange: z.string().min(1, "Age range is required"),
  cost: z.string().optional(),
  requirements: z.array(z.string()),
  itinerary: z.array(tripItinerarySchema).min(1, "Itinerary required"),
});

export const dayTripsCollectionSchema = z.object({
  metadata: z.object({
    totalTrips: z.number().int().min(0),
    lastUpdated: z.string().datetime(),
    version: z.string().min(1),
    categories: z.array(z.string()).min(1),
  }),
  trips: z.array(dayTripSchema).min(1, "At least one trip required"),
});

// ========================================
// STAFF PROFILE SCHEMAS
// ========================================

const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  year: z.string().min(1, "Year is required"),
  field: z.string().optional(),
});

const experienceSchema = z.object({
  position: z.string().min(1, "Position is required"),
  company: z.string().min(1, "Company is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  description: z.string().min(1, "Description is required"),
});

const socialLinksSchema = z.object({
  linkedin: z.string().url().optional(),
  twitter: z.string().url().optional(),
  website: z.string().url().optional(),
});

export const staffProfileSchema = baseContentSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  position: z.string().min(1, "Position is required"),
  department: z.string().min(1, "Department is required"),
  bio: z.string().min(1, "Bio is required"),
  expertise: z.array(z.string()).min(1, "Expertise areas required"),
  education: z.array(educationSchema).min(1, "Education history required"),
  experience: z.array(experienceSchema).min(1, "Experience required"),
  achievements: z.array(z.string()),
  profileImage: z.string().min(1, "Profile image is required"),
  contactEmail: z.string().email().optional(),
  socialLinks: socialLinksSchema.optional(),
  courses: z.array(z.string()).optional(),
  activities: z.array(z.string()).optional(),
});

export const staffCollectionSchema = z.object({
  metadata: z.object({
    totalStaff: z.number().int().min(0),
    lastUpdated: z.string().datetime(),
    version: z.string().min(1),
    departments: z.array(z.string()).min(1),
  }),
  staff: z
    .array(staffProfileSchema)
    .min(1, "At least one staff member required"),
});

// ========================================
// CONTENT VALIDATION UTILITIES
// ========================================

/**
 * Validate academic programs collection
 * @param {Object} data - Academic programs data
 * @returns {Object} Validation result
 */
export function validateAcademicPrograms(data) {
  try {
    const validated = academicProgramsCollectionSchema.parse(data);
    return { success: true, data: validated, errors: null };
  } catch (error) {
    return { success: false, data: null, errors: error.errors };
  }
}

/**
 * Validate life activities collection
 * @param {Object} data - Life activities data
 * @returns {Object} Validation result
 */
export function validateLifeActivities(data) {
  try {
    const validated = lifeActivitiesCollectionSchema.parse(data);
    return { success: true, data: validated, errors: null };
  } catch (error) {
    return { success: false, data: null, errors: error.errors };
  }
}

/**
 * Validate day trips collection
 * @param {Object} data - Day trips data
 * @returns {Object} Validation result
 */
export function validateDayTrips(data) {
  try {
    const validated = dayTripsCollectionSchema.parse(data);
    return { success: true, data: validated, errors: null };
  } catch (error) {
    return { success: false, data: null, errors: error.errors };
  }
}

/**
 * Validate staff collection
 * @param {Object} data - Staff data
 * @returns {Object} Validation result
 */
export function validateStaff(data) {
  try {
    const validated = staffCollectionSchema.parse(data);
    return { success: true, data: validated, errors: null };
  } catch (error) {
    return { success: false, data: null, errors: error.errors };
  }
}

/**
 * Validate individual content item by type
 * @param {Object} data - Content item data
 * @param {string} type - Content type ('course', 'activity', 'trip', 'staff')
 * @returns {Object} Validation result
 */
export function validateContentItem(data, type) {
  const schemas = {
    course: academicProgramSchema,
    activity: lifeActivitySchema,
    trip: dayTripSchema,
    staff: staffProfileSchema,
  };

  const schema = schemas[type];
  if (!schema) {
    return {
      success: false,
      data: null,
      errors: [{ message: `Unknown content type: ${type}` }],
    };
  }

  try {
    const validated = schema.parse(data);
    return { success: true, data: validated, errors: null };
  } catch (error) {
    return { success: false, data: null, errors: error.errors };
  }
}

/**
 * Generate slug from title
 * @param {string} title - Content title
 * @returns {string} Generated slug
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Validate slug format
 * @param {string} slug - Slug to validate
 * @returns {boolean} True if valid
 */
export function isValidSlug(slug) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}
