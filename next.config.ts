import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com", // Izin untuk Imgur
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Izin untuk Cloudinary
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Izin untuk Unsplash (jika masih dipakai)
      }
    ],
  },
};

export default nextConfig;