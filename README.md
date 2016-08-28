# Safe Array.reduce when using PrototypeJS v1.6 and lower

PrototypeJS was a popular JS library many years ago. It extended and changed native objects. Which led to collisions with newer versions of browsers, if they implemented methods with the same names. This is the case of `Array.reduce()` (see [native](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) versus [Prototype's](http://prototypejs.org/doc/1.6.0/array.html#method-reduce) implementation).

This, kids, is exactly why you should never touch native objects. And this is why PrototypeJS lost JavaScript libraries war and Jquery won.

Anyway, if you need to use `Array.reduce()` in a project that uses PrototypeJS v1.6 and lower (they removed it from v1.7), this module should help you. Since PrototypeJS replaced the original method, there's no way to get it back. We could replace the method with polyfill, but that would potentially break the code expecting PrototypeJS' method. So instead we create a new function. It checks for the presence of PrototypeJS. If it is there, it uses polyfill. Otherwise it uses native implementation.

Just remember that this should be a temporary fix. Real fix would be to get rid of PrototypeJS from your project. Or at least to upgrade it to v1.7.

## Documentation

### index

Does exactly the same as native `Array.reduce()`, but is safe to use when PrototypeJS v1.6 or lower is present.

**Parameters**

-   `array` **\[[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)](default \[])** Array object upon which you would call the native `reduce()` method.
-   `params` **...Any** Rest of parameters which you would provide to native `reduce()` method.

Returns **Any** 

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/array-reduce-prototypejs-fix/issues) or send me an e-mail at <a href="mailto:riki@fczbkk.com">riki@fczbkk.com</a>.

## License

Safe Array.reduce when usingPrototypeJS v1.6 and lower is published under the [MIT license](https://github.com/fczbkk/array-reduce-prototypejs-fix/blob/master/LICENSE).
