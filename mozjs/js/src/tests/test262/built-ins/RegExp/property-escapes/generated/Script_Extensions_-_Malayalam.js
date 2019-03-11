// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Malayalam`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x001CDA
  ],
  ranges: [
    [0x000951, 0x000952],
    [0x000964, 0x000965],
    [0x000D00, 0x000D03],
    [0x000D05, 0x000D0C],
    [0x000D0E, 0x000D10],
    [0x000D12, 0x000D44],
    [0x000D46, 0x000D48],
    [0x000D4A, 0x000D4F],
    [0x000D54, 0x000D63],
    [0x000D66, 0x000D7F],
    [0x00A830, 0x00A832]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Malayalam}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Malayalam}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Mlym}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Mlym}"
);
testPropertyEscapes(
  /^\p{scx=Malayalam}+$/u,
  matchSymbols,
  "\\p{scx=Malayalam}"
);
testPropertyEscapes(
  /^\p{scx=Mlym}+$/u,
  matchSymbols,
  "\\p{scx=Mlym}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000D04,
    0x000D0D,
    0x000D11,
    0x000D45,
    0x000D49
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000950],
    [0x000953, 0x000963],
    [0x000966, 0x000CFF],
    [0x000D50, 0x000D53],
    [0x000D64, 0x000D65],
    [0x000D80, 0x001CD9],
    [0x001CDB, 0x00A82F],
    [0x00A833, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Malayalam}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Malayalam}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Mlym}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Mlym}"
);
testPropertyEscapes(
  /^\P{scx=Malayalam}+$/u,
  nonMatchSymbols,
  "\\P{scx=Malayalam}"
);
testPropertyEscapes(
  /^\P{scx=Mlym}+$/u,
  nonMatchSymbols,
  "\\P{scx=Mlym}"
);

reportCompare(0, 0);
