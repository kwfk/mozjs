// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 26.1.1
description: >
  Return abrupt if argumentsList is not an ArrayLike object.
info: |
  26.1.1 Reflect.apply ( target, thisArgument, argumentsList )

  ...
  2. Let args be CreateListFromArrayLike(argumentsList).
  3. ReturnIfAbrupt(args).
  ...

  7.3.17 CreateListFromArrayLike (obj [, elementTypes] )

  ...
  3. If Type(obj) is not Object, throw a TypeError exception.
  4. Let len be ToLength(Get(obj, "length")).
  5. ReturnIfAbrupt(len).
  ...
features: [Reflect]
---*/

function fn() {}
var o = {};

Object.defineProperty(o, 'length', {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Reflect.apply(fn, 1, o);
});

assert.throws(TypeError, function() {
  Reflect.apply(fn, 1, 1);
});

reportCompare(0, 0);
