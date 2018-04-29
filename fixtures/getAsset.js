const supertest = require('supertest');
const config = require('../helpers/config');
const request = supertest(config.getHost());

const getAsset = {
  getAsset: hash => {
    return request.get(`/get_asset/${hash}`);
  },
  getAssets: () => {
    return request.get(`/get_assets`);
  },
};

module.exports = getAsset;
