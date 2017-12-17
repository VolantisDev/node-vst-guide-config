var os = process.platform;
var osDefaults = require('./' + os)

var defaults = {

}

if (osDefaults) {
  defaults = defaults.push(osDefaults)
}

module.exports = defaults
