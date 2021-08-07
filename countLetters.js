// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`👑👑👑 Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(string) {
  const obj = {};
  for (letter of string) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
return obj;
};


//TEST CASES

// const result1 = countLetters("matthew");

// console.log(result1);

// const result2 = {
//   m: 1,
//   a: 1,
//   t: 2,
//   h: 1,
//   e: 1,
//   w: 1,
// };

// console.log(result2);

// console.log(assertEqual(result1, result2));

module.exports = countLetters;