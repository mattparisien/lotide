const eqArrays = function(arrOne, arrTwo) {

  if (!Array.isArray(arrOne) || !Array.isArray(arrTwo)) {
    throw new Error('Parameter must be an array.')
  };

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