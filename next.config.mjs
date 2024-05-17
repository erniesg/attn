// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   transpilePackages: ['d3-interpolate', '@nivo/core'],
//   // Add any other custom configuration here
// };

// export default nextConfig;/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   transpilePackages: ['d3-interpolate', '@nivo/core'],
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.js$/,
//       loader: 'babel-loader',
//       exclude: /node_modules/,
//       options: {
//         presets: ['@babel/preset-env'],
//         plugins: ['@babel/plugin-syntax-dynamic-import'],
//       },
//     });
//     return config;
//   },
// };

// export default nextConfig;
// const nextConfig = {
//   reactStrictMode: true,
//   transpilePackages: ['d3-interpolate', '@nivo/core'],
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.js$/,
//       loader: 'babel-loader',
//       exclude: /node_modules/,
//       options: {
//         presets: ['@babel/preset-env'],
//         plugins: ['@babel/plugin-syntax-dynamic-import'],
//       },
//     });

//     // Add this rule to handle ES Modules
//     config.module.rules.push({
//       test: /\.m?js/,
//       resolve: {
//         fullySpecified: false,
//       },
//     });

//     return config;
//   },
// };

// export default nextConfig;
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['d3-interpolate', '@nivo/core'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-syntax-dynamic-import'],
      },
    });

    // Add this rule to handle ES Modules
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });

    // Add this rule to handle CommonJS requiring ES Modules
    config.module.rules.push({
      test: /@nivo[\\/]core[\\/]dist[\\/]nivo-core\.cjs\.js$/,
      loader: 'babel-loader',
      options: {
        plugins: ['@babel/plugin-syntax-dynamic-import'],
      },
    });

    return config;
  },
};

export default nextConfig;
