import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ds5e5and3r3r0.cloudfront.net',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
