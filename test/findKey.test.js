const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const findKey = require('../findkey');

const obj = {
person: "Matthew",
duck: "Caroline", 
father: "Denis"
};

describe('#findkey', () => {

  it('should return the correct key as per specified by the callback', () => {
    const actual = findKey(obj, x => x === 'person');
    const expected = "person";
    assert.equal(actual, expected); 
  });
});