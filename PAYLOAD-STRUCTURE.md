# Payload CMS Structure Guide

## Current Structure (Fixed)

```
src/
├── app/
│   ├── layout.tsx                        ← Root layout with <html> and <body>
│   ├── (payload)/                        ← Payload-specific routes
│   │   ├── layout.tsx                    ← Payload-specific layout
│   │   ├── api/payload/[...slug]/route.ts ← REST API handler
│   │   ├── admin/[[...segments]]/page.tsx ← Admin interface
│   │   ├── graphql/route.ts              ← GraphQL handler
│   │   └── health/route.ts               ← Health check
│   └── (frontend)/                       ← Frontend routes
│       └── layout.tsx                    ← Frontend-specific layout
├── payload.config.ts                     ← Main Payload configuration
├── payload/                              ← Collections, fields, hooks, etc.
│   ├── collections/                      ← All collection definitions
│   ├── fields/                           ← Custom field types
│   ├── hooks/                            ← After/before hooks
│   ├── access/                           ← Access control
│   └── admin/                            ← Custom admin components
└── lib/payload/
    └── getPayload.ts                     ← Centralized client utility
```

## Key Changes Made

1. **Consolidated Config**: Single `src/payload.config.ts` file
2. **Fixed Import Paths**: All imports now use correct relative paths
3. **Unified Client**: Single `getPayload.ts` utility with all data fetching functions
4. **Removed Duplicates**: Eliminated conflicting utility files
5. **Simplified Routes**: Clean API route structure under `app/(payload)/`
6. **Fixed Layout Structure**: Added root layout with required `<html>` and `<body>` tags

## Layout Structure

### Root Layout (`src/app/layout.tsx`)

- Provides required `<html>` and `<body>` tags for all routes
- Contains global metadata and styles
- Required by Next.js App Router

### Payload Layout (`src/app/(payload)/layout.tsx`)

- Payload-specific metadata and configuration
- Inherits from root layout

### Frontend Layout (`src/app/(frontend)/layout.tsx`)

- Frontend-specific styling and configuration
- Inherits from root layout

## Usage

### Import Payload Client

```typescript
import { getPayload, fetchData, fetchBySlug } from "@/lib/payload/getPayload";
```

### Fetch Data

```typescript
// Fetch all academic programs
const programs = await fetchData("academic-programs");

// Fetch by slug
const program = await fetchBySlug("academic-programs", "math-101");

// Fetch single document
const staff = await fetchDocument("staff", "staff-id");
```

### Admin Access

- Admin panel: `/admin`
- API endpoint: `/api/payload`
- GraphQL: `/graphql`
- Health check: `/health`

## Environment Variables Required

```env
DATABASE_URI=postgresql://...
PAYLOAD_SECRET=your-secret-key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
R2_BUCKET=your-bucket
R2_ENDPOINT=your-endpoint
R2_ACCESS_KEY_ID=your-key
R2_SECRET_ACCESS_KEY=your-secret
```

## Collections Available

- `academic-programs` - Course and program information
- `activities` - Recreational and enrichment activities
- `staff` - Faculty and staff profiles
- `trips` - Field trips and excursions
- `media` - Images and media files
- `pages` - Dynamic page content
- `users` - Admin users

## Troubleshooting

If you encounter issues:

1. **Check import paths** - Ensure all imports use correct relative paths
2. **Verify environment variables** - All required env vars must be set
3. **Database connection** - Ensure PostgreSQL is running and accessible
4. **File permissions** - Check that media upload directories are writable
5. **Port conflicts** - Ensure no other services are using port 3000
6. **Layout structure** - Ensure root layout provides `<html>` and `<body>` tags

## Migration Notes

- Old `src/lib/utils/payload.ts` has been removed
- All imports now use the consolidated `src/lib/payload/getPayload.ts`
- Backup folder structure has been preserved for reference
- API routes are now properly organized under `app/(payload)/`
- Root layout now provides required HTML structure for all routes
