const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👑👑👑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  let str = "";

  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] === arrTwo[i]) {
        return true;
      }
    }
  }
  return false;
};


//First retrieve a list of all keys in the objects using Object.keys()
//Compare their lengths - if the amount of keys aren't the same the objects automatically aren't equal
//Then we can iterate through the keys of the previously retrieved keys and compare the keys of both objects
//Return true outside of the loop if all of these conditions are not met

const eqObjects = function(object1, object2) {

  const object1Keys = Object.keys(object1); 
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (let key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        console.log(object1[key], object2[key]);
        return eqArrays(object1[key], object2[key])
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }  
  }
  return true;
};

// TEST CASES 
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// console.log(assertEqual(eqObjects(ab, ba), true)); // Assertion passes
// console.log(assertEqual(eqObjects(ab, abc), true)); // Assertion should fail (false !== true);
// console.log(assertEqual(eqObjects(ab, ab), true)); // Assertion passes

const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));

