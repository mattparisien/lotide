//Returns the middle value(s) of an array
//If the array's length is an odd number, middle returns the middle value
//If the array's length is even, middle returns the two middle values
 
const middle = function(array) {
  
  let middleIndex = Math.ceil((array.length) / 2 - 1); 
  const middleValues = [];

  if (array.length <= 2) {
    return middleValues;
  } else if (array.length % 2 === 0) { 
    middleValues.push(array[middleIndex], array[middleIndex + 1]); 
  } else if (array.length % 2 !== 0) {
    middleValues.push(array[middleIndex]);
  }
  return middleValues;
};

console.log([1, 2, 3, 4])

module.exports = middle;
