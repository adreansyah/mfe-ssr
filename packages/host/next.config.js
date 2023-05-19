const NextFederationPlugin = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.HOST,
  images: {
    domains: ["image.tmdb.org"]
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

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    movies: `movies@${process.env.MOVIES_HOST}/_next/static/${location}/remoteEntry.js`
  };
};

module.exports = {
  ...nextConfig,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
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
