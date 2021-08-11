const without = function(source, itemsToRemove) {
  let finalArr = [];
  for (let i = 0; i < source.length; i++) { // loop through each item in first array
    for (let j = 0; j < itemsToRemove.length; j++) { // for each item in the first array, compare to each item in the second
      if (source[i] !== itemsToRemove[j]) {
        finalArr.push(source[i]); //push the values that return true into a new array
      }
    }
  }
  return finalArr;
};


//Test Cases
// const words = ["coffee", "tea", "lemonade"];
// const result = without(words, ["lemonade"]);
// console.log("result", result);
// console.log("source", words);
// const words = ["coffee", "tea", "lemonade"];
// console.log(without(words, ["lemonade"])); // returns ["lemonade"]
// console.log(assertArraysEqual(words, ["coffee", "tea", "lemonade"])); // it's a match!
// console.log(assertArraysEqual(without(words, ["lemonade"]), ["lemonade"])); // it's a match!

module.exports = without;
