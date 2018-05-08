const config = require('./helpers/config');
const EasyFtp = require('easy-ftp');
const ftp = new EasyFtp();
const args = process.argv.slice(2);

var ftpConfig = {
  host: process.env.FTP_HOST || config.ftp.host,
  username: process.env.FTP_USER || config.ftp.user,
  password: process.env.FTP_PASS || config.ftp.pass,
};

ftp.connect(ftpConfig);

ftp.exist(`/${process.env.CI_NETWORK}`, exist => {
  if (!exist) {
    console.log(`Catalog /${process.env.CI_NETWORK} doesn't exist, creating..`);
    ftp.mkdir(`/${process.env.CI_NETWORK}`, err => {
      if (err) {
        console.log(err);
        ftp.close();
      } else {
        if (args[0] === 'download') {
          download();
        } else if (args[0] === 'upload') {
          upload();
        } else {
          console.log(`Please pass 'upload' or 'download' while running this script`);
          ftp.close();
        }
      }
    });
  } else {
    if (args[0] === 'download') {
      download();
    } else if (args[0] === 'upload') {
      upload();
    } else {
      console.log(`Please pass 'upload' or 'download' while running this script`);
      ftp.close();
    }
  }
});

function download() {
  ftp.exist(`/${process.env.CI_NETWORK}/testStatus.json`, exist => {
    if (exist) {
      ftp.download(`/${process.env.CI_NETWORK}/testStatus.json`, 'results/testStatus.json', err => {
        if (err) {
          console.log(err);
        }
        ftp.close();
      });
    } else {
      console.log(
        `/${process.env.CI_NETWORK}/testStatus.json doesn't exist, there is nothing to download`
      );
      ftp.close();
    }
  });
}

function upload() {
  ftp.upload('results/testStatus.json', `/${process.env.CI_NETWORK}/testStatus.json`, err => {
    if (err) {
      console.log(err);
    }
    ftp.close();
  });
}
