const listStyleDictionary = {
  'disc'                 : true,
  'circle'               : true,
  'square'               : true,
  'decimal'              : true, // '0123456789.',
  'upper-alpha'          : true, // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'lower-alpha'          : true, // 'abcdefghijklmnopqrstuvwxyz',
  'upper-roman'          : true,
  'lower-roman'          : true,
  'decimal-leading-zero' : true, // '0123456789.',
  'lower-greek': true,
  'upper-latin': true,
  'lower-latin': true,
  'hebrew': true,
  'armenian': true,
  'georgian': true,
  'cjk-ideographic': true,
  'hiragana': [
    'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよわゐゑをん',
    '.',  // chrome, safari
    '、', // firefox
  ].join(''),
  'katakana': [
    'アイウエオカキクケコさしすせそたちツテトナニヌネノハヒフヘホまみムメモヤユヨワヰヱヲン',
    '.',  // chrome, safari
    '、', // firefox
  ].join(''),
  'hiragana-iroha':  [
    'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよわゐゑをん',
    '.',  // chrome, safari
    '、', // firefox
  ].join(''),
  'katakana-iroha':  [
    'アイウエオカキクケコさしすせそたちツテトナニヌネノハヒフヘホまみムメモヤユヨワヰヱヲン',
    '.',  // chrome, safari
    '、', // firefox
  ].join(''),
}

export default [
  {
    property     : 'content',
    aliases      : ['content'],
    paramType    : 'value',
    perfectMatch : true,
    dictionary   : false
  },
  {
    property     : 'list-style',
    aliases      : ['list-style', 'listStyle'],
    paramType    : 'dictionary',
    perfectMatch : true,
    dictionary   : listStyleDictionary
  },
  {
    property     : 'list-style-type',
    aliases      : ['list-style-type', 'listStyleType'],
    paramType    : 'dictionary',
    perfectMatch : false,
    dictionary   : listStyleDictionary
  }
]
