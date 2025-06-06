/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              pathname: '**',
            },
          ],
    },
    eslint: {
      ignoreDuringBuilds: true,
  },
};

export default nextConfig;
