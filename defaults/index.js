var os = process.platform;
var osDefaults = require('./' + os)

var userLibraryPath = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + 'Library/Preferences' : '/var/local')
userLibraryPath += '/VstGuide/UserLibrary'

var defaults = {
  vstPaths: [],
  samplePaths: [],
  userLibraryPath: userLibraryPath
}

if (osDefaults) {
  defaults = defaults.push(osDefaults)
}

module.exports = defaults
