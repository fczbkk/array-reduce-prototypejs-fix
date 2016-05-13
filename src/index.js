import getNestedProperty from 'get-nested-property';
import polyfill from './array-reduce-polyfill';


/**
 * Checks whether PrototypeJS v1.6 or lower is present.
 * @returns {boolean}
 * @ignore
 */
function isOldPrototype () {
  const prototype_version = getNestedProperty(window, 'Prototype.Version');

  if (typeof prototype_version === 'string') {
    const parts = prototype_version
      .split('.')
      .map((item) => parseInt(item, 10));

    if (parts[0] < 1 || (parts[0] === 1 && parts[1] < 7)) {
      return true;
    }
  }

  return false;
}


/**
 * Does exactly the same as native `Array.reduce()`, but is safe to use when PrototypeJS v1.6 or lower is present.
 * @param {Array} array Array object upon which you would call the native `reduce()` method.
 * @param params Rest of parameters which you would provide to native `reduce()` method.
 * @returns {*}
 */
export default function arrayReduce (array = [], ...params) {
  const arrayReduce = isOldPrototype() ? polyfill : Array.prototype.reduce;
  return arrayReduce.apply(array, params);
}
