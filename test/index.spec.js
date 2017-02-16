import arrayReduce from './../src/';
import polyfill from './../src/array-reduce-polyfill';


describe('safe Array.reduce with PrototypeJS', function () {

  const original = Array.prototype.reduce;

  afterEach(function () {
    Array.prototype.reduce = original;
  });

  it('should return valid result on native implementation', function () {
    const result = arrayReduce([1, 2, 3], function (prev, next) {
      return prev + next;
    });
    expect(result).toEqual(6);
  });

  it('should return valid result on valid implementation', function () {
    Array.prototype.reduce = polyfill;
    const result = arrayReduce([1, 2, 3], function (prev, next) {
      return prev + next;
    });
    expect(result).toEqual(6);
  });

  it('should return valid result on invalid implementation', function () {
    Array.prototype.reduce = function () {return 'xxx';};
    const result = arrayReduce([1, 2, 3], function (prev, next) {
      return prev + next;
    });
    expect(result).toEqual(6);
  });

  it('should return valid result on non-function replacement', function () {
    Array.prototype.reduce = 'xxx';
    const result = arrayReduce([1, 2, 3], function (prev, next) {
      return prev + next;
    });
    expect(result).toEqual(6);
  });

});
