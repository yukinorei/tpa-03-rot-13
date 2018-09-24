import { handleBtnConvert } from './eventHandlers.js';

const initPage = () => {
  // see https://developer.mozilla.org/ja/docs/Web/API/Event/preventDefault
  document.querySelector('#container .form-convert').addEventListener('submit', evt => evt.preventDefault());
  document.querySelector('.btn-convert').addEventListener('click', handleBtnConvert);
};

export {
  initPage,
};
