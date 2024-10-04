// remote app next.config.js
import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'next2',
        remotes: {
          next1: `next1@http://localhost:3000/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ComponentA': './components/ComponentA.js',
        },
        // shared: {
        //   react: {
        //     singleton: true,
        //     requiredVersion: false,
        //   },
        //   'react-dom': {
        //     singleton: true,
        //     requiredVersion: false,
        //   },
        // },
      })
    );

    return config;
  },
};

export default nextConfig;
