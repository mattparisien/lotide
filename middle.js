//LOGIC 
//Find the middle index
//If the length of the array is divisible by two, you need to grab the value at the middle index along with it's partner to the right
// If it is not divisible by two, you will only need to grab the value at the middle index


// ACTUAL FUNCTION
const getMiddle = function(array) {
  let middleIndex = Math.ceil((array.length) / 2 - 1); 
  const middleValues = [];

  if (array.length % 2 === 0) { 
    middleValues.push(array[middleIndex], array[middleIndex + 1]); 
  } else if (array.length % 2 !== 0) {
    middleValues.push(array[middleIndex]);
  }
  return middleValues;
};

module.exports = getMiddle;
