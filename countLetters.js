//Returns an object which key value pairs corresponding to characters in a string and their count number

const countLetters = function(string) {

  if (typeof string !== 'string') {
    throw new Error('String must be of type \'string\'');
  }

  const obj = {};
  for (letter of string) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
return obj;
};

module.exports = countLetters;