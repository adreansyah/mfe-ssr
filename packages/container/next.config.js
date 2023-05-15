/** @type {import('next').NextConfig} */
// require('./styles/tailwind.module.css')
const NextFederationPlugin = require('@module-federation/nextjs-mf');

// require('./styles/')
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'http://localhost:4200',
  images: {
    domains: ["image.tmdb.org"]
  },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    movies: `movies@http://localhost:4201/_next/static/${location}/remoteEntry.js`
  };
};

module.exports = {
  ...nextConfig,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // './styles': 'styles/tailwind.module.css'
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
