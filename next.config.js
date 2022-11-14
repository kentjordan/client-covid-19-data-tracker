const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'countryflagsapi.com',
        pathname: '/png/**',
      },
    ]
  }
}

module.exports = nextConfig
