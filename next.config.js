/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	env: {
		NEXT_MAPBOX: process.env.NEXT_MAPBOX,
	},
	experimental: {
		appDir: true,
	},
	images: {
		//enter the domain or subdomain where you have WordPress installed
		domains: ['images.unsplash.com', 'anisoft.wpengine.com'],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};

module.exports = nextConfig;
