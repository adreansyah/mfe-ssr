/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'http://localhost:4202',
}

module.exports = {
  ...nextConfig,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'video',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './vdp': './src/pages/video/[slug].js',
          './dataFetchVideo': './src/pages/video/dataFetch.js',
          './microApp': './src/pages/mfe-modules/[slug].js',
        },
        remotes: {

        },
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true
        }
      }),
    );

    return config;
  }
}
