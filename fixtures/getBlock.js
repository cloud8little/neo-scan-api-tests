const { req } = require('../helpers/config');

const getBlock = {
  getHeight: () => {
    return req(`/get_height`);
  },
  getBlock: hashOrBlockHeight => {
    return req(`/get_block/${hashOrBlockHeight}`);
  },
};

module.exports = getBlock;
