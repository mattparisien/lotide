const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const takeUntil = require('../takeuntil');

const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


describe('#takeUntil', () => {

  it('should return undefined if the callback specified an item which doesn\'t exist in the array', () => {
    expect(takeUntil(data, x => x === "ladada")).to.be.undefined;
    expect(takeUntil(data, x => x === "")).to.be.undefined;
  });

  it('should take all items in the array until the item specific by the callback', () => {
    const actual = takeUntil(data, x => x === ',');
    const expected = ['I\'ve', 'been', 'to', 'Hollywood'];
    assert.deepEqual(actual, expected);
  });

  it('should return an array', () => {
    expect(takeUntil(data, x => x === ',')).to.be.an('array');
  })
});