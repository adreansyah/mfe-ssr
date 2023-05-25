/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');


const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    product: `product@${process.env.PRODUCT_HOST}/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: false,
  assetPrefix: process.env.HOST,
  images: {
    domains: ["image.tmdb.org", "laz-img-cdn.alicdn.com"],
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
        name: 'homepage',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './home': './src/pages/homepage/index.tsx',
          './header': './src/components/header.tsx',
          './footer': './src/components/footer.tsx',
        },
        remotes: remotes(isServer),
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
