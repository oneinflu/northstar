import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.withersworldwide.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdni.haymarketmedia.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gwdocs.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i1.rgstatic.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
