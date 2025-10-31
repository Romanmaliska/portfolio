/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  // use for docker
  output: 'standalone',
  experimental: {
    viewTransition: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
