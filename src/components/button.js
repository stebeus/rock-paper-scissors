import { createElement } from '../utils/dom.js';

function createButton(dataAttributeName, attributeValue) {
  return createElement`
    <button type="button" data-${dataAttributeName}="${attributeValue}">
      ${attributeValue}
    </button>
  `;
}

export { createButton };
