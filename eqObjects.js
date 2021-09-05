//Iterates through two objects and returns true or false depending on if they are equal or not

const eqObjects = function(object1, object2) {
  
  const holder = [object1, object2];
  holder.forEach((arg) => {
    if (typeof arg !== 'object' || Array.isArray(arg) || typeof arg === null) {
      throw new Error('Argument should be an object\'')
    };
  });


  const object1Keys = Object.keys(object1); 
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (let key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        console.log(object1[key], object2[key]);
        return eqArrays(object1[key], object2[key])
      } else if (object1[key] !== object2[key]) {
          return false;
      };
    };
  };
  return true;
};

module.exports = eqObjects;