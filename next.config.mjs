import withPlaiceholder from "@plaiceholder/next";
const wpBaseUrl = process.env.NEXT_PUBLIC_WP_URL?.replace("https://", "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    NEXT_MAPBOX: process.env.NEXT_MAPBOX,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: wpBaseUrl,
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self'; img-src 'self' data:; style-src 'self';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/solutions-products",
        destination: "/solutions-and-products",
        permanent: true,
      },
      {
        source: "/solutions-and-products/:slug",
        destination: "/solutions-products/:slug",
        permanent: true,
      },
    ];
  },

  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
};

export default withPlaiceholder(nextConfig);
