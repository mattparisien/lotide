const eqObjects = function(object1, object2) {
  
  const holder = [];
  holder.push(object1, object2);
  holder.forEach((arg) => {
    if (typeof arg !== 'object' || Array.isArray(arg) || typeof arg === null) {
      throw new Error('Argument should be of type \'object\'')
    };
  });


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
      };
    };
  };
  return true;
};

const ab = [];
const ba = { b: "2", a: "1" };
console.log(ab, ba);


// TEST CASES 
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// console.log(assertEqual(eqObjects(ab, ba), true)); // Assertion passes
// console.log(assertEqual(eqObjects(ab, abc), true)); // Assertion should fail (false !== true);
// console.log(assertEqual(eqObjects(ab, ab), true)); // Assertion passes

// const cd = { c: "1", d: ["2", 3] };
// // const dc = { d: ["2", 3], c: "1" };
// // eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// // eqObjects(cd, cd2); // => false

// // console.log(assertEqual(eqObjects(cd, dc), true));
// // console.log(assertEqual(eqObjects(cd, cd2), false));

module.exports = eqObjects;