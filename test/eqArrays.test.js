const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it ('should return true if the two arrays are identical in type and value', () => {
    const actual = eqArrays([1,2,3], [1,2,3]);
    assert.equal(actual, true);
  });

  it('should return false if the values of the two arrays are the same, but the types are different', () => {
    const actual = eqArrays([1, 2, "3"], [1, 2, 3]); // types are different
    assert.equal(actual, false);
  })

})


// console.log(eqArrays([1,2,"3"], [1,2,3]));
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); //should be true becasue true === true
// console.log(assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true)); // should be false because false !== true
