/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.metmuseum.org',
        pathname: '**'
      }
    ]
  },
  async redirects() {
    return [{
      source: '/',
      destination: '/4',
      permanent: true
    }]
  },
};

module.exports = nextConfig
