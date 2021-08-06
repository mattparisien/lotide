//TEST CASES
const getMiddle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(getMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // should return [5, 6]
console.log(getMiddle([1, 2, 3, 4, 5, 6])); // should return [3, 4]
console.log(getMiddle(["Cherries", "Bananas", "Kiwis", "House"])); // should return ["Bananas", "Kiwis"];
console.log(assertArraysEqual(getMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])) // should return true
console.log(assertArraysEqual(getMiddle(["Return", "the", "middle", "of", "this", "sentence"]), ["middle", "of"])) // should return true