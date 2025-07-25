// Main Content Index - Epic 5: Content Architecture Modernization
// Centralized content management exports

// Content type exports - avoiding conflicts with specific imports
export { getActivitiesByCategory, getActivityBySlug, getAllActivities } from './activities';
export { getAllCourses, getCourseBySlug, getCoursesByCategory } from './courses';
export { getAllStaff, getStaffByDepartment, getStaffBySlug } from './staff';
export { getAllTrips, getTripBySlug, getTripsByType } from './trips';

// Schema validation exports  
export {
  generateSlug,
  isValidSlug, validateAcademicPrograms, validateContentItem, validateDayTrips, validateLifeActivities, validateStaff
} from '@/lib/schemas/contentSchema';

// Type exports
export type {
  AcademicProgram, ActivitySchedule, BaseContent, BreadcrumbItem, ContentCollection, ContentFilter, ContentMetadata, ContentNavigation, ContentRelationship, DayTrip, Education,
  Experience, LegacyMigrationMap, LifeActivity, SearchResult, SEOMetadata, SocialLinks, StaffProfile, TripItinerary
} from '@/types/content';

// Content metadata constants - prefixed to avoid conflicts
export const CONTENT_TYPES = {
  COURSE: 'course',
  ACTIVITY: 'activity',
  TRIP: 'trip',
  STAFF: 'staff',
} as const;

export const CONTENT_PATHS = {
  COURSES: '/courses',
  ACTIVITIES: '/activities',
  TRIPS: '/trips',
  STAFF: '/staff',
} as const;

export const CONTENT_COLLECTIONS = {
  ACADEMIC_PROGRAMS: 'academic-programs',
  LIFE_ACTIVITIES: 'life-activities',
  DAY_TRIPS: 'day-trips',
  STAFF_PROFILES: 'staff-profiles',
} as const; 