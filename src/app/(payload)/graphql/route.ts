import { GRAPHQL_POST } from '@payloadcms/next/routes';
import { NextRequest } from 'next/server';
import config from '@/payload.config';

// Enhanced error handling for GraphQL
const withErrorHandling = (handler: Function) => {
  return async (req: NextRequest) => {
    try {
      return await handler(req);
    } catch (error) {
      console.error('GraphQL API Error:', error);

      return new Response(
        JSON.stringify({
          error: 'GraphQL Error',
          message: process.env.NODE_ENV === 'development' ? error.message : 'GraphQL operation failed',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  };
};

export const POST = withErrorHandling(GRAPHQL_POST(config));

