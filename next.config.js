/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/marketing-dashboard-2025' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/marketing-dashboard-2025' : '',
}

module.exports = nextConfig