require('dotenv').config();

module.exports = {
  exportTrailingSlash: true,
  env: {
    NEXT_ENV: process.env.ENV,
  },
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
};
