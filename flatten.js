const flatten = function(array) {
  let flattenedArr = [];

  array.flat().forEach(val => {
    console.log(array.lastIndexOf(val))
    if (Array.isArray(val) || val === null) {
      throw new Error;
    }
  })

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArr.push(array[i][j]);
      }
    } else {
      flattenedArr.push(array[i]);
    }
  }
  // flattenedArr.forEach(val => {
  //   if (Array.isArray(val)) {
  //     throw new Error;
  //   };
  // })
  return flattenedArr;
};

console.log(flatten([]))

module.exports = flatten;
