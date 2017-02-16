import polyfill from './array-reduce-polyfill';
import deepEqual from 'deep-equal';


function testCurrentImplementation () {
  let result = false;

  const data = [2, 4, 6];
  const init_value = 10;
  const iterations = [];
  const iterator = function (accumulator, current_value, current_index, array) {
    iterations.push([accumulator, current_value, current_index, array]);
    return accumulator + current_value;
  };

  const expectation = [
    [10, 2, 0, data],
    [12, 4, 1, data],
    [16, 6, 2, data]
  ];

  try {
    const output = Array.prototype.reduce.call(data, iterator, init_value);
    result = (
      output === 22
      && deepEqual(iterations, expectation, {strict: true})
    );
  } catch (error) {
    // continue
  }

  return result;
}


/**
 * Does exactly the same as native `Array.reduce()`, but is safe to use when PrototypeJS v1.6 or lower is present.
 * @param {Array} array Array object upon which you would call the native `reduce()` method.
 * @param params Rest of parameters which you would provide to native `reduce()` method.
 * @returns {*}
 */
export default function arrayReduce (array = [], ...params) {
  const arrayReduce = testCurrentImplementation() ? Array.prototype.reduce : polyfill;
  return arrayReduce.apply(array, params);
}
