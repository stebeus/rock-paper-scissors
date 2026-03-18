import { elementFromHtml } from '../utils/dom.js';

function createButton(dataAttributeName, attributeValue) {
  return elementFromHtml`
    <button type="button" data-${dataAttributeName}="${attributeValue}">
      ${attributeValue}
    </button>
  `;
}

export { createButton };
