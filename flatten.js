const eqArrays = function(arrOne, arrTwo) {
  let str = "";
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      str += arrOne[i];
    }
  }
  let compareStr = arrOne.join("");
  if (compareStr === str) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log("The two arrays match!");
  } else {
    console.log("The two arrays do not match.");
  }
};

const flatten = function(array) {
  let flattenedArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArr.push(array[i][j]);
      }
    } else {
      flattenedArr.push(array[i]);
    }
  }
  return flattenedArr;
};

// //Test Case 1: Testing the flatten function
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([["Coffee"], "tea", ["cookies"]]));
// console.log(flatten([["Bananas"], "Cherries", ["Lemons", "Avocados"]]));

//Test Case 2: Using the assertArraysEqual to test out 
// console.log(assertArraysEqual(flatten([1, 2, 3, [4, 5], 6]), [1, 2, 3, 4, 5, 6]));

module.exports = flatten;
