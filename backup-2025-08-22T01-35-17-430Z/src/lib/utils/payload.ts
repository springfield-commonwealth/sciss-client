import { getPayload } from 'payload';
import config from '../../payload.config';

// Initialize Payload client
let payloadClient: any = null;

export const getPayloadClient = async () => {
  if (!payloadClient) {
    payloadClient = await getPayload({
      config,
    });
  }
  return payloadClient;
};

// Enhanced data fetching with caching
export const fetchData = async <T>(
  collection: string,
  options: {
    where?: any;
    sort?: string;
    limit?: number;
    page?: number;
    depth?: number;
    locale?: string;
  } = {}
): Promise<{ docs: T[]; totalDocs: number; totalPages: number; page: number }> => {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection,
      ...options,
    });
    return result;
  } catch (error) {
    console.error(`Error fetching ${collection}:`, error);
    throw new Error(`Failed to fetch ${collection} data`);
  }
};

// Fetch single document by ID
export const fetchDocument = async <T>(
  collection: string,
  id: string,
  options: { depth?: number; locale?: string } = {}
): Promise<T> => {
  try {
    const payload = await getPayloadClient();
    const result = await payload.findByID({
      collection,
      id,
      ...options,
    });
    return result;
  } catch (error) {
    console.error(`Error fetching ${collection} document ${id}:`, error);
    throw new Error(`Failed to fetch ${collection} document`);
  }
};

// Fetch document by slug
export const fetchBySlug = async <T>(
  collection: string,
  slug: string,
  options: { depth?: number; locale?: string } = {}
): Promise<T> => {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection,
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      ...options,
    });
    return result.docs[0];
  } catch (error) {
    console.error(`Error fetching ${collection} by slug ${slug}:`, error);
    throw new Error(`Failed to fetch ${collection} by slug`);
  }
};

// Fetch published pages
export const fetchPublishedPages = async () => {
  return fetchData('pages', {
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: 'publishedAt',
  });
};

// Fetch media by usage
export const fetchMediaByUsage = async (usage: string) => {
  return fetchData('media', {
    where: {
      usage: {
        equals: usage,
      },
    },
    sort: 'createdAt',
  });
};

// Type-safe data fetching helpers
export const payloadUtils = {
  fetchData,
  fetchDocument,
  fetchBySlug,
  fetchPublishedPages,
  fetchMediaByUsage,
};
