const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👑👑👑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TESTING CODE

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("Javascript", "Node"));
console.log(assertEqual(10, 25));
console.log(assertEqual(2, 2));

module.exports = assertEqual;


