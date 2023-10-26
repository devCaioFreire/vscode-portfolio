/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "i.pinimg.com",
      "opportunitydesk.org",
      "scontent.fcgh15-1.fna.fbcdn.net"
    ],
  },
};

module.exports = nextConfig;
