const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👑👑👑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(eqArrays([1,2,"3"], [1,2,3]));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); //should be true becasue true === true
console.log(assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true)); // should be false because false !== true