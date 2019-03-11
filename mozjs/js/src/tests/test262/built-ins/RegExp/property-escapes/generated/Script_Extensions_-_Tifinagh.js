// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tifinagh`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x002D7F
  ],
  ranges: [
    [0x002D30, 0x002D67],
    [0x002D6F, 0x002D70]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Tifinagh}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tifinagh}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Tfng}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tfng}"
);
testPropertyEscapes(
  /^\p{scx=Tifinagh}+$/u,
  matchSymbols,
  "\\p{scx=Tifinagh}"
);
testPropertyEscapes(
  /^\p{scx=Tfng}+$/u,
  matchSymbols,
  "\\p{scx=Tfng}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x002D2F],
    [0x002D68, 0x002D6E],
    [0x002D71, 0x002D7E],
    [0x002D80, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Tifinagh}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tifinagh}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Tfng}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tfng}"
);
testPropertyEscapes(
  /^\P{scx=Tifinagh}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tifinagh}"
);
testPropertyEscapes(
  /^\P{scx=Tfng}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tfng}"
);

reportCompare(0, 0);
