//This function compares two values and returns true
// if they are equal in value & in type

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👑👑👑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Function which returns the tail of an array
const tail = function(array) {
  let finalArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0)
      finalArr.push(array[i]);
  }
  return finalArr;
};


// //Test Case 1: Check the Returned Array Elements

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));

//Test Case 2: Check the Original Array

const words = ["YO YO", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);



