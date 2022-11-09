/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['res.cloudinary.com']
		// domains: ['i.ibb.co', 'flowbite.com']
		// loader: 'cloudinary',
		// path: 'https://res.cloudinary.com/'
	}
};

module.exports = nextConfig;
