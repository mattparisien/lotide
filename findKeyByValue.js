const findKeyByValue = function(object, value) {

  if (typeof object !== 'object' || Array.isArray(object) || object === null) {
    throw new Error('First argument must be an object.');
  }
  
  let key = "";
  value = value.toLowerCase();

  for (item in object) {
    if (object[item].toLowerCase() === value) {
      key = item;
    } else {
      key = undefined;
    }
  }
  return key;
};

module.exports = findKeyByValue;