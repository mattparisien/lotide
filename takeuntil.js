//Returns all values in a given array until the element specified by the callback

const takeUntil = function (array, callback) {
  const finalArr = [];

  for (item of array) {
    if (!callback(item)) {
      finalArr.push(item);
    } else {
      return finalArr;
    }
  }
};

module.exports = takeUntil;
