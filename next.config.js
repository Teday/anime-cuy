/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
	env: {
		base_url: 'https://api.jikan.moe/v4',
	},
	images: {
		domains: ['cdn.myanimelist.net'],
	}
}

module.exports = nextConfig
