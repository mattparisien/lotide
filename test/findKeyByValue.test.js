const chai = require('chai');
const findKey = require('../findkey');
const findKeyByValue = require('../findKeyByValue');
const assert = chai.assert;
const expect = chai.expect;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


describe('#findKeyByValue', () => {

  it('should still return the correct key if the value passed is in any kind of casing style', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "ThE wiRe");
    const expected = "drama";

    assert.equal(actual, expected);
  });

  it ('should return undefined if the value passed in doesn\'t match a value in the object passed in ', () => {
    expect(findKeyByValue(bestTVShowsByGenre, "This will will return undefined")).to.be.undefined;
  })

  it('should throw an error if the data passed in as the first argument is not a strict object', () => {
    expect(() => {findKeyByValue(284763, 'The Wire')}).to.throw(Error);
    expect(() => {findKeyByValue(['data', 'more data'], 'The Wire')}).to.throw(Error);
    expect(() => {findKeyByValue(null, 'The Wire')}).to.throw(Error);
  });
})