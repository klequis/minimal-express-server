// dependencies for this script
execSync('npm i fs-extra rimraf', {stdio:[0,1,2]})

const path = require('path')
const fs = require('fs-extra')
const rimraf = require('rimraf')
const execSync = require('child_process').execSync

// final path for app
const appPath = path.normalize(`${__dirname}/../app`)

// remove ../app it it already exists
if (fs.existsSync(appPath)) {
  rimraf.sync(appPath, {}, function () { console.log("done"); });
}

// npm i for repo
// see: https://nodejs.org/api/child_process.html#child_process_options_stdio
execSync('npm i', {stdio:[0,1,2]})

// build app
execSync('npm run build', {stdio:[0,1,2]})

// move dist files to ../app
fs.move(`${__dirname}/dist`, appPath)

function l(msg, value) {
  if (value === undefined) {
    console.log(msg)    
  } else {
    console.log(msg, value)
  }
}