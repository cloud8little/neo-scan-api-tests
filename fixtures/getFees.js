const supertest = require('supertest');
const config = require('../helpers/config');
const request = supertest(config.getHost());

const getFees = {
  getFeesInRange: (fromHeight, toHeight) => {
    return request.get(`/get_fees_in_range/${fromHeight}-${toHeight}`);
  },
};

module.exports = getFees;
