const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const findKey = require("../findkey");

const testObject = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

describe("#findKey", () => {
  it("should return the correct key as per specified by the callback", () => {
    const actual = findKey(testObject, (x) => x.stars === 3);
    const expected = "Akaleri";
    assert.equal(actual, expected);
  });

  it("should return an error if the callback specifies a value which does not exist", () => {
    expect(() => {
      findKey(testObject, (x) => x.name === "Random");
    }).to.throw(Error);
  });
});
