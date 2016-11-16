/*
  1. Find the config
  2. Import the loaders
  ... loaders execute commands using thread
*/

const fs      = require('fs');
const path    = require('path');
const vorpal  = require('vorpal');
const chalk   = vorpal().chalk;
const Promise = require('bluebird');

console.log(chalk.magenta('Hi. Published for namespace during development and branding. Come back December 15th <3'));

class Nofig {
  constructor(file) {
    let test = this.initializeConfigFile(file);
    console.log(`Initialize results: ${test}`);
  }

  initializeConfigFile(file) {
    this.confirmConfigFile(file)
    .then( config => {
      console.log(this.constructor.name);
      return this.parseConfigFile(config);
    })
    .then( results => {
      return console.log(results);
    })
    .catch( err => {
      console.log(err);
    })
  }

  confirmConfigFile(configFile) { 
    return new Promise( (reject, resolve) => {
      fs.open(configFile, 'r', (err, fd) => {
        if(err) {
          if(err.code === "ENOENT") {
            console.log(`Error: No Entry. File doesn't exist`);
          } 
          reject(`nofig.json does not exist: ${err}`);
        } else {
          console.log(`inside else: ${configFile}`);
          resolve(configFile);
        }
      })
    })
  }

  parseConfigFile(configFile) {
    return new Promise( (reject, resolve) => {
      resolve(console.log(JSON.parse(configFile)));
    });
  }
}


let fileExists = new Nofig('nofig.template.json');
// let fileDoesNotExist = new Nofig('foo');