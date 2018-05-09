const { req } = require('../helpers/config');

const getNode = {
  getAllNodes: () => {
    return req(`/get_all_nodes`);
  },
  getNodes: () => {
    return req(`/get_nodes`);
  },
};

module.exports = getNode;
