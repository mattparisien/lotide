const eqArrays = function(arrOne, arrTwo) {
  let str = "";
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] === arrTwo[i]) {
      str += arrOne[i];
    }
  }
  let compareStr = arrOne.join("");
  if (compareStr === str) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log("The two arrays match!");
  } else {
    console.log("The two arrays do not match.");
  }
};


const letterPositions = function(string) {
  const results = {};
  let count = 0;
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


//TEST CASES
const sentence = "hello";

const result1 = letterPositions(sentence);

const testObj = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4],
}

console.log(assertArraysEqual(result1.e, testObj.e)); //should match
console.log(assertArraysEqual(result1.l, testObj.l)); // should match
console.log(assertArraysEqual(result1[l], testObj.l)); // should match
