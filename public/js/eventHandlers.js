import { convertRot13 } from './convert.js';

const handleBtnConvert = () => {
  // '#container .source-text'の値を取得する
  const sourceText = document.querySelector('#container .source-text').value;
  // 取得した値を変換する
  const convertedText = convertRot13(sourceText);
  // 変換した値を埋め込む
  document.querySelector('#container .destination-text').value = convertedText;
};

export {
  handleBtnConvert,
};
