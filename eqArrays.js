const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;