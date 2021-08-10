const assert = require('chai').assert;
const expect = require('chai').expect;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


describe('#countOnly', () => {

  it('should return an error if the first argument isn\'t an array', () => {
    
    expect(function() {
      countOnly("This string is not allowed", {Salima: true})
    }).to.throw(Error);
  });

  it ('should return an object with a count of \'Fatima\'', () => {
    
    const actual = countOnly(firstNames, {"Salima": true});
    const expected = {Salima: 2};
    assert.deepEqual(actual, expected);
  });

  it('should return an empty object if passed in a name that doesn\'t exist in the list provided', () => {
  
    const actual = countOnly(firstNames, {"Caroline": true}); 
    const expected = {};
    assert.deepEqual(actual, expected);
  });

  it('should return an error if the second argument is not an object', () => {
    expect(() => {countOnly(firstNames, ["Caroline"])}).to.throw(Error);
  })
});