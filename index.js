const Configstore = require('configstore')
const defaults = require('./defaults')
const conf = new Configstore('vst-guide', defaults)

module.exports = {
  config: conf,
  get: function (key) {
    return conf.get(key)
  },
  set: function (key, value) {
    return conf.set(key, value);
  },
  has: function (key) {
    return conf.has(key)
  },
  delete: function (key) {
    return conf.delete(key)
  },
  path: function () {
    return conf.path;
  },
  all: function () {
    return conf.all;
  },
  addPath: function (key, path) {
    var paths = conf.get(key)
    if (paths.indexOf(path) === -1) {
      paths.push(path)
      conf.set(key, paths)
    }
  },
  removePath: function (key, path) {
    var paths = conf.get(key)
    var index = paths.indexOf(path)
    if (index !== -1) {
      paths.splice(index, 1)
    }
  }
}
