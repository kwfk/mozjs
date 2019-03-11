// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Spacing_Mark`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000903,
    0x00093B,
    0x0009D7,
    0x000A03,
    0x000A83,
    0x000AC9,
    0x000B3E,
    0x000B40,
    0x000B57,
    0x000BD7,
    0x000CBE,
    0x000D57,
    0x000F7F,
    0x001031,
    0x001038,
    0x00108F,
    0x0017B6,
    0x001A55,
    0x001A57,
    0x001A61,
    0x001B04,
    0x001B35,
    0x001B3B,
    0x001B82,
    0x001BA1,
    0x001BAA,
    0x001BE7,
    0x001BEE,
    0x001CE1,
    0x001CF7,
    0x00A827,
    0x00A983,
    0x00AA4D,
    0x00AA7B,
    0x00AA7D,
    0x00AAEB,
    0x00AAF5,
    0x00ABEC,
    0x011000,
    0x011002,
    0x011082,
    0x01112C,
    0x011182,
    0x011235,
    0x011357,
    0x011445,
    0x0114B9,
    0x0114C1,
    0x0115BE,
    0x01163E,
    0x0116AC,
    0x0116B6,
    0x011726,
    0x011838,
    0x011A39,
    0x011A97,
    0x011C2F,
    0x011C3E,
    0x011CA9,
    0x011CB1,
    0x011CB4,
    0x011D96
  ],
  ranges: [
    [0x00093E, 0x000940],
    [0x000949, 0x00094C],
    [0x00094E, 0x00094F],
    [0x000982, 0x000983],
    [0x0009BE, 0x0009C0],
    [0x0009C7, 0x0009C8],
    [0x0009CB, 0x0009CC],
    [0x000A3E, 0x000A40],
    [0x000ABE, 0x000AC0],
    [0x000ACB, 0x000ACC],
    [0x000B02, 0x000B03],
    [0x000B47, 0x000B48],
    [0x000B4B, 0x000B4C],
    [0x000BBE, 0x000BBF],
    [0x000BC1, 0x000BC2],
    [0x000BC6, 0x000BC8],
    [0x000BCA, 0x000BCC],
    [0x000C01, 0x000C03],
    [0x000C41, 0x000C44],
    [0x000C82, 0x000C83],
    [0x000CC0, 0x000CC4],
    [0x000CC7, 0x000CC8],
    [0x000CCA, 0x000CCB],
    [0x000CD5, 0x000CD6],
    [0x000D02, 0x000D03],
    [0x000D3E, 0x000D40],
    [0x000D46, 0x000D48],
    [0x000D4A, 0x000D4C],
    [0x000D82, 0x000D83],
    [0x000DCF, 0x000DD1],
    [0x000DD8, 0x000DDF],
    [0x000DF2, 0x000DF3],
    [0x000F3E, 0x000F3F],
    [0x00102B, 0x00102C],
    [0x00103B, 0x00103C],
    [0x001056, 0x001057],
    [0x001062, 0x001064],
    [0x001067, 0x00106D],
    [0x001083, 0x001084],
    [0x001087, 0x00108C],
    [0x00109A, 0x00109C],
    [0x0017BE, 0x0017C5],
    [0x0017C7, 0x0017C8],
    [0x001923, 0x001926],
    [0x001929, 0x00192B],
    [0x001930, 0x001931],
    [0x001933, 0x001938],
    [0x001A19, 0x001A1A],
    [0x001A63, 0x001A64],
    [0x001A6D, 0x001A72],
    [0x001B3D, 0x001B41],
    [0x001B43, 0x001B44],
    [0x001BA6, 0x001BA7],
    [0x001BEA, 0x001BEC],
    [0x001BF2, 0x001BF3],
    [0x001C24, 0x001C2B],
    [0x001C34, 0x001C35],
    [0x001CF2, 0x001CF3],
    [0x00302E, 0x00302F],
    [0x00A823, 0x00A824],
    [0x00A880, 0x00A881],
    [0x00A8B4, 0x00A8C3],
    [0x00A952, 0x00A953],
    [0x00A9B4, 0x00A9B5],
    [0x00A9BA, 0x00A9BB],
    [0x00A9BD, 0x00A9C0],
    [0x00AA2F, 0x00AA30],
    [0x00AA33, 0x00AA34],
    [0x00AAEE, 0x00AAEF],
    [0x00ABE3, 0x00ABE4],
    [0x00ABE6, 0x00ABE7],
    [0x00ABE9, 0x00ABEA],
    [0x0110B0, 0x0110B2],
    [0x0110B7, 0x0110B8],
    [0x011145, 0x011146],
    [0x0111B3, 0x0111B5],
    [0x0111BF, 0x0111C0],
    [0x01122C, 0x01122E],
    [0x011232, 0x011233],
    [0x0112E0, 0x0112E2],
    [0x011302, 0x011303],
    [0x01133E, 0x01133F],
    [0x011341, 0x011344],
    [0x011347, 0x011348],
    [0x01134B, 0x01134D],
    [0x011362, 0x011363],
    [0x011435, 0x011437],
    [0x011440, 0x011441],
    [0x0114B0, 0x0114B2],
    [0x0114BB, 0x0114BE],
    [0x0115AF, 0x0115B1],
    [0x0115B8, 0x0115BB],
    [0x011630, 0x011632],
    [0x01163B, 0x01163C],
    [0x0116AE, 0x0116AF],
    [0x011720, 0x011721],
    [0x01182C, 0x01182E],
    [0x011A57, 0x011A58],
    [0x011D8A, 0x011D8E],
    [0x011D93, 0x011D94],
    [0x011EF5, 0x011EF6],
    [0x016F51, 0x016F7E],
    [0x01D165, 0x01D166],
    [0x01D16D, 0x01D172]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Spacing_Mark}+$/u,
  matchSymbols,
  "\\p{General_Category=Spacing_Mark}"
);
testPropertyEscapes(
  /^\p{General_Category=Mc}+$/u,
  matchSymbols,
  "\\p{General_Category=Mc}"
);
testPropertyEscapes(
  /^\p{gc=Spacing_Mark}+$/u,
  matchSymbols,
  "\\p{gc=Spacing_Mark}"
);
testPropertyEscapes(
  /^\p{gc=Mc}+$/u,
  matchSymbols,
  "\\p{gc=Mc}"
);
testPropertyEscapes(
  /^\p{Spacing_Mark}+$/u,
  matchSymbols,
  "\\p{Spacing_Mark}"
);
testPropertyEscapes(
  /^\p{Mc}+$/u,
  matchSymbols,
  "\\p{Mc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00094D,
    0x000ACA,
    0x000B3F,
    0x000BC0,
    0x000BC9,
    0x000CBF,
    0x000CC9,
    0x000D49,
    0x0017C6,
    0x001932,
    0x001A56,
    0x001A62,
    0x001B3C,
    0x001B42,
    0x001BED,
    0x00A9BC,
    0x00AA7C,
    0x00ABE5,
    0x00ABE8,
    0x00ABEB,
    0x011001,
    0x011234,
    0x011340,
    0x0114BA,
    0x01163D,
    0x0116AD,
    0x011D95
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000902],
    [0x000904, 0x00093A],
    [0x00093C, 0x00093D],
    [0x000941, 0x000948],
    [0x000950, 0x000981],
    [0x000984, 0x0009BD],
    [0x0009C1, 0x0009C6],
    [0x0009C9, 0x0009CA],
    [0x0009CD, 0x0009D6],
    [0x0009D8, 0x000A02],
    [0x000A04, 0x000A3D],
    [0x000A41, 0x000A82],
    [0x000A84, 0x000ABD],
    [0x000AC1, 0x000AC8],
    [0x000ACD, 0x000B01],
    [0x000B04, 0x000B3D],
    [0x000B41, 0x000B46],
    [0x000B49, 0x000B4A],
    [0x000B4D, 0x000B56],
    [0x000B58, 0x000BBD],
    [0x000BC3, 0x000BC5],
    [0x000BCD, 0x000BD6],
    [0x000BD8, 0x000C00],
    [0x000C04, 0x000C40],
    [0x000C45, 0x000C81],
    [0x000C84, 0x000CBD],
    [0x000CC5, 0x000CC6],
    [0x000CCC, 0x000CD4],
    [0x000CD7, 0x000D01],
    [0x000D04, 0x000D3D],
    [0x000D41, 0x000D45],
    [0x000D4D, 0x000D56],
    [0x000D58, 0x000D81],
    [0x000D84, 0x000DCE],
    [0x000DD2, 0x000DD7],
    [0x000DE0, 0x000DF1],
    [0x000DF4, 0x000F3D],
    [0x000F40, 0x000F7E],
    [0x000F80, 0x00102A],
    [0x00102D, 0x001030],
    [0x001032, 0x001037],
    [0x001039, 0x00103A],
    [0x00103D, 0x001055],
    [0x001058, 0x001061],
    [0x001065, 0x001066],
    [0x00106E, 0x001082],
    [0x001085, 0x001086],
    [0x00108D, 0x00108E],
    [0x001090, 0x001099],
    [0x00109D, 0x0017B5],
    [0x0017B7, 0x0017BD],
    [0x0017C9, 0x001922],
    [0x001927, 0x001928],
    [0x00192C, 0x00192F],
    [0x001939, 0x001A18],
    [0x001A1B, 0x001A54],
    [0x001A58, 0x001A60],
    [0x001A65, 0x001A6C],
    [0x001A73, 0x001B03],
    [0x001B05, 0x001B34],
    [0x001B36, 0x001B3A],
    [0x001B45, 0x001B81],
    [0x001B83, 0x001BA0],
    [0x001BA2, 0x001BA5],
    [0x001BA8, 0x001BA9],
    [0x001BAB, 0x001BE6],
    [0x001BE8, 0x001BE9],
    [0x001BEF, 0x001BF1],
    [0x001BF4, 0x001C23],
    [0x001C2C, 0x001C33],
    [0x001C36, 0x001CE0],
    [0x001CE2, 0x001CF1],
    [0x001CF4, 0x001CF6],
    [0x001CF8, 0x00302D],
    [0x003030, 0x00A822],
    [0x00A825, 0x00A826],
    [0x00A828, 0x00A87F],
    [0x00A882, 0x00A8B3],
    [0x00A8C4, 0x00A951],
    [0x00A954, 0x00A982],
    [0x00A984, 0x00A9B3],
    [0x00A9B6, 0x00A9B9],
    [0x00A9C1, 0x00AA2E],
    [0x00AA31, 0x00AA32],
    [0x00AA35, 0x00AA4C],
    [0x00AA4E, 0x00AA7A],
    [0x00AA7E, 0x00AAEA],
    [0x00AAEC, 0x00AAED],
    [0x00AAF0, 0x00AAF4],
    [0x00AAF6, 0x00ABE2],
    [0x00ABED, 0x00DBFF],
    [0x00E000, 0x010FFF],
    [0x011003, 0x011081],
    [0x011083, 0x0110AF],
    [0x0110B3, 0x0110B6],
    [0x0110B9, 0x01112B],
    [0x01112D, 0x011144],
    [0x011147, 0x011181],
    [0x011183, 0x0111B2],
    [0x0111B6, 0x0111BE],
    [0x0111C1, 0x01122B],
    [0x01122F, 0x011231],
    [0x011236, 0x0112DF],
    [0x0112E3, 0x011301],
    [0x011304, 0x01133D],
    [0x011345, 0x011346],
    [0x011349, 0x01134A],
    [0x01134E, 0x011356],
    [0x011358, 0x011361],
    [0x011364, 0x011434],
    [0x011438, 0x01143F],
    [0x011442, 0x011444],
    [0x011446, 0x0114AF],
    [0x0114B3, 0x0114B8],
    [0x0114BF, 0x0114C0],
    [0x0114C2, 0x0115AE],
    [0x0115B2, 0x0115B7],
    [0x0115BC, 0x0115BD],
    [0x0115BF, 0x01162F],
    [0x011633, 0x01163A],
    [0x01163F, 0x0116AB],
    [0x0116B0, 0x0116B5],
    [0x0116B7, 0x01171F],
    [0x011722, 0x011725],
    [0x011727, 0x01182B],
    [0x01182F, 0x011837],
    [0x011839, 0x011A38],
    [0x011A3A, 0x011A56],
    [0x011A59, 0x011A96],
    [0x011A98, 0x011C2E],
    [0x011C30, 0x011C3D],
    [0x011C3F, 0x011CA8],
    [0x011CAA, 0x011CB0],
    [0x011CB2, 0x011CB3],
    [0x011CB5, 0x011D89],
    [0x011D8F, 0x011D92],
    [0x011D97, 0x011EF4],
    [0x011EF7, 0x016F50],
    [0x016F7F, 0x01D164],
    [0x01D167, 0x01D16C],
    [0x01D173, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Spacing_Mark}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Spacing_Mark}"
);
testPropertyEscapes(
  /^\P{General_Category=Mc}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Mc}"
);
testPropertyEscapes(
  /^\P{gc=Spacing_Mark}+$/u,
  nonMatchSymbols,
  "\\P{gc=Spacing_Mark}"
);
testPropertyEscapes(
  /^\P{gc=Mc}+$/u,
  nonMatchSymbols,
  "\\P{gc=Mc}"
);
testPropertyEscapes(
  /^\P{Spacing_Mark}+$/u,
  nonMatchSymbols,
  "\\P{Spacing_Mark}"
);
testPropertyEscapes(
  /^\P{Mc}+$/u,
  nonMatchSymbols,
  "\\P{Mc}"
);

reportCompare(0, 0);
