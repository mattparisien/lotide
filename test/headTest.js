// TESTING CODE FOR HEAD 

const head = require("../head");
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("return 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });

  it("should return 'Caroline' for ['Caroline', 'Denis', 'Matthew']", () => {
    assert.strictEqual(head(['Caroline', 'Denis', 'Matthew']), 'Caroline');
  });

  it('should return undefined if passed an empty array', () => {
    assert.strictEqual(head([]), undefined);
  });

  it ('should return "Pizza" if passed in ["Pizza", "Soup"]', () => {
    assert.strictEqual(head(["Pizza", "Soup"]), "Pizza");
  })

}); 