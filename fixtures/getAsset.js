const { req } = require('../helpers/config');

const getAsset = {
  getAsset: hash => {
    return req(`/get_asset/${hash}`);
  },
  getAssets: () => {
    return req(`/get_assets`);
  },
};

module.exports = getAsset;
