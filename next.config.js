/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  distDir: "dist",
  basePath: "",
  assetPrefix: "",
  // Ensure no server-side features are used
  experimental: {
    // esmExternals: false,
  },
};

console.log("NEXT_PUBLIC_API_URL at build:", process.env.NEXT_PUBLIC_API_URL);

module.exports = nextConfig;
