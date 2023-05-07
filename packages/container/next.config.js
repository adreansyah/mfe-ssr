/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'http://localhost:4200',
  images: {
    domains: ["image.tmdb.org"]
  },
  // swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
}

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    core: `core@http://localhost:4201/_next/static/${location}/remoteEntry.js`,
    video: `video@http://localhost:4202/_next/static/${location}/remoteEntry.js`,
    movies: `movies@http://localhost:4208/_next/static/${location}/remoteEntry.js`
  };
};

module.exports = {
  ...nextConfig,
  allowed: "",
  webpack(config, options) {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // './css': './styles/globals.css',
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true
        }
      }),
    );



    return config;
  }
}
