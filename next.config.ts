import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/Christina%20Lu%20%E2%80%94%20Designer_files/:path*',
        destination: '/placeholder.svg',
      },
      {
        source: '/Christina%20Lu%20%E2%80%94%20About_files/:path*',
        destination: '/placeholder.svg',
      },
    ];
  },
};

export default nextConfig;
