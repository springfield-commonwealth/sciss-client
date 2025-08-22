// Unified Content Exports - Epic 5: Content Architecture Modernization
// Centralized exports for all content types

export * from './courses';
export * from './activities';
export * from './trips';
export * from './staff';
export * from './pages';

// Content metadata
export const CONTENT_TYPES = {
  COURSE: 'course',
  ACTIVITY: 'activity',
  TRIP: 'trip',
  STAFF: 'staff',
  PAGE: 'page',
} as const;

export const CONTENT_PATHS = {
  COURSES: '/courses',
  ACTIVITIES: '/activities',
  TRIPS: '/trips',
  STAFF: '/staff',
  PAGES: '/pages',
} as const;

export const CONTENT_COLLECTIONS = {
  ACADEMIC_PROGRAMS: 'academic-programs',
  LIFE_ACTIVITIES: 'life-activities',
  DAY_TRIPS: 'day-trips',
  STAFF_PROFILES: 'staff-profiles',
  PAGES: 'pages',
} as const;
