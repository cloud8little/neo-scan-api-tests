const supertest = require('supertest');
const config = require('../helpers/config');
const request = supertest(config.getHost());

const getBlock = {
  getHighestBlock: () => {
    return request.get(`/get_highest_block`);
  },
  getHeight: () => {
    return request.get(`/get_height`);
  },
  getLastBlocks: () => {
    return request.get(`/get_last_blocks`);
  },
  getBlock: hashOrBlockHeight => {
    return request.get(`/get_balance/${hashOrBlockHeight}`);
  },
};

module.exports = getBlock;
