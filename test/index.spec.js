import arrayReduce from './../src/';


describe('safe Array.reduce with PrototypeJS', function () {

  let array = [];
  let fn = function () {};
  let init_value = 'aaa';

  it('no PrototypeJS: use native implementation', function () {
    spyOn(Array.prototype, 'reduce');
    arrayReduce(array, fn, init_value);
    expect(Array.prototype.reduce).toHaveBeenCalledWith(fn, init_value);
  });

  it('with PrototypeJS: use polyfill', function () {
    window.Prototype = {Version: '1.6.0'};

    spyOn(Array.prototype, 'reduce');
    arrayReduce(array, fn, init_value);
    expect(Array.prototype.reduce).not.toHaveBeenCalled();

    delete window.Prototype;
  });

});
