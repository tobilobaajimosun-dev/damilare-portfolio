import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
      { protocol: "https", hostname: "**.clearbit.com" },
      // OG images fetched via Microlink can come from any CDN — use unoptimized on those
    ],
  },
};

export default nextConfig;
