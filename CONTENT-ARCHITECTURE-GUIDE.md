# Content Architecture Quick Reference Guide

## Post-Migration Structure

### Directory Structure Overview

```
src/
├── lib/
│   ├── content/           # 🎯 Single source of truth for content
│   │   ├── index.ts       # Unified exports
│   │   ├── courses.ts     # Course management
│   │   ├── activities.ts  # Activity management
│   │   ├── trips.ts       # Trip management
│   │   ├── staff.ts       # Staff management
│   │   └── pages.ts       # Page management
│   ├── payload/           # Payload CMS utilities
│   │   └── getPayload.ts  # Payload client
│   └── utils/             # General utilities
├── components/
│   ├── content/           # Content-specific components
│   │   ├── CourseCard.tsx
│   │   ├── ActivityCard.tsx
│   │   ├── TripCard.tsx
│   │   ├── StaffCard.tsx
│   │   └── PageContent.tsx
│   ├── blocks/            # Content block components
│   │   ├── HeroBlock.tsx
│   │   ├── ContentBlock.tsx
│   │   ├── GalleryBlock.tsx
│   │   ├── TestimonialsBlock.tsx
│   │   └── CTABlock.tsx
│   └── ui/                # Base UI components
└── payload/
    ├── collections/       # Payload CMS collections
    ├── blocks/            # Content blocks
    ├── fields/            # Custom fields
    ├── hooks/             # Custom hooks
    └── access/            # Access control
```

### Import Patterns

#### Before (Confusing)

```typescript
// Multiple import sources
import { getAllCourses } from "@/content/courses";
import { getCourses } from "@/app/src/lib/content/courses";
import { CourseCard } from "@/app/src/components/sections/CourseCard";
```

#### After (Clear)

```typescript
// Single import source
import { getAllCourses } from "@/lib/content/courses";
import { CourseCard } from "@/components/content/CourseCard";
```

### Content Management Functions

#### Courses

```typescript
import {
  getAllCourses,
  getCourseBySlug,
  getCoursesByCategory,
  searchCourses,
} from "@/lib/content/courses";
```

#### Activities

```typescript
import {
  getAllActivities,
  getActivityBySlug,
  getActivitiesByCategory,
} from "@/lib/content/activities";
```

#### Trips

```typescript
import {
  getAllTrips,
  getTripBySlug,
  getTripsByType,
} from "@/lib/content/trips";
```

#### Staff

```typescript
import {
  getAllStaff,
  getStaffBySlug,
  getStaffByDepartment,
} from "@/lib/content/staff";
```

#### Pages (CMS-managed)

```typescript
import { getAllPages, getPageBySlug } from "@/lib/content/pages";
```

### Dynamic Routing Patterns

#### Content Type Pages

```typescript
// src/app/(frontend)/courses/[slug]/page.tsx
export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const course = await getCourseBySlug(params.slug);
  if (!course) notFound();
  return <CourseContent course={course} />;
}
```

#### CMS-Managed Pages

```typescript
// src/app/(frontend)/pages/[slug]/page.tsx
export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug(params.slug);
  if (!page) notFound();
  return <PageContent page={page} />;
}
```

### Content Constants

```typescript
import {
  CONTENT_TYPES,
  CONTENT_PATHS,
  CONTENT_COLLECTIONS,
} from "@/lib/content";

// Usage
const courseType = CONTENT_TYPES.COURSE; // 'course'
const coursePath = CONTENT_PATHS.COURSES; // '/courses'
const courseCollection = CONTENT_COLLECTIONS.ACADEMIC_PROGRAMS; // 'academic-programs'
```

### Payload CMS Collections

#### Collections Location

- `src/payload/collections/` - All content collections
- `src/payload/blocks/` - Content blocks for Pages
- `src/payload/fields/` - Custom field types
- `src/payload/hooks/` - Custom hooks
- `src/payload/access/` - Access control

#### Collection Naming

- `Courses.ts` → `academic-programs` collection
- `Activities.ts` → `life-activities` collection
- `Trips.ts` → `day-trips` collection
- `Staff.ts` → `staff-profiles` collection
- `Pages.ts` → `pages` collection

### Component Organization

#### Content Components

- `src/components/content/` - Content-specific components
- `src/components/blocks/` - Content block components
- `src/components/ui/` - Base UI components

#### Component Naming

- `CourseCard.tsx` - Course display component
- `ActivityCard.tsx` - Activity display component
- `TripCard.tsx` - Trip display component
- `StaffCard.tsx` - Staff profile component
- `PageContent.tsx` - CMS page content component

### Migration Commands

```bash
# Run the migration script
pnpm run migrate:content

# Or run directly
node scripts/migrate-content-architecture.js
```

### Testing Your Migration

```bash
# Type checking
pnpm run type-check

# Linting
pnpm run lint

# Tests
pnpm run test

# Development server
pnpm run dev
```

### Common Issues & Solutions

#### Import Errors

If you see import errors after migration:

1. Check that all files were moved correctly
2. Update any remaining old import paths
3. Run `pnpm run type-check` to identify issues

#### Missing Files

If files are missing:

1. Check the backup directory created during migration
2. Restore from backup if needed
3. Re-run migration script

#### Payload CMS Issues

If Payload CMS isn't working:

1. Check collection imports in `src/payload.config.ts`
2. Verify collection file paths
3. Restart the development server

### Benefits of New Structure

✅ **Single source of truth** for content management  
✅ **Consistent naming** across the application  
✅ **Better developer experience** with clear imports  
✅ **Scalable architecture** following Payload CMS v3 best practices  
✅ **Improved performance** with optimized routing  
✅ **Easier maintenance** with organized structure  
✅ **Type safety** with proper TypeScript integration  
✅ **Clear separation** between CMS and frontend logic

### Next Steps

1. **Review the migrated structure**
2. **Test all routes and functionality**
3. **Update any remaining import paths**
4. **Run your test suite**
5. **Update documentation**
6. **Deploy and test in staging**

---

_This guide should help you navigate the new content architecture. If you encounter any issues, refer to the backup directory created during migration._
