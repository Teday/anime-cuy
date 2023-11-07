/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
	env: {
		base_url: 'https://api.jikan.moe/v4',
	},
	images: {
		domains: ['cdn.myanimelist.net'],
	}
}

module.exports = nextConfig
