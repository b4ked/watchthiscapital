import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
