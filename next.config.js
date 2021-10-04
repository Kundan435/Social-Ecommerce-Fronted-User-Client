module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    poweredByHeader: false
  },
  env: {
    STATIC_URL: 'http://localhost:4000/uploads/'
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
}
