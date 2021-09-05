// findKey: accepts an object and callback function.
// Returns the first key for which the callback returns truthy

const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  throw Error("Function has an error, please revisit your arguments.");
};

module.exports = findKey;
