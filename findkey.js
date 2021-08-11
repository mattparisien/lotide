const findKey = function(object, callback) {
  for (item in object) {
    if (callback(item)) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey;