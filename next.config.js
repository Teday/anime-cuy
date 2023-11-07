/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
	env: {
		base_url: 'https://api.jikan.moe/v4/',
	},
}

module.exports = nextConfig
