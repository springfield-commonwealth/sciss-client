/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // Add cache headers for static export
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Only use static export for production/staging builds
  ...(process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging"
    ? {
      output: "export",
      distDir: "dist",
      // Disable features incompatible with static export
      // Ensure all pages are statically generated
      // Use timestamp to ensure cache busting on each deployment
      generateBuildId: async () => {
        return `build-${Date.now()}`;
      },
    }
    : {
      // Development configuration
      distDir: ".next",
    }),
  basePath: "",
  assetPrefix: "",
};

console.log("NEXT_PUBLIC_API_URL at build:", process.env.NEXT_PUBLIC_API_URL);

module.exports = nextConfig;
