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

let test = nofig();

class nofig {
  constructor(file) {
    this.config = initializeConfigFile(file);
  }

  initializeConfigFile(file) {
    this.loadConfigFile(file)
    .then( config => {
      parseConfigFile(config);
    })
    .catch( err => {
      console.log(err);
    })
  }

  loadConfigFile(configFile) { 
    return new Promise( (reject, resolve) => {
      fs.open(configFile, 'r', (err, fd) => {
        if(err) {
          if(err.code === "ENOENT") {
            console.log(`Error: No Entry. File doesn't exist`);
          } 
          reject(`nofig.json does not exist: ${err}`);
        } else {
          resolve(config);
        }
      })
    })
  }

  parseConfigFile(config) {
    console.log(JSON.parse(config));
  }
}