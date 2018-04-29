const supertest = require('supertest');
const config = require('../helpers/config');
const request = supertest(config.getHost());

const getBalance = {
  getBalance: hash => {
    return request.get(`/get_balance/${hash}`);
  },
};

module.exports = getBalance;
