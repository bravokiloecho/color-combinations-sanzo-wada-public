/* eslint-disable @typescript-eslint/no-var-requires */

const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment to enable serverless mode
  output: 'export',

  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Import glsl
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['@davcri/webpack-glsl-loader', 'glslify-loader'],
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = withMDX(nextConfig)
