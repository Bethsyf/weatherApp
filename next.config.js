/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['weatherapi.com/']
    
  }
}

module.exports = nextConfig
