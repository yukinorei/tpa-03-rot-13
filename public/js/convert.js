const stringInput = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const codeOutput = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');

const convert = ch => (
  stringInput.indexOf(ch) > -1 ? stringInput[codeOutput.indexOf(ch)] : ch);

// 文章を配列に分割して、その1つ1つにconvert関数を使い、その結果を結合する
const convertRot13 = sourceText => sourceText.split('').map(convert).join('');

export {
  convertRot13,
};
