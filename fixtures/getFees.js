const { req } = require('../helpers/config');

const getFees = {
  getFeesInRange: (fromHeight, toHeight) => {
    return req(`/get_fees_in_range/${fromHeight}-${toHeight}`);
  },
};

module.exports = getFees;
