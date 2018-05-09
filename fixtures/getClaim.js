const { req } = require('../helpers/config');

const getClaim = {
  getClaimable: hash => {
    return req(`/get_claimable/${hash}`);
  },
  getClaimed: hash => {
    return req(`/get_claimed/${hash}`);
  },
  getUnclaimed: hash => {
    return req(`/get_unclaimed/${hash}`);
  },
};

module.exports = getClaim;
