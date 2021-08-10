const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {

  it('should return an error if the argument is not a string', () => {
    expect(() => {letterPositions(['foo!'])}).to.throw(Error);
  });

  it('should return the appropriate letter positions', () => {
    const actual = letterPositions('matthew');
    const expected = {
      m: [0],
      a: [1],
      t: [2, 3],
      h: [4],
      e: [5],
      w: [6]
    };

    assert.deepEqual(actual, expected);
  });

  it('should only create one key per character, and use an array to store the character\'s locations', () => {
    const actual = letterPositions('tttt')
    const expected = {t: [0,1,2,3]}
    
    assert.deepEqual(actual, expected);
  });

  it('still returns an object if passed in symbols as an argument', () => {
    const actual = letterPositions('%%&&!&!');
    const expected = {
      "%": [0, 1],
      "&": [2, 3, 5],
      "!": [4, 6]
    }
    assert.deepEqual(actual, expected);
  });
  
});