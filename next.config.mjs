/** @type {import('next').NextConfig} */

const nextConfig = {
  // use for docker
  output: 'standalone',
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
