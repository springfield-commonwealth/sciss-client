import { postgresAdapter } from '@payloadcms/db-postgres';
// import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import path, { dirname } from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Import official Payload plugins
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import { searchPlugin } from '@payloadcms/plugin-search';

// Import Payload features
import { adminCustomization } from './payload/features/admin-customization';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import collections
import { AcademicPrograms } from './payload/collections/AcademicPrograms';
import { Activities } from './payload/collections/Activities';
import { Applications } from './payload/collections/Applications';
import { Media } from './payload/collections/Media';
import { Pages } from './payload/collections/Pages';

import { Staff } from './payload/collections/Staff';
import { Trips } from './payload/collections/Trips';
import { Users } from './payload/collections/Users';

// Import endpoints
import { submitApplication, validateEmail } from './payload/endpoints/applications';

export default buildConfig({
  sharp,
  // Email disabled for local development - emails will be logged to console
  // email: nodemailerAdapter({
  //   defaultFromAddress: 'admin@sciss.org',
  //   defaultFromName: 'SCISS Admin',
  //   transportOptions: {
  //     streamTransport: true,
  //     newline: 'unix',
  //     buffer: true,
  //   },
  // }),
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001',
  // API routes configuration
  routes: {
    api: '/api/payload',
    admin: '/admin',
  },
  admin: {
    user: Users.slug,
    ...adminCustomization,
  },
  cors: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001',
    'http://localhost:3001',
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  csrf: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001',
    'http://localhost:3001',
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  collections: [
    AcademicPrograms,
    Activities,
    Applications,
    Staff,
    Trips,
    Media,
    Pages,
    Users,
  ],
  endpoints: [
    submitApplication,
    validateEmail,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'types/payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'types/generated-schema.graphql'),
    disablePlaygroundInProduction: true,
  },
  secret: process.env['PAYLOAD_SECRET'] || 'your-secret-key',
  db: postgresAdapter({
    pool: {
      connectionString: process.env['DATABASE_URI'],
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
      allowExitOnIdle: true,
    },
  }),
  plugins: [
    // S3 storage temporarily disabled - enable when you have R2/S3 credentials
    // s3Storage({
    //   collections: {
    //     'media': {
    //       prefix: 'media',
    //       disableLocalStorage: true,
    //     },
    //   },
    //   bucket: process.env['R2_BUCKET'] || '',
    //   config: {
    //     endpoint: process.env['R2_ENDPOINT'] || '',
    //     region: 'auto',
    //     credentials: {
    //       accessKeyId: process.env['R2_ACCESS_KEY_ID'] || '',
    //       secretAccessKey: process.env['R2_SECRET_ACCESS_KEY'] || '',
    //     },
    //   },
    // }),
    // Official Payload plugins
    nestedDocsPlugin({
      collections: ['pages'],
      parentFieldSlug: 'parent',
      breadcrumbsFieldSlug: 'breadcrumbs',
    }),
    redirectsPlugin({
      collections: ['pages'],
    }),
    searchPlugin({
      collections: ['pages', 'academic-programs', 'activities', 'staff', 'trips'],
    }),
  ],
  // Better error handling and logging
  onInit: async (payload) => {
    console.log('Payload CMS initialized successfully');

    // Create default admin user if none exists
    const users = await payload.find({
      collection: 'users',
      limit: 1,
    });

    if (users.docs.length === 0) {
      console.log('No users found. You can create your first admin user through the admin panel.');
    }
  },
});