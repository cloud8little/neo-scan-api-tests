const { req } = require('../helpers/config');

const getBlock = {
  getHighestBlock: () => {
    return req(`/get_highest_block`);
  },
  getHeight: () => {
    return req(`/get_height`);
  },
  getLastBlocks: () => {
    return req(`/get_last_blocks`);
  },
  getBlock: hashOrBlockHeight => {
    return req(`/get_block/${hashOrBlockHeight}`);
  },
};

module.exports = getBlock;
