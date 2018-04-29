const config = {
  getHost: () => {
    if (process.env.NETWORK.toLowerCase().includes('test')) {
      return 'https://api.neoscan.io/api/test_net/v1';
    } else {
      return 'https://api.neoscan.io/api/main_net/v1';
    }
  },
};

module.exports = config;
