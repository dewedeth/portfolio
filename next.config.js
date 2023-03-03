/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com","cloudflare-ipfs.com","loremflickr.com"],
  },
}

module.exports = nextConfig
