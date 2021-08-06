const tail = require('../tail');
const assertEqual = require('../assertEqual');

// //Test Case 1: Check the Returned Array Elements

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));

//Test Case 2: Check the Original Array

const words = ["YO YO", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);
