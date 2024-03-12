/**
 * @type {import('next').NextConfig}
 */

const env = process.env.NODE_ENV;
const isProd = env === "production";

const nextConfig = {
  output: "standalone",
}

export default nextConfig;
