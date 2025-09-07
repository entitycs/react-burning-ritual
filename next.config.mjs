/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.gr-assets.com',
                port: '',
                pathname: '/authors/**',
            },
        ],
    },
};

export default nextConfig;
