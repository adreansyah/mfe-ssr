/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');



const remotes = isServer => {
  return {
    cart: `cart@http://localhost:4024/remoteEntry.js`
  };
};

const nextConfig = {
  reactStrictMode: false,
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
          './product-register': './src/pages/product-register/index.tsx',
          './detail': './src/pages/product-register/[slug].tsx',
        },
        remotes: remotes(),
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
