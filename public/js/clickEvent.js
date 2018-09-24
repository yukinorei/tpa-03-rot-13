import { convert } from './convert.js';

const convertRot13 = sourceText => sourceText.split('').map(convert).join('');

const handleBtnConvert = () => {
  const sourceText = document.querySelector('#container .source-text').value;
  const convertedText = convertRot13(sourceText);
  document.querySelector('#container .destination-text').value = convertedText;
};

export {
  handleBtnConvert,
};
