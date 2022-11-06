/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  images: {
    domains: ['os.alipayobjects.com'],
  },
}

module.exports = {
  experimental: {
      images: {
          allowFutureImage: true
      }
  }
}

module.exports = nextConfig
