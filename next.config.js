const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Next.js configuration goes here - https://nextjs.org/docs/api-reference/next.config.js/introduction 
};

module.exports = withPlugins(
  [
    [withPreact],

    // Additional plugins are installed here - https://github.com/cyrilwanner/next-compose-plugins#usage
  ],
  nextConfig
);
