const supertest = require('supertest');
const request = supertest(getHost());

function getHost() {
  if (process.env.CI_NETWORK) {
    if (process.env.CI_NETWORK.toLowerCase().includes('test')) return process.env.TESTNET_URL;
    else return process.env.MAINNET_URL;
  } else if (process.env.NETWORK.toLowerCase().includes('test')) return process.env.TESTNET_URL;
  return process.env.MAINNET_URL;
}

const config = {
  req: (url, type = 'get') => {
    console.info(`[${type.toUpperCase()}] ${getHost()}${url}`);
    if (type === 'get') {
      return request.get(url);
    } else if (type === 'post') {
      return request.post(url);
    } else if (type === 'put') {
      return request.put(url);
    }
  },
};

module.exports = config;
