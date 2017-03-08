const assert = require('assert');
const mod = require('..');

describe('Array', () => {
  it('should flat an array', () => {
    const input = mod([1, 2, [3, 4], [5, 6, [7, 8]]]);
    const output = [1, 2, 3, 4, 5, 6, 7, 8];

    assert.deepEqual(input, output, 'Fail');
  });

  it('should throw on not-array', () => {
    assert.throws(() => mod('test if not-array'), TypeError, 'Fail');
  });

  it('should return true if is array', () => {
    assert.equal( Array.isArray( mod([1,2]) ), true, 'Fail');
  });
});