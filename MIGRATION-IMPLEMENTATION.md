# Migration Implementation Plan
## Step-by-Step Cleanup Process

### Phase 1: Directory Restructuring

#### Step 1.1: Create New Directory Structure
```bash
# Create new lib directory structure
mkdir -p src/lib/payload
mkdir -p src/lib/content
mkdir -p src/lib/utils

# Create new components structure
mkdir -p src/components/content
mkdir -p src/components/blocks

# Create payload blocks directory
mkdir -p src/payload/blocks
mkdir -p src/payload/fields
mkdir -p src/payload/hooks
mkdir -p src/payload/access
```

#### Step 1.2: Move Existing Files
```bash
# Move payload utilities
mv src/app/src/lib/utils/payload.ts src/lib/payload/getPayload.ts

# Move content files (consolidate)
mv src/app/src/lib/content/* src/lib/content/

# Move components
mv src/app/src/components/ui/* src/components/ui/
mv src/app/src/components/sections/* src/components/content/
```

#### Step 1.3: Update Import Paths
- Update all `@/app/src/lib/content/` imports to `@/lib/content/`
- Update all `@/app/src/lib/utils/` imports to `@/lib/utils/`
- Update all `@/app/src/components/` imports to `@/components/`

### Phase 2: Content Consolidation

#### Step 2.1: Consolidate Content Exports
Create unified content exports in `src/lib/content/index.ts`:

```typescript
// src/lib/content/index.ts
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
```

#### Step 2.2: Remove Redundant Directories
```bash
# Remove old content directories
rm -rf src/content/
rm -rf src/app/src/lib/content/
rm -rf src/app/src/data/content/
```

### Phase 3: Dynamic Routing Implementation

#### Step 3.1: Create Dynamic Route Templates
Create consistent page templates for all content types:

```typescript
// src/app/(frontend)/courses/[slug]/page.tsx
import { getCourseBySlug, getAllCourses } from '@/lib/content/courses';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug);
  
  if (!course) {
    notFound();
  }

  return <CourseContent course={course} />;
}
```

#### Step 3.2: Implement CMS-Managed Pages
Create dynamic page routing for CMS-managed content:

```typescript
// src/app/(frontend)/pages/[slug]/page.tsx
import { getPageBySlug, getAllPages } from '@/lib/content/pages';
import { notFound } from 'next/navigation';
import { PageContent } from '@/components/content/PageContent';

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug);
  
  if (!page) {
    notFound();
  }

  return <PageContent page={page} />;
}
```

### Phase 4: Payload CMS Enhancements

#### Step 4.1: Create Content Blocks
```typescript
// src/payload/blocks/HeroBlock.ts
import { Block } from 'payload/types';

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'ctaText',
      type: 'text',
    },
    {
      name: 'ctaLink',
      type: 'text',
    },
  ],
};
```

#### Step 4.2: Update Pages Collection
```typescript
// src/payload/collections/Pages.ts
import { CollectionConfig } from 'payload';
import { HeroBlock } from '../blocks/HeroBlock';
import { ContentBlock } from '../blocks/ContentBlock';
import { GalleryBlock } from '../blocks/GalleryBlock';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        HeroBlock,
        ContentBlock,
        GalleryBlock,
      ],
    },
  ],
};
```

### Phase 5: Component Organization

#### Step 5.1: Create Content Components
```typescript
// src/components/content/CourseCard.tsx
import { Course } from '@/types/content';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      {/* Course-specific content */}
    </div>
  );
}
```

#### Step 5.2: Create Block Components
```typescript
// src/components/blocks/HeroBlock.tsx
import { HeroBlock as HeroBlockType } from '@/types/payload-types';

interface HeroBlockProps {
  block: HeroBlockType;
}

export function HeroBlock({ block }: HeroBlockProps) {
  return (
    <section className="hero-section">
      <h1>{block.title}</h1>
      {block.subtitle && <p>{block.subtitle}</p>}
      {/* Hero content */}
    </section>
  );
}
```

### Phase 6: Type Safety

#### Step 6.1: Update Type Definitions
```typescript
// src/types/content.ts
export interface BaseContent {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface Course extends BaseContent {
  description: string;
  category: string;
  ageRange: string;
  duration: string;
  instructor?: string;
  // ... other course-specific fields
}

export interface Activity extends BaseContent {
  description: string;
  category: string;
  duration: string;
  schedule: {
    days: string[];
    time: string;
    location: string;
  };
  // ... other activity-specific fields
}
```

### Phase 7: Testing & Validation

#### Step 7.1: Update Tests
```bash
# Update test imports
find tests/ -name "*.test.*" -exec sed -i '' 's/@\/app\/src\/lib\/content/@\/lib\/content/g' {} \;
find tests/ -name "*.test.*" -exec sed -i '' 's/@\/app\/src\/components/@\/components/g' {} \;
```

#### Step 7.2: Validate Routes
- Test all dynamic routes
- Verify content loading
- Check SEO metadata
- Validate performance

### Migration Checklist

- [ ] Create new directory structure
- [ ] Move existing files to new locations
- [ ] Update all import paths
- [ ] Consolidate content exports
- [ ] Remove redundant directories
- [ ] Implement dynamic routing
- [ ] Create content blocks
- [ ] Update Payload collections
- [ ] Create content components
- [ ] Update type definitions
- [ ] Update tests
- [ ] Validate functionality
- [ ] Performance testing
- [ ] Documentation update

### Rollback Plan

If issues arise during migration:

1. Keep backup of original structure
2. Use feature flags for gradual rollout
3. Maintain parallel systems during transition
4. Have rollback scripts ready

### Benefits After Migration

- **Single source of truth** for content management
- **Consistent naming** across the application
- **Better developer experience** with clear imports
- **Scalable architecture** following Payload CMS v3 best practices
- **Improved performance** with optimized routing
- **Easier maintenance** with organized structure
