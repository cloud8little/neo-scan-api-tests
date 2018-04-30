const supertest = require('supertest');
const config = require('../helpers/config');
const request = supertest(config.getHost());

const getClaim = {
  getClaimable: hash => {
    return request.get(`/get_claimable/${hash}`);
  },
  getClaimed: hash => {
    return request.get(`/get_claimed/${hash}`);
  },
};

module.exports = getClaim;
