/* Returns an object with key values pairs corresponding 
to a given string's characters and their indexes positions */

const letterPositions = function(string) {
  const results = {};
  let count = 0;

  if (typeof string !== 'string') {
    throw new Error('Argument must be of type \'string\'');
  }

  for (i = 0; i < string.length; i++) {
    if (results[string[i]] === undefined) {
      results[string[i]] = new Array;
      results[string[i]].push(i);
    } else {
    results[string[i]].push(i);
  }
}
  return results;
};

console.log(letterPositions("matthew"))

module.exports = letterPositions;