const withStylus = require('@zeit/next-stylus')

/** @type {import('next').NextConfig} */
const nextConfig = withStylus({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    })
    return config
  }
})

module.exports = nextConfig