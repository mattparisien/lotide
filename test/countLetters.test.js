const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const countLetters = require('../countLetters');

describe('#countLetters', () => {

  it('should return an error if argument is not a string', () => {
    expect(() => {countLetters(46354)}).to.throw(Error);
  });

  it('should still return an object if passed in symbols', () => {
    const actual = countLetters("%%%%##$$$");
    const expected = {
      "%": 4,
      "#": 2, 
      "$": 3
    };

    assert.deepEqual(actual, expected);
  });

  it('should return an object with all the counts of each letter', () => {
    const actual = countLetters('matthew');
    const expected  = {
      m: 1,
      a: 1,
      t: 2,
      h: 1,
      e: 1,
      w: 1
    };

    assert.deepEqual(actual, expected);
  });
})