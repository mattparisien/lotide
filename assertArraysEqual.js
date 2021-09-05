//Asserts whether two arrays are equal or not

const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log("The two arrays match!");
  } else {
    console.log("The two arrays do not match.");
  }
};

module.exports = assertArraysEqual;
