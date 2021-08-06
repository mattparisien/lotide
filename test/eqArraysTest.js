const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log(eqArrays([1,2,"3"], [1,2,3]));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); //should be true becasue true === true
console.log(assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true)); // should be false because false !== true
