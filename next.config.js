/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable strict mode (optional but recommended)
  swcMinify: true, // Enabling SWC minifier (recommended for production)
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['api.builder.io'], // Allow external domains for image optimization (if you're using external image sources)
  },
  // Removed i18n config as it can cause navigation issues with App Router
  // i18n: {
  //   locales: ['en', 'es'], // Example for internationalization
  //   defaultLocale: 'en',
  // },
  // Other custom settings here...
}

module.exports = nextConfig
