// Course Content Index - Epic 5: Content Architecture Modernization
// Centralized exports for all course content

export { filterCourses, getAllCourses, getCourseById, getCourseBySlug, getCourseCategories, getCourseFormOptions, getCourseLevels, getCourseStats, getCourseTags, getCoursesByCategory, getCoursesByLevel, getCoursesBySession, getRelatedCourses, searchCourses } from '@/lib/content/courses';

// Content metadata
export const COURSE_CONTENT_TYPE = 'course';
export const COURSE_CONTENT_PATH = '/courses';
export const COURSE_CONTENT_COLLECTION = 'academic-programs'; 