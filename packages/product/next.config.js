/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');


const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.HOST,
  images: {
    domains: ["fakestoreapi.com", "image.winudf.com"],
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
        name: 'product',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './mvd': './src/pages/movies/[slug].tsx',
          './product-baru': './src/pages/product-baru/index.tsx',
          './detail': './src/pages/product-baru/[slug].tsx',
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
