/** @type {import('next').NextConfig} */
import { withPayload } from "@Payloadcms/next/withPayload";

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,

  // Enhanced image optimization
  images: {
    domains: [],
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
    ];
  },

  // Enhanced webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }

    return config;
  },

  // Only use static export for production/staging builds
  ...(process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
    ? {
        output: "export",
        distDir: "dist",
        // Disable features incompatible with static export
        // Ensure all pages are statically generated
        generateBuildId: async () => {
          return "build";
        },
        // Optimize static export
        trailingSlash: true,
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
      }
    : {
        // Development configuration
        distDir: ".next",
      }),

  basePath: "",
  assetPrefix: "",

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["@radix-ui/react-icons", "framer-motion"],
  },
};

console.log("NEXT_PUBLIC_API_URL at build:", process.env.NEXT_PUBLIC_API_URL);

export default withPayload(nextConfig);
