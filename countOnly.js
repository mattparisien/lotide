const countOnly = function (allItems, itemsToCount) {

  if (Object.getPrototypeOf(itemsToCount) !== Object.prototype) {
    throw new Error('Second argument must be an object.');
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

module.exports = countOnly;
