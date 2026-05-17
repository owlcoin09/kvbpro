import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "static.kvbplus.com", pathname: "/**" },
      { protocol: "https", hostname: "static.mykvb.com", pathname: "/**" },
      { protocol: "https", hostname: "kvbplus.com", pathname: "/**" },
      { protocol: "https", hostname: "www.kvbplus.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
