const supertest = require('supertest');
const config = require('../helpers/config');
const request = supertest(config.getHost());

const getNode = {
  getAllNodes: () => {
    return request.get(`/get_all_nodes`);
  },
  getNodes: () => {
    return request.get(`/get_nodes`);
  },
};

module.exports = getNode;
