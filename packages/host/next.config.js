const NextFederationPlugin = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: false,
  assetPrefix: process.env.HOST,
  images: {
    domains: ["fakestoreapi.com","image.winudf.com"]
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
    product: `product@${process.env.PRODUCT_HOST}/_next/static/${location}/remoteEntry.js`,
    homepage: `homepage@${process.env.HOMEPAGE_HOST}/_next/static/${location}/remoteEntry.js`,
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
