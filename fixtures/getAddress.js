const { req } = require('../helpers/config');

const getAddress = {
  getAddressAbstracts: (hash, page) => {
    return req(`/get_address_abstracts/${hash}/${page}`);
  },
  getAddressNeon: hash => {
    return req(`/get_address_neon/${hash}`);
  },
  getAddressToAddressAbstracts: (fromHash, toHash, page) => {
    return req(`/get_address_to_address_abstracts/${fromHash}/${toHash}/${page}`);
  },
};

module.exports = getAddress;
