const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {

  it ('should return ["Lighthouse", "Labs"] if passed ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs']);
    const expected = ['Lighthouse', 'Labs'];
    assert.deepEqual(result, expected);
  });

  it ('should return [2, 3, 4, 5, 6], if passed [1, 2, 3, 4, 5, 6]', () => {
    const result = tail([1, 2, 3, 4, 5, 6]);
    const expected = [2, 3, 4, 5, 6];
    assert.deepEqual(result, expected)
  })

});