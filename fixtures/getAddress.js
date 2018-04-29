const supertest = require('supertest');
const config = require('../helpers/config');
const request = supertest(config.getHost());

const getAddress = {
  getAddress: hash => {
    return request.get(`/get_address/${hash}`);
  },
  getAddressAbstracts: (hash, page) => {
    return request.get(`/get_address_abstracts/${hash}/${page}`);
  },
  getAddressNeon: hash => {
    return request.get(`/get_address_neon/${hash}`);
  },
  getAddressToAddressAbstracts: (fromHash, toHash, page) => {
    return request.get(`/get_address_to_address_abstracts/${fromHash}/${toHash}/${page}`);
  },
};

module.exports = getAddress;
