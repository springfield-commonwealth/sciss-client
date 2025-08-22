import { REST_DELETE, REST_GET, REST_PATCH, REST_POST } from '@payloadcms/next/routes';
import { NextRequest } from 'next/server';
import config from '../../../../payload.config';

// Enhanced error handling wrapper
const withErrorHandling = (handler: Function) => {
  return async (req: NextRequest) => {
    try {
      return await handler(req);
    } catch (error) {
      console.error('Payload API Error:', error);

      // Return appropriate error response
      return new Response(
        JSON.stringify({
          error: 'Internal Server Error',
          message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
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

export const GET = withErrorHandling(REST_GET(config));
export const POST = withErrorHandling(REST_POST(config));
export const PATCH = withErrorHandling(REST_PATCH(config));
export const DELETE = withErrorHandling(REST_DELETE(config));

