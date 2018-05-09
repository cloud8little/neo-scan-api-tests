const config = require('./helpers/config');
const jsonfile = require('jsonfile');
const { RepositoryFiles } = require('gitlab');
const args = process.argv.slice(2);

const api = new RepositoryFiles({
  url: process.env.GITLAB_HOST_URL || config.gitlab.hostUrl,
  token: process.env.GITLAB_PERS_TOKEN || config.gitlab.personalToken,
});

if (!process.env.SEND_DETAILS && process.env.CI_NETWORK) {
  api
    .show(
      process.env.GITLAB_STATUS_PROJ_ID || config.gitlab.statusProjectId,
      `${process.env.CI_COMMIT_REF_NAME}/${process.env.CI_NETWORK}/testStatus.json`,
      'master'
    )
    .then(() => {
      console.log(`[manageStatus] File exists, trying to ${args[0]}..`);
      if (args[0] === 'download') {
        download();
      } else if (args[0] === 'upload') {
        upload();
      } else {
        console.log(`[manageStatus] Please pass 'upload' or 'download' while running this script`);
      }
    })
    .catch(err => {
      if (err.response.body.message.includes('404')) {
        console.log(`[manageStatus] File doesn't exist, creating..`);
        api
          .create(
            process.env.GITLAB_STATUS_PROJ_ID || config.gitlab.statusProjectId,
            `${process.env.CI_COMMIT_REF_NAME}/${process.env.CI_NETWORK}/testStatus.json`,
            'master',
            {
              content: '{"testsFailedNow":false,"testsFailedBefore":false}',
              commit_message: 'init commit',
            }
          )
          .then(() => {
            console.log('[manageStatus] File created!');
          })
          .catch(err => {
            console.error(`[manageStatus] File creation failed: ${err.response.body.message}`);
          });
      }
    });
} else {
  console.log('[manageStatus] Skipping downloading/uploading because this is not scheduled job');
}

function download() {
  api
    .showRaw(
      process.env.GITLAB_STATUS_PROJ_ID || config.gitlab.statusProjectId,
      `${process.env.CI_COMMIT_REF_NAME}/${process.env.CI_NETWORK}/testStatus.json`,
      'master'
    )
    .then(data => {
      writeJson('./results/testStatus.json', data);
    })
    .catch(err => {
      console.error(
        `[manageStatus] There was an error while downloading testStatus.json file: ${err}`
      );
    });
}

function upload() {
  const data = require('./results/testStatus.json');

  api
    .edit(
      process.env.GITLAB_STATUS_PROJ_ID || config.gitlab.statusProjectId,
      `${process.env.CI_COMMIT_REF_NAME}/${process.env.CI_NETWORK}/testStatus.json`,
      'master',
      {
        content: JSON.stringify(data),
        commit_message: `update for JOB_ID: ${process.env.CI_JOB_ID}`,
      }
    )
    .then(() => {
      console.log('[manageStatus] Successfuly uploaded testStatus.json file');
    })
    .catch(err => {
      if (err.response.body.error.includes('content is invalid')) {
        console.log(`[manageStatus] File wasn't uploaded because it didn't change`);
      } else {
        console.error(
          `[manageStatus] There was an error while uploading testStatus.json file: ${err}`
        );
      }
    });
}

function writeJson(jsonPath, data) {
  jsonfile.writeFile(jsonPath, data, err => {
    if (err) {
      console.error(
        `[manageStatus] There was an error while updating testStatus.json file: ${err}`
      );
    } else {
      console.log('[manageStatus] Successfuly downloaded testStatus.json file');
    }
  });
}
