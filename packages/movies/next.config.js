/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { default: axios } = require('axios');
const { spawn } = require('child_process');
const { join } = require('path')


const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'http://localhost:4208'
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
          // './css': './src/styles/globals.css'
          // './dataFetchVideo': './src/pages/video/dataFetch.js',
          // './microApp': './src/pages/mfe-modules/[slug].js',
        },
        remotes: {

        },
        shared: {
          ...deps
        },
        extraOptions: {
          automaticAsyncBoundary: true
        }
      }),
    );
    return config;
  }
}
