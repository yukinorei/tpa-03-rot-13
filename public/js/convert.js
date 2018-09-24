const stringInput = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
const codeOutput = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');

const convert = ch => (
  stringInput.indexOf(ch) > -1 ? stringInput[codeOutput.indexOf(ch)] : ch);

export {
  convert,
};
