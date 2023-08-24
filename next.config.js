// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// nextConfig.webpack = (config, context) => {
//   config.module.rules.push({
//     test: /\.svg$/,
//     use: "@svgr/webpack",
//   });
//   return config;
// };

// module.exports = nextConfig;

/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    serverActions: true,
  },
};
