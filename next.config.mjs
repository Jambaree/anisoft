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
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://api.mapbox.com; img-src 'self' data:; media-src 'self' https://anisoft.wpengine.com; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://td.doubleclick.net;",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
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
