//Returns the tail of an array (all values except for the first)

const tail = function (array) {
  let finalArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) finalArr.push(array[i]);
  }
  return finalArr;
};

module.exports = tail;
