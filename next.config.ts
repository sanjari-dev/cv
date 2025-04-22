import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.skuy.co.id/**')],
  },
};

export default nextConfig;
