'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayReduce;

var _getNestedProperty = require('get-nested-property');

var _getNestedProperty2 = _interopRequireDefault(_getNestedProperty);

var _arrayReducePolyfill = require('./array-reduce-polyfill');

var _arrayReducePolyfill2 = _interopRequireDefault(_arrayReducePolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether PrototypeJS v1.6 or lower is present.
 * @returns {boolean}
 * @ignore
 */
function isOldPrototype() {
  // do not even try outside browser
  if (typeof window === 'undefined') {
    return false;
  }

  var prototype_version = (0, _getNestedProperty2.default)(window, 'Prototype.Version');

  if (typeof prototype_version === 'string') {
    var parts = prototype_version.split('.').map(function (item) {
      return parseInt(item, 10);
    });

    if (parts[0] < 1 || parts[0] === 1 && parts[1] < 7) {
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
function arrayReduce() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var arrayReduce = isOldPrototype() ? _arrayReducePolyfill2.default : Array.prototype.reduce;

  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return arrayReduce.apply(array, params);
}