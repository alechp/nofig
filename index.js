console.log('Hi. Published for namespace during development and branding. Come back December 15th <3');


/*
  1. Find the config
  2. Import the loaders
  ... loaders execute commands using thread
*/

const fs      = require('fs');
const path    = require('path');
const vorpal  = require('vorpal');
const Promise = require('bluebird');

export default class nofig {
  constructor() {
    
  }
  loadConfigFile(fPath) { 
    return new Promise( (reject, resolve) => {
      fs.open(configFile, 'r', (err, fd) => {
        if(err) {
          if(err.code === "ENOENT") {
            console.log(`Error: No Entry. File doesn't exist`);
          } 
          reject(`nofig.json does not exist: ${err}`);
        } else {
          resolve(true);
        }
      })
    })
  }
}