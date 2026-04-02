/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 1080, 1920],
    formats: ["image/webp"],
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
