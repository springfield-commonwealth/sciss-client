# SCISS Content Architecture Cleanup Plan
## Following Payload CMS v3 Best Practices

### Current Issues
- Multiple ambiguous "content" directories
- Scattered content management logic
- Inconsistent naming conventions
- Redundant export layers
- Mixed static/dynamic content handling

### Proposed Clean Structure

```
src/
├── app/
│   ├── (frontend)/                    # Public-facing routes
│   │   ├── page.tsx                   # Homepage
│   │   ├── layout.tsx                 # Root layout
│   │   ├── not-found.tsx              # 404 page
│   │   ├── courses/                   # Dynamic course pages
│   │   │   ├── page.tsx               # Course listing
│   │   │   └── [slug]/                # Individual course pages
│   │   │       └── page.tsx
│   │   ├── activities/                # Dynamic activity pages
│   │   │   ├── page.tsx               # Activity listing
│   │   │   └── [slug]/                # Individual activity pages
│   │   │       └── page.tsx
│   │   ├── trips/                     # Dynamic trip pages
│   │   │   ├── page.tsx               # Trip listing
│   │   │   └── [slug]/                # Individual trip pages
│   │   │       └── page.tsx
│   │   ├── staff/                     # Dynamic staff pages
│   │   │   ├── page.tsx               # Staff listing
│   │   │   └── [slug]/                # Individual staff pages
│   │   │       └── page.tsx
│   │   └── pages/                     # Static CMS-managed pages
│   │       └── [slug]/                # Dynamic page routing
│   │           └── page.tsx
│   ├── api/                           # API routes
│   │   ├── payload/                   # Payload CMS API
│   │   │   └── [...payload]/
│   │   │       └── route.ts
│   │   └── graphql/                   # GraphQL API
│   │       └── route.ts
│   └── admin/                         # Admin panel
│       └── [[...segments]]/
│           └── page.tsx
├── payload/                           # Payload CMS configuration
│   ├── collections/                   # Content collections
│   │   ├── Pages.ts                   # Dynamic pages
│   │   ├── Courses.ts                 # Academic programs
│   │   ├── Activities.ts              # Life activities
│   │   ├── Trips.ts                   # Day trips
│   │   ├── Staff.ts                   # Staff profiles
│   │   ├── Media.ts                   # Media management
│   │   └── Users.ts                   # User management
│   ├── blocks/                        # Content blocks
│   │   ├── HeroBlock.ts
│   │   ├── ContentBlock.ts
│   │   ├── GalleryBlock.ts
│   │   ├── TestimonialsBlock.ts
│   │   └── CTABlock.ts
│   ├── fields/                        # Custom fields
│   │   └── customFields.ts
│   ├── hooks/                         # Custom hooks
│   │   └── afterChange.ts
│   └── access/                        # Access control
│       └── accessControl.ts
├── lib/                               # Utility libraries
│   ├── payload/                       # Payload utilities
│   │   ├── getPayload.ts              # Payload client
│   │   └── utils.ts                   # Payload helpers
│   ├── content/                       # Content utilities
│   │   ├── courses.ts                 # Course helpers
│   │   ├── activities.ts              # Activity helpers
│   │   ├── trips.ts                   # Trip helpers
│   │   ├── staff.ts                   # Staff helpers
│   │   └── pages.ts                   # Page helpers
│   └── utils/                         # General utilities
│       ├── navigation.ts
│       └── seo.ts
├── components/                        # React components
│   ├── ui/                            # Base UI components
│   ├── content/                       # Content-specific components
│   │   ├── CourseCard.tsx
│   │   ├── ActivityCard.tsx
│   │   ├── TripCard.tsx
│   │   ├── StaffCard.tsx
│   │   └── PageContent.tsx
│   └── blocks/                        # Content block components
│       ├── HeroBlock.tsx
│       ├── ContentBlock.tsx
│       ├── GalleryBlock.tsx
│       ├── TestimonialsBlock.tsx
│       └── CTABlock.tsx
├── types/                             # TypeScript types
│   ├── payload-types.ts               # Generated Payload types
│   ├── content.ts                     # Content-specific types
│   └── api.ts                         # API types
└── styles/                            # Styling
    ├── components/                    # Component styles
    ├── pages/                         # Page styles
    └── tokens/                        # Design tokens
```

### Key Changes

#### 1. **Eliminate Redundant Content Directories**
- Remove `src/content/` (export layer)
- Remove `src/app/src/lib/content/` (implementation layer)
- Consolidate into `src/lib/content/` (single source of truth)

#### 2. **Unified Content Management**
- All content logic in `src/lib/content/`
- Clear separation between CMS collections and frontend utilities
- Consistent naming: `courses`, `activities`, `trips`, `staff`, `pages`

#### 3. **Dynamic Routing Structure**
- Use Next.js App Router with dynamic segments
- All content types follow same pattern: `/[type]/[slug]`
- Static pages managed through CMS in `/pages/[slug]`

#### 4. **Payload CMS Best Practices**
- Collections in `src/payload/collections/`
- Content blocks in `src/payload/blocks/`
- Custom fields in `src/payload/fields/`
- Access control in `src/payload/access/`

#### 5. **Clean Import Structure**
```typescript
// Before (confusing)
import { getAllCourses } from '@/content/courses';
import { getCourses } from '@/app/src/lib/content/courses';

// After (clear)
import { getAllCourses } from '@/lib/content/courses';
```

### Migration Steps

1. **Phase 1: Restructure Directories**
   - Create new directory structure
   - Move existing files to new locations
   - Update import paths

2. **Phase 2: Consolidate Content Logic**
   - Merge content management functions
   - Remove duplicate exports
   - Standardize naming conventions

3. **Phase 3: Update Routing**
   - Implement dynamic routes for all content types
   - Create consistent page templates
   - Add proper SEO metadata

4. **Phase 4: Enhance Payload Configuration**
   - Add content blocks for Pages collection
   - Implement proper relationships
   - Add custom fields and hooks

5. **Phase 5: Testing & Validation**
   - Test all routes and functionality
   - Validate content migration
   - Performance optimization

### Benefits

- **Clear separation of concerns**
- **Consistent naming conventions**
- **Better developer experience**
- **Easier maintenance**
- **Scalable architecture**
- **Payload CMS v3 compliance**
