/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web.codans.com.br',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me'
      }
    ],
  }
}
