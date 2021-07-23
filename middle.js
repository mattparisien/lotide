//LOGIC 
//Find the middle index
//If the length of the array is divisible by two, you need to grab the value at the middle index along with it's partner to the right
// If it is not divisible by two, you will only need to grab the value at the middle index

//TEST ASSERTION FUNCTIONS
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


// ACTUAL FUNCTION
const getMiddle = function(array) {
  let middleIndex = Math.ceil((array.length) / 2 - 1); 
  const middleValues = [];

  if (array.length % 2 === 0) { 
    middleValues.push(array[middleIndex], array[middleIndex + 1]); 
  } else if (array.length % 2 !== 0) {
    middleValues.push(array[middleIndex]);
  }
  return middleValues;
};

//TEST CASES
console.log(getMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // should return [5, 6]
console.log(getMiddle([1, 2, 3, 4, 5, 6])); // should return [3, 4]
console.log(getMiddle(["Cherries", "Bananas", "Kiwis", "House"])); // should return ["Bananas", "Kiwis"];

console.log(assertArraysEqual(getMiddle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])) // should return true
console.log(assertArraysEqual(getMiddle(["Return", "the", "middle", "of", "this", "sentence"]), ["middle", "of"])) // should return true