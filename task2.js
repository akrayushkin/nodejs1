/* const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const { pipeline } = require('stream'); */
import * as fs from 'fs';
import * as path from 'path';
import csv from 'csvtojson';
import { pipeline } from 'stream';

const csvFilePath = path.join(__dirname, 'csv', 'nodejs-hw1-ex1.csv');
const jsonFilePath = path.join(__dirname, 'json', 'nodejs-hw1-ex1.json');
// readFile
/*
fs.readFile(
  csvFilePath,
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  }
)
 */

// readStream
const readStream = fs.createReadStream(csvFilePath, { highWaterMark: 10 });
const writeStream = fs.createWriteStream(jsonFilePath);

/*
readStream.pipe(csv())
          .on('error', err => {
            if (err) {
              throw err;
            }
          })
          .pipe(writeStream)
          .on('close', () => {
            console.log('file was closed');
          })
          .on('error', err => {
            if (err) {
              throw err;
            }
          });
 */

pipeline(
  readStream,
  csv(),
  writeStream,
  err => {
    if (err) {
      throw err;
    }
    console.log('finished');
  }
);
