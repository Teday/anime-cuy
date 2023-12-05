const withPWA = require('next-pwa')({
	dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	env: {
		base_url: "https://api.jikan.moe/v4",
	},
	images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            }
        ]
    }
};

module.exports = withPWA(nextConfig);
