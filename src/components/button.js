import { elementFromHtml } from '../utils/dom.js';

function createButton(dataAttributeName, attributeValue, label) {
  return elementFromHtml`
    <button type="button" data-${dataAttributeName}="${attributeValue}">
      ${label}
    </button>
  `;
}

export { createButton };
