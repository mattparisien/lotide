//Returns a filtered array without the elements specified by itemsToRemove
//source param: original array
//itemsToRemove param: specifies items to remove from original array (must be an array)

const without = function(source, itemsToRemove) {

  const finalArr = [];

  if (!Array.isArray(itemsToRemove)) {
    throw new Error('Second parameter must be an array of strings.')
  };

  const result = source.filter(el => {
    return !itemsToRemove.includes(el)
  })
return result;
}

module.exports = without;
