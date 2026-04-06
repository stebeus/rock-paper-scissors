import { elementFromHtml } from '../utils.js';

const controls = document.querySelector('#controls');

function createControl(label, handler) {
  return elementFromHtml(
    `<button class="control" type="button" onclick="${handler}">
      ${label}
    </button>`,
  );
}
