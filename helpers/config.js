const config = {
  getHost: () => {
    if (process.env.NETWORK.toLowerCase().includes('test')) {
      return process.env.TESTNET_URL;
    } else {
      return process.env.MAINNET_URL;
    }
  },
};

module.exports = config;
