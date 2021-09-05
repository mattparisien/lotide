const list = [
  "Matthew",
  "Fatima",
  "Matthew",
  "Denis",
  "Caroline",
  "Matthew",
  "Tessa",
  "Olivia",
];

const countOnly = function (allItems, itemsToCount) {

  if (Object.getPrototypeOf(itemsToCount) !== Object.prototype) {
    throw new Error;
  }

  const finalCount = {};
  for (name in itemsToCount) {
    if (itemsToCount[name]) {
      let counter = 0;
      allItems.forEach((el) => {
        if (name === el) {
          counter++;
          finalCount[name] = counter;
        }
      });
    }
  }
  return finalCount;
};

console.log(countOnly(list, []));
