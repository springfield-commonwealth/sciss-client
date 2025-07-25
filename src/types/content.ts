// Content Architecture Types for Epic 5: Blog Post System
// Replaces monolithic JavaScript constants with structured, type-safe content models

// ========================================
// BASE CONTENT INTERFACES
// ========================================

export interface BaseContent {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  tags: string[];
  seo: SEOMetadata;
}

export interface SEOMetadata {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// ========================================
// ACADEMIC PROGRAM CONTENT
// ========================================

export interface AcademicProgram extends BaseContent {
  level: string;
  duration: string;
  session: string; // "Session 1", "Session 2", "Both"
  curriculum: string[];
  outcomes: string[];
  prerequisites: string;
  highlights: string[];
  category: 'core' | 'language' | 'arts';
  instructors: string[]; // Array of instructor IDs
  capacity: number;
  ageRange: string;
}

// ========================================
// LIFE ACTIVITIES CONTENT
// ========================================

export interface LifeActivity extends BaseContent {
  category: 'sports' | 'fitness' | 'recreational' | 'wellness';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  equipment: string[];
  schedule: ActivitySchedule[];
  capacity: number;
  ageRange: string;
  location: string;
  instructor?: string; // Instructor ID
  safety: string[];
}

export interface ActivitySchedule {
  day: string;
  time: string;
  location: string;
  duration: string;
}

// ========================================
// DAY TRIPS CONTENT
// ========================================

export interface DayTrip extends BaseContent {
  type: 'university' | 'cultural' | 'entertainment';
  location: string;
  duration: string;
  highlights: string[];
  inclusions: string[];
  transportation: string;
  capacity: number;
  ageRange: string;
  cost?: string;
  requirements: string[];
  itinerary: TripItinerary[];
}

export interface TripItinerary {
  time: string;
  activity: string;
  location: string;
  duration: string;
  notes?: string;
}

// ========================================
// STAFF & FACULTY PROFILES
// ========================================

export interface StaffProfile extends BaseContent {
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  bio: string;
  expertise: string[];
  education: Education[];
  experience: Experience[];
  achievements: string[];
  profileImage: string;
  contactEmail?: string;
  socialLinks?: SocialLinks;
  courses?: string[]; // Array of course IDs they teach
  activities?: string[]; // Array of activity IDs they supervise
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  field?: string;
}

export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  website?: string;
}

// ========================================
// CONTENT COLLECTIONS
// ========================================

export interface ContentCollection<T extends BaseContent> {
  items: T[];
  total: number;
  categories: string[];
  tags: string[];
  lastUpdated: string;
}

export interface ContentMetadata {
  totalCourses: number;
  totalActivities: number;
  totalTrips: number;
  totalStaff: number;
  lastUpdated: string;
  version: string;
}

// ========================================
// CONTENT FILTERS & SEARCH
// ========================================

export interface ContentFilter {
  category?: string;
  level?: string;
  duration?: string;
  tags?: string[];
  search?: string;
  published?: boolean;
}

export interface SearchResult<T extends BaseContent> {
  items: T[];
  total: number;
  query: string;
  filters: ContentFilter;
  suggestions?: string[];
}

// ========================================
// NAVIGATION & RELATIONSHIPS
// ========================================

export interface ContentRelationship {
  type: 'related' | 'prerequisite' | 'continuation' | 'alternative';
  targetId: string;
  targetType: 'course' | 'activity' | 'trip' | 'staff';
  description?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface ContentNavigation {
  breadcrumbs: BreadcrumbItem[];
  previous?: { title: string; href: string; };
  next?: { title: string; href: string; };
  related: ContentRelationship[];
}

// ========================================
// LEGACY MIGRATION TYPES
// ========================================

export interface LegacyMigrationMap {
  legacyConstantName: string;
  newContentType: string;
  migrationStatus: 'pending' | 'in_progress' | 'completed';
  itemCount: number;
  notes?: string;
} 