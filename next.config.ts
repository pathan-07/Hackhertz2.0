import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Add disableStaticImages to allow importing images directly
    dangerouslyAllowSVG: true,
  },
  // Disable React strict mode to prevent hydration issues with browser extensions
  reactStrictMode: false,
  // Suppress hydration warnings in production
  onDemandEntries: {
    // Make Next.js not show warnings for hydration errors in production
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
