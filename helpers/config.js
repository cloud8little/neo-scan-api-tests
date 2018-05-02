const config = {
  getHost: () => {
    if (process.env.CI_NETWORK) {
      if (process.env.CI_NETWORK.toLowerCase().includes('test')) return process.env.TESTNET_URL;
      else return process.env.MAINNET_URL;
    } else if (process.env.NETWORK.toLowerCase().includes('test')) return process.env.TESTNET_URL;
    return process.env.MAINNET_URL;
  },
};

module.exports = config;
