/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // Only use static export for production/staging builds
  ...(process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
    ? {
        output: "export",
        distDir: "dist",
        // Disable features incompatible with static export
        experimental: {
          esmExternals: false,
        },
        // Ensure all pages are statically generated
        generateBuildId: async () => {
          return "build";
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
