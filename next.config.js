/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'media.valorant-api.com',
      },
    ],
  },
}

module.exports = nextConfig
