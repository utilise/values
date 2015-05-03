var keys = require('keys')
  , base = require('base')

module.exports = function values(o) {
  return !o ? [] : keys(o).map(base(o))
}