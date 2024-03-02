/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  distDir: "dist",
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
