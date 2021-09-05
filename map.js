// const eqArrays = function(arrOne, arrTwo) {
//   let str = "";
//   for (let i = 0; i < arrOne.length; i++) {
//     if (arrOne[i] === arrTwo[i]) {
//       str += arrOne[i];
//     }
//   }
//   let compareStr = arrOne.join("");
//   if (compareStr === str) {
//     return true;
//   }
//   return false;
// };

// const assertArraysEqual = function(arrOne, arrTwo) {
//   if (eqArrays(arrOne, arrTwo) === true) {
//     console.log("The two arrays match!");
//   } else {
//     console.log("The two arrays do not match.");
//   }
// };

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};



// //TEST CASES

// const fruits = ["Banana", "Kiwi", "Strawberry", "Raspberry", "Blueberry"];
// const numbers = [10, 120, 55, 4, 10, 2, 1];
// const result = map(fruits, fruit => fruit + " is a fruit")
// console.log(result)

// const results1 = map(fruits, word  => word[0]);
// const results2 = map(numbers, num  => num * 2);
// const results3 = map(numbers, num  => num + " is divisible by two: " + (num % 2 === 0));

// // let assert = assertArraysEqual(results1, ['B', 'K', 'S', 'R', 'B']);
// // assert = assertArraysEqual(results1, ['S', 'A', 'B', 'C', 'D']);

// // console.log(results3);
// // console.log(assert);

module.exports = map;
