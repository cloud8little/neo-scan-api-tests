const { req } = require('../helpers/config');

const getBalance = {
  getBalance: hash => {
    return req(`/get_balance/${hash}`);
  },
};

module.exports = getBalance;
