const supertest = require('supertest');
const config = require('../helpers/config');
const request = supertest(config.getHost());

const getTransaction = {
  getTransaction: hash => {
    return request.get(`/get_transaction/${hash}`);
  },
  getLastTransactions: transType => {
    if (transType) {
      return request.get(`/get_last_transactions/${transType}`);
    } else {
      return request.get(`/get_last_transactions`);
    }
  },
  getLastTransactionsByAddress: (hash, page) => {
    return request.get(`/get_last_transactions_by_address/${hash}/${page}`);
  },
};

module.exports = getTransaction;
