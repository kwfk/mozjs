// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
es5id: 15.4.4.21-2-19
description: >
    Array.prototype.reduce applied to Function object, which
    implements its own property get method
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return (obj.length === 2);
}

var fun = function(a, b) {
  return a + b;
};
fun[0] = 12;
fun[1] = 11;
fun[2] = 9;

assert.sameValue(Array.prototype.reduce.call(fun, callbackfn, 1), true, 'Array.prototype.reduce.call(fun, callbackfn, 1)');

reportCompare(0, 0);
