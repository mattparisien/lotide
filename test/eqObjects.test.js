const assert = require('chai').assert;
const expect = require('chai').expect;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  
  it('should return true when comparing two identical objects, regardless of the property order', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const actual = eqObjects(ab, ba);

    assert.equal(actual, true);
  })

  it('should return false when comparing two objects that aren\'t identical', () => {
    const ab = { a: "1", b: "10" };
    const ba = { a: "15", b: "1" };
    const actual = eqObjects(ab, ba);

    assert.equal(actual, false);
  });

  it('should throw an error when either of the arguments aren\'t objects', () => {
    const ab = ["this is an array"];
    const ba = { a: "15", b: "1" };
  
    expect(() => {eqObjects(ab, ba)}).to.throw(Error);
  });
})