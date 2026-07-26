import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Ganti dengan domain gambar Anda jika pakai Cloudinary
      },
      {
        protocol: "https",
        hostname: "i.imgur.com", // Jika menggunakan Imgur
      },
    ],
  },
};

export default nextConfig;