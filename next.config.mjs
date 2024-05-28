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
              "default-src 'self' https://static.zohocdn.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google-analytics.com https://api.mapbox.com https://www.google.com https://www.gstatic.com https://salesiq.zohopublic.ca https://js.zohocdn.com https://vercel.live https://static.zohocdn.com; style-src 'self' 'unsafe-inline' https://api.mapbox.com https://css.zohocdn.com https://static.zohocdn.com; img-src 'self' data: https://css.zohocdn.com https://static.zohocdn.com; media-src 'self' https://anisoft.wpengine.com https://static.zohocdn.com; connect-src 'self' https://www.google-analytics.com https://api.mapbox.com https://events.mapbox.com https://anisoft.wpengine.com https://salesiq.zohocloud.ca https://salesiq.zohopublic.ca; frame-src 'self' https://www.google.com https://td.doubleclick.net https://salesiq.zohopublic.ca; worker-src 'self' blob:; font-src 'self' https://css.zohocdn.com https://fonts.gstatic.com;",
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
