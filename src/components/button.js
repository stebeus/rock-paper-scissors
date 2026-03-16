import { parseHtml } from '../utils/dom.js';
import { formatButtonLabel } from '../utils/formatters.js';

function createButton(dataAttributeName, attributeValue) {
  const label = formatButtonLabel(attributeValue);

  return parseHtml`
    <button type="button" data-${dataAttributeName}="${attributeValue}">
      ${label}
    </button>
  `;
}

export { createButton };
