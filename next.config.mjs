/**
 * @type {import('next').NextConfig}
 */

const env = process.env.NODE_ENV;
const isProd = env === "production";

const nextConfig = isProd
  ? {
      output: "export",
      basePath: "/portfolio",
      distDir: "dist",
      cleanDistDir: true,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
