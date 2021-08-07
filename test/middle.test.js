//TEST CASES
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#middle', () => {
  
  it ('should return [5,6] if passed in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    const result = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const expected = [5,6];
    assert.deepEqual(result, expected);
  });

  it ('should return [3, 4] if passed in [1, 2, 3, 4, 5, 6]', () => {
    const result = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert.deepEqual(result, expected);
  });

  it ('should return ["Bananas", "Kiwis"] if passed in ["Cherries", "Bananas", "Kiwis", "House"]', () => {
    const result = middle(["Cherries", "Bananas", "Kiwis", "House"]);
    const expected = ["Bananas", "Kiwis"];
    assert.deepEqual(result, expected);
  });
});

