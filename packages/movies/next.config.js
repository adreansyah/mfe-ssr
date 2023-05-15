/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');



const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'http://localhost:4201',
  images:{
    domains: ["image.tmdb.org"],
  }
}
const deps = require("./package.json").dependencies;
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
