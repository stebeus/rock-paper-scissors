import { createButton } from './button.js';

const controls = document.querySelector('.controls');

function createControl(dataAttributeName, attributeValue, label) {
  const control = createButton(dataAttributeName, attributeValue, label);
  controls.append(control);
}

function createWeaponControls(weapons) {
  for (const [index, weapon] of weapons.entries()) {
    createControl('choice', index, weapon);
  }
}

function replaceControls(controlCreator, ...controlParameters) {
  const hasControls = controls.hasChildNodes();
  if (!hasControls) return;

  controls.innerHTML = '';
  controlCreator(...controlParameters);
}

export { createControl, createWeaponControls, replaceControls };
