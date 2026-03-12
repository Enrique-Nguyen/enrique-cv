import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Cho phép tất cả các domain ảnh bên ngoài
      },
    ],
  },
};

export default nextConfig;
