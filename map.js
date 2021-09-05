//Replica of the map higher order function
//Returns a new array with each element refashioned according to the callback's specifications

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

module.exports = map;
