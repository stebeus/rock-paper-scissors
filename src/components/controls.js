import { createButton } from './button.js';

const controls = document.querySelector('.controls');

function createControl(dataAttributeName, attributeValue) {
  const control = createButton(dataAttributeName, attributeValue);
  controls.append(control);
}

function createWeaponControls(weapons) {
  for (const weapon of weapons) createControl('weapon', weapon);
}

function replaceControls(controlCreator, ...parameters) {
  const hasControls = controls.hasChildNodes();
  if (!hasControls) return;

  controls.innerHTML = '';
  controlCreator(...parameters);
}

export { createControl, createWeaponControls, replaceControls };
