const flatten = require('../flatten');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('#flatten', () => {

  it('should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(actual, expected)
  });

  it ('should return [\'Hello\', \'Lighthouse\', \'Labs\'] if passed [\'Hello\', [\'Lighthouse\'], \'Labs\']', () => {
    const actual = flatten(['Hello', ['Lighthouse'], 'Labs']);
    const expected = ['Hello', 'Lighthouse', 'Labs'];
    assert.deepEqual(actual, expected);
  });

  it('should throw an error if the nested arrays are more than one level deep', () => {
    expect(() => {flatten([[1, 2,], [[3], 4], 5, [6]])}).to.throw(Error);
  });
});