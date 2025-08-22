import { postgresAdapter } from '@payloadcms/db-postgres';
import { s3Storage } from '@payloadcms/storage-s3';
import path, { dirname } from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import collections
import { AcademicPrograms } from './payload/collections/AcademicPrograms';
import { Activities } from './payload/collections/Activities';
import { Media } from './payload/collections/Media';
import { Pages } from './payload/collections/Pages';
import { Staff } from './payload/collections/Staff';
import { Trips } from './payload/collections/Trips';
import { Users } from './payload/collections/Users';

// Import global configuration
// import { accessControl } from './payload/access/accessControl';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001',
  // API routes configuration
  routes: {
    api: '/api/payload',
  },
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- SCISS Admin',
    },
    components: {
      // Custom admin components can be added here
    },
  },
  cors: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001',
    'http://localhost:3000',
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  csrf: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001',
    'http://localhost:3000',
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  collections: [
    AcademicPrograms,
    Activities,
    Staff,
    Trips,
    Media,
    Pages,
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'src/types/payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'src/types/generated-schema.graphql'),
    disablePlaygroundInProduction: true,
  },
  secret: process.env['PAYLOAD_SECRET'] || 'your-secret-key',
  db: postgresAdapter({
    pool: {
      connectionString: process.env['DATABASE_URI'],
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 20, // Connection pool size
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
      // Additional settings for Render deployment
      allowExitOnIdle: true,
    },
  }),
  plugins: [
    s3Storage({
      collections: {
        'media': {
          prefix: 'media',
          disableLocalStorage: true,
        },
      },
      bucket: process.env['R2_BUCKET'] || '',
      config: {
        endpoint: process.env['R2_ENDPOINT'] || '',
        region: 'auto',
        credentials: {
          accessKeyId: process.env['R2_ACCESS_KEY_ID'] || '',
          secretAccessKey: process.env['R2_SECRET_ACCESS_KEY'] || '',
        },
      },
    }),
  ],
  // Enhanced security and performance settings
  // rateLimit: {
  //   max: 500, // requests per windowMs
  //   windowMs: 15 * 60 * 1000, // 15 minutes
  // },
  // Custom hooks for better data management
  // hooks: {
  //   afterChange: [
  //     // Add any global afterChange hooks here
  //   ],
  // },
  // Better error handling
  onInit: async (payload) => {
    // Initialize any required services
    console.log('Payload CMS initialized successfully');
  },
});