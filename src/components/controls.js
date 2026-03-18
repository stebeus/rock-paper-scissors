import { createButton } from './button.js';

const controls = document.querySelector('.controls');

function createControl(dataAttributeName, attributeValue) {
  const control = createButton(dataAttributeName, attributeValue);
  controls.append(control);
}

function createWeaponControls(weapons) {
  for (const [index] of weapons.entries()) {
    createControl('choice', index);
  }
}

function replaceControls(controlCreator, ...parameters) {
  const hasControls = controls.hasChildNodes();
  if (!hasControls) return;

  controls.innerHTML = '';
  controlCreator(...parameters);
}

export { createControl, createWeaponControls, replaceControls };
