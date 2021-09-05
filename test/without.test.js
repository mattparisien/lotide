const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const without = require('../without');

const words = ["coffee", "tea", "lemonade", "lighthouse", "labs"];


describe('#without', () => {

  it ('should return a filtered array without the items to remove', () => {
    const result = without(words, ["coffee", "labs", "lemonade"]);
    const expected = ["tea", "lighthouse"];
    assert.deepEqual(result, expected);
  })

  it('should return an error if the second argument is not an array', () => {
    expect(() => {without(words, "caroline")}).to.throw(Error);
  });
})
