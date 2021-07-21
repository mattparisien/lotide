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

const without = function(source, itemsToRemove) {
  let finalArr = [];
  for (let i = 0; i < source.length; i++) { // loop through each item in first array
    for (let j = 0; j < itemsToRemove.length; j++) { // for each item in the first array, compare to each item in the second
      if (source[i] === itemsToRemove[j]) {
        finalArr.push(source[i]); //push the values that return true into a new array
      }
    }
  }
  return finalArr;
};

//Test Cases
const words = ["coffee", "tea", "lemonade"];
console.log(without(words, ["lemonade"])); // returns ["lemonade"]
console.log(assertArraysEqual(words, ["coffee", "tea", "lemonade"])); // it's a match!
console.log(assertArraysEqual(without(words, ["lemonade"]), ["lemonade"])); // it's a match!
