const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👑👑👑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function(array) {
  let firstVal = array[0];
  return firstVal;
}

// TESTING CODE

assertEqual(head([1,2,3]), 1); // should pass 
assertEqual(head(["Caroline", "Denis", "Matthew"]), "Pizza"); // should fail
assertEqual(head([]), "Pizza"); // actual should return undefined
assertEqual(head([6]), 6); //should still return 6 which is located at index 0
assertEqual(head(["Pizza, Soup"]), "Pizza"); //should pass 







