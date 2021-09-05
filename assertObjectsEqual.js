// const eqObjects = function(object1, object2) {

//   const object1Keys = Object.keys(object1); 
//   const object2Keys = Object.keys(object2);
  
//   if (object1Keys.length !== object2Keys.length) {
//     return false;
//   } else {
//     for (let key of object1Keys) {
//       if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
//         console.log(object1[key], object2[key]);
//         return eqArrays(object1[key], object2[key])
//       } else if (object1[key] !== object2[key]) {
//           return false;
//       }
//     }  
//   }
//   return true;
// };

const eqObjects = require("./eqObjects");



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);

  if (result) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;