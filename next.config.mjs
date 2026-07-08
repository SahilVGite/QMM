/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid stale optimized image cache when replacing files with the same name
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
  // Soft-refresh public assets during local development
  async headers() {
    if (process.env.NODE_ENV !== "development") return [];

    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
