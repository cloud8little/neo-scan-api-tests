const config = {
  gitlab: {
    hostUrl: '<PUT_GITLAB_HOST_URL_HERE>', // example: 'https://gitlab.com' - not required if `GITLAB_HOST_URL` env var is set instead
    personalToken: '<PUT_GITLAB_PERSONAL_TOKEN_HERE>', // not required if `GITLAB_PERS_TOKEN` env var is set instead
    statusProjectId: 2, // not required if `GITLAB_STATUS_PROJ_ID` env var is set instead
  },
  getHost: () => {
    if (process.env.CI_NETWORK) {
      if (process.env.CI_NETWORK.toLowerCase().includes('test')) return process.env.TESTNET_URL;
      else return process.env.MAINNET_URL;
    } else if (process.env.NETWORK.toLowerCase().includes('test')) return process.env.TESTNET_URL;
    return process.env.MAINNET_URL;
  },
};

module.exports = config;
