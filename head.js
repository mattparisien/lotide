//Returns the head of a given array (first value)

const assertEqual = require("./assertEqual");

const head = function (array) {
  let firstVal = array[0];
  return firstVal;
};

module.exports = head;
