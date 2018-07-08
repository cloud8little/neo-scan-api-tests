const { req } = require('../helpers/config');

const getTransaction = {
  getTransaction: hash => {
    return req(`/get_transaction/${hash}`);
  },
  getLastTransactionsByAddress: (hash, page) => {
    return req(`/get_last_transactions_by_address/${hash}/${page}`);
  },
};

module.exports = getTransaction;
