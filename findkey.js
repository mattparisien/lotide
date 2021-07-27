const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👑👑👑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (item in object) {
    if (callback(object[item])) {
      return item;
    } else {
      return undefined;
    }
  }
};

const obj = {
person: "Matthew",
duck: "Caroline", 
father: "Denis"
};


//TEST CASES
const key = findKey(obj, x => x === "Matthew");
console.log(assertEqual(key, "person")); //should pass
console.log(assertEqual(key, "father")); //should fail