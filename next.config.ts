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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // <--- Tambahkan baris ini
  
  // (Jika ada pengaturan lain di sini sebelumnya, biarkan saja)
};

export default nextConfig;