/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export
  basePath: "/vizll", // numele repo-ului tău GitHub
  images: {
    unoptimized: true, // necesar pentru export static
  },
};

module.exports = nextConfig;
