//Compares two arrays in value and in type and return true or false

const eqArrays = function(arrOne, arrTwo) {

  if (!Array.isArray(arrOne) || !Array.isArray(arrTwo)) {
    throw new Error('Parameter must be an array.')
  } else if (arrOne.length !== arrTwo.length) {
    return false;
  }

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

const test = eqArrays([1, 2, 3], [1, 2, 3, 4, 5, 6]);
console.log(test)

module.exports = eqArrays;