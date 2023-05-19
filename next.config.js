const withLess = require("next-with-less");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = withLess({
  ...nextConfig,
});
