declare module '@payloadcms/next' {
  import { Payload } from 'payload';
  import { NextConfig } from 'next';

  export function createPayloadClient(config: any): Promise<Payload>;
  export function withPayload(config: NextConfig): NextConfig;
}

declare module '@payloadcms/next/admin' {
  import { Payload } from 'payload';

  export function renderPage(options: {
    payload: Payload;
    segment: string;
  }): Promise<React.ReactElement>;
}
