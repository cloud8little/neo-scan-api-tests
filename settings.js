const settings = {
  gitlab: {
    hostUrl: '<PUT_GITLAB_HOST_URL_HERE>', // example: 'https://gitlab.com' - not required if `GITLAB_HOST_URL` env var is set instead
    personalToken: '<PUT_GITLAB_PERSONAL_TOKEN_HERE>', // not required if `GITLAB_PERS_TOKEN` env var is set instead
    statusProjectId: 2, // not required if `GITLAB_STATUS_PROJ_ID` env var is set instead
  },
};

module.exports = settings;
