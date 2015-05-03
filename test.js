var expect = require('chai').expect
  , values = require('./')

describe('values', function() {
  it('should convert object values to array', function() {
    var o = { a: 1, b: 2}
    expect(values(o)).to.eql([1, 2])
  })

  it('should return an empty array if no arguments', function() {
    expect(values()).to.eql([])
  })
})