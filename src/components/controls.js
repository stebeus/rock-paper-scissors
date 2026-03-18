import { createButton } from './button.js';

const controls = document.querySelector('.controls');

function createControl(dataAttributeName, attributeValue) {
  const control = createButton(dataAttributeName, attributeValue);
  controls.append(control);
}

export { createControl };
