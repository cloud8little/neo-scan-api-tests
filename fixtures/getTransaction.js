const { req } = require('../helpers/config');

const getTransaction = {
  getTransaction: hash => {
    return req(`/get_transaction/${hash}`);
  },
  getLastTransactions: transType => {
    if (transType) {
      return req(`/get_last_transactions/${transType}`);
    } else {
      return req(`/get_last_transactions`);
    }
  },
  getLastTransactionsByAddress: (hash, page) => {
    return req(`/get_last_transactions_by_address/${hash}/${page}`);
  },
};

module.exports = getTransaction;
