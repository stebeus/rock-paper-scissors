import { createButton } from './button.js';

const controls = document.querySelector('.controls');

function createWeaponControls(weapons) {
  for (const weapon of weapons) {
    const weaponControl = createButton('weapon', weapon);
    controls.append(weaponControl);
  }
}

function createRestartControl() {
  const restartControl = createButton('action', 'restart-game');

  controls.replaceChildren(restartControl);
}

export { createRestartControl, createWeaponControls };
