/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'http://localhost:4201',
  images:{
    domains: ["image.tmdb.org"]
  }
}

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {

  };
};
module.exports = {
  ...nextConfig,
  webpack(config, options) {
    
    config.plugins.push(
      new NextFederationPlugin({
        name: 'core',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Banner': './components/Banner/Banner.js',
          './Navbar': './components/Navbar/Navbar.js',
          './SectionPopular': './molecules/SectionPopular/index.js'
        },
        remotes: {

        },
        shared: {},
        extraOptions:{
          automaticAsyncBoundary: true
        }
      }),
    );
    
    return config;
  }
}
