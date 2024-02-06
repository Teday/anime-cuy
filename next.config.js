const withPWA = require('next-pwa')({
	dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	env: {
		base_url: process.env.base_url,
	},
	images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: process.env.hostname
            }
        ]
    }
};

module.exports = withPWA(nextConfig);
