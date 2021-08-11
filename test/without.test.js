const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const without = require('../without');

const words = ["coffee", "tea", "lemonade"];


describe('#without', () => {

  it('should return an array without the items to remove', () => {
    const actual = without(words, ["lemonade"]);
    const expected = ["coffee", "tea"];
    assert.deepEqual(actual, expected);
  });

  it('should return an error if the second argument is not an array', () => {
    expect(() => {without(words, "caroline")}).to.throw(Error);
  })
})
