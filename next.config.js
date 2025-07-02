/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  output: "export",
  distDir: "dist",
  basePath: "",
  assetPrefix: "",
  // Ensure no server-side features are used
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
