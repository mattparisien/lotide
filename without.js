const without = function(source, itemsToRemove) {

  if (!Array.isArray(itemsToRemove)) {
    throw new Error('Second parameter must be an array of strings.')
  };

  let finalArr = [];
  for (let i = 0; i < source.length; i++) { // loop through each item in first array
    for (let j = 0; j < itemsToRemove.length; j++) { // for each item in the first array, compare to each item in the second
      if (source[i] !== itemsToRemove[j]) {
        finalArr.push(source[i]); //push the values that return true into a new array
      }
    }
  }
  return finalArr;
};

module.exports = without;
