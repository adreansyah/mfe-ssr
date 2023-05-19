/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');


const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.HOST,
  images: {
    domains: ["image.tmdb.org"],
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
}
module.exports = {
  ...nextConfig,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'movies',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './mvd': './src/pages/movies/[slug].tsx',
        },
        remotes: {

        },
        shared: {
          // ...deps
        },
        extraOptions: {
          automaticAsyncBoundary: true
        }
      }),
    );
    return config;
  }
}
