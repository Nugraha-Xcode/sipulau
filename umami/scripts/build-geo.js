require('dotenv').config();
const fs = require('fs');
const path = require('path');
const http = require('http');
const zlib = require('zlib');
const tar = require('tar');

let url =
  'https://raw.githubusercontent.com/GitSquared/node-geolite2-redist/master/redist/GeoLite2-Country.tar.gz';

if (process.env.MAXMIND_LICENSE_KEY) {
  url =
    `https://download.maxmind.com/app/geoip_download` +
    `?edition_id=GeoLite2-Country&license_key=${process.env.MAXMIND_LICENSE_KEY}&suffix=tar.gz`;
}

const dest = path.resolve(__dirname, '../public/geo');

if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest);
}

const download = url =>
  new Promise(resolve => {
    http.get({hostname: "192.168.1.28", port: 3128, path: url}, res => {
      resolve(res.pipe(zlib.createGunzip({})).pipe(tar.t()));
    });
  });

const open = () =>
  new Promise((resolve, reject) => {
    let readStream = fs.createReadStream(
      path.resolve(__dirname, 'GeoLite2-Country.tar.gz')
    );
    readStream.on('open', () => {
      resolve(readStream.pipe(zlib.createGunzip({})).pipe(tar.t()));
    });
    readStream.on('error', e => {
      reject(e);
    });
  });

// download(url).then(
open().then(
  res =>
    new Promise((resolve, reject) => {
      res.on('entry', entry => {
        if (entry.path.endsWith('.mmdb')) {
          const filename = path.join(dest, path.basename(entry.path));
          entry.pipe(fs.createWriteStream(filename));

          console.log('Saved geo database:', filename);
        }
      });

      res.on('error', e => {
        reject(e);
      });
      res.on('finish', () => {
        resolve();
      });
    }),
);
