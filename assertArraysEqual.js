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

//Test Case: Returning a message using the asserArraysEqual function based on the boolean returned by the eqArrays function
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));