/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  pageExtensions: ["data.tsx", "data.ts", "data.jsx", "data.js"],
};
module.exports = nextConfig;
