/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.scdn.co', 'mosaic.scdn.co']
  }
};

module.exports = nextConfig;
